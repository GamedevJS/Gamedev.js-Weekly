import type { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        height: "35vh",
        backgroundImage: `url("/patterns/pattern.png")`,
        paddingLeft: theme.spacing(30),
        textTransform: "uppercase",

        [theme.breakpoints.down("sm")]: {
            height: "35vh",
            padding: "10vh 50px 0 50px",
            alignItems: "center",
        },
    },
    primatyText: {
        color: "#fff",
        marginBottom: theme.spacing(1),
    },
    secondaryText: {
        marginTop: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
    mainWrapper: {
        margin: "10px 15%",
        width: "auto",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "10vh",
        },
    },
    linkItem: {
        cursor: "pointer",
        color: theme.palette.secondary.light,
    },
    description: {
        margin: "25px 0 ",
        paddingLeft: 25,
        borderLeft: `2px solid ${theme.palette.secondary.main}`,
    },
    smallWrapper: {
        margin: "15px 0",
    },
}));

const issue = [
    {
        title: "#420",
        date: "January 21st 2021",
        articles: [
            {
                title: "Rockstar GTA",
                href: "/gta",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
                author: "Zack Zwiezen at Kotaku",
            },
            {
                title: "Rockstar GTA",
                href: "/gta",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
                author: "Zack Zwiezen at Kotaku",
            },
            {
                title: "Rockstar GTA",
                href: "/gta",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
                author: "Zack Zwiezen at Kotaku",
            },
        ],
        jobs: [
            {
                title: "JavaScript Developer",
                href: "/job",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
                author: "google",
            },
        ],
        tutorials: [
            {
                title: "Rockstar GTA",
                href: "/gta",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
                author: "Zack Zwiezen at Kotaku",
            },
        ],
        competitions: [
            {
                title: "js13kgames",
                href: "/competition",
            },
        ],
        demos: [
            {
                title: "Erosion",
                href: "/erosion",
            },
            {
                title: "Erosion",
                href: "/erosion",
            },
        ],
        videos: [
            {
                title: "video",
                href: "/video",
            },
            {
                title: "video",
                href: "/video",
            },
            {
                title: "video",
                href: "/video",
            },
        ],
        games: [
            {
                title: "games",
                href: "/games",
            },
            {
                title: "games",
                href: "/games",
            },
        ],
    },
];

