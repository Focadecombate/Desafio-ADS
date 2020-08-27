import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      padding: 16,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    Option: {
      color: theme.palette.secondary.main,
      "&:after": {
        color: theme.palette.secondary.main,
      },
    },
  })
);

interface Props {
  options: string[];
}

const SimpleSelect: React.FC<Props> = ({ options }) => {
  const ReduxValor = useSelector(
    (state: RootState) => state.user.valores.parcela
  );
  const classes = useStyles();
  const [selected, setselected] = React.useState("");
  const [ok, setOk] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setselected(event.target.value as string);
  };

  useEffect(() => {
    if (options.length > 1) {
      const element = document.getElementById(selected);
      if (element) {
        return element.click();
      }
    }
    if (options.length === 1) {
      setselected("Padrão");
    }
  }, [options, selected]);

  useEffect(() => {
    if (options.length > 1 && !ok) {
      setselected(`${ReduxValor}`);
      setOk(true);
    }
  }, [options.length, ReduxValor, ok]);

  return (
    <div className={classes.Option}>
      <FormControl
        color="secondary"
        variant="outlined"
        className={classes.formControl}
        size="small"
      >
        <Select
          labelId="Tabelas"
          id="Tabelas"
          defaultValue={ReduxValor.toString()}
          value={selected}
          onChange={handleChange}
        >
          {options.map((item) => (
            <MenuItem className={classes.Option} key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SimpleSelect;
