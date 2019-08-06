import React from "react";

import { IdeaCard } from "../components/IdeaCard";

const projects = [
  {
    name: "News Aggregator/Search Site Prototype",
    description:
      "This is a template news site congregrator that lets you search topics and view them by news source.",
    link: "https://codesandbox.io/s/xv2733wjqq"
  },
  {
    name: "Cool Clock",
    description: "A simple React clock with some built in options",
    link: "https://codesandbox.io/s/cool-clock-q0r0v"
  },
  {
    name: "Forgot Password flow",
    description: "A simple forgot password flow.",
    link: "https://codesandbox.io/s/forgot-password-flow-m06mn"
  }
];
export const CodeSnippets = () => (
  <>
    {projects.map(project => (
      <IdeaCard key={project.name} data={project} />
    ))}
  </>
);
