import { pink } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    marginTop: "75px",
    margin: "50px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  link: {
    position: "absolute",
    margin: "30px 30px",
    top: "0",
    right: "0",
  },
  pepe: {
    width: "50px",
    height: "auto",
    marginLeft: "5px",
  },
  covid: {
    width: "50px",
    height: "auto",
  },
  login: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "400px",
    height: "400px",
    backgroundColor: "#e3fbf7",
  },
}));
