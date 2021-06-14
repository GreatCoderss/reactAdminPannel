import { makeStyles } from "@material-ui/core";
import { blue, blueGrey, red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "inherit",
      backgroundColor: red[500],
    },

    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "#efefef",
      padding: "70px 24px 24px 270px",
      boxSizing: "border-box",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
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
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      marginTop: "64px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },

    navlink: {
      color: blueGrey[700],
      fontWeight: "bold",
      transition: "0.8s",
      "& span": {
        TextDecoder: "none",
        color: blue["A400"],
      },
      "&:hover div": {
        color: blue["A400"],
      },
    },
    selectedNav: {
      color: blue["A600"],
      fontWeight: " bolder",
    },
    // navlinkIcon: {
    //   color: blueGrey[700],
    //   fontWeight: "bold",
    //   transition: "0.8s",
    //   "&:hover": {
    //     color: blue["A400"],
    //   },
    //   "&:active": {
    //     color: blue["A800"],
    //   },
    // },
  };
});
