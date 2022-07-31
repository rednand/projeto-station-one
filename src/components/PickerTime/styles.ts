import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  textlabel: {
    fontWeight: "lighter",
    color: " rgb(155, 155, 155)",
    textAlign: "left",
  },
  boxstep: {
    position: "relative",
    zIndex: -1,
    backgroundColor: "rgb(245, 245, 245)",
  },
  arrowbackicon: {
    margin: "20px 10px 0",
    color: "#ffffff",
  },
  textfield: {
    padding: "8px",
  },
  divbutton: {
    marginTop: "15rem",
  },
}));
