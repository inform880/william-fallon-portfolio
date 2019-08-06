import React from "react";
import Typography from "@material-ui/core/Typography";

export const Home = () => {
  return (
    <>
      <Typography gutterBottom variant="h1">
        Meet William Fallon, a full stack developer.
      </Typography>
      <Typography gutterBottom variant="h3">
        I have experience in startups, corporate, and freelance work. You can
        reach me on{" "}
        <a
          href="https://www.linkedin.com/in/william-f-7411a2124/"
          style={{ color: "lightblue" }}
        >
          LinkedIn
        </a>
        , or{" "}
        <a
          style={{ color: "lightblue" }}
          href="mailto:william.fallon.98@gmail.com"
        >
          send me an email.
        </a>
      </Typography>
      <Typography gutterBottom variant="h3">
        Simplicity is key to creating great code, and great code creates a great
        product.
      </Typography>
      <Typography>
        Some of my top skills include:
        <li>React JS</li>
        <li>React Native</li>
        <li>Node</li>
        <li>Git</li>
        <li>Ember JS</li>
        <li>SQL queries and design</li>
        <li>Java</li>
        <li>Python</li>
        <li>Agile environments</li>I have experience with these in a
        non-professional capacity:
        <li>C/C++</li>
        <li>Unity 3D engine</li>
        <li>Labview</li>
      </Typography>
    </>
  );
};
