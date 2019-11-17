import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
// import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  channelsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "300px",
    padding: "20px"
  },
  chatBox: {
    width: "85%"
  },
  chatButton: {
    width: "15%"
  },
  chip: {
    margin: "4px"
  }
}));

const Dashboard = () => {
  const [textValue, setTextValue] = useState('')
//   console.log('textValue: ',textValue)

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
        <div className={classes.chatWindow}>
            {
                [{from: "ehalsmer", message: "Hello!"}, {from: "lonavarro", message: "hey, what's up?"}].map((chat, i) =>
                    <div className={classes.flex} key={i}>
                        <Chip size="small" label={chat.from} className={classes.chip}/>
                        <Typography variant='p'>{chat.message}</Typography>
                    </div>)
            }
        </div>
      </div>
      <div className={classes.flex}>
      <TextField
        // variant="outlined" 
        margin="normal" 
        label="Type message here"
        className={classes.chatBox}
        value={textValue}
        onChange={e => setTextValue(e.target.value)}
        />
      <Button variant="contained" color="primary" className={classes.button}>
        Send
      </Button>
      </div>
    </Paper>
  );
};

export default Dashboard;
