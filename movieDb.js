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
    },
    {
        title: "Jurassic Park",
        franchise: ["Jurassic Park"],
        director: "Steven Spielberg",
        releaseDate: "1993-06-11"
    },
    {
        title: "The Lost World: Jurassic Park",
        franchise: ["Jurassic Park"],
        director: "Steven Spielberg",
        releaseDate: "1997-05-23"
    },
    {
        title: "Jurassic Park III",
        franchise: ["Jurassic Park"],
        director: "Joe Johnston",
        releaseDate: "2001-07-18"
    },
    {
        title: "Jurassic World",
        franchise: ["Jurassic Park"],
        director: "Colin Trevorrow",
        releaseDate: "2015-06-12"
    },
    {
        title: "Jurassic World: Fallen Kingdom",
        franchise: ["Jurassic Park"],
        director: "J.A. Bayona",
        releaseDate: "2018-06-22"
    },
    {
        title: "Jurassic World Dominion",
        franchise: ["Jurassic Park"],
        director: "Colin Trevorrow",
        releaseDate: "2022-06-10"
    },
    {
        title: "Jurassic World Rebirth",
        franchise: ["Jurassic Park"],
        director: "Gareth Edwards",
        releaseDate: "2025-07-02"
    },
    {
        title: "Scary Movie",
        franchise: ["Scary Movie"],
        director: "Keenan Ivory Williams",
        releaseDate: "2000-07-07"
    },
    {
        title: "Scary Movie 2",
        franchise: ["Scary Movie"],
        director: "Keenan Ivory Williams",
        releaseDate: "2001-07-04"
    },
    {
        title: "Scary Movie 3",
        franchise: ["Scary Movie"],
        director: "David Zucker",
        releaseDate: "2003-10-24"
    },
    {
        title: "Scary Movie 4",
        franchise: ["Scary Movie"],
        director: "David Zucker",
        releaseDate: "2006-04-14"
    },
    {
        title: "Scary Movie 5",
        franchise: ["Scary Movie"],
        director: "Malcolm D. Lee",
        releaseDate: "2013-04-12"
    },
    {
        title: "Scary Movie",
        franchise: ["Scary Movie"],
        director: "Michael Tiddes",
        releaseDate: "2026-06-05"
    },
    {
        title: "The Evil Dead",
        franchise: ["Evil Dead"],
        director: "Sam Raimi",
        releaseDate: "1981-10-15"
    },
    {
        title: "Evil Dead II",
        franchise: ["Evil Dead"],
        director: "Sam Raimi",
        releaseDate: "1987-03-13"
    },
    {
        title: "Army of Darkness",
        franchise: ["Evil Dead"],
        director: "Sam Raimi",
        releaseDate: "1993-02-19"
    },
    {
        title: "Evil Dead",
        franchise: ["Evil Dead"],
        director: "Fede Alvarez",
        releaseDate: "2013-04-05"
    },
    {
        title: "Evil Dead Rise",
        franchise: ["Evil Dead"],
        director: "Lee Cronin",
        releaseDate: "2023-04-21"
    },
    {
        title: "Evil Dead Burn",
        franchise: ["Evil Dead"],
        director: "Sebastien Vanicek",
        releaseDate: "2026-04-07"
    },
    {
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        franchise: ["Pirates of the Caribbean"],
        director: "Gore Verbinski",
        releaseDate: "2003-07-09"
    },
    {
        title: "Pirates of the Caribbean: Dead Man's Chest",
        franchise: ["Pirates of the Caribbean"],
        director: "Gore Verbinski",
        releaseDate: "2006-07-07"
    },
    {
        title: "Pirates of the Caribbean: At World's End",
        franchise: ["Pirates of the Caribbean"],
        director: "Gore Verbinski",
        releaseDate: "2007-05-25"
    },
    {
        title: "Pirates of the Caribbean: On Stranger Tides",
        franchise: ["Pirates of the Caribbean"],
        director: "Rob Marshall",
        releaseDate: "2011-05-20"
    },
    {
        title: "Pirates of the Caribbean: Dead Men Tell No Tales",
        franchise: ["Pirates of the Caribbean"],
        director: "Espen Sandberg & Joachim Ronning",
        releaseDate: "2017-05-26"
    },
    {
        title: "Twilight",
        franchise: ["Twilight"],
        director: "Catherine Hardwicke",
        releaseDate: "2008-11-21"
    },
    {
        title: "The Twilight Saga: New Moon",
        franchise: ["Twilight"],
        director: "Chris Weitz",
        releaseDate: "2009-11-20"
    },
    {
        title: "The Twilight Saga: Eclipse",
        franchise: ["Twilight"],
        director: "David Slade",
        releaseDate: "2010-06-30"
    },
    {
        title: "The Twilight Saga: Breaking Dawn - Part 1",
        franchise: ["Twilight"],
        director: "Bill Condon",
        releaseDate: "2011-11-18"
    },
    {
        title: "The Twilight Saga: Breaking Dawn - Part 2",
        franchise: ["Twilight"],
        director: "Bill Condon",
        releaseDate: "2012-11-16"
    },
    {
        title: "Saw",
        franchise: ["Saw"],
        director: "James Wan",
        releaseDate: "2004-10-29"
    },
    {
        title: "Saw II",
        franchise: ["Saw"],
        director: "Darren Lynn Bousman",
        releaseDate: "2005-10-28"
    },
    {
        title: "Saw III",
        franchise: ["Saw"],
        director: "Darren Lynn Bousman",
        releaseDate: "2006-10-27"
    },
    {
        title: "Saw IV",
        franchise: ["Saw"],
        director: "Darren Lynn Bousman",
        releaseDate: "2007-10-26"
    },
    {
        title: "Saw V",
        franchise: ["Saw"],
        director: "David Hackl",
        releaseDate: "2008-10-24"
    },
    {
        title: "Saw VI",
        franchise: ["Saw"],
        director: "Kevin Greutert",
        releaseDate: "2009-10-23"
    },
    {
        title: "Saw 3D",
        franchise: ["Saw"],
        director: "Kevin Greutert",
        releaseDate: "2010-10-29"
    },
    {
        title: "Jigsaw",
        franchise: ["Saw"],
        director: "The Spierig Brothers",
        releaseDate: "2017-10-27"
    },
    {
        title: "Spiral",
        franchise: ["Saw"],
        director: "Darren Lynn Bousman",
        releaseDate: "2021-05-14"
    },
    {
        title: "Saw X",
        franchise: ["Saw"],
        director: "Kevin Greutert",
        releaseDate: "2023-09-29"
    },
    {
        title: "Batman: The Movie",
        franchise: ["Batman"],
        director: "Leslie H. Martinson",
        releaseDate: "1966-07-30"
    },
    {
        title: "Batman",
        franchise: ["Batman"],
        director: "Tim Burton",
        releaseDate: "1989-06-19"
    },
    {
        title: "Batman Returns",
        franchise: ["Batman"],
        director: "Tim Burton",
        releaseDate: "1992-06-16"
    },
    {
        title: "Batman Forever",
        franchise: ["Batman"],
        director: "Joel Schumacher",
        releaseDate: "1995-06-09"
    },
    {
        title: "Batman & Robin",
        franchise: ["Batman"],
        director: "Joel Schumacher",
        releaseDate: "1997-06-12"
    },
    {
        title: "Batman Begins",
        franchise: ["Batman"],
        director: "Christopher Nolan",
        releaseDate: "2005-05-31"
    },
    {
        title: "The Dark Knight",
        franchise: ["Batman"],
        director: "Christopher Nolan",
        releaseDate: "2008-07-14"
    },
    {
        title: "The Dark Knight Rises",
        franchise: ["Batman"],
        director: "Christopher Nolan",
        releaseDate: "2012-07-16"
    },
    {
        title: "The Batman",
        franchise: ["Batman"],
        director: "Matt Reeves",
        releaseDate: "2022-03-01"
    },
    {
        title: "Batman v Superman: Dawn of Justice",
        franchise: ["Batman", "Superman", "DCEU"],
        director: "Zack Snyder",
        releaseDate: "2016-03-19"
    },
    {
        title: "Justice League",
        franchise: ["Batman", "Superman", "DCEU"],
        director: "Zack Snyder",
        releaseDate: "2017-11-13"
    },
    {
        title: "Spider-Man",
        franchise: ["Spider-Man"],
        director: "Sam Raimi",
        releaseDate: "2002-04-29"
    },
    {
        title: "Spider-Man 2",
        franchise: ["Spider-Man"],
        director: "Sam Raimi",
        releaseDate: "2004-06-25"
    },
    {
        title: "Spider-Man 3",
        franchise: ["Spider-Man"],
        director: "Sam Raimi",
        releaseDate: "2007-04-16"
    },
    {
        title: "The Amazing Spider-Man",
        franchise: ["Spider-Man"],
        director: "Marc Webb",
        releaseDate: "2012-06-13"
    },
    {
        title: "The Amazing Spider-Man 2",
        franchise: ["Spider-Man"],
        director: "Marc Webb",
        releaseDate: "2014-03-31"
    },
    {
        title: "Spider-Man: Homecoming",
        franchise: ["Spider-Man", "MCU"],
        director: "Jon Watts",
        releaseDate: "2017-06-28"
    },
    {
        title: "Spider-Man: Far From Home",
        franchise: ["Spider-Man", "MCU"],
        director: "Jon Watts",
        releaseDate: "2019-06-26"
    },
    {
        title: "Spider-Man: No Way Home",
        franchise: ["Spider-Man", "MCU"],
        director: "Jon Watts",
        releaseDate: "2021-12-13"
    },
    {
        title: "Spider-Man: Brand New Day",
        franchise: ["Spider-Man", "MCU"],
        director: "Destin Daniel Cretton",
        releaseDate: "2026-07-27"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        franchise: ["Spider-Man"],
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        releaseDate: "2018-12-01"
    },
    {
        title: "Spider-Man: Across the Spider-Verse",
        franchise: ["Spider-Man"],
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        releaseDate: "2023-05-30"
    },
    {
        title: "The Terminator",
        franchise: ["Terminator"],
        director: "James Cameron",
        releaseDate: "1984-10-26"
    },
    {
        title: "Terminator 2: Judgment Day",
        franchise: ["Terminator"],
        director: "James Cameron",
        releaseDate: "1991-07-03"
    },
    {
        title: "Terminator 3: Rise of the Machines",
        franchise: ["Terminator"],
        director: "Jonathan Mostow",
        releaseDate: "2003-07-02"
    },
    {
        title: "Terminator Salvation",
        franchise: ["Terminator"],
        director: "McG",
        releaseDate: "2009-05-21"
    },
    {
        title: "Terminator Genisys",
        franchise: ["Terminator"],
        director: "Alan Taylor",
        releaseDate: "2015-07-01"
    },
    {
        title: "Terminator: Dark Fate",
        franchise: ["Terminator"],
        director: "Tim Miller",
        releaseDate: "2019-11-01"
    },
    {
        title: "The Texas Chainsaw Massacre",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "Tobe Hooper",
        releaseDate: "1974-10-11"
    },
    {
        title: "The Texas Chainsaw Massacre 2",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "Tobe Hooper",
        releaseDate: "1986-08-22"
    },
    {
        title: "Leatherface: The Texas Chainsaw Massacre III",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "Jeff Burr",
        releaseDate: "1990-01-12"
    },
    {
        title: "The Return of the Texas Chainsaw Massacre",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "Kim Henkel",
        releaseDate: "1995-09-22"
    },
    {
        title: "The Texas Chainsaw Massacre",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "Marcus Nispel",
        releaseDate: "2003-10-17"
    },
    {
        title: "The Texas Chainsaw Massacre: The Beginning",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "Jonathan Liebesman",
        releaseDate: "2006-10-06"
    },
    {
        title: "Texas Chainsaw 3D",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "John Luessenhop",
        releaseDate: "2013-01-04"
    },
    {
        title: "Leatherface",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "Julien Maury & Alexandre Bustillo",
        releaseDate: "2017-10-20"
    },
    {
        title: "Texas Chainsaw Massacre",
        franchise: ["The Texas Chainsaw Massacre"],
        director: "David Blue Garcia",
        releaseDate: "2022-02-18"
    },
    {
        title: "Raiders of the Lost Ark",
        franchise: ["Indiana Jones"],
        director: "Steven Spielberg",
        releaseDate: "1981-06-12"
    },
    {
        title: "Indiana Jones and the Temple of Doom",
        franchise: ["Indiana Jones"],
        director: "Steven Spielberg",
        releaseDate: "1984-05-23"
    },
    {
        title: "Indiana Jones and the Last Crusade",
        franchise: ["Indiana Jones"],
        director: "Steven Spielberg",
        releaseDate: "1989-05-24"
    },
    {
        title: "Indiana Jones and the Kingdom of the Crystal Skull",
        franchise: ["Indiana Jones"],
        director: "Steven Spielberg",
        releaseDate: "2008-05-22"
    },
    {
        title: "Indiana Jones and the Dial of Destiny",
        franchise: ["Indiana Jones"],
        director: "James Mangold",
        releaseDate: "2023-06-30"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        franchise: ["World of Wizardry"],
        director: "Chris Columbus",
        releaseDate: "2001-11-16"
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        franchise: ["World of Wizardry"],
        director: "Chris Columbus",
        releaseDate: "2002-11-14"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        franchise: ["World of Wizardry"],
        director: "Alfonso Cuaron",
        releaseDate: "2004-05-31"
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        franchise: ["World of Wizardry"],
        director: "Mike Newell",
        releaseDate: "2005-11-18"
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        franchise: ["World of Wizardry"],
        director: "David Yates",
        releaseDate: "2007-07-11"
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        franchise: ["World of Wizardry"],
        director: "David Yates",
        releaseDate: "2009-07-15"
    },
    {
        title: "Harry Potter and the Deathly Hallows - Part 1",
        franchise: ["World of Wizardry"],
        director: "David Yates",
        releaseDate: "2010-11-19"
    },
    {
        title: "Harry Potter and the Deathly Hallows - Part 2",
        franchise: ["World of Wizardry"],
        director: "David Yates",
        releaseDate: "2011-07-15"
    },
    {
        title: "Fantastic Beasts and Where to Find Them",
        franchise: ["World of Wizardry"],
        director: "David Yates",
        releaseDate: "2016-11-18"
    },
    {
        title: "Fantastic Beasts: The Crimes of Grindelwald",
        franchise: ["World of Wizardry"],
        director: "David Yates",
        releaseDate: "2018-11-16"
    },
    {
        title: "Fantastic Beasts: The Secrets of Dumbledore",
        franchise: ["World of Wizardry"],
        director: "David Yates",
        releaseDate: "2022-04-15"
    },
    {
        title: "The Hunger Games",
        franchise: ["The Hunger Games"],
        director: "Gary Ross",
        releaseDate: "2012-03-23"
    },
    {
        title: "The Hunger Games: Catching Fire",
        franchise: ["The Hunger Games"],
        director: "Francis Lawrence",
        releaseDate: "2013-11-22"
    },
    {
        title: "The Hunger Games: Mockingjay - Part 1",
        franchise: ["The Hunger Games"],
        director: "Francis Lawrence",
        releaseDate: "2014-11-21"
    },
    {
        title: "The Hunger Games: Mockingjay - Part 2",
        franchise: ["The Hunger Games"],
        director: "Francis Lawrence",
        releaseDate: "2015-11-20"
    },
    {
        title: "The Hunger Games: The Ballad of Songbirds & Snakes",
        franchise: ["The Hunger Games"],
        director: "Francis Lawrence",
        releaseDate: "2023-11-17"
    },
    {
        title: "The Hunger Games: Sunrise on the Reaping",
        franchise: ["The Hunger Games"],
        director: "Francis Lawrence",
        releaseDate: "2026-11-20"
    },
    {
        title: "Tremors",
        franchise: ["Tremors"],
        director: "Ron Underwood",
        releaseDate: "1990-01-19"
    },
    {
        title: "Tremors 2: Aftershocks",
        franchise: ["Tremors"],
        director: "S.S. Wilson",
        releaseDate: "1996-04-09"
    },
    {
        title: "Tremors 3: Back to Perfection",
        franchise: ["Tremors"],
        director: "Brent Maddock",
        releaseDate: "2001-10-02"
    },
    {
        title: "Tremors 4: The Legend Begins",
        franchise: ["Tremors"],
        director: "S.S. Wilson",
        releaseDate: "2004-01-02"
    },
    {
        title: "Tremors 5: Bloodlines",
        franchise: ["Tremors"],
        director: "Don Michael Paul",
        releaseDate: "2015-10-06"
    },
    {
        title: "Tremors: A Cold Day in Hell",
        franchise: ["Tremors"],
        director: "Don Michael Paul",
        releaseDate: "2018-05-01"
    },
    {
        title: "Tremors: Shrieker Island",
        franchise: ["Tremors"],
        director: "Don Michael Paul",
        releaseDate: "2020-10-20"
    },
    {
        title: "Final Destination",
        franchise: ["Final Destination"],
        director: "James Wong",
        releaseDate: "2000-03-17"
    },
    {
        title: "Final Destination 2",
        franchise: ["Final Destination"],
        director: "David R. Ellis",
        releaseDate: "2003-01-31"
    },
    {
        title: "Final Destination 3",
        franchise: ["Final Destination"],
        director: "James Wong",
        releaseDate: "2006-02-10"
    },
    {
        title: "The Final Destination",
        franchise: ["Final Destination"],
        director: "David R. Ellis",
        releaseDate: "2009-08-28"
    },
    {
        title: "Final Destination 5",
        franchise: ["Final Destination"],
        director: "Steven Quale",
        releaseDate: "2011-08-12"
    },
    {
        title: "Final Destination Bloodlines",
        franchise: ["Final Destination"],
        director: "Adam Stein & Zach Lipovsky",
        releaseDate: "2025-05-16"
    },
    {
        title: "Paranormal Activity",
        franchise: ["Paranormal Activity"],
        director: "Oren Peli",
        releaseDate: "2009-09-25"
    },
    {
        title: "Paranormal Activity 2",
        franchise: ["Paranormal Activity"],
        director: "Tod Williams",
        releaseDate: "2010-10-22"
    },
    {
        title: "Paranormal Activity 3",
        franchise: ["Paranormal Activity"],
        director: "Henry Joost & Ariel Schulman",
        releaseDate: "2011-10-21"
    },
    {
        title: "Paranormal Activity 4",
        franchise: ["Paranormal Activity"],
        director: "Henry Joost & Ariel Schulman",
        releaseDate: "2012-10-19"
    },
    {
        title: "Paranormal Activity: The Marked Ones",
        franchise: ["Paranormal Activity"],
        director: "Christopher Landon",
        releaseDate: "2014-01-03"
    },
    {
        title: "Paranormal Activity: The Ghost Dimension",
        franchise: ["Paranormal Activity"],
        director: "Gregory Plotkin",
        releaseDate: "2015-10-23"
    },
    {
        title: "Paranormal Activity: Next of Kin",
        franchise: ["Paranormal Activity"],
        director: "William Eubank",
        releaseDate: "2021-10-29"
    },
    {
        title: "Star Trek: The Motion Picture",
        franchise: ["Star Trek"],
        director: "Robert Wise",
        releaseDate: "1979-12-07"
    },
    {
        title: "Star Trek II: The Wrath of Khan",
        franchise: ["Star Trek"],
        director: "Nicholas Meyer",
        releaseDate: "1982-06-04"
    },
    {
        title: "Star Trek III: The Search for Spock",
        franchise: ["Star Trek"],
        director: "Leonard Nimoy",
        releaseDate: "1984-06-01"
    },
    {
        title: "Star Trek IV: The Voyage Home",
        franchise: ["Star Trek"],
        director: "Leonard Nimoy",
        releaseDate: "1986-11-26"
    },
    {
        title: "Star Trek V: The Final Frontier",
        franchise: ["Star Trek"],
        director: "William Shatner",
        releaseDate: "1989-06-09"
    },
    {
        title: "Star Trek VI: The Undiscovered Country",
        franchise: ["Star Trek"],
        director: "Nicholas Meyer",
        releaseDate: "1991-12-06"
    },
    {
        title: "Star Trek Generations",
        franchise: ["Star Trek"],
        director: "David Carson",
        releaseDate: "1994-11-18"
    },
    {
        title: "Star Trek: First Contact",
        franchise: ["Star Trek"],
        director: "Jonathan Frakes",
        releaseDate: "1996-11-22"
    },
    {
        title: "Star Trek: Insurrection",
        franchise: ["Star Trek"],
        director: "Jonathan Frakes",
        releaseDate: "1998-12-11"
    },
    {
        title: "Star Trek: Nemesis",
        franchise: ["Star Trek"],
        director: "Stuart Baird",
        releaseDate: "2002-12-13"
    },
    {
        title: "Star Trek",
        franchise: ["Star Trek"],
        director: "J.J. Abrams",
        releaseDate: "2009-05-08"
    },
    {
        title: "Star Trek Into Darkness",
        franchise: ["Star Trek"],
        director: "J.J. Abrams",
        releaseDate: "2013-05-17"
    },
    {
        title: "Star Trek Beyond",
        franchise: ["Star Trek"],
        director: "Justin Lin",
        releaseDate: "2016-07-22"
    }
];

export default movieDb;