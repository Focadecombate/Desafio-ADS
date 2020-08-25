import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import { Menu, AccountBalance, MonetizationOn } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  text: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Simulação de Taxa", "Solicitar Emprestimo"].map((text, index) => (
          <Link
            to={text.length <= 17 ? "/" : "emprestimo"}
            className={classes.text}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <MonetizationOn /> : <AccountBalance />}
              </ListItemIcon>
              <ListItemText primary={text} color="textPrimary" />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        onClick={toggleDrawer(true)}
        aria-label="menu"
      >
        <Menu />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
