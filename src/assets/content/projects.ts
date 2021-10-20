import githubDark from "@/assets/ico/sidebar-links/github-dark.png";
import githubPrimary from "@/assets/ico/sidebar-links/github-primary.png";

class ArchivedProject {
  title: string;
  links:
    | [
        {
          to: string;
          unhoveredIcon: string;
          hoveredIcon: string;
        }
      ]
    | null;
  description: string;
  tags: string[];

  constructor(
    title: string,
    links:
      | [
          {
            to: string;
            unhoveredIcon: string;
            hoveredIcon: string;
          }
        ]
      | null,
    description: string,
    tags: string[]
  ) {
    this.title = title;
    this.links = links;
    this.description = description;
    this.tags = tags;
  }
}

export const oneStoryADay = new ArchivedProject(
  "One Story a Day",
  null,
  'Android app that replicates <a href="https://www.onestoryaday.ca/"><em>One Story a Day</em></a>',
  ["Android", "JWT authentication", "WordPress API"]
);

export const weekPlanner = new ArchivedProject(
  "Week Planner",
  [
    {
      to: "https://github.com/jh8oh/week-planner",
      unhoveredIcon: githubDark,
      hoveredIcon: githubPrimary,
    },
  ],
  "A small planner that keeps track of tasks on a weekly basis",
  ["Android", "Room", "Dagger2", "Data Binding"]
);

export const yearFacts = new ArchivedProject(
  "Year Facts",
  [
    {
      to: "https://github.com/jh8oh/year-facts",
      unhoveredIcon: githubDark,
      hoveredIcon: githubPrimary,
    },
  ],
  'Uses the <a href="http://numbersapi.com/#random/year">Numbers API</a> to grab interesting facts about years',
  ["Android", "Retrofit", "Koin", "View Binding"]
);

export const personalWebsiteV1 = new ArchivedProject(
  "Personal Website V1",
  [
    {
      to: "https://github.com/jh8oh/jh8oh.github.io",
      unhoveredIcon: githubDark,
      hoveredIcon: githubPrimary,
    },
  ],
  "First version of my personal website",
  ["Vue", "Vue Router", "TypeScript", "SCSS"]
);

export const cppChess = new ArchivedProject(
  "C++ Chess",
  [
    {
      to: "https://github.com/jh8oh/cpp-chess",
      unhoveredIcon: githubDark,
      hoveredIcon: githubPrimary,
    },
  ],
  "University final project for CS246 to create a working chess game in C++",
  ["C++", "Linux Terminal"]
);