const Issue: NextPage = () => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>GamedevJS - Weekly - Issue</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box className={classes.header} display="flex" flexDirection="column" justifyContent="center">
                <Typography variant={"h5"} className={classes.primatyText}>
                    {"Gamedev.js weekly"}
                </Typography>
                <Typography variant={"body1"} className={classes.secondaryText}>
                    {"Weekly newsletter about html5 game development"}
                </Typography>
            </Box>
            <Grid container className={classes.mainWrapper}>
                {issue.map(({ title, date, articles, jobs, tutorials, competitions, demos, videos, games }, id) => (
                    <Fragment key={id}>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                <Link href={"/"} passHref>
                                    <span className={classes.linkItem}>{"Home"}</span>
                                </Link>{" "}
                                {" > "}{" "}
                                <Link href={"/issues"} passHref>
                                    <span className={classes.linkItem}>{"Newsletter Archive"}</span>
                                </Link>{" "}
                                {" > "} {"Issue "} {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                {"Issue "} {title}
                            </Typography>
                            <Typography variant="h5">{date}</Typography>
                            <Typography variant="subtitle1" className={classes.description}>
                                {
                                    "If you have anything you want to share with the HTML5 game development community please let me know by sending an email to andrzej.mazur@end3r.com. I'm also open for related sponsorship opportunities and job listings."
                                }
                            </Typography>
                        </Grid>
                        {!!articles && (
                            <Typography variant="h5" sx={{ marginTop: 5 }}>
                                {"Articles:"}
                            </Typography>
                        )}
                        {!!articles &&
                            articles.map(({ title, href, desc, author }, id) => (
                                <Grid item xs={12} key={id} className={classes.smallWrapper}>
                                    <Typography variant="subtitle1">
                                        <Link href={href} passHref>
                                            <span className={classes.linkItem}>{title}</span>
                                        </Link>
                                    </Typography>
                                    <Typography variant="subtitle1">{desc}</Typography>
                                    <Typography variant="subtitle2">{author}</Typography>
                                </Grid>
                            ))}
                        {!!jobs && (
                            <Typography variant="h5" sx={{ marginTop: 5 }}>
                                {"Jobs:"}
                            </Typography>
                        )}
                        {!!jobs &&
                            jobs.map(({ title, href, desc, author }, id) => (
                                <Grid item xs={12} key={id} className={classes.smallWrapper}>
                                    <Typography variant="subtitle1">
                                        <Link href={href} passHref>
                                            <span className={classes.linkItem}>{title}</span>
                                        </Link>
                                    </Typography>
                                    <Typography variant="subtitle1">{desc}</Typography>
                                    <Typography variant="subtitle2">{author}</Typography>
                                </Grid>
                            ))}
                        {!!tutorials && (
                            <Typography variant="h5" sx={{ marginTop: 5 }}>
                                {"Tutorials:"}
                            </Typography>
                        )}
                        {!!tutorials &&
                            tutorials.map(({ title, href, desc, author }, id) => (
                                <Grid item xs={12} key={id} className={classes.smallWrapper}>
                                    <Typography variant="subtitle1">
                                        <Link href={href} passHref>
                                            <span className={classes.linkItem}>{title}</span>
                                        </Link>
                                    </Typography>
                                    <Typography variant="subtitle1">{desc}</Typography>
                                    <Typography variant="subtitle2">{author}</Typography>
                                </Grid>
                            ))}
                        {!!competitions && (
                            <Typography variant="h5" sx={{ marginTop: 5 }}>
                                {"Competitions:"}
                            </Typography>
                        )}
                        {!!competitions &&
                            competitions.map(({ title, href }, id) => (
                                <Grid item xs={12} key={id} className={classes.smallWrapper}>
                                    <Typography variant="subtitle1">
                                        <Link href={href} passHref>
                                            <span className={classes.linkItem}>{title}</span>
                                        </Link>
                                    </Typography>
                                </Grid>
                            ))}
                        {!!demos && (
                            <Typography variant="h5" sx={{ marginTop: 5 }}>
                                {"Demos:"}
                            </Typography>
                        )}
                        {!!demos &&
                            demos.map(({ title, href }, id) => (
                                <Grid item xs={12} key={id} className={classes.smallWrapper}>
                                    <Typography variant="subtitle1">
                                        <Link href={href} passHref>
                                            <span className={classes.linkItem}>{title}</span>
                                        </Link>
                                    </Typography>
                                </Grid>
                            ))}
                        {!!videos && (
                            <Typography variant="h5" sx={{ marginTop: 5 }}>
                                {"Demos:"}
                            </Typography>
                        )}
                        {!!videos &&
                            videos.map(({ title, href }, id) => (
                                <Grid item xs={12} key={id} className={classes.smallWrapper}>
                                    <Typography variant="subtitle1">
                                        <Link href={href} passHref>
                                            <span className={classes.linkItem}>{title}</span>
                                        </Link>
                                    </Typography>
                                </Grid>
                            ))}
                        {!!games && (
                            <Typography variant="h5" sx={{ marginTop: 5 }}>
                                {"Demos:"}
                            </Typography>
                        )}
                        {!!games &&
                            games.map(({ title, href }, id) => (
                                <Grid item xs={12} key={id} className={classes.smallWrapper}>
                                    <Typography variant="subtitle1">
                                        <Link href={href} passHref>
                                            <span className={classes.linkItem}>{title}</span>
                                        </Link>
                                    </Typography>
                                </Grid>
                            ))}
                    </Fragment>
                ))}
            </Grid>
        </>
    );
};

export default Issue;
