package main
import (
	"database/sql"
	"fmt"
	"strings"
)

func fetchFranchises(db *sql.DB) ([]Franchise, error) {
	rows, err := db.Query("SELECT id, name FROM franchises ORDER BY name")
	if err != nil {
		return nil, fmt.Errorf("failed to query franchises: %w", err)
	}
	defer rows.Close()

	franchises := []Franchise{}

	for rows.Next() {
		var franchise Franchise
		if err := rows.Scan(&franchise.ID, &franchise.Name); err != nil {
			return nil, fmt.Errorf("error scanning franchises: %w", err)
		}
		
		franchises = append(franchises, franchise)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error reading franchises data: %w", err)
	}

	return franchises, nil
}

func fetchMovies(db *sql.DB, selectedFranchises []string) ([]Movie, error) {
	// build placeholders for the selected franchise names and populate
	placeholders := make([]string, len(selectedFranchises))
	queryArgs := make([]any, len(selectedFranchises))
	for i, franchise := range selectedFranchises {
		placeholders[i] = fmt.Sprintf("$%d", i+1)
		queryArgs[i] = franchise
	}

	// query for movies table data
	movieQuery := fmt.Sprintf(`
		SELECT id, title, COALESCE(director, ''), release_date::text
		FROM movies m
		WHERE EXISTS (
			SELECT 1
			FROM movie_franchises mf
			JOIN franchises f ON f.id = mf.franchise_id
			WHERE mf.movie_id = m.id AND f.name IN (%s)
		)
		ORDER BY release_date, title
	`, strings.Join(placeholders, ", "))

	rows, err := db.Query(movieQuery, queryArgs...)
	if err != nil {
		return nil, fmt.Errorf("failed to query movies: %w", err)
	}
	defer rows.Close()

	movies := []Movie{}
	movieIdxs := make(map[int]int)

	for rows.Next() {
		var movie Movie
		if err := rows.Scan(&movie.ID, &movie.Title, &movie.Director, &movie.ReleaseDate); err != nil {
			return nil, fmt.Errorf("error scanning movie rows: %w", err)
		}

		movie.Franchise = []string{}
		movieIdxs[movie.ID] = len(movies)
		movies = append(movies, movie)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error reading movie data: %w", err)
	}
	if err:= rows.Close(); err != nil {
		return nil, fmt.Errorf("error closing movie data: %w", err)
	}
	if len(movies) == 0 {
		fmt.Println("no matching movies found")
		return movies, nil
	}

	// build placeholders for the matching movie IDs and populate
	idPlaceholders := make([]string, len(movies))
	idArgs := make([]any, len(movies))
	for i, movie := range movies {
		idPlaceholders[i] = fmt.Sprintf("$%d", i+1)
		idArgs[i] = movie.ID
	}

	// query movie_franchises table for matches
	franchiseQuery := fmt.Sprintf(`
		SELECT mf.movie_id, f.name
		FROM movie_franchises mf
		JOIN franchises f ON f.id = mf.franchise_id
		WHERE mf.movie_id IN (%s)
		ORDER BY mf.movie_id, f.name
	`, strings.Join(idPlaceholders, ", "))

	franchiseRows, err := db.Query(franchiseQuery, idArgs...)
	if err != nil {
		return nil, fmt.Errorf("failed to query movie franchises: %w", err)
	}
	defer franchiseRows.Close()

	for franchiseRows.Next() {
		var movieID int
		var franchiseName string
		if err := franchiseRows.Scan(&movieID, &franchiseName); err != nil {
			return nil, fmt.Errorf("error scanning movie franchises: %w", err)
		}

		idx := movieIdxs[movieID]
		movies[idx].Franchise = append(movies[idx].Franchise, franchiseName)
	}

	if err := franchiseRows.Err(); err != nil {
		return nil, fmt.Errorf("error reading movie franchises data: %w", err)
	}

	return movies, nil
}