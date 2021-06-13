import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  //common
  navImg: {
    width: "35px",
    height: "auto",
    borderRadius: "50%",
  },

  //header
  wrapper: {
    width: "100%",
    height: "calc(100vh - 70px)",
    background: "#efefef",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    boxSizing: "border-box",
  },
  logo: {
    lineHeight: "47px",
    color: "inherit",
  },

  // navbar styles

  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  brandBox: {
    display: "flex",
    flexFlow: "row wrap",
  },

  iconsBox: {},

  dropdownlist: {
    maxWidth: "250px",
  },
}));
