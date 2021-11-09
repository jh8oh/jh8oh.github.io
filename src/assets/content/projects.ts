import githubDark from "@/assets/ico/project-links/github-dark.svg";
import githubPrimary from "@/assets/ico/project-links/github-primary.svg";
import externalDark from "@/assets/ico/project-links/external-dark.svg";
import externalPrimary from "@/assets/ico/project-links/external-primary.svg";

abstract class ProjectLink {
  constructor(private to: string, private unhoveredIcon: string, private hoveredIcon: string) {}
}

class GithubLink extends ProjectLink {
  constructor(to: string) {
    super(to, githubDark, githubPrimary);
  }
}

class ExternalLink extends ProjectLink {
  constructor(to: string) {
    super(to, externalDark, externalPrimary);
  }
}

class Project {
  constructor(
    private title: string,
    private imageLinks: string[],
    private links: ProjectLink[],
    private description: string,
    private tags: string[]
  ) {}
}

export const oneStoryADay = new Project(
  "One Story a Day",
  [],
  [],
  "Android app that replicates <a href='https://www.onestoryaday.ca/'><em>One Story a Day</em></a>, a children's book site. Communicates with the website's REST API to track user progress and contains an embedded reader.",
  ["Android", "OAuth", "WordPress API"]
);

export const weekPlanner = new Project(
  "Week Planner",
  [],
  [new GithubLink("https://github.com/jh8oh/week-planner")],
  "A small planner that keeps track of tasks on a weekly basis. Built in order to get myself familiar with the more complicated Android dependencies.",
  ["Android", "Room", "Dagger2", "Data Binding"]
);

export const yearFacts = new Project(
  "Year Facts",
  [],
  [new GithubLink("https://github.com/jh8oh/year-facts")],
  "Calls the <a href='http://numbersapi.com/#random/year'>Numbers API</a> to grab interesting facts about years. Built in order to get more familiar with calling APIs from Android.",
  ["Android", "Retrofit", "Koin", "View Binding"]
);

export const personalWebsiteV1 = new Project(
  "Personal Website",
  [],
  [new GithubLink("https://github.com/jh8oh/jh8oh.github.io")],
  "First version of my personal website to advertise myself and to learn web development.",
  ["Vue", "Vue Router", "TypeScript", "SCSS"]
);

export const cppChess = new Project(
  "C++ Chess",
  [],
  [new GithubLink("https://github.com/jh8oh/cpp-chess")],
  "Uni project for CS246 to create chess in C++. Implements the latest Chess moves such as <a href='https://i.redd.it/s4iusw5wlvh71.jpg'>En-croissant</a>",
  ["C++", "Linux Terminal"]
);

export const colorPicker = new Project(
  "Colour Picker",
  [],
  [new GithubLink("https://github.com/jh8oh/colorpicker")],
  "A colour picker module for Android. Was hosted on Bintray until its deprecration.",
  ["Android", "Bintray"]
);

export const dexGraph = new Project(
  "DexGraph",
  [
    "@/assets/img/portfolio/dexgraph/home.png",
    "@/assets/img/portfolio/dexgraph/mangalist.png",
    "@/assets/img/portfolio/dexgraph/stats.png",
    "@/assets/img/portfolio/dexgraph/staff.png",
  ],
  [
    new GithubLink("https://github.com/jh8oh/dexgraph"),
    new ExternalLink("https://dexgraph.netlify.app/"),
  ],
  "A web app that charts your MangaDex follows. View a breakdown of your library, including your most-read genres, themes, and authors. Uses the <a href='https://api.mangadex.org/docs.html'>MangaDex API v5</a>",
  ["Vue", "VueX", "Chart.js", "Netlify"]
);
