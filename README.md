# 🧭 CineCompass

CineCompass is a simple web application that enables users to search for movies and view basic details about them. Built with Next.js using the Pages Router, it leverages The Movie Database (TMDB) API to fetch movie data.

## ✨ Features

- **Movie Search**: Users can search for movies by title.
- **Movie Details**: Displays key information about each movie, including title, overview, release date, and genres.

## 🛠️Technologies Used

- **Next.js**: React framework for server-side rendering and routing.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TMDB API**: External API for fetching movie data.

## 💪 Getting Started

Follow these steps to set up and run CineCompass locally.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/cinecompass.git
   cd cinecompass
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install

   ```

3. **Obtain TMDB API Key:**

   - Sign up at [The Movie Database (TMDB)](https://www.themoviedb.org/)
     to get a free API key.

4. **Set Up Environment Variables:**

- Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```
- Add your TMDB API key to `.env.local`:

   ```bash
   NEXT_PUBLIC_API_KEY=your_tmdb_api_key
   ```

### Running the Application

1. **Start the Development Server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Start the Development Server:**
   - Open your browser and navigate to http://localhost:3000 to use CineCompass.

### 📩 Contact

For any questions or feedback, feel free to reach out:

- Email: shiela.mlepon@gmail.com
- GitHub: shielamae02
