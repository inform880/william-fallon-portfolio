import React from "react";

import { IdeaCard } from "../components/IdeaCard";

const projects = [
  {
    name: "Cat Pictures",
    description:
      "This is a React Native app that grabs a random picture from a list of top cat related subreddits from Reddit.com, and displays it. Tapping it will display a new cat picture.",
    link: "https://github.com/inform880/Cat-Pictures"
  },
  {
    name: "Lists with Pics",
    description:
      "This is a React Native app that allows you to make lists, and attach a picture. Currently on the play store.",
    link:
      "https://play.google.com/store/apps/details?id=com.williamfallon.listappwithimages"
  },
  {
    name: "Weather App",
    description:
      "A simple, fully fledged weather app in React Native - please contact me for source and screenshots.",
    link: ""
  },
  {
    name: "ZSB",
    description:
      "A 2D zombie shooter done in C++ with SDL. Pretty much abandoned but might have a future someday.",
    link: "https://github.com/inform880/ZSB"
  },
  {
    name: "This Portfolio Site",
    description: "This website!",
    link: "https://github.com/inform880/william-fallon-portfolio/"
  }
];

export const Projects = () => (
  <>
    {projects.map(project => (
      <IdeaCard key={project.name} data={project} />
    ))}
  </>
);
