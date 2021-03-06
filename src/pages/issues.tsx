import type { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { Theme } from "@mui/system";
import IssuesList from "../components/sections/issuesList";

const useStyles = makeStyles((theme: Theme) => ({
    mainWrapper: {
        margin: "0 15%",
        width: "auto",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "10vh",
            margin: "0 5%",
            // flexDirection: "column",
        },
    },
}));

const Issues: NextPage = () => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>GamedevJS - Weekly - Issues</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid container className={classes.mainWrapper}>
                <Grid item xs={12} display="flex" flexDirection="column">
                    <IssuesList />
                </Grid>
            </Grid>
        </>
    );
};

export default Issues;
