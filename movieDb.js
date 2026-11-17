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
    },
    {
        title: "The Muppet Movie",
        franchise: ["The Muppets"],
        director: "James Frawley",
        releaseDate: "1979-05-31"
    },
    {
        title: "The Great Muppet Caper",
        franchise: ["The Muppets"],
        director: "Jim Henson",
        releaseDate: "1981-06-26"
    },
    {
        title: "The Muppets Take Manhattan",
        franchise: ["The Muppets"],
        director: "Frank Oz",
        releaseDate: "1984-07-13"
    },
    {
        title: "The Muppet Christmas Carol",
        franchise: ["The Muppets"],
        director: "Brian Henson",
        releaseDate: "1992-12-11"
    },
    {
        title: "Muppet Treasure Island",
        franchise: ["The Muppets"],
        director: "Brian Henson",
        releaseDate: "1996-02-16"
    },
    {
        title: "Muppets from Space",
        franchise: ["The Muppets"],
        director: "Tim Hill",
        releaseDate: "1999-07-14"
    },
    {
        title: "The Muppets",
        franchise: ["The Muppets"],
        director: "James Bobin",
        releaseDate: "2011-11-04"
    },
    {
        title: "Muppets Most Wanted",
        franchise: ["The Muppets"],
        director: "James Bobin",
        releaseDate: "2014-03-11"
    },
    {
        title: "The Fast and the Furious",
        franchise: ["Fast and Furious"],
        director: "Rob Cohen",
        releaseDate: "2001-06-22"
    },
    {
        title: "2 Fast 2 Furious",
        franchise: ["Fast and Furious"],
        director: "John Singleton",
        releaseDate: "2003-06-06"
    },
    {
        title: "The Fast and the Furious: Tokyo Drift",
        franchise: ["Fast and Furious"],
        director: "Justin Lin",
        releaseDate: "2006-06-16"
    },
    {
        title: "Fast & Furious",
        franchise: ["Fast and Furious"],
        director: "Justin Lin",
        releaseDate: "2009-04-03"
    },
    {
        title: "Fast Five",
        franchise: ["Fast and Furious"],
        director: "Justin Lin",
        releaseDate: "2011-04-29"
    },
    {
        title: "Fast & Furious 6",
        franchise: ["Fast and Furious"],
        director: "Justin Lin",
        releaseDate: "2013-05-24"
    },
    {
        title: "Furious 7",
        franchise: ["Fast and Furious"],
        director: "James Wan",
        releaseDate: "2015-04-03"
    },
    {
        title: "The Fate of the Furious",
        franchise: ["Fast and Furious"],
        director: "F. Gary Gray",
        releaseDate: "2017-04-14"
    },
    {
        title: "F9",
        franchise: ["Fast and Furious"],
        director: "Justin Lin",
        releaseDate: "2021-06-25"
    },
    {
        title: "Fast X",
        franchise: ["Fast and Furious"],
        director: "Louis Leterrier",
        releaseDate: "2023-05-19"
    },
    {
        title: "Rocky",
        franchise: ["Rocky"],
        director: "John G. Avildsen",
        releaseDate: "1976-12-03"
    },
    {
        title: "Rocky II",
        franchise: ["Rocky"],
        director: "Sylvester Stallone",
        releaseDate: "1979-06-15"
    },
    {
        title: "Rocky III",
        franchise: ["Rocky"],
        director: "Sylvester Stallone",
        releaseDate: "1982-05-28"
    },
    {
        title: "Rocky IV",
        franchise: ["Rocky"],
        director: "Sylvester Stallone",
        releaseDate: "1985-11-27"
    },
    {
        title: "Rocky V",
        franchise: ["Rocky"],
        director: "John G. Avildsen",
        releaseDate: "1990-11-16"
    },
    {
        title: "Rocky Balboa",
        franchise: ["Rocky"],
        director: "Sylvester Stallone",
        releaseDate: "2006-12-20"
    },
    {
        title: "Creed",
        franchise: ["Rocky"],
        director: "Ryan Coogler",
        releaseDate: "2015-11-25"
    },
    {
        title: "Creed II",
        franchise: ["Rocky"],
        director: "Steven Caple Jr.",
        releaseDate: "2018-11-21"
    },
    {
        title: "Creed III",
        franchise: ["Rocky"],
        director: "Michael B. Jordan",
        releaseDate: "2023-03-03"
    },
    {
        title: "The Conjuring",
        franchise: ["The Warren Files"],
        director: "James Wan",
        releaseDate: "2013-07-19"
    },
    {
        title: "Annabelle",
        franchise: ["The Warren Files"],
        director: "John R. Leonetti",
        releaseDate: "2014-10-03"
    },
    {
        title: "The Conjuring 2",
        franchise: ["The Warren Files"],
        director: "James Wan",
        releaseDate: "2016-06-10"
    },
    {
        title: "Annabelle: Creation",
        franchise: ["The Warren Files"],
        director: "David F. Sandberg",
        releaseDate: "2017-08-11"
    },
    {
        title: "The Nun",
        franchise: ["The Warren Files"],
        director: "Corin Hardy",
        releaseDate: "2018-09-07"
    },
    {
        title: "Annabelle Comes Home",
        franchise: ["The Warren Files"],
        director: "Gary Dauberman",
        releaseDate: "2019-06-26"
    },
    {
        title: "The Conjuring: The Devil Made Me Do It",
        franchise: ["The Warren Files"],
        director: "Michael Chaves",
        releaseDate: "2021-06-04"
    },
    {
        title: "The Nun II",
        franchise: ["The Warren Files"],
        director: "Michael Chaves",
        releaseDate: "2023-09-08"
    },
    {
        title: "The Conjuring: Last Rites",
        franchise: ["The Warren Files"],
        director: "Michael Chaves",
        releaseDate: "2025-09-05"
    },
    {
        title: "Mission: Impossible",
        franchise: ["Mission: Impossible"],
        director: "Brian De Palma",
        releaseDate: "1996-05-22"
    },
    {
        title: "Mission: Impossible 2",
        franchise: ["Mission: Impossible"],
        director: "John Woo",
        releaseDate: "2000-05-24"
    },
    {
        title: "Mission: Impossible III",
        franchise: ["Mission: Impossible"],
        director: "J.J. Abrams",
        releaseDate: "2006-05-05"
    },
    {
        title: "Mission: Impossible - Ghost Protocol",
        franchise: ["Mission: Impossible"],
        director: "Brad Bird",
        releaseDate: "2011-12-16"
    },
    {
        title: "Mission: Impossible - Rogue Nation",
        franchise: ["Mission: Impossible"],
        director: "Christopher McQuarrie",
        releaseDate: "2015-07-31"
    },
    {
        title: "Mission: Impossible - Fallout",
        franchise: ["Mission: Impossible"],
        director: "Christopher McQuarrie",
        releaseDate: "2018-07-27"
    },
    {
        title: "Mission: Impossible - Dead Reckoning Part One",
        franchise: ["Mission: Impossible"],
        director: "Christopher McQuarrie",
        releaseDate: "2023-07-12"
    },
    {
        title: "Mission: Impossible - The Final Reckoning",
        franchise: ["Mission: Impossible"],
        director: "Christopher McQuarrie",
        releaseDate: "2025-05-23"
    },
    {
        title: "Hellraiser",
        franchise: ["Hellraiser"],
        director: "Clive Barker",
        releaseDate: "1987-09-18"
    },
    {
        title: "Hellbound: Hellraiser II",
        franchise: ["Hellraiser"],
        director: "Tony Randel",
        releaseDate: "1988-12-23"
    },
    {
        title: "Hellraiser III: Hell on Earth",
        franchise: ["Hellraiser"],
        director: "Anthony Hickox",
        releaseDate: "1992-09-11"
    },
    {
        title: "Hellraiser: Bloodline",
        franchise: ["Hellraiser"],
        director: "Kevin Yagher",
        releaseDate: "1996-03-08"
    },
    {
        title: "Hellraiser: Inferno",
        franchise: ["Hellraiser"],
        director: "Scott Derrickson",
        releaseDate: "2000-10-03"
    },
    {
        title: "Hellraiser: Hellseeker",
        franchise: ["Hellraiser"],
        director: "Rick Bota",
        releaseDate: "2002-10-15"
    },
    {
        title: "Hellraiser: Deader",
        franchise: ["Hellraiser"],
        director: "Rick Bota",
        releaseDate: "2005-06-07"
    },
    {
        title: "Hellraiser: Hellworld",
        franchise: ["Hellraiser"],
        director: "Rick Bota",
        releaseDate: "2005-09-06"
    },
    {
        title: "Hellraiser: Revelations",
        franchise: ["Hellraiser"],
        director: "Victor Garcia",
        releaseDate: "2011-03-18"
    },
    {
        title: "Hellraiser: Judgment",
        franchise: ["Hellraiser"],
        director: "Gary J. Tunnicliffe",
        releaseDate: "2018-02-13"
    },
    {
        title: "Hellraiser",
        franchise: ["Hellraiser"],
        director: "David Bruckner",
        releaseDate: "2022-10-07"
    },
    {
        title: "The Exorcist",
        franchise: ["The Exorcist"],
        director: "William Friedkin",
        releaseDate: "1973-12-26"
    },
    {
        title: "Exorcist II: The Heretic",
        franchise: ["The Exorcist"],
        director: "John Boorman",
        releaseDate: "1977-06-17"
    },
    {
        title: "The Exorcist III",
        franchise: ["The Exorcist"],
        director: "William Peter Blatty",
        releaseDate: "1990-08-17"
    },
    {
        title: "Exorcist: The Beginning",
        franchise: ["The Exorcist"],
        director: "Renny Harlin",
        releaseDate: "2004-08-20"
    },
    {
        title: "Dominion: Prequel to the Exorcist",
        franchise: ["The Exorcist"],
        director: "Paul Schrader",
        releaseDate: "2005-05-20"
    },
    {
        title: "The Exorcist: Believer",
        franchise: ["The Exorcist"],
        director: "David Gordon Green",
        releaseDate: "2023-10-06"
    },
    {
        title: "The Exorcist: Martyrs",
        franchise: ["The Exorcist"],
        director: "Mike Flanagan",
        releaseDate: "2027-03-12"
    },
    {
        title: "Jackass: The Movie",
        franchise: ["Jackass"],
        director: "Jeff Tremaine",
        releaseDate: "2002-10-25"
    },
    {
        title: "Jackass Number Two",
        franchise: ["Jackass"],
        director: "Jeff Tremaine",
        releaseDate: "2006-09-22"
    },
    {
        title: "Jackass 3D",
        franchise: ["Jackass"],
        director: "Jeff Tremaine",
        releaseDate: "2010-10-15"
    },
    {
        title: "Jackass Presents: Bad Grandpa",
        franchise: ["Jackass"],
        director: "Jeff Tremaine",
        releaseDate: "2013-10-25"
    },
    {
        title: "Jackass Forever",
        franchise: ["Jackass"],
        director: "Jeff Tremaine",
        releaseDate: "2022-02-01"
    },
    {
        title: "Jackass: Best and Last",
        franchise: ["Jackass"],
        director: "Jeff Tremaine",
        releaseDate: "2026-06-26"
    },
    {
        title: "Jackass Presents: Matt Hoffman's Tribute to Evel Knievel",
        franchise: ["Jackass"],
        director: "Jeff Tremaine",
        releaseDate: "2008-05-27"
    },
    {
        title: "The Matrix",
        franchise: ["The Matrix"],
        director: "The Wachowskis",
        releaseDate: "1999-03-31"
    },
    {
        title: "The Matrix Reloaded",
        franchise: ["The Matrix"],
        director: "The Wachowskis",
        releaseDate: "2003-05-15"
    },
    {
        title: "The Matrix Revolutions",
        franchise: ["The Matrix"],
        director: "The Wachowskis",
        releaseDate: "2003-11-05"
    },
    {
        title: "The Matrix Resurrections",
        franchise: ["The Matrix"],
        director: "Lana Wachowski",
        releaseDate: "2021-12-22"
    },
    {
        title: "The Animatrix",
        franchise: ["The Matrix"],
        director: "Anthology",
        releaseDate: "2003-06-03"
    },
    {
        title: "Hell House LLC",
        franchise: ["Hell House LLC"],
        director: "Stephen Cognetti",
        releaseDate: "2015-10-16"
    },
    {
        title: "Hell House LLC II: The Abaddon Hotel",
        franchise: ["Hell House LLC"],
        director: "Stephen Cognetti",
        releaseDate: "2018-09-20"
    },
    {
        title: "Hell House LLC III: Lake of Fire",
        franchise: ["Hell House LLC"],
        director: "Stephen Cognetti",
        releaseDate: "2019-09-19"
    },
    {
        title: "Hell House LLC Origins: The Carmichael Manor",
        franchise: ["Hell House LLC"],
        director: "Stephen Cognetti",
        releaseDate: "2023-10-30"
    },
    {
        title: "Hell House LLC: Lineage",
        franchise: ["Hell House LLC"],
        director: "Stephen Cognetti",
        releaseDate: "2025-08-20"
    },
    {
        title: "Die Hard",
        franchise: ["Die Hard"],
        director: "John McTiernan",
        releaseDate: "1988-07-15"
    },
    {
        title: "Die Hard 2",
        franchise: ["Die Hard"],
        director: "Renny Harlin",
        releaseDate: "1990-07-04"
    },
    {
        title: "Die Hard with a Vengeance",
        franchise: ["Die Hard"],
        director: "John McTiernan",
        releaseDate: "1995-05-19"
    },
    {
        title: "Live Free or Die Hard",
        franchise: ["Die Hard"],
        director: "Len Wiseman",
        releaseDate: "2007-06-27"
    },
    {
        title: "A Good Day to Die Hard",
        franchise: ["Die Hard"],
        director: "John Moore",
        releaseDate: "2013-02-14"
    },
    {
        title: "Insidious",
        franchise: ["Insidious"],
        director: "James Wan",
        releaseDate: "2011-04-01"
    },
    {
        title: "Insidious: Chapter 2",
        franchise: ["Insidious"],
        director: "James Wan",
        releaseDate: "2013-09-13"
    },
    {
        title: "Insidious: Chapter 3",
        franchise: ["Insidious"],
        director: "Leigh Whannell",
        releaseDate: "2015-06-05"
    },
    {
        title: "Insidious: The Last Key",
        franchise: ["Insidious"],
        director: "Adam Robitel",
        releaseDate: "2018-01-05"
    },
    {
        title: "Insidious: The Red Door",
        franchise: ["Insidious"],
        director: "Patrick Wilson",
        releaseDate: "2023-07-07"
    },
    {
        title: "Insidious: Out of the Further",
        franchise: ["Insidious"],
        director: "Jacob Chase",
        releaseDate: "2026-08-21"
    },
    {
        title: "The Mummy",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Karl Freund",
        releaseDate: "1932-12-22"
    },
    {
        title: "The Mummy's Hand",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Christy Cabanne",
        releaseDate: "1940-09-20"
    },
    {
        title: "The Mummy's Tomb",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Harold Young",
        releaseDate: "1942-10-23"
    },
    {
        title: "The Mummy's Ghost",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Reginald LeBorg",
        releaseDate: "1944-07-07"
    },
    {
        title: "The Mummy's Curse",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Leslie Goodwins",
        releaseDate: "1944-12-22"
    },
    {
        title: "Abbot and Costello Meet the Mummy",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Charles Lamont",
        releaseDate: "1955-04-16"
    },
    {
        title: "The Mummy",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Terence Fisher",
        releaseDate: "1959-09-25"
    },
    {
        title: "The Curse of the Mummy's Tomb",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Michael Carreras",
        releaseDate: "1964-10-18"
    },
    {
        title: "The Mummy's Shroud",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "John Gilling",
        releaseDate: "1967-03-15"
    },
    {
        title: "Blood from the Mummy's Tomb",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Seth Holt & Michael Carreras",
        releaseDate: "1971-10-14"
    },
    {
        title: "The Mummy",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Stephen Sommers",
        releaseDate: "1999-05-07"
    },
    {
        title: "The Mummy Returns",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Stephen Sommers",
        releaseDate: "2001-05-04"
    },
    {
        title: "The Mummy: Tomb of the Dragon Emperor",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Rob Cohen",
        releaseDate: "2008-08-01"
    },
    {
        title: "The Mummy: Book of the Dead",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Matt Bettinelli-Olpin, Tyler Gillett",
        releaseDate: "2027-10-15"
    },
    {
        title: "The Mummy",
        franchise: ["The Mummy", "Universal Classic Monsters"],
        director: "Alex Kurtzman",
        releaseDate: "2017-06-09"
    },
    {
        title: "Lee Cronin's The Mummy",
        franchise: ["The Mummy"],
        director: "Lee Cronin",
        releaseDate: "2026-04-17"
    },
    {
        title: "Hatchet",
        franchise: ["Hatchet"],
        director: "Adam Green",
        releaseDate: "2007-09-07"
    },
    {
        title: "Hatchet II",
        franchise: ["Hatchet"],
        director: "Adam Green",
        releaseDate: "2010-10-01"
    },
    {
        title: "Hatchet III",
        franchise: ["Hatchet"],
        director: "B.J. McDonnell",
        releaseDate: "2013-06-14"
    },
    {
        title: "Victor Crowley",
        franchise: ["Hatchet"],
        director: "Adam Green",
        releaseDate: "2017-08-22"
    },
    {
        title: "Lethal Weapon",
        franchise: ["Lethal Weapon"],
        director: "Richard Donner",
        releaseDate: "1987-03-06"
    },
    {
        title: "Lethal Weapon 2",
        franchise: ["Lethal Weapon"],
        director: "Richard Donner",
        releaseDate: "1989-07-07"
    },
    {
        title: "Lethal Weapon 3",
        franchise: ["Lethal Weapon"],
        director: "Richard Donner",
        releaseDate: "1992-05-15"
    },
    {
        title: "Lethal Weapon 4",
        franchise: ["Lethal Weapon"],
        director: "Richard Donner",
        releaseDate: "1998-07-10"
    },
    {
        title: "Air Bud",
        franchise: ["Air Bud"],
        director: "Charles Martin Smith",
        releaseDate: "1997-08-01"
    },
    {
        title: "Air Bud: Golden Retriver",
        franchise: ["Air Bud"],
        director: "Richard Martin",
        releaseDate: "1998-08-14"
    },
    {
        title: "Air Bud: World Pup",
        franchise: ["Air Bud"],
        director: "Bill Bannerman",
        releaseDate: "2000-12-12"
    },
    {
        title: "Air Bud: Seventh Inning Fetch",
        franchise: ["Air Bud"],
        director: "Robert Vince",
        releaseDate: "2002-06-18"
    },
    {
        title: "Air Bud: Spikes Back",
        franchise: ["Air Bud"],
        director: "Mike Southon",
        releaseDate: "2003-06-24"
    },
    {
        title: "Air Bud Returns",
        franchise: ["Air Bud"],
        director: "Robert Vince",
        releaseDate: "2027-01-22"
    },
    {
        title: "Lord of the Rings: The Fellowship of the Ring",
        franchise: ["Tolkien's Middle-Earth"],
        director: "Peter Jackson",
        releaseDate: "2001-12-19"
    },
    {
        title: "Lord of the Rings: The Two Towers",
        franchise: ["Tolkien's Middle-Earth"],
        director: "Peter Jackson",
        releaseDate: "2002-12-18"
    },
    {
        title: "Lord of the Rings: The Return of the King",
        franchise: ["Tolkien's Middle-Earth"],
        director: "Peter Jackson",
        releaseDate: "2003-12-17"
    },
    {
        title: "The Hobbit: An Unexpected Journey",
        franchise: ["Tolkien's Middle-Earth"],
        director: "Peter Jackson",
        releaseDate: "2012-12-14"
    },
    {
        title: "The Hobbit: The Desolation of Smaug",
        franchise: ["Tolkien's Middle-Earth"],
        director: "Peter Jackson",
        releaseDate: "2013-12-13"
    },
    {
        title: "The Hobbit: The Battle of the Five Armies",
        franchise: ["Tolkien's Middle-Earth"],
        director: "Peter Jackson",
        releaseDate: "2014-12-17"
    },
    {
        title: "Toy Story",
        franchise: ["Toy Story"],
        director: "John Lasseter",
        releaseDate: "1995-11-22"
    },
    {
        title: "Toy Story 2",
        franchise: ["Toy Story"],
        director: "John Lasseter",
        releaseDate: "1999-11-24"
    },
    {
        title: "Toy Story 3",
        franchise: ["Toy Story"],
        director: "Lee Unkrich",
        releaseDate: "2010-06-18"
    },
    {
        title: "Toy Story 4",
        franchise: ["Toy Story"],
        director: "Josh Cooley",
        releaseDate: "2019-06-21"
    },
    {
        title: "Toy Story 5",
        franchise: ["Toy Story"],
        director: "Andrew Stanton",
        releaseDate: "2026-06-19"
    },
    {
        title: "Lightyear",
        franchise: ["Toy Story"],
        director: "Angus MacLane",
        releaseDate: "2022-06-17"
    },
    {
        title: "First Blood",
        franchise: ["Rambo"],
        director: "Ted Kotcheff",
        releaseDate: "1982-10-22"
    },
    {
        title: "Rambo: First Blood Part II",
        franchise: ["Rambo"],
        director: "George P. Cosmatos",
        releaseDate: "1985-05-22"
    },
    {
        title: "Rambo III",
        franchise: ["Rambo"],
        director: "Peter MacDonald",
        releaseDate: "1988-05-25"
    },
    {
        title: "Rambo",
        franchise: ["Rambo"],
        director: "Sylvester Stallone",
        releaseDate: "2008-01-25"
    },
    {
        title: "John Rambo",
        franchise: ["Rambo"],
        director: "Jalmari Helander",
        releaseDate: "2027-06-04"
    },
    {
        title: "X-Men",
        franchise: ["X-Men"],
        director: "Bryan Singer",
        releaseDate: "2000-07-14"
    },
    {
        title: "X2",
        franchise: ["X-Men"],
        director: "Bryan Singer",
        releaseDate: "2003-05-02"
    },
    {
        title: "X-Men: The Last Stand",
        franchise: ["X-Men"],
        director: "Brett Ratner",
        releaseDate: "2006-05-26"
    },
    {
        title: "X-Men: First Class",
        franchise: ["X-Men"],
        director: "Matthew Vaughn",
        releaseDate: "2011-06-03"
    },
    {
        title: "X-Men: Days of Future Past",
        franchise: ["X-Men"],
        director: "Bryan Singer",
        releaseDate: "2014-05-23"
    },
    {
        title: "X-Men: Apocalypse",
        franchise: ["X-Men"],
        director: "Bryan Singer",
        releaseDate: "2016-05-27"
    },
    {
        title: "Dark Phoenix",
        franchise: ["X-Men"],
        director: "Simon Kinberg",
        releaseDate: "2019-06-07"
    },
    {
        title: "X-Men Origins: Wolverine",
        franchise: ["X-Men"],
        director: "Gavin Hood",
        releaseDate: "2009-05-01"
    },
    {
        title: "The Wolverine",
        franchise: ["X-Men"],
        director: "James Mangold",
        releaseDate: "2013-06-26"
    },
    {
        title: "Logan",
        franchise: ["X-Men"],
        director: "James Mangold",
        releaseDate: "2017-03-03"
    },
    {
        title: "The New Mutants",
        franchise: ["X-Men"],
        director: "Josh Boone",
        releaseDate: "2020-08-28"
    },
    {
        title: "Deadpool",
        franchise: ["X-Men"],
        director: "Tim Miller",
        releaseDate: "2016-02-12"
    },
    {
        title: "Deadpool 2",
        franchise: ["X-Men"],
        director: "David Leitch",
        releaseDate: "2018-05-18"
    },
    {
        title: "Deadpool & Wolverine",
        franchise: ["X-Men", "MCU"],
        director: "Shawn Levy",
        releaseDate: "2024-06-22"
    },
    {
        title: "Ghostbusters",
        franchise: ["Ghostbusters"],
        director: "Ivan Reitman",
        releaseDate: "1984-06-08"
    },
    {
        title: "Ghostbusters II",
        franchise: ["Ghostbusters"],
        director: "Ivan Reitman",
        releaseDate: "1989-06-16"
    },
    {
        title: "Ghostbusters: Afterlife",
        franchise: ["Ghostbusters"],
        director: "Jason Reitman",
        releaseDate: "2021-11-19"
    },
    {
        title: "Ghostbusters: Frozen Empire",
        franchise: ["Ghostbusters"],
        director: "Gil Kenan",
        releaseDate: "2024-03-22"
    },
    {
        title: "Ghostbusters",
        franchise: ["Ghostbusters"],
        director: "Paul Feig",
        releaseDate: "2016-07-15"
    },
    {
        title: "Death Wish",
        franchise: ["Death Wish"],
        director: "Michael Winner",
        releaseDate: "1974-07-24"
    },
    {
        title: "Death Wish II",
        franchise: ["Death Wish"],
        director: "Michael Winner",
        releaseDate: "1982-02-19"
    },
    {
        title: "Death Wish 3",
        franchise: ["Death Wish"],
        director: "Michael Winner",
        releaseDate: "1985-11-01"
    },
    {
        title: "Death Wish 4: The Crackdown",
        franchise: ["Death Wish"],
        director: "J. Lee Thompson",
        releaseDate: "1987-11-06"
    },
    {
        title: "Death Wish V: The Face of Death",
        franchise: ["Death Wish"],
        director: "Allan A. Goldtein",
        releaseDate: "1994-01-14"
    },
    {
        title: "Death Wish",
        franchise: ["Death Wish"],
        director: "Eli Roth",
        releaseDate: "2018-03-02"
    },
    {
        title: "Godzilla",
        franchise: ["Monarch Monsterverse", "Godzilla"],
        director: "Gareth Edwards",
        releaseDate: "2014-05-16"
    },
    {
        title: "Kong: Skull Island",
        franchise: ["Monarch Monsterverse", "King Kong"],
        director: "Jordan Vogt-Roberts",
        releaseDate: "2017-03-10"
    },
    {
        title: "Godzilla: King of the Monsters",
        franchise: ["Monarch Monsterverse", "Godzilla"],
        director: "Michael Dougherty",
        releaseDate: "2019-05-31"
    },
    {
        title: "Godzilla vs King Kong",
        franchise: ["Monarch Monsterverse", "Godzilla", "King Kong"],
        director: "Adam Wingard",
        releaseDate: "2021-03-31"
    },
    {
        title: "Godzilla x Kong: The New Empire",
        franchise: ["Monarch Monsterverse", "Godzilla", "King Kong"],
        director: "Adam Wingard",
        releaseDate: "2024-03-29"
    },
    {
        title: "Godzilla x Kong: Supernova",
        franchise: ["Monarch Monsterverse", "Godzilla", "King Kong"],
        director: "Grant Sputore",
        releaseDate: "2027-03-26"
    },
    {
        title: "King Kong",
        franchise: ["King Kong"],
        director: "Merian C. Cooper & Ernest B. Schoedsack",
        releaseDate: "1933-03-02"
    },
    {
        title: "Son of Kong",
        franchise: ["King Kong"],
        director: "Ernest B. Schoedsack",
        releaseDate: "1933-12-22"
    },
    {
        title: "King Kong vs. Godzilla",
        franchise: ["King Kong", "Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1962-08-11"
    },
    {
        title: "King Kong Escapes",
        franchise: ["King Kong"],
        director: "Ishiro Honda",
        releaseDate: "1967-07-22"
    },
    {
        title: "King Kong",
        franchise: ["King Kong"],
        director: "John Guillermin",
        releaseDate: "1976-12-17"
    },
    {
        title: "King Kong Lives",
        franchise: ["King Kong"],
        director: "John Guillermin",
        releaseDate: "1986-12-19"
    },
    {
        title: "King Kong",
        franchise: ["King Kong"],
        director: "Peter Jackson",
        releaseDate: "2005-12-14"
    },
    {
        title: "Godzilla",
        franchise: ["Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1954-10-27"
    },
    {
        title: "Godzilla Raids Again",
        franchise: ["Godzilla"],
        director: "Motoyoshi Oda",
        releaseDate: "1955-04-24"
    },
    {
        title: "Mothra vs. Godzilla",
        franchise: ["Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1964-04-29"
    },
    {
        title: "Ghidorah, the Three-Headed Monster",
        franchise: ["Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1964-12-20"
    },
    {
        title: "Invasion of Astro-Monster",
        franchise: ["Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1965-12-19"
    },
    {
        title: "Ebirah, Horror of the Deep",
        franchise: ["Godzilla"],
        director: "Jun Fukuda",
        releaseDate: "1966-12-17"
    },
    {
        title: "Son of Godzilla",
        franchise: ["Godzilla"],
        director: "Jun Fukuda",
        releaseDate: "1967-12-16"
    },
    {
        title: "Destroy All Monsters",
        franchise: ["Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1968-08-01"
    },
    {
        title: "All Monsters Attack",
        franchise: ["Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1969-12-20"
    },
    {
        title: "Godzilla vs. Hedorah",
        franchise: ["Godzilla"],
        director: "Yoshimitsu Banno",
        releaseDate: "1971-07-24"
    },
    {
        title: "Godzilla vs. Gigan",
        franchise: ["Godzilla"],
        director: "Jun Fukuda",
        releaseDate: "1972-03-12"
    },
    {
        title: "Godzilla vs. Megalon",
        franchise: ["Godzilla"],
        director: "Jun Fukuda",
        releaseDate: "1973-03-17"
    },
    {
        title: "Godzilla vs. Mechagodzilla",
        franchise: ["Godzilla"],
        director: "Jun Fukuda",
        releaseDate: "1974-03-21"
    },
    {
        title: "Terror of Mechagodzilla",
        franchise: ["Godzilla"],
        director: "Ishiro Honda",
        releaseDate: "1975-03-15"
    },
    {
        title: "The Return of Godzilla",
        franchise: ["Godzilla"],
        director: "Koji Hashimoto",
        releaseDate: "1984-12-15"
    },
    {
        title: "Godzilla vs. Biollante",
        franchise: ["Godzilla"],
        director: "Kazuki Omori",
        releaseDate: "1989-12-16"
    },
    {
        title: "Godzilla vs. King Ghidorah",
        franchise: ["Godzilla"],
        director: "Kazuki Omori",
        releaseDate: "1991-12-14"
    },
    {
        title: "Godzilla vs. Mothra",
        franchise: ["Godzilla"],
        director: "Takao Okawara",
        releaseDate: "1992-12-12"
    },
    {
        title: "Godzilla vs. Mechagodzilla II",
        franchise: ["Godzilla"],
        director: "Takao Okawara",
        releaseDate: "1993-12-11"
    },
    {
        title: "Godzilla vs. SpaceGodzilla",
        franchise: ["Godzilla"],
        director: "Kensho Yamashita",
        releaseDate: "1994-12-10"
    },
    {
        title: "Godzilla vs. Destoroyah",
        franchise: ["Godzilla"],
        director: "Takao Okawara",
        releaseDate: "1995-12-09"
    },
    {
        title: "Godzilla 2000: Millenium",
        franchise: ["Godzilla"],
        director: "Takao Okawara",
        releaseDate: "1999-11-06"
    },
    {
        title: "Godzilla vs. Megaguirus",
        franchise: ["Godzilla"],
        director: "Masaaki Tezuka",
        releaseDate: "2000-11-03"
    },
    {
        title: "Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack",
        franchise: ["Godzilla"],
        director: "Shusuke Kaneko",
        releaseDate: "2001-11-03"
    },
    {
        title: "Godzilla Against Mechagodzilla",
        franchise: ["Godzilla"],
        director: "Masaaki Tezuka",
        releaseDate: "2002-12-14"
    },
    {
        title: "Godzilla: Tokyo S.O.S.",
        franchise: ["Godzilla"],
        director: "Masaaki Tezuka",
        releaseDate: "2003-12-13"
    },
    {
        title: "Godzilla: Final Wars",
        franchise: ["Godzilla"],
        director: "Ryuhei Kitamura",
        releaseDate: "2004-11-29"
    },
    {
        title: "Shin Godzilla",
        franchise: ["Godzilla"],
        director: "Hideaki Anno & Shinji Higuchi",
        releaseDate: "2016-07-25"
    },
    {
        title: "Godzilla: Planet of the Monsters",
        franchise: ["Godzilla"],
        director: "Kobun Shizuno & Hiroyuki Seshita",
        releaseDate: "2017-11-17"
    },
    {
        title: "Godzilla: City on the Edge of Battle",
        franchise: ["Godzilla"],
        director: "Kobun Shizuno & Hiroyuki Seshita",
        releaseDate: "2018-05-18"
    },
    {
        title: "Godzilla: The Planet Eater",
        franchise: ["Godzilla"],
        director: "Kobun Shizuno & Hiroyuki Seshita",
        releaseDate: "2018-11-03"
    },
    {
        title: "Godzilla Minus One",
        franchise: ["Godzilla"],
        director: "Takashi Yamazaki",
        releaseDate: "2023-10-18"
    },
    {
        title: "Godzilla Minus Zero",
        franchise: ["Godzilla"],
        director: "Takashi Yamazaki",
        releaseDate: "2026-09-26"
    },
    {
        title: "Godzilla",
        franchise: ["Godzilla"],
        director: "Roland Emmerich",
        releaseDate: "1998-05-18"
    },
    {
        title: "Dr. Jekyll and Mr. Hyde",
        franchise: ["Universal Classic Monsters"],
        director: "Herbert Brenon",
        releaseDate: "1913-03-06"
    },
    {
        title: "The Hunchback of Notre Dame",
        franchise: ["Universal Classic Monsters"],
        director: "Wallace Worsley",
        releaseDate: "1923-09-02"
    },
    {
        title: "The Phantom of the Opera",
        franchise: ["Universal Classic Monsters"],
        director: "Rupert Julian",
        releaseDate: "1925-09-06"
    },
    {
        title: "Dracula",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "Tod Browning",
        releaseDate: "1931-02-14"
    },
    {
        title: "Dracula",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "George Melford",
        releaseDate: "1931-04-24"
    },
    {
        title: "Frankenstein",
        franchise: ["Universal Classic Monsters", "Frankenstein"],
        director: "James Whale",
        releaseDate: "1931-11-21"
    },
    {
        title: "The Invisible Man",
        franchise: ["Universal Classic Monsters", "The Invisible Man"],
        director: "James Whale",
        releaseDate: "1933-11-13"
    },
    {
        title: "Bride of Frankenstein",
        franchise: ["Universal Classic Monsters", "Frankenstein"],
        director: "James Whale",
        releaseDate: "1935-04-22"
    },
    {
        title: "Werewolf of London",
        franchise: ["Universal Classic Monsters", "Wolf Man"],
        director: "Stuart Walker",
        releaseDate: "1935-05-13"
    },
    {
        title: "Dracula's Daughter",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "Lambert Hillyer",
        releaseDate: "1936-05-11"
    },
    {
        title: "Son of Frankenstein",
        franchise: ["Universal Classic Monsters", "Frankenstein"],
        director: "Rowland V. Lee",
        releaseDate: "1939-01-13"
    },
    {
        title: "The Invisible Man Returns",
        franchise: ["Universal Classic Monsters", "The Invisible Man"],
        director: "Joe May",
        releaseDate: "1940-01-12"
    },
    {
        title: "The Invisible Woman",
        franchise: ["Universal Classic Monsters", "The Invisible Man"],
        director: "A. Edward Sutherland",
        releaseDate: "1940-12-27"
    },
    {
        title: "The Wolf Man",
        franchise: ["Universal Classic Monsters", "Wolf Man"],
        director: "George Waggner",
        releaseDate: "1941-12-12"
    },
    {
        title: "The Ghost of Frankenstein",
        franchise: ["Universal Classic Monsters", "Frankenstein"],
        director: "Erle C. Kenton",
        releaseDate: "1942-03-06"
    },
    {
        title: "Invisible Agent",
        franchise: ["Universal Classic Monsters", "The Invisible Man"],
        director: "Edwin L. Marin",
        releaseDate: "1942-07-31"
    },
    {
        title: "Frankenstein Meets the Wolf Man",
        franchise: ["Universal Classic Monsters", "Frankenstein", "Wolf Man"],
        director: "Roy William Neill",
        releaseDate: "1943-03-05"
    },
    {
        title: "Phantom of the Opera",
        franchise: ["Universal Classic Monsters"],
        director: "Arthur Lubin",
        releaseDate: "1943-08-12"
    },
    {
        title: "Son of Dracula",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "Robert Siodmak",
        releaseDate: "1943-11-05"
    },
    {
        title: "The Invisible Man's Revenge",
        franchise: ["Universal Classic Monsters", "The Invisible Man"],
        director: "Ford Beebe",
        releaseDate: "1944-06-09"
    },
    {
        title: "House of Frankenstein",
        franchise: ["Universal Classic Monsters", "Frankenstein"],
        director: "Erle C. Kenton",
        releaseDate: "1944-12-15"
    },
    {
        title: "House of Dracula",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "Erle C. Kenton",
        releaseDate: "1945-12-07"
    },
    {
        title: "She-Wolf of London",
        franchise: ["Universal Classic Monsters", "Wolf Man"],
        director: "Jean Yarbrough",
        releaseDate: "1946-04-05"
    },
    {
        title: "Abbott and Costello Meet Frankenstein",
        franchise: ["Universal Classic Monsters", "Wolf Man", "Frankenstein", "Dracula"],
        director: "Charles T. Barton",
        releaseDate: "1948-06-15"
    },
    {
        title: "Abbott and Costello Meet the Invisible Man",
        franchise: ["Universal Classic Monsters", "The Invisible Man"],
        director: "Charles Lamont",
        releaseDate: "1951-04-03"
    },
    {
        title: "Abbott and Costello Meet Dr. Jekyll and Mr. Hyde",
        franchise: ["Universal Classic Monsters"],
        director: "Charles Lamont",
        releaseDate: "1953-08-12"
    },
    {
        title: "Creature from the Black Lagoon",
        franchise: ["Universal Classic Monsters"],
        director: "Jack Arnold",
        releaseDate: "1954-02-12"
    },
    {
        title: "Revenge of the Creature",
        franchise: ["Universal Classic Monsters"],
        director: "Jack Arnold",
        releaseDate: "1955-03-29"
    },
    {
        title: "The Creature Walks Among Us",
        franchise: ["Universal Classic Monsters"],
        director: "John Sherwood",
        releaseDate: "1956-04-26"
    },
    {
        title: "Bram Stoker's Dracula",
        franchise: ["Dracula"],
        director: "Francis Ford Coppola",
        releaseDate: "1992-11-13"
    },
    {
        title: "Dracula",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "John Badham",
        releaseDate: "1979-07-13"
    },
    {
        title: "Van Helsing",
        franchise: ["Universal Classic Monsters", "Dracula", "Frankenstein", "Wolf Man"],
        director: "Stephen Sommers",
        releaseDate: "2004-05-07"
    },
    {
        title: "The Wolfman",
        franchise: ["Universal Classic Monsters", "Wolf Man"],
        director: "Joe Johnston",
        releaseDate: "2010-02-12"
    },
    {
        title: "Dracula Untold",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "Gary Shore",
        releaseDate: "2014-10-10"
    },
    {
        title: "The Invisible Man",
        franchise: ["Universal Classic Monsters", "The Invisible Man"],
        director: "Leigh Whannell",
        releaseDate: "2020-02-28"
    },
    {
        title: "Hollow Man",
        franchise: ["The Invisible Man"],
        director: "Paul Verhoeven",
        releaseDate: "2000-08-04"
    },
    {
        title: "Renfield",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "Chris McKay",
        releaseDate: "2023-04-14"
    },
    {
        title: "The Last Voyage of the Demeter",
        franchise: ["Universal Classic Monsters", "Dracula"],
        director: "Andre Ovredal",
        releaseDate: "2023-08-11"
    },
    {
        title: "Wolf Man",
        franchise: ["Universal Classic Monsters", "Wolf Man"],
        director: "Leigh Whannell",
        releaseDate: "2025-01-17"
    },
    {
        title: "Leprechaun",
        franchise: ["Leprechaun"],
        director: "Mark Jones",
        releaseDate: "1993-01-08"
    },
    {
        title: "Leprechaun 2",
        franchise: ["Leprechaun"],
        director: "Rodman Flender",
        releaseDate: "1994-04-08"
    },
    {
        title: "Leprechaun 3",
        franchise: ["Leprechaun"],
        director: "Brian Trenchard-Smith",
        releaseDate: "1995-06-27"
    },
    {
        title: "Leprechaun 4: In Space",
        franchise: ["Leprechaun"],
        director: "Brian Trenchard-Smith",
        releaseDate: "1997-02-25"
    },
    {
        title: "Leprechaun in the Hood",
        franchise: ["Leprechaun"],
        director: "Rob Spera",
        releaseDate: "2000-03-28"
    },
    {
        title: "Leprechaun: Back 2 tha Hood",
        franchise: ["Leprechaun"],
        director: "Steven Ayromlooi",
        releaseDate: "2003-12-30"
    },
    {
        title: "Leprechaun: Origins",
        franchise: ["Leprechaun"],
        director: "Zach Lipovsky",
        releaseDate: "2014-08-22"
    },
    {
        title: "Leprechaun Returns",
        franchise: ["Leprechaun"],
        director: "Steven Kostanski",
        releaseDate: "2018-12-11"
    },
    {
        title: "Critters",
        franchise: ["Critters"],
        director: "Stephen Herek",
        releaseDate: "1986-04-11"
    },
    {
        title: "Critters 2: The Main Course",
        franchise: ["Critters"],
        director: "Mick Garris",
        releaseDate: "1988-04-29"
    },
    {
        title: "Critters 3",
        franchise: ["Critters"],
        director: "Kristine Peterson",
        releaseDate: "1991-12-11"
    },
    {
        title: "Critters 4",
        franchise: ["Critters"],
        director: "Rupert Harvey",
        releaseDate: "1992-10-14"
    },
    {
        title: "Critters Attack!",
        franchise: ["Critters"],
        director: "Bobby Miller",
        releaseDate: "2019-07-23"
    },
    {
        title: "The Amityville Horror",
        franchise: ["The Amityville Horror"],
        director: "Stuart Rosenberg",
        releaseDate: "1979-07-27"
    },
    {
        title: "Amityville II: The Possession",
        franchise: ["The Amityville Horror"],
        director: "Damiano Damiani",
        releaseDate: "1982-09-24"
    },
    {
        title: "Amityville 3-D",
        franchise: ["The Amityville Horror"],
        director: "Richard Fleischer",
        releaseDate: "1983-11-18"
    },
    {
        title: "Amityville 4: The Evil Escapes",
        franchise: ["The Amityville Horror"],
        director: "Sandor Stern",
        releaseDate: "1989-05-12"
    },
    {
        title: "The Amityville Curse",
        franchise: ["The Amityville Horror"],
        director: "Tom Berry",
        releaseDate: "1990-05-07"
    },
    {
        title: "Amityville 1992: It's About Time",
        franchise: ["The Amityville Horror"],
        director: "Tony Randel",
        releaseDate: "1992-07-16"
    },
    {
        title: "Amityville: A New Generation",
        franchise: ["The Amityville Horror"],
        director: "John Murlowski",
        releaseDate: "1993-09-29"
    },
    {
        title: "Amityville Dollhouse",
        franchise: ["The Amityville Horror"],
        director: "Steve White",
        releaseDate: "1997-02-18"
    },
    {
        title: "The Amityville Horror",
        franchise: ["The Amityville Horror"],
        director: "Andrew Douglas",
        releaseDate: "2005-04-15"
    },
    {
        title: "Amityville: The Awakening",
        franchise: ["The Amityville Horror"],
        director: "Franck Khalfoun",
        releaseDate: "2017-10-28"
    },
    {
        title: "Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Franklin J. Schaffner",
        releaseDate: "1968-04-03"
    },
    {
        title: "Beneath the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Ted Post",
        releaseDate: "1970-05-27"
    },
    {
        title: "Escape from the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Don Taylor",
        releaseDate: "1971-05-21"
    },
    {
        title: "Conquest of the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "J. Lee Thompson",
        releaseDate: "1972-06-29"
    },
    {
        title: "Battle for the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "J. Lee Thompson",
        releaseDate: "1973-06-15"
    },
    {
        title: "Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Tim Burton",
        releaseDate: "2001-07-27"
    },
    {
        title: "Rise of the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Rupert Wyatt",
        releaseDate: "2011-08-05"
    },
    {
        title: "Dawn of the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Matt Reeves",
        releaseDate: "2014-07-11"
    },
    {
        title: "War for the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Matt Reeves",
        releaseDate: "2017-07-14"
    },
    {
        title: "Kingdom of the Planet of the Apes",
        franchise: ["Planet of the Apes"],
        director: "Wes Ball",
        releaseDate: "2024-05-10"
    },
    {
        title: "The Purge",
        franchise: ["The Purge"],
        director: "James DeMonaco",
        releaseDate: "2013-06-07"
    },
    {
        title: "The Purge: Anarchy",
        franchise: ["The Purge"],
        director: "James DeMonaco",
        releaseDate: "2014-07-18"
    },
    {
        title: "The Purge: Election Year",
        franchise: ["The Purge"],
        director: "James DeMonaco",
        releaseDate: "2016-07-01"
    },
    {
        title: "The First Purge",
        franchise: ["The Purge"],
        director: "Gerard McMurray",
        releaseDate: "2018-07-04"
    },
    {
        title: "The Forever Purge",
        franchise: ["The Purge"],
        director: "Everardo Gout",
        releaseDate: "2021-07-02"
    },
    {
        title: "Mad Max",
        franchise: ["Mad Max"],
        director: "George Miller",
        releaseDate: "1979-04-12"
    },
    {
        title: "Mad Max 2",
        franchise: ["Mad Max"],
        director: "George Miller",
        releaseDate: "1981-12-24"
    },
    {
        title: "Mad Max Beyond Thunderdome",
        franchise: ["Mad Max"],
        director: "George Miller & George Ogilvie",
        releaseDate: "1985-07-10"
    },
    {
        title: "Mad Max: Fury Road",
        franchise: ["Mad Max"],
        director: "George Miller",
        releaseDate: "2015-05-15"
    },
    {
        title: "Furiosa: A Mad Max Saga",
        franchise: ["Mad Max"],
        director: "George Miller",
        releaseDate: "2024-05-24"
    },
    {
        title: "Police Academy",
        franchise: ["Police Academy"],
        director: "Hugh Wilson",
        releaseDate: "1984-03-23"
    },
    {
        title: "Police Academy 2: Their First Assignment",
        franchise: ["Police Academy"],
        director: "Jerry Paris",
        releaseDate: "1985-03-29"
    },
    {
        title: "Police Academy 3: Back in Training",
        franchise: ["Police Academy"],
        director: "Jerry Paris",
        releaseDate: "1986-03-21"
    },
    {
        title: "Police Academy 4: Citizens on Patrol",
        franchise: ["Police Academy"],
        director: "Jim Drake",
        releaseDate: "1987-04-03"
    },
    {
        title: "Police Academy 5: Assignment Miami Beach",
        franchise: ["Police Academy"],
        director: "Alan Myerson",
        releaseDate: "1988-03-18"
    },
    {
        title: "Police Academy 6: City Under Siege",
        franchise: ["Police Academy"],
        director: "Peter Bonerz",
        releaseDate: "1989-03-10"
    },
    {
        title: "Police Academy: Mission to Moscow",
        franchise: ["Police Academy"],
        director: "Alan Metter",
        releaseDate: "1994-08-26"
    },
    {
        title: "Sharknado",
        franchise: ["Sharknado"],
        director: "Anthony C. Ferrante",
        releaseDate: "2013-07-11"
    },
    {
        title: "Sharknado 2: The Second One",
        franchise: ["Sharknado"],
        director: "Anthony C. Ferrante",
        releaseDate: "2014-07-30"
    },
    {
        title: "Sharknado 3: Oh Hell No!",
        franchise: ["Sharknado"],
        director: "Anthony C. Ferrante",
        releaseDate: "2015-07-22"
    },
    {
        title: "Sharknado: The 4th Awakens",
        franchise: ["Sharknado"],
        director: "Anthony C. Ferrante",
        releaseDate: "2016-07-31"
    },
    {
        title: "Sharknado 5: Global Swarming",
        franchise: ["Sharknado"],
        director: "Anthony C. Ferrante",
        releaseDate: "2017-08-06"
    },
    {
        title: "The Last Sharknado: It's About Time",
        franchise: ["Sharknado"],
        director: "Anthony C. Ferrante",
        releaseDate: "2018-08-19"
    }
];

export default movieDb;