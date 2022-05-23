import type { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Link, TextField, Button, Input } from "@mui/material";
import { Theme } from "@mui/system";
import Image from "next/image";
// import Link from "next/link";
import RandomImg from "../assets/images/randomIMG.jpeg";
import { useState } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    // root: {
    //     "& label": {
    //         width: "100%",
    //         // textAlign: "center",
    //         // height: 30,
    //         transformOrigin: "center",
    //         "&.Mui-focused": {
    //             transformOrigin: "center",
    //         },
    //     },
    // },
    "& .MuiInputBase-input": {
        backgroundColor: "#fff",
    },
    mainWrapper: {
        margin: "0 15%",
    },
    projectContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    projetName: {
        textTransform: "uppercase",
    },
    formContainer: {
        display: "flex",
        width: "100%",
        marginTop: theme.spacing(2),

        // height: 50,
    },
    emailInput: {
        width: 450,
        // height: 40,
        // textAlign: "center",
    },
    subBtn: {
        marginLeft: 20,
        borderRadius: 25,
        height: 42,
        // color: "#fff",
        backgroundColor: "yellow",
        textTransform: "capitalize",
        padding: "10px 30px",
        borderColor: "orange",
    },
}));

const projetsInfo = [
    {
        name: "gamedev.js",
        img: RandomImg,
        href: "http://wp.pl",
    },
    {
        name: "enclave games",
        img: RandomImg,
        href: "http://wp.pl",
    },
    {
        name: "js13kgames",
        img: RandomImg,
        href: "http://wp.pl",
    },
];

// random images - "https://picsum.photos/600/300"

const Home: NextPage = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const sentEmail = () => {
        console.log(email);
        setEmail("");
    };

    return (
        <>
            <Head>
                <title>GamedevJS - Weekly</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid container style={{ margin: "30px 0" }} rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography variant={"h5"} textAlign={"center"}>
                        {"Our other projects"}
                    </Typography>
                </Grid>
                <Grid container item className={classes.mainWrapper} justifyContent="space-between">
                    {projetsInfo.map(({ name, href, img }) => (
                        <Grid item xs={3} className={classes.projectContainer} key={name}>
                            <Link href={href}>
                                <Image src={img} alt={name} />
                            </Link>
                            <Typography variant={"subtitle2"} className={classes.projetName}>
                                {name}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={"center"}
                style={{ backgroundColor: "lightblue", padding: "30px 0 70px 0" }}>
                <Grid item xs={12}>
                    <Typography variant={"h5"} textAlign={"center"}>
                        {"Join our newsletter!"}
                    </Typography>
                </Grid>
                <Grid container item className={classes.formContainer} spacing={2} justifyContent={"center"}>
                    <TextField
                        // InputProps={{ classes: { root: classes.emailInput } }}
                        // fullWidth
                        className={classes.emailInput}
                        variant="outlined"
                        label={"email address"}
                        onChange={handleEmail}
                        size={"small"}
                        sx={{
                            input: {
                                backgroundColor: "#fff",
                                borderRadius: 1,
                                border: "1px solid #000",
                                // color: "#fff",
                            },
                        }}
                    />
                    <Button className={classes.subBtn} onClick={sentEmail} variant="outlined">
                        {"Subscribe"}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
