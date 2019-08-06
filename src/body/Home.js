import React from "react";
import Typography from "@material-ui/core/Typography";

export const Home = () => {
  return (
    <>
      <Typography gutterBottom variant="h1">
        I'm William Fallon, a full stack developer.
      </Typography>
      <Typography gutterBottom variant="h3">
        I have experience in startup, corporate, and freelance work. You can
        reach me on{" "}
        <a
          href="https://www.linkedin.com/in/william-f-7411a2124/"
          target="_blank"
          rel="noopener noreferrer"
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
      <Typography gutterBottom>
        Some of my top skills include:
        <li>React JS (Web)</li>
        <li>React Native (Cross platform mobile)</li>
        <li>Node (Backend JavaScript)</li>
        <li>Git (Source control)</li>
        <li>Ember JS (Web)</li>
        <li>SQL queries and design (Backend retrieval)</li>
        <li>Java (General purpose)</li>
        <li>Python (General Purpose scripting)</li>
        <li>Agile environments</li>I have experience with these in a
        non-professional capacity:
        <li>C/C++ (General purpose)</li>
        <li>Unity 3D engine (Videogame engine)</li>
        <li>
          Labview (Scientific programming language, used on spacecraft and
          scientific settings
        </li>
      </Typography>
      <Typography>
        When I'm not hacking away at whatever project that's in progress at the
        time, I enjoy art, friends, and videogames with my partner Kyle. I have
        a passion for my pets, and I currently have Ryuu the cat and Floyd the
        ball python residing at home.
      </Typography>
    </>
  );
};
