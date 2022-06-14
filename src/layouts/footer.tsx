import type { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: 40,
        backgroundColor: "#252525",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            height: "20vh",
        },
    },
    footerItem: {
        display: "flex",
        justifyContent: "center",
        color: "#8c8c8c",
        "&:first-child": {
            [theme.breakpoints.down("sm")]: {
                alignItems: "flex-end",
                paddingBottom: 10,
            },
        },
    },
}));

const Footer: NextPage = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.wrapper}>
            <Grid
                item
                xs={6}
                className={classes.footerItem}
                // sx={{ alignItems: { xs: "flex-end" }, paddingBottom: { sm: 1 } }}
            >
                <Typography variant={"caption"}>contact@gamedevjsweekly.com</Typography>
            </Grid>
            <Grid item xs={6} className={classes.footerItem}>
                <Typography variant={"caption"}>Enclave Games &copy; 2014 - {new Date().getFullYear()}</Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
