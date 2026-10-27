import movieDb from './movieDb.js';

const franchiseOne = document.querySelector("#franchise-one");
const franchiseTwo = document.querySelector("#franchise-two");
const timeline = document.querySelector("#timeline");
const franchises = [...new Set(
    movieDb.map(movie => movie.franchise)
)];

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

function getSelectedMovies() {
    const selectedFranchises = [franchiseOne.value, franchiseTwo.value];

    return movieDb
        .filter(movie => 
            selectedFranchises.includes(movie.franchise)
        ).sort((a, b) =>
            a.releaseDate.localeCompare(b.releaseDate)
        );
}

function renderMovies() {
    const movies = getSelectedMovies();
    timeline.innerHTML = "";

    for (const m of movies) {
        const movieEl = document.createElement("div");

        movieEl.textContent = `${m.releaseDate} - ${m.title} (${m.franchise})`;
        timeline.appendChild(movieEl);
    }
}

franchiseOne.addEventListener("change", renderMovies);
franchiseTwo.addEventListener("change", renderMovies);

renderMovies();