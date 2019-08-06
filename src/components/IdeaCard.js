import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  card: {
    marginBottom: "20px"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

export const IdeaCard = ({ data: { name, description, link = "" } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {link !== "" ? (
        <a
          className={classes.link}
          rel="noopener noreferrer"
          target="_blank"
          href={link}
        >
          <CardHeader
            action={
              <IconButton aria-label="Leave site to explore project">
                <ExitToAppIcon />
              </IconButton>
            }
            title={name}
            subheader={description}
          />
        </a>
      ) : (
        <CardHeader title={name} subheader={description} />
      )}
    </Card>
  );
};
