import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons/";

import Drawer from "./drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "2vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    justifyContent: "flex-start",
  },
}));

export const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <div className={classes.menuButton}>
              <Drawer />
            </div>
            <Typography variant="body1" color="inherit">
              Master
            </Typography>

            <IconButton edge="end" color="inherit" aria-label="menu">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
