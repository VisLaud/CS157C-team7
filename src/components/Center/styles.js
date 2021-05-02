import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  safe: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#4CAF50",
  },
  risk: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#FF9800",
  },
  danger: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#F44336",
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
