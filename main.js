import movieDb from './movieDb.js';

const franchiseOne = document.querySelector("#franchise-one");
const franchiseTwo = document.querySelector("#franchise-two");
const timeline = document.querySelector("#timeline");
const franchises = [...new Set(
    movieDb.map(movie => movie.franchise)
)];

// Layout tuning (all in px)
const PX_PER_YEAR = 10;   // how much real time stretches the spacing
const MIN_GAP = 12;       // minimum distance between consecutive releases
const MAX_GAP = 80;       // long droughts are compressed to this
const CARD_SPACING = 10;  // breathing room between cards in the same lane
const MARKER_HEIGHT = 40; // vertical space a decade marker takes
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function populateDropdown(dropdown) {
    for (const f of franchises) {
        const option = document.createElement("option");
        option.value = f;
        option.textContent = f;

        dropdown.appendChild(option);
    }
}
populateDropdown(franchiseOne);
populateDropdown(franchiseTwo);

// Start on two different franchises so both lanes have content
franchiseOne.selectedIndex = Math.min(1, franchises.length - 1);
franchiseTwo.selectedIndex = Math.min(2, franchises.length - 1);

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

// Parse "YYYY-MM-DD" by hand so time zones can't shift the day
function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(undefined, {
        year: "numeric", month: "short", day: "numeric"
    });
}

// Returns movies tagged with a lane: "left", "right", or "both" when the
// same title/date appears in both selected franchises (e.g. Freddy vs Jason).
function getTimelineItems() {
    const left = franchiseOne.value;
    const right = franchiseTwo.value;
    const items = [];

    for (const movie of movieDb) {
        const lane = movie.franchise === left ? "left"
                   : movie.franchise === right ? "right"
                   : null;
        if (!lane) continue;

        const key = `${movie.title}|${movie.releaseDate}`;
        const existing = items.find(item => item.key === key);

        if (existing) {
            if (existing.lane !== lane) existing.lane = "both";
            continue;
        }
        items.push({ ...movie, key, lane });
    }

    return items.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
}

function createCard(item) {
    const card = el("article", `card ${item.lane === "both" ? "cross" : item.lane}`);
    card.dataset.kind = "movie";
    card.dataset.lane = item.lane;
    card.dataset.date = item.releaseDate;

    if (item.lane === "both") card.append(el("span", "badge", "Crossover"));

    const time = el("time", null, formatDate(item.releaseDate));
    time.dateTime = item.releaseDate;

    card.append(el("h3", null, item.title), time, el("p", "director", item.director));
    return card;
}

function renderMovies() {
    timeline.innerHTML = "";
    timeline.append(el("div", "spine"));

    let previousDecade = null;

    for (const item of getTimelineItems()) {
        const decade = Math.floor(Number(item.releaseDate.slice(0, 4)) / 10) * 10;

        if (decade !== previousDecade) {
            const marker = el("div", "decade", `${decade}s`);
            marker.dataset.kind = "marker";
            timeline.append(marker);
            previousDecade = decade;
        }
        timeline.append(createCard(item));
    }

    layout();
}

// Positions every card. Cards are absolutely placed so the two lanes can
// interleave by date while never overlapping within a lane.
function layout() {
    const nodes = [...timeline.children].filter(node => node.dataset.kind);
    const bottom = { left: 0, right: 0 };
    let lastY = 0;
    let lastDate = null;
    let afterMarker = true;

    for (const node of nodes) {
        if (node.dataset.kind === "marker") {
            const y = Math.max(bottom.left, bottom.right);
            node.style.top = `${y}px`;
            bottom.left = bottom.right = lastY = y + MARKER_HEIGHT;
            afterMarker = true;
            continue;
        }

        const lane = node.dataset.lane;
        const laneBottom = lane === "both"
            ? Math.max(bottom.left, bottom.right)
            : bottom[lane];

        // Real time between releases nudges the spacing, within limits
        let gap = 0;
        if (!afterMarker && lastDate) {
            const years = (Date.parse(node.dataset.date) - Date.parse(lastDate)) / MS_PER_YEAR;
            gap = Math.min(MAX_GAP, Math.max(MIN_GAP, years * PX_PER_YEAR));
        }

        const y = Math.max(lastY + gap, laneBottom + CARD_SPACING);
        node.style.top = `${y}px`;

        const end = y + node.offsetHeight;
        if (lane === "both") bottom.left = bottom.right = end;
        else bottom[lane] = end;

        lastY = y;
        lastDate = node.dataset.date;
        afterMarker = false;
    }

    timeline.style.height = `${Math.max(bottom.left, bottom.right) + 24}px`;
}

franchiseOne.addEventListener("change", renderMovies);
franchiseTwo.addEventListener("change", renderMovies);

// Card heights depend on width and fonts, so re-measure when either changes
let lastWidth = 0;
new ResizeObserver(([entry]) => {
    const width = Math.round(entry.contentRect.width);
    if (width !== lastWidth) {
        lastWidth = width;
        layout();
    }
}).observe(timeline);
document.fonts.ready.then(layout);

renderMovies();