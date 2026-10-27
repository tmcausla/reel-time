const movieDb = [
    {
        title: "Halloween",
        franchise: "Halloween",
        director: "John Carpenter",
        releaseDate: "1978-10-25"
    },
    {
        title: "Halloween II",
        franchise: "Halloween",
        director: "Rick Rosenthal",
        releaseDate: "1981-10-30"
    },
    {
        title: "Halloween III: Season of the Witch",
        franchise: "Halloween",
        director: "Tommy Lee Wallace",
        releaseDate: "1982-10-22"
    },
    {
        title: "Halloween 4: The Return of Michael Myers",
        franchise: "Halloween",
        director: "Dwight H. Little",
        releaseDate: "1988-10-21"
    },
    {
        title: "Halloween 5: The Revenge of Michael Myers",
        franchise: "Halloween",
        director: "Dominique Othenin-Girard",
        releaseDate: "1989-10-13"
    },
    {
        title: "Halloween: The Curse of Michael Myers",
        franchise: "Halloween",
        director: "Joe Chappelle",
        releaseDate: "1995-09-29"
    },
    {
        title: "Halloween H20: 20 Years Later",
        franchise: "Halloween",
        director: "Steve Miner",
        releaseDate: "1998-08-05"
    },
    {
        title: "Halloween: Resurrection",
        franchise: "Halloween",
        director: "Rick Rosenthal",
        releaseDate: "2002-07-12"
    },
    {
        title: "Halloween",
        franchise: "Halloween",
        director: "Rob Zombie",
        releaseDate: "2007-08-31"
    },
    {
        title: "Halloween II",
        franchise: "Halloween",
        director: "Rob Zombie",
        releaseDate: "2009-08-28"
    },
    {
        title: "Halloween",
        franchise: "Halloween",
        director: "David Gordon Green",
        releaseDate: "2018-10-19"
    },
    {
        title: "Halloween Kills",
        franchise: "Halloween",
        director: "David Gordon Green",
        releaseDate: "2021-10-15"
    },
    {
        title: "Halloween Ends",
        franchise: "Halloween",
        director: "David Gordon Green",
        releaseDate: "2022-10-14"
    },
    {
        title: "Friday the 13th",
        franchise: "Friday the 13th",
        director: "Sean S. Cunningham",
        releaseDate: "1980-05-09"
    },
    {
        title: "Friday the 13th Part 2",
        franchise: "Friday the 13th",
        director: "Steve Miner",
        releaseDate: "1981-05-01"
    },
    {
        title: "Friday the 13th Part 3",
        franchise: "Friday the 13th",
        director: "Steve Miner",
        releaseDate: "1982-08-13"
    },
    {
        title: "Friday the 13th: The Final Chapter",
        franchise: "Friday the 13th",
        director: "Joseph Zito",
        releaseDate: "1984-04-13"
    },
    {
        title: "Friday the 13th: A New Beginning",
        franchise: "Friday the 13th",
        director: "Danny Steinmann",
        releaseDate: "1985-03-22"
    },
    {
        title: "Friday the 13th Part VI: Jason Lives",
        franchise: "Friday the 13th",
        director: "Tom McLoughlin",
        releaseDate: "1986-08-01"
    },
    {
        title: "Friday the 13th Part VII: The New Blood",
        franchise: "Friday the 13th",
        director: "John Carl Buechler",
        releaseDate: "1988-05-13"
    },
    {
        title: "Friday the 13th Part VIII: Jason Takes Manhattan",
        franchise: "Friday the 13th",
        director: "Rob Hedden",
        releaseDate: "1989-07-28"
    },
    {
        title: "Jason Goes to Hell: The Final Friday",
        franchise: "Friday the 13th",
        director: "Adam Marcus",
        releaseDate: "1993-08-13"
    },
    {
        title: "Jason X",
        franchise: "Friday the 13th",
        director: "James Isaac",
        releaseDate: "2002-04-26"
    },
    {
        title: "Freddy vs Jason",
        franchise: "Friday the 13th",
        director: "Ronny Yu",
        releaseDate: "2003-08-15"
    },
    {
        title: "Friday the 13th",
        franchise: "Friday the 13th",
        director: "Marcus Nispel",
        releaseDate: "2009-02-13"
    },
    {
        title: "A Nightmare on Elm Street",
        franchise: "A Nightmare on Elm Street",
        director: "Wes Craven",
        releaseDate: "1984-11-09"
    },
    {
        title: "A Nightmare on Elm Street 2: Freddy's Revenge",
        franchise: "A Nightmare on Elm Street",
        director: "Jack Sholder",
        releaseDate: "1985-11-01"
    },
    {
        title: "A Nightmare on Elm Street 3: Dream Warriors",
        franchise: "A Nightmare on Elm Street",
        director: "Chuck Russell",
        releaseDate: "1987-02-27"
    },
    {
        title: "A Nightmare on Elm Street 4: The Dream Master",
        franchise: "A Nightmare on Elm Street",
        director: "Renny Harlin",
        releaseDate: "1988-08-19"
    },
    {
        title: "A Nightmare on Elm Street 5: The Dream Child",
        franchise: "A Nightmare on Elm Street",
        director: "Stephen Hopkins",
        releaseDate: "1989-08-11"
    },
    {
        title: "Freddy's Dead: The Final Nightmare",
        franchise: "A Nightmare on Elm Street",
        director: "Rachel Talalay",
        releaseDate: "1991-09-13"
    },
    {
        title: "Wes Craven's New Nightmare",
        franchise: "A Nightmare on Elm Street",
        director: "Wes Craven",
        releaseDate: "1994-10-14"
    },
    {
        title: "Freddy vs Jason",
        franchise: "A Nightmare on Elm Street",
        director: "Ronny Yu",
        releaseDate: "2003-08-15"
    },
    {
        title: "A Nightmare on Elm Street",
        franchise: "A Nightmare on Elm Street",
        director: "Samuel Bayer",
        releaseDate: "2010-04-30"
    },
    {
        title: "Child's Play",
        franchise: "Child's Play",
        director: "Tom Holland",
        releaseDate: "1988-11-09"
    },
    {
        title: "Child's Play 2",
        franchise: "Child's Play",
        director: "John Lafia",
        releaseDate: "1990-11-09"
    },
    {
        title: "Child's Play 3",
        franchise: "Child's Play",
        director: "Jack Bender",
        releaseDate: "1991-08-30"
    },
    {
        title: "Bride of Chucky",
        franchise: "Child's Play",
        director: "Ronny Yu",
        releaseDate: "1998-10-16"
    },
    {
        title: "Seed of Chucky",
        franchise: "Child's Play",
        director: "Don Mancini",
        releaseDate: "2004-11-11"
    },
    {
        title: "Curse of Chucky",
        franchise: "Child's Play",
        director: "Don Mancini",
        releaseDate: "2013-09-24"
    },
    {
        title: "Cult of Chucky",
        franchise: "Child's Play",
        director: "Don Mancini",
        releaseDate: "2017-10-03"
    },
    {
        title: "Child's Play",
        franchise: "Child's Play",
        director: "Lars Klevberg",
        releaseDate: "2019-06-21"
    },
];

export default movieDb;