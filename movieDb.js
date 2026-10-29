const movieDb = [
    {
        title: "Halloween",
        franchise: ["Halloween"],
        director: "John Carpenter",
        releaseDate: "1978-10-25"
    },
    {
        title: "Halloween II",
        franchise: ["Halloween"],
        director: "Rick Rosenthal",
        releaseDate: "1981-10-30"
    },
    {
        title: "Halloween III: Season of the Witch",
        franchise: ["Halloween"],
        director: "Tommy Lee Wallace",
        releaseDate: "1982-10-22"
    },
    {
        title: "Halloween 4: The Return of Michael Myers",
        franchise: ["Halloween"],
        director: "Dwight H. Little",
        releaseDate: "1988-10-21"
    },
    {
        title: "Halloween 5: The Revenge of Michael Myers",
        franchise: ["Halloween"],
        director: "Dominique Othenin-Girard",
        releaseDate: "1989-10-13"
    },
    {
        title: "Halloween: The Curse of Michael Myers",
        franchise: ["Halloween"],
        director: "Joe Chappelle",
        releaseDate: "1995-09-29"
    },
    {
        title: "Halloween H20: 20 Years Later",
        franchise: ["Halloween"],
        director: "Steve Miner",
        releaseDate: "1998-08-05"
    },
    {
        title: "Halloween: Resurrection",
        franchise: ["Halloween"],
        director: "Rick Rosenthal",
        releaseDate: "2002-07-12"
    },
    {
        title: "Halloween",
        franchise: ["Halloween"],
        director: "Rob Zombie",
        releaseDate: "2007-08-31"
    },
    {
        title: "Halloween II",
        franchise: ["Halloween"],
        director: "Rob Zombie",
        releaseDate: "2009-08-28"
    },
    {
        title: "Halloween",
        franchise: ["Halloween"],
        director: "David Gordon Green",
        releaseDate: "2018-10-19"
    },
    {
        title: "Halloween Kills",
        franchise: ["Halloween"],
        director: "David Gordon Green",
        releaseDate: "2021-10-15"
    },
    {
        title: "Halloween Ends",
        franchise: ["Halloween"],
        director: "David Gordon Green",
        releaseDate: "2022-10-14"
    },
    {
        title: "Friday the 13th",
        franchise: ["Friday the 13th"],
        director: "Sean S. Cunningham",
        releaseDate: "1980-05-09"
    },
    {
        title: "Friday the 13th Part 2",
        franchise: ["Friday the 13th"],
        director: "Steve Miner",
        releaseDate: "1981-05-01"
    },
    {
        title: "Friday the 13th Part 3",
        franchise: ["Friday the 13th"],
        director: "Steve Miner",
        releaseDate: "1982-08-13"
    },
    {
        title: "Friday the 13th: The Final Chapter",
        franchise: ["Friday the 13th"],
        director: "Joseph Zito",
        releaseDate: "1984-04-13"
    },
    {
        title: "Friday the 13th: A New Beginning",
        franchise: ["Friday the 13th"],
        director: "Danny Steinmann",
        releaseDate: "1985-03-22"
    },
    {
        title: "Friday the 13th Part VI: Jason Lives",
        franchise: ["Friday the 13th"],
        director: "Tom McLoughlin",
        releaseDate: "1986-08-01"
    },
    {
        title: "Friday the 13th Part VII: The New Blood",
        franchise: ["Friday the 13th"],
        director: "John Carl Buechler",
        releaseDate: "1988-05-13"
    },
    {
        title: "Friday the 13th Part VIII: Jason Takes Manhattan",
        franchise: ["Friday the 13th"],
        director: "Rob Hedden",
        releaseDate: "1989-07-28"
    },
    {
        title: "Jason Goes to Hell: The Final Friday",
        franchise: ["Friday the 13th"],
        director: "Adam Marcus",
        releaseDate: "1993-08-13"
    },
    {
        title: "Jason X",
        franchise: ["Friday the 13th"],
        director: "James Isaac",
        releaseDate: "2002-04-26"
    },
    {
        title: "Freddy vs Jason",
        franchise: ["Friday the 13th", "A Nightmare on Elm Street"],
        director: "Ronny Yu",
        releaseDate: "2003-08-15"
    },
    {
        title: "Friday the 13th",
        franchise: ["Friday the 13th"],
        director: "Marcus Nispel",
        releaseDate: "2009-02-13"
    },
    {
        title: "A Nightmare on Elm Street",
        franchise: ["A Nightmare on Elm Street"],
        director: "Wes Craven",
        releaseDate: "1984-11-09"
    },
    {
        title: "A Nightmare on Elm Street 2: Freddy's Revenge",
        franchise: ["A Nightmare on Elm Street"],
        director: "Jack Sholder",
        releaseDate: "1985-11-01"
    },
    {
        title: "A Nightmare on Elm Street 3: Dream Warriors",
        franchise: ["A Nightmare on Elm Street"],
        director: "Chuck Russell",
        releaseDate: "1987-02-27"
    },
    {
        title: "A Nightmare on Elm Street 4: The Dream Master",
        franchise: ["A Nightmare on Elm Street"],
        director: "Renny Harlin",
        releaseDate: "1988-08-19"
    },
    {
        title: "A Nightmare on Elm Street 5: The Dream Child",
        franchise: ["A Nightmare on Elm Street"],
        director: "Stephen Hopkins",
        releaseDate: "1989-08-11"
    },
    {
        title: "Freddy's Dead: The Final Nightmare",
        franchise: ["A Nightmare on Elm Street"],
        director: "Rachel Talalay",
        releaseDate: "1991-09-13"
    },
    {
        title: "Wes Craven's New Nightmare",
        franchise: ["A Nightmare on Elm Street"],
        director: "Wes Craven",
        releaseDate: "1994-10-14"
    },
    {
        title: "A Nightmare on Elm Street",
        franchise: ["A Nightmare on Elm Street"],
        director: "Samuel Bayer",
        releaseDate: "2010-04-30"
    },
    {
        title: "Child's Play",
        franchise: ["Child's Play"],
        director: "Tom Holland",
        releaseDate: "1988-11-09"
    },
    {
        title: "Child's Play 2",
        franchise: ["Child's Play"],
        director: "John Lafia",
        releaseDate: "1990-11-09"
    },
    {
        title: "Child's Play 3",
        franchise: ["Child's Play"],
        director: "Jack Bender",
        releaseDate: "1991-08-30"
    },
    {
        title: "Bride of Chucky",
        franchise: ["Child's Play"],
        director: "Ronny Yu",
        releaseDate: "1998-10-16"
    },
    {
        title: "Seed of Chucky",
        franchise: ["Child's Play"],
        director: "Don Mancini",
        releaseDate: "2004-11-11"
    },
    {
        title: "Curse of Chucky",
        franchise: ["Child's Play"],
        director: "Don Mancini",
        releaseDate: "2013-09-24"
    },
    {
        title: "Cult of Chucky",
        franchise: ["Child's Play"],
        director: "Don Mancini",
        releaseDate: "2017-10-03"
    },
    {
        title: "Child's Play",
        franchise: ["Child's Play"],
        director: "Lars Klevberg",
        releaseDate: "2019-06-21"
    },
    {
        title: "Alien",
        franchise: ["Alien"],
        director: "Ridley Scott",
        releaseDate: "1979-05-25"
    },
    {
        title: "Aliens",
        franchise: ["Alien"],
        director: "James Cameron",
        releaseDate: "1986-06-18"
    },
    {
        title: "Alien 3",
        franchise: ["Alien"],
        director: "David Fincher",
        releaseDate: "1992-05-22"
    },
    {
        title: "Alien Resurrection",
        franchise: ["Alien"],
        director: "Jean-Pierre Jeunet",
        releaseDate: "1997-11-26"
    },
    {
        title: "Prometheus",
        franchise: ["Alien"],
        director: "Ridley Scott",
        releaseDate: "2012-06-08"
    },
    {
        title: "Alien: Covenant",
        franchise: ["Alien"],
        director: "Ridley Scott",
        releaseDate: "2017-05-19"
    },
    {
        title: "Alien: Romulus",
        franchise: ["Alien"],
        director: "Fede Alvarez",
        releaseDate: "2024-08-16"
    },
    {
        title: "Alien vs. Predator",
        franchise: ["Alien", "Predator"],
        director: "Paul W.S. Anderson",
        releaseDate: "2004-08-13"
    },
    {
        title: "Alien vs. Predator: Requiem",
        franchise: ["Alien", "Predator"],
        director: "Greg & Colin Strause",
        releaseDate: "2007-12-25"
    },
    {
        title: "Predator",
        franchise: ["Predator"],
        director: "John McTiernan",
        releaseDate: "1987-06-12"
    },
    {
        title: "Predator 2",
        franchise: ["Predator"],
        director: "Stephen Hopkins",
        releaseDate: "1990-11-21"
    },
    {
        title: "Predators",
        franchise: ["Predator"],
        director: "Nimrod Antal",
        releaseDate: "2010-07-09"
    },
    {
        title: "The Predator",
        franchise: ["Predator"],
        director: "Shane Black",
        releaseDate: "2018-09-14"
    },
    {
        title: "Prey",
        franchise: ["Predator"],
        director: "Dan Trachtenberg",
        releaseDate: "2022-08-05"
    },
    {
        title: "Predator: Killer of Killers",
        franchise: ["Predator"],
        director: "Dan Trachtenberg",
        releaseDate: "2025-06-06"
    },
    {
        title: "Predator: Badlands",
        franchise: ["Predator"],
        director: "Dan Trachtenberg",
        releaseDate: "2025-11-07"
    },
    {
        title: "Scream",
        franchise: ["Scream"],
        director: "Wes Craven",
        releaseDate: "1996-12-20"
    },
    {
        title: "Scream 2",
        franchise: ["Scream"],
        director: "Wes Craven",
        releaseDate: "1997-12-12"
    },
    {
        title: "Scream 3",
        franchise: ["Scream"],
        director: "Wes Craven",
        releaseDate: "2000-02-04"
    },
    {
        title: "Scream 4",
        franchise: ["Scream"],
        director: "Wes Craven",
        releaseDate: "2011-04-15"
    },
    {
        title: "Scream",
        franchise: ["Scream"],
        director: "Matt Bettinelli-Olpin & Tyler Gillett",
        releaseDate: "2022-01-14"
    },
    {
        title: "Scream VI",
        franchise: ["Scream"],
        director: "Matt Bettinelli-Olpin & Tyler Gillett",
        releaseDate: "2023-03-10"
    },
    {
        title: "Scream 7",
        franchise: ["Scream"],
        director: "Kevin Williamson",
        releaseDate: "2026-02-27"
    },
    {
        title: "Resident Evil",
        franchise: ["Resident Evil"],
        director: "Paul W.S. Anderson",
        releaseDate: "2002-03-15"
    },
    {
        title: "Resident Evil: Apocalypse",
        franchise: ["Resident Evil"],
        director: "Alexander Witt",
        releaseDate: "2004-09-10"
    },
    {
        title: "Resident Evil: Extinction",
        franchise: ["Resident Evil"],
        director: "Russel Mulcahy",
        releaseDate: "2007-09-21"
    },
    {
        title: "Resident Evil: Afterlife",
        franchise: ["Resident Evil"],
        director: "Paul W.S. Anderson",
        releaseDate: "2010-09-10"
    },
    {
        title: "Resident Evil: Retribution",
        franchise: ["Resident Evil"],
        director: "Paul W.S. Anderson",
        releaseDate: "2012-09-14"
    },
    {
        title: "Resident Evil: The Final Chapter",
        franchise: ["Resident Evil"],
        director: "Paul W.S. Anderson",
        releaseDate: "2017-01-27"
    },
    {
        title: "Resident Evil: Welcome to Raccoon City",
        franchise: ["Resident Evil"],
        director: "Johannes Roberts",
        releaseDate: "2021-11-24"
    },
    {
        title: "Resident Evil",
        franchise: ["Resident Evil"],
        director: "Zach Cregger",
        releaseDate: "2026-09-18"
    },
    {
        title: "Dr. No",
        franchise: ["James Bond"],
        director: "Terence Young",
        releaseDate: "1962-10-05"
    },
    {
        title: "From Russia With Love",
        franchise: ["James Bond"],
        director: "Terence Young",
        releaseDate: "1963-10-10"
    },
    {
        title: "Goldfinger",
        franchise: ["James Bond"],
        director: "Guy Hamilton",
        releaseDate: "1964-09-17"
    },
    {
        title: "Thunderball",
        franchise: ["James Bond"],
        director: "Terence Young",
        releaseDate: "1965-12-09"
    },
    {
        title: "You Only Live Twice",
        franchise: ["James Bond"],
        director: "Lewis Gilbert",
        releaseDate: "1967-06-12"
    },
    {
        title: "On Her Majesty's Secret Service",
        franchise: ["James Bond"],
        director: "Peter R. Hunt",
        releaseDate: "1969-12-18"
    },
    {
        title: "Diamonds Are Forever",
        franchise: ["James Bond"],
        director: "Guy Hamilton",
        releaseDate: "1971-12-14"
    },
    {
        title: "Live and Let Die",
        franchise: ["James Bond"],
        director: "Guy Hamilton",
        releaseDate: "1973-06-27"
    },
    {
        title: "The Man with the Golden Gun",
        franchise: ["James Bond"],
        director: "Guy Hamilton",
        releaseDate: "1974-12-18"
    },
    {
        title: "The Spy Who Loved Me",
        franchise: ["James Bond"],
        director: "Lewis Gilbert",
        releaseDate: "1977-07-07"
    },
    {
        title: "Moonraker",
        franchise: ["James Bond"],
        director: "Lewis Gilbert",
        releaseDate: "1979-06-26"
    },
    {
        title: "For Your Eyes Only",
        franchise: ["James Bond"],
        director: "John Glen",
        releaseDate: "1981-06-24"
    },
    {
        title: "Octopussy",
        franchise: ["James Bond"],
        director: "John Glen",
        releaseDate: "1983-06-06"
    },
    {
        title: "A View to a Kill",
        franchise: ["James Bond"],
        director: "John Glen",
        releaseDate: "1985-05-22"
    },
    {
        title: "The Living Daylights",
        franchise: ["James Bond"],
        director: "John Glen",
        releaseDate: "1987-06-29"
    },
    {
        title: "Licence to Kill",
        franchise: ["James Bond"],
        director: "John Glen",
        releaseDate: "1989-06-13"
    },
    {
        title: "GoldenEye",
        franchise: ["James Bond"],
        director: "Martin Campbell",
        releaseDate: "1995-11-13"
    },
    {
        title: "Tomorrow Never Dies",
        franchise: ["James Bond"],
        director: "Roger Spottiswoode",
        releaseDate: "1997-12-09"
    },
    {
        title: "The World Is Not Enough",
        franchise: ["James Bond"],
        director: "Michael Apted",
        releaseDate: "1999-11-08"
    },
    {
        title: "Die Another Day",
        franchise: ["James Bond"],
        director: "Lee Tamahori",
        releaseDate: "2002-11-20"
    },
    {
        title: "Casino Royale",
        franchise: ["James Bond"],
        director: "Martin Campbell",
        releaseDate: "2006-11-14"
    },
    {
        title: "Quantum of Solace",
        franchise: ["James Bond"],
        director: "Marc Forster",
        releaseDate: "2008-10-29"
    },
    {
        title: "Skyfall",
        franchise: ["James Bond"],
        director: "Sam Mendes",
        releaseDate: "2012-10-23"
    },
    {
        title: "Spectre",
        franchise: ["James Bond"],
        director: "Sam Mendes",
        releaseDate: "2015-10-26"
    },
    {
        title: "No Time to Die",
        franchise: ["James Bond"],
        director: "Cary Joji Fukunaga",
        releaseDate: "2021-09-28"
    },
    {
        title: "Casino Royale",
        franchise: ["James Bond"],
        director: "Val Guest, Ken Hughes, John Huston, Joseph McGrath, Robert Parrish",
        releaseDate: "1967-04-13"
    },
    {
        title: "Never Say Never Again",
        franchise: ["James Bond"],
        director: "Irvin Kershner",
        releaseDate: "1983-10-07"
    },
    {
        title: "Episode IV - A New Hope",
        franchise: ["Star Wars"],
        director: "George Lucas",
        releaseDate: "1977-05-25"
    },
    {
        title: "Episode V - The Empire Strikes Back",
        franchise: ["Star Wars"],
        director: "Irvin Kershner",
        releaseDate: "1980-05-21"
    },
    {
        title: "Episode VI - Return of the Jedi",
        franchise: ["Star Wars"],
        director: "Richard Marquand",
        releaseDate: "1983-05-25"
    },
    {
        title: "Episode I - The Phantom Menace",
        franchise: ["Star Wars"],
        director: "George Lucas",
        releaseDate: "1999-05-19"
    },
    {
        title: "Episode II - Attack of the Clones",
        franchise: ["Star Wars"],
        director: "George Lucas",
        releaseDate: "2002-05-16"
    },
    {
        title: "Episode III - Revenge of the Sith",
        franchise: ["Star Wars"],
        director: "George Lucas",
        releaseDate: "2005-05-19"
    },
    {
        title: "Episode VII - The Force Awakens",
        franchise: ["Star Wars"],
        director: "J.J. Abrams",
        releaseDate: "2015-12-18"
    },
    {
        title: "Episode VIII - The Last Jedi",
        franchise: ["Star Wars"],
        director: "Rian Johnson",
        releaseDate: "2017-12-15"
    },
    {
        title: "Episode IX - The Rise of Skywalker",
        franchise: ["Star Wars"],
        director: "J.J. Abrams",
        releaseDate: "2019-12-20"
    },
    {
        title: "The Clone Wars",
        franchise: ["Star Wars"],
        director: "Dave Filoni",
        releaseDate: "2008-08-15"
    },
    {
        title: "Rogue One: A Star Wars Story",
        franchise: ["Star Wars"],
        director: "Gareth Edwards",
        releaseDate: "2016-12-16"
    },
    {
        title: "Solo: A Star Wars Story",
        franchise: ["Star Wars"],
        director: "Ron Howard",
        releaseDate: "2018-05-25"
    },
    {
        title: "The Mandalorian and Grogu",
        franchise: ["Star Wars"],
        director: "Jon Favreau",
        releaseDate: "2026-05-22"
    },
    {
        title: "John Wick",
        franchise: ["John Wick"],
        director: "Chad Stahelski",
        releaseDate: "2014-10-24"
    },
    {
        title: "John Wick: Chapter 2",
        franchise: ["John Wick"],
        director: "Chad Stahelski",
        releaseDate: "2017-02-10"
    },
    {
        title: "John Wick: Chapter 3 - Parabellum",
        franchise: ["John Wick"],
        director: "Chad Stahelski",
        releaseDate: "2019-05-17"
    },
    {
        title: "John Wick: Chapter 4",
        franchise: ["John Wick"],
        director: "Chad Stahelski",
        releaseDate: "2023-03-24"
    },
    {
        title: "From the World of John Wick: Ballerina",
        franchise: ["John Wick"],
        director: "Len Wiseman",
        releaseDate: "2025-06-06"
    }
];

export default movieDb;