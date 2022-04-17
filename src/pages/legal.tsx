import type { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        color: "#0f0",
        letterSpacing: theme.spacing(1),
    },
}));

const Home: NextPage = () => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>GamedevJS - Weekly - Legal</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Typography className={classes.title} variant={"h1"}>
                legal
            </Typography>
        </>
    );
};

export default Home;
