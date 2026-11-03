CREATE TABLE franchises (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE movies (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    director TEXT,
    release_date DATE NOT NULL
);

CREATE TABLE movie_franchises (
    movie_id INTEGER NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
    franchise_id INTEGER NOT NULL REFERENCES franchises(id) ON DELETE CASCADE,
    PRIMARY KEY (movie_id, franchise_id)
);