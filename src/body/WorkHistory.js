import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import CodeIcon from "@material-ui/icons/Code";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Typography from "@material-ui/core/Typography";
import CloudIcon from "@material-ui/icons/Cloud";

export const WorkHistory = () => {
  return (
    <Timeline>
      <TimelineEvent
        title={<Typography>Python Classes</Typography>}
        subtitle={<Typography>2016 - 2017</Typography>}
        icon={<CodeIcon style={{ fontSize: 25 }} />}
        contentStyle={{ backgroundColor: "", boxShadow: null }}
        subtitleStyle={{ color: "white" }}
        bubbleStyle={{ backgroundColor: "#303030", borderColor: "#3f51b5" }}
      >
        <Typography>
          Taught Python to children ages 7 to 12 years old in a weekly setting,
          working under my own name
        </Typography>
      </TimelineEvent>
      <TimelineEvent
        title={
          <Typography>
            <a
              href="https://www.cumulus-erp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "lightblue"
              }}
            >
              Cumulus Consulting, LLC
            </a>
          </Typography>
        }
        subtitle={<Typography>2017 - 2019</Typography>}
        icon={<CloudIcon style={{ fontSize: 20 }} />}
        contentStyle={{ backgroundColor: "", boxShadow: null }}
        subtitleStyle={{ color: "white" }}
        bubbleStyle={{ backgroundColor: "#303030", borderColor: "#3f51b5" }}
      >
        <Typography>
          Worked at Cumulus Consulting, LLC among several teams as a full-time
          full stack developer
          <li>
            Used React Native to develop Android and iOS applications for shop
            floor level manufacturing processes
          </li>
          <li>
            Used Industrial Automation’s Ignition software to develop UI using
            Python and Java
          </li>
          <li>Developed integrations for CNC machines using Java</li>
          <li>
            Used React JS to develop web frontends for manufacturing related
            applications
          </li>
          <li>
            Used GraphQL, Node, and Postgres to develop a backend database API
          </li>
          <li>Wrote JS GraphQL tests using Jest and Apollo</li>
        </Typography>
      </TimelineEvent>
      <TimelineEvent
        title={
          <Typography>
            <a
              href="https://www.ally.com/auto/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "lightblue"
              }}
            >
              Ally Financial
            </a>
          </Typography>
        }
        subtitle={<Typography>2019 - present</Typography>}
        icon={<AccountBalanceIcon style={{ fontSize: 18 }} />}
        contentStyle={{ backgroundColor: "", boxShadow: null }}
        subtitleStyle={{ color: "white" }}
        bubbleStyle={{ backgroundColor: "#303030", borderColor: "#3f51b5" }}
      >
        <Typography>
          Worked as a frontend software developer III in an agile team (April
          2019 - current)
          <li>
            Used Ember JS, jQuery and developed front end applications and
            debugged defects in existing code
          </li>
          <li>
            Worked with offshore developers from India, who we often reviewed
            code for or had them review our code
          </li>
          <li>
            Solved logistical code challenges present in an old financial
            establishment with many people working across different projects and
            across the world
          </li>
          <li>Adopted and significantly improved old codebases </li>
        </Typography>
      </TimelineEvent>
    </Timeline>
  );
};
