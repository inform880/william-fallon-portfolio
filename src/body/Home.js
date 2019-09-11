import React from "react";
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";
import DetroitSkyline from "../images/DetroitSkyline.jpg";
import { makeStyles } from "@material-ui/core/styles";
import "react-typist/dist/Typist.css";

const useStyles = makeStyles(theme => ({
  link: { color: "lightblue" },
  image: {
    minWidth: "600px",
    overflow: "hidden",
    width: "100%",
    zIndex: -1,
    height: "100vh"
  },
  headerText: {
    position: "absolute",
    top: "100px",
    left: "50px"
  },
  middleText: {
    position: "absolute",
    top: "400px",
    left: "50px"
  },
  infoText: {
    margin: "50px"
  }
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <img
          className={classes.image}
          src={DetroitSkyline}
          alt="Detroit Skyline"
        />
        <Typist cursor={{ show: false }} avgTypingDelay={40}>
          <Typography className={classes.headerText} variant="h1">
            I'm William Fallon, a full stack developer.
          </Typography>
          <Typography className={classes.middleText} gutterBottom variant="h3">
            I have experience in startup, corporate, and freelance work. You can
            reach me on{" "}
            <a
              href="https://www.linkedin.com/in/william-f-7411a2124/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              LinkedIn
            </a>
            , or{" "}
            <a
              className={classes.link}
              href="mailto:william.fallon.98@gmail.com"
            >
              send me an email.
            </a>
          </Typography>
        </Typist>
      </div>
      <div className={classes.infoText}>
        <Typography gutterBottom variant="h3">
          Simplicity is key to creating great code, and great code creates a
          great product.
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
          When I'm not hacking away at whatever project that's in progress at
          the time, I enjoy art, friends, and videogames with my partner Kyle. I
          have a passion for my pets, and I currently have Ryuu the cat and
          Floyd the ball python residing at home.
        </Typography>
      </div>
    </>
  );
};
