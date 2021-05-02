import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  safe: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#00cc66",
  },
  risk: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#ffff00",
  },
  danger: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#ff5050",
  },
}));
