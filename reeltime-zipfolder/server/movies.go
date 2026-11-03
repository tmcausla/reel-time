package main
import (
	"log"
	"net/http"
	"encoding/json"
	"database/sql"
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

	movies, err := fetchMovies(db, selectedFranchises)
	if err != nil {
		log.Printf("failed to fetch movie data: %v", err)
		http.Error(w, "Failed to fetch movies", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(movies); err != nil {
		log.Printf("failed to encode movies: %v", err)
		return
	}

	log.Println("successfully fetched movie data")
}