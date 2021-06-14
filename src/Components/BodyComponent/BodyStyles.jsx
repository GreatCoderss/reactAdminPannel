import { makeStyles } from "@material-ui/core";
import { colors } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  pageLabel: {
    color: colors.baselight,
    marginBottom: theme.spacing(1),
    textTransform: "uppercase",
  },
  pageHeader: {
    color: colors.baseDark,
    marginBottom: theme.spacing(2),
    textTransform: "capitalize",
  },

  // dashboard
  cardLabel: {
    color: colors.baselight,
    margin: theme.spacing(2, 0),
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      margin: theme.spacing(1, 0),
    },
  },
  cardHeader: {
    color: colors.baseDark,
    margin: theme.spacing(2, 0),
    textTransform: "capitalize",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      margin: theme.spacing(1, 0),
    },
  },

  displayCard: {
    position: "relative",
    padding: "0px !important",
  },
  displayCardGraph: {
    width: "100%",
    height: "150px",
  },
  cardDataContent: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "transparent",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
  },
}));
