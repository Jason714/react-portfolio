import Weather from "../images/weather-dashboard-screenshot.png";
import Diner from "../images/restaurant-finder-screenshot.png";
import Quiz from "../images/quiz-app-screenshot.png";
import Book from "../images/book-search.png";
import Workout from "../images/workout-dashboard.png";
import Note from "../images/note-taker.png";

let projectData = {
  project: [
    {
      name: "Weather DashBoard",
      github: "https://github.com/Jason714/Weather-Dashboard",
      deployed: "https://jason714.github.io/Weather-Dashboard/",
      description:
        "Search a city to get it's current weather and 5-day forecast.",
      image: Weather,
    },
    {
      name: "Workout Tracker",
      github: "https://github.com/Jason714/Workout-Tracker",
      deployed: "https://jasons-workout-tracker.herokuapp.com/",
      description:
        "Track your workout and view a graph of your progress after you complete the workout.",
      image: Workout,
    },
    {
      name: "The Fine Diner",
      github: "https://github.com/Jason714/Restaurant-Finder",
      deployed: "https://jason714.github.io/Restaurant-Finder/",
      description:
        "Find the highest rated restaraunts in any major metropolitan area near you.",
      image: Diner,
    },
    {
      name: "Game of Thrones Quiz",
      github: "https://github.com/Jason714/Quiz-App",
      deployed: "https://jason714.github.io/Quiz-App/",
      description: "Test your knowledge on the hit show Game of Thrones.",
      image: Quiz,
    },
    {
      name: "Note Taker",
      github: "https://github.com/Jason714/Note-Taker",
      deployed: "https://dry-island-98656.herokuapp.com/",
      description:
        "Save notes for yourself to reference at a later time. Such as class notes, a to-do list and appointment reminders.",
      image: Note,
    },
    {
      name: "Book Search",
      github: "https://github.com/Jason714/google-books-search",
      deployed: "https://google-my-books.herokuapp.com/",
      description:
        "Search and find the perfect book for you and save it to your favorites list for later reference.",
      image: Book,
    },
  ],
};

export default projectData;
