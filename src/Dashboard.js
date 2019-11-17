import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex"
  },
  channelsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "300px"
  },
  chatBox: {
    width: "85%"
  },
  chatButton: {
    width: "15%"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h4">
        Blockchat
      </Typography>
      <Typography variant="h5" component="h5">
        Topic/Channel
      </Typography>
      <div className={classes.flex}>
        <div className={classes.channelsWindow}>
          <List>
            {["channel1", "channel2", "channel3"].map(channel => 
                <ListItem key={channel} button>
                    <ListItemText primary={channel} />
                </ListItem>
            )}
          </List>
        </div>
        <div className={classes.chatWindow}></div>
      </div>
      <div className={classes.flex}></div>
    </Paper>
  );
};

export default Dashboard;
