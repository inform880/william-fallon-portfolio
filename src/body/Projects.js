import React from "react";

import Typography from "@material-ui/core/Typography";

const projects = [
  {
    name: "Cat Pictures",
    description:
      "This is a React Native app that grabs a random picture from a list of top cat related subreddits from Reddit.com, and displays it. Tapping it will display a new one.",
    link: "https://github.com/inform880/Cat-Pictures"
  },
  {
    name: "Lists with Pics",
    description:
      "This is a React Native app that allows you to make lists, and attach a picture. Currently on the play store.",
    link:
      "https://play.google.com/store/apps/details?id=com.williamfallon.listappwithimages",
    pictureLink:
      "https://lh3.googleusercontent.com/OKP-wnv8vcWtOcSOnlwVV_Uq8Vn2fy5tY5HVzDWNaKZO9HxxOFB7guGWt2WEty7RaR8=w720-h310-rw"
  },
  {
    name: "Weather App",
    description:
      "A simple, fully fledged weather app in React Native - please contact me for source and screenshots.",
    link: "",
    pictureLink: ""
  },
  {
    name: "ZSB",
    description:
      "A 2D zombie shooter done in C++ with SDL. Pretty much abandoned but might have a future someday.",
    link: "https://github.com/inform880/ZSB",
    pictureLink: ""
  }
];

export const Projects = () => {
  return <Typography>Projects</Typography>;
};
