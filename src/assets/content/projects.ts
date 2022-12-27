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

export class Project {
  constructor(
    private title: string,
    private imageLinks: string[],
    private links: ProjectLink[],
    private description: string,
    private tags: string[]
  ) {}

  getImageLinkLength(): number {
    return this.imageLinks.length;
  }
}

// Featured Projects

import dexGraphHome from "@/assets/img/portfolio/dexgraph/home.jpg";
import dexGraphMangaList from "@/assets/img/portfolio/dexgraph/mangalist.jpg";
import dexGraphStats from "@/assets/img/portfolio/dexgraph/stats.jpg";
import dexGraphStaff from "@/assets/img/portfolio/dexgraph/staff.jpg";

const dexGraph = new Project(
  "DexGraph",
  [dexGraphHome, dexGraphMangaList, dexGraphStats, dexGraphStaff],
  [
    new GithubLink("https://github.com/jh8oh/dexgraph"),
    new ExternalLink("https://dexgraph.netlify.app/"),
  ],
  "A web app that charts your MangaDex follows. View a breakdown of your library, including your most-read genres, themes, and authors. Uses the <a href='https://api.mangadex.org/docs.html'>MangaDex API v5</a>",
  ["Vue", "VueX", "Chart.js", "Netlify"]
);

import steamRecLogin from "@/assets/img/portfolio/steamrec/login.jpg";
import steamRecRate from "@/assets/img/portfolio/steamrec/rate.jpg";
import steamRecSettings from "@/assets/img/portfolio/steamrec/settings.jpg";
import steamRecRecommend from "@/assets/img/portfolio/steamrec/recommend.jpg";

const steamRec = new Project(
  "SteamRec",
  [steamRecLogin, steamRecRate, steamRecSettings, steamRecRecommend],
  [
    new GithubLink("https://github.com/jh8oh/steamrec"),
    new ExternalLink("https://dog-sundress.cyclic.app/"),
  ],
  "A web app that recommends Steam apps based on your rating for the apps in your library. Uses the <a href='https://steamapi.xpaw.me/'>Steam API</a> and <a href='https://www.mongodb.com/basics/search-index'>MongoDB's search index</a> to find similar games.",
  ["Node.js", "Express", "express-session.js", "passport.js", "MongoDB", "Vue"]
);

export const featuredProjects = [dexGraph, steamRec];

// Archived Projects

const oneStoryADay = new Project(
  "One Story a Day",
  [],
  [],
  "Android app that replicates <a href='https://www.onestoryaday.ca/'><em>One Story a Day</em></a>, a children's book site. Communicates with the website's REST API to track user progress and contains an embedded reader.",
  ["Android", "OAuth", "WordPress API"]
);

const weekPlanner = new Project(
  "Week Planner",
  [],
  [new GithubLink("https://github.com/jh8oh/week-planner")],
  "A small planner that keeps track of tasks on a weekly basis. Built in order to get myself familiar with the more complicated Android dependencies.",
  ["Android", "Room", "Dagger2", "Data Binding"]
);

const yearFacts = new Project(
  "Year Facts",
  [],
  [new GithubLink("https://github.com/jh8oh/year-facts")],
  "Calls the <a href='http://numbersapi.com/#random/year'>Numbers API</a> to grab interesting facts about years. Built in order to get more familiar with calling APIs from Android.",
  ["Android", "Retrofit", "Koin", "View Binding"]
);

const personalWebsiteV1 = new Project(
  "Personal Website",
  [],
  [new GithubLink("https://github.com/jh8oh/jh8oh.github.io")],
  "First version of my personal website to advertise myself and to learn web development.",
  ["Vue", "Vue Router", "TypeScript", "SCSS"]
);

const cppChess = new Project(
  "C++ Chess",
  [],
  [new GithubLink("https://github.com/jh8oh/cpp-chess")],
  "Uni project for CS246 to create chess in C++. Implements the latest Chess moves such as <a href='https://i.redd.it/s4iusw5wlvh71.jpg'>En-croissant</a>",
  ["C++", "Linux Terminal"]
);

const colorPicker = new Project(
  "Colour Picker",
  [],
  [new GithubLink("https://github.com/jh8oh/colorpicker")],
  "A colour picker module for Android. Was hosted on Bintray until its deprecration.",
  ["Android", "Bintray"]
);

export const archivedProjects = [
  oneStoryADay,
  weekPlanner,
  yearFacts,
  personalWebsiteV1,
  cppChess,
  colorPicker,
];
