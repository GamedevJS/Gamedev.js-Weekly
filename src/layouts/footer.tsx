import type { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: 40,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
    },
    footerItem: {
        display: "flex",
        justifyContent: "center",
        color: "#666",
    },
}));

const Footer: NextPage = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.wrapper}>
            <Grid item xs={6} className={classes.footerItem}>
                <Typography variant={"caption"}>contact@gamedevjsweekly.com</Typography>
            </Grid>
            <Grid item xs={6} className={classes.footerItem}>
                <Typography variant={"caption"}>Enclave Games &copy; 2014 - {new Date().getFullYear()}</Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
