import githubDark from "@/assets/ico/sidebar-links/github-dark.png";
import githubPrimary from "@/assets/ico/sidebar-links/github-primary.png";

class ProjectLink {
  constructor(private to: string, private unhoveredIcon: string, private hoveredIcon: string) {}
}

class ArchivedProject {
  constructor(
    private title: string,
    private links: ProjectLink[],
    private description: string,
    private tags: string[]
  ) {}
}

export const oneStoryADay = new ArchivedProject(
  "One Story a Day",
  [],
  "Android app that replicates <a href='https://www.onestoryaday.ca/'><em>One Story a Day</em></a>, a children's book site. Communicates with the website's REST API to track user progress and contains an embedded reader.",
  ["Android", "OAuth", "WordPress API"]
);

export const weekPlanner = new ArchivedProject(
  "Week Planner",
  [new ProjectLink("https://github.com/jh8oh/week-planner", githubDark, githubPrimary)],
  "A small planner that keeps track of tasks on a weekly basis. Built in order to get myself familiar with the more complicated Android dependencies.",
  ["Android", "Room", "Dagger2", "Data Binding"]
);

export const yearFacts = new ArchivedProject(
  "Year Facts",
  [new ProjectLink("https://github.com/jh8oh/year-facts", githubDark, githubPrimary)],
  "Calls the <a href='http://numbersapi.com/#random/year'>Numbers API</a> to grab interesting facts about years. Built in order to get more familiar with calling APIs from Android.",
  ["Android", "Retrofit", "Koin", "View Binding"]
);

export const personalWebsiteV1 = new ArchivedProject(
  "Personal Website",
  [new ProjectLink("https://github.com/jh8oh/jh8oh.github.io", githubDark, githubPrimary)],
  "First version of my personal website to advertise myself and to learn web development.",
  ["Vue", "Vue Router", "TypeScript", "SCSS"]
);

export const cppChess = new ArchivedProject(
  "C++ Chess",
  [new ProjectLink("https://github.com/jh8oh/cpp-chess", githubDark, githubPrimary)],
  "Uni project for CS246 to create chess in C++. Implements the latest Chess moves such as <a href='https://i.redd.it/s4iusw5wlvh71.jpg'>En-croissant</a>",
  ["C++", "Linux Terminal"]
);

export const colorPicker = new ArchivedProject(
  "Colour Picker",
  [new ProjectLink("https://github.com/jh8oh/colorpicker", githubDark, githubPrimary)],
  "A colour picker module for Android. Was hosted on Bintray until its deprecration.",
  ["Android", "Bintray"]
);
