# Reel Time

**Every film has its place in time.**

<table>
  <tr>
    <td align="center">
      <img src="assets/screenshots/reeltime-image2.png" width="400" alt="Reel Time franchise comparison">
    </td>
    <td align="center">
      <img src="assets/screenshots/reeltime-image1.png" width="400" alt="Reel Time crossover films">
    </td>
  </tr>
</table>

Reel Time is a web application for comparing movie franchises on a shared chronological release timeline. Select two franchises to see how their release histories line up, including crossover films that belong to both.

Built with JavaScript, Go, and PostgreSQL.

## Motivation

My girlfriend and I were watching through the entire Halloween movie franchise this year, and once finished we moved on to going through the Friday the 13th films.  
We kept wondering how each franchise's releases stacked up against each other, but looking up individual movies was awkward and tedious.

That is what inspired Reel Time, an app that visually compares the release chronology for two movie franchises on a shared timeline.

The project also gave me an opportunity to put my growing interest in Go into practice. I wanted to build something with Go beyond command-line applications, 
so I used it to develop a backend that serves both the frontend and the API endpoints responsible for retrieving movie and franchise data from a PostgreSQL database. 
This gave me hands-on experience bringing together a database, a REST API, and a browser-based frontend into one application.

## Quick Start

### Prerequisites

- [Go](https://go.dev/dl/) — use the version specified in `server/go.mod`
- [PostgreSQL](https://www.postgresql.org/download/)
- [Python 3](https://www.python.org/downloads/) — needed to regenerate seed data

### 1. Clone the repository

```bash
git clone https://github.com/tmcausla/reel-time.git
cd reel-time
```

### 2. Create and populate the database

Make sure PostgreSQL is running and accessible. The repository includes SQL files to create the database tables and populate them with movie data.

Run these commands from the project root:

```bash
createdb reel_time
psql -d reel_time -f db/schema.sql
psql -d reel_time -f db/seed.sql
```

**Note:** The seed script truncates the existing movie and franchise records before inserting the project's development dataset. Do not run it against a database containing data you want to preserve.

### 3. Configure the database connection

Create a `.env` file in the `server/` directory:

```env
DATABASE_URL=postgres://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/reel_time?sslmode=disable
```

Replace the username and password with your local PostgreSQL credentials. Keep this file private; do not commit database credentials.
The Go server automatically loads this file when started from the server/ directory.

### 4. Start the application

From the repository root, run:

```bash
cd server
go run .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

The Go server serves the frontend and provides the API endpoints used to retrieve franchise and movie data.

## Usage

1. Open Reel Time in your browser.
2. Select two movie franchises from the dropdown menus.
3. Explore their movies on the shared release timeline.
4. Compare release dates and see crossover films associated with both franchises.

### Database Design

Reel Time uses a relational PostgreSQL database with a many-to-many relationship between movies and franchises. This allows a movie to belong to multiple franchises, supporting crossover films without duplicating movie records.

A junction table (`movie_franchises`) connects the `movies` and `franchises` tables.

### API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/franchises` | Returns the available franchises. |
| `GET` | `/api/movies?franchises=Alien` | Returns movies associated with the selected franchise. |
| `GET` | `/api/movies?franchises=Alien&franchises=Predator` | Returns movies associated with either selected franchise, including crossover films. |

The movies endpoint requires at least one `franchises` query parameter. Multiple selections can be supplied by repeating the parameter.

## Contributing

Contributions and suggestions are welcome. To contribute:

1. Fork the repository and create a branch for your changes.
2. Make your changes and test them locally.
3. Submit a pull request describing what you changed and why.

### Adding or Updating Movies

The movie dataset is maintained in `movieDb.js`. When adding or updating entries:

- Follow the existing object structure and date format.
- Represent franchise membership as an array, even when a movie belongs to only one franchise.
- Include every applicable franchise for crossover films.
- Avoid duplicate entries for the same movie and release date.

After updating the dataset, regenerate the SQL seed file from the repository root:

```bash
python scripts/generate_seed.py
```

This updates `db/seed.sql`. Include the regenerated seed file in your changes so the database can be recreated with the updated dataset.

### Code Contributions

Keep the frontend, API handlers, and database queries organized according to the existing project structure. When changing the database schema or API response format, update the relevant queries and frontend code as needed.

Please include a clear description of any new functionality or behavior changes in your pull request.
