package main
import (
	"log"
	"net/http"
	"encoding/json"
	"database/sql"
	"fmt"
	"strings"
)

type Movie struct {
	ID 			int      `json:"id"`
	Title 		string   `json:"title"`
	Director 	string   `json:"director"`
	ReleaseDate string   `json:"releaseDate"`
	Franchise 	[]string `json:"franchise"`
}

func getMovies(db *sql.DB, w http.ResponseWriter, r *http.Request) {
	log.Println("fetching movie data...")

	selectedFranchises := r.URL.Query()["franchises"]
	if len(selectedFranchises) == 0 {
		http.Error(w, "At least one franchise must be selected", http.StatusBadRequest)
		return
	}

	placeholders := make([]string, len(selectedFranchises))
	queryArgs := make([]any, len(selectedFranchises))
	for i, franchise := range selectedFranchises {
		placeholders[i] = fmt.Sprintf("$%d", i+1)
		queryArgs[i] = franchise
	}

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
		http.Error(w, "Failed to fetch movies", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	movies := []Movie{}
	movieIdxs := make(map[int]int)

	for rows.Next() {
		var movie Movie
		if err := rows.Scan(&movie.ID, &movie.Title, &movie.Director, &movie.ReleaseDate); err != nil {
			http.Error(w, "Failed to read movie data", http.StatusInternalServerError)
			return
		}

		movie.Franchise = []string{}
		movieIdxs[movie.ID] = len(movies)
		movies = append(movies, movie)
	}

	if err := rows.Err(); err != nil {
		http.Error(w, "Error reading movie data", http.StatusInternalServerError)
		return
	}
	if err:= rows.Close(); err != nil {
		http.Error(w, "Failed to close movie results", http.StatusInternalServerError)
		return
	}
	if len(movies) == 0 {
		log.Print("No matching movies found")
		return
	}

	idPlaceholders := make([]string, len(movies))
	idArgs := make([]any, len(movies))
	for i, movie := range movies {
		idPlaceholders[i] = fmt.Sprintf("$%d", i+1)
		idArgs[i] = movie.ID
	}

	franchiseQuery := fmt.Sprintf(`
		SELECT mf.movie_id, f.name
		FROM movie_franchises mf
		JOIN franchises f ON f.id = mf.franchise_id
		WHERE mf.movie_id IN (%s)
		ORDER BY mf.movie_id, f.name
	`, strings.Join(idPlaceholders, ", "))

	franchiseRows, err := db.Query(franchiseQuery, idArgs...)
	if err != nil {
		http.Error(w, "Failed to fetch movie franchises", http.StatusInternalServerError)
		return
	}
	defer franchiseRows.Close()

	for franchiseRows.Next() {
		var movieID int
		var franchiseName string
		if err := franchiseRows.Scan(&movieID, &franchiseName); err != nil {
			http.Error(w, "Failed to read movie franchises", http.StatusInternalServerError)
			return
		}

		idx := movieIdxs[movieID]
		movies[idx].Franchise = append(movies[idx].Franchise, franchiseName)
	}

	if err := franchiseRows.Err(); err != nil {
		http.Error(w, "Error reading movie franchises", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(movies); err != nil {
		log.Printf("Failed to encode movies: %v", err)
	}

	log.Println("successfully fetched movie data")
}