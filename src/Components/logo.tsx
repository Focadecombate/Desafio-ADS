import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { AddCircleOutlined, AllInboxRounded } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  Flex: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  Icon: {
    fontSize: "6em",
    alignItems: "center",
    display: "flex",
  },
}));

type Props = {
  texto: string;
};

export const Logo: React.FC<Props> = ({ texto }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Flex}>
        <div className={classes.Icon}>
          <AddCircleOutlined color="primary" fontSize="large" />
          <AllInboxRounded fontSize="inherit" color="secondary" />
        </div>
        <div style={{ maxWidth: "10em" }}>
          <Typography variant="h6" color="primary">
            {texto}
          </Typography>
        </div>
      </div>
    </>
  );
};
