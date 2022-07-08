import type { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

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
            margin: "25px 5%",
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
    titleWrapper: {
        [theme.breakpoints.down("sm")]: {
            marginBottom: 15,
        },
    },
    smallWrapper: {
        margin: "15px 0",
    },
}));

const getIssueById = (id: string) => {
    return {
        title: `#${id}`,
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
    };
};

const Issue: NextPage = () => {
    const classes = useStyles();

    const router = useRouter();
    const { id } = router.query as { id: string };

    const issue = getIssueById(id);

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
                {/* {issue.map(({ title, date, articles, jobs, tutorials, competitions, demos, videos, games }, id) => (
                    <Fragment key={id}> */}
                <Grid item xs={12} className={classes.titleWrapper}>
                    <Typography variant="body2">
                        <Link href={"/"} passHref>
                            <span className={classes.linkItem}>{"Home"}</span>
                        </Link>{" "}
                        {" > "}{" "}
                        <Link href={"/issues"} passHref>
                            <span className={classes.linkItem}>{"Newsletter Archive"}</span>
                        </Link>{" "}
                        {" > "} {"Issue "} {issue.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        {"Issue "} {issue.title}
                    </Typography>
                    <Typography variant="h5">{issue.date}</Typography>
                    <Typography variant="subtitle1" className={classes.description}>
                        {
                            "If you have anything you want to share with the HTML5 game development community please let me know by sending an email to andrzej.mazur@end3r.com. I'm also open for related sponsorship opportunities and job listings."
                        }
                    </Typography>
                </Grid>
                {!!issue.articles && (
                    <Typography variant="h5" sx={{ marginTop: 5 }}>
                        {"Articles:"}
                    </Typography>
                )}
                {!!issue.articles &&
                    issue.articles.map(({ title, href, desc, author }, id) => (
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
                {!!issue.jobs && (
                    <Typography variant="h5" sx={{ marginTop: 5 }}>
                        {"Jobs:"}
                    </Typography>
                )}
                {!!issue.jobs &&
                    issue.jobs.map(({ title, href, desc, author }, id) => (
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
                {!!issue.tutorials && (
                    <Typography variant="h5" sx={{ marginTop: 5 }}>
                        {"Tutorials:"}
                    </Typography>
                )}
                {!!issue.tutorials &&
                    issue.tutorials.map(({ title, href, desc, author }, id) => (
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
                {!!issue.competitions && (
                    <Typography variant="h5" sx={{ marginTop: 5 }}>
                        {"Competitions:"}
                    </Typography>
                )}
                {!!issue.competitions &&
                    issue.competitions.map(({ title, href }, id) => (
                        <Grid item xs={12} key={id} className={classes.smallWrapper}>
                            <Typography variant="subtitle1">
                                <Link href={href} passHref>
                                    <span className={classes.linkItem}>{title}</span>
                                </Link>
                            </Typography>
                        </Grid>
                    ))}
                {!!issue.demos && (
                    <Typography variant="h5" sx={{ marginTop: 5 }}>
                        {"Demos:"}
                    </Typography>
                )}
                {!!issue.demos &&
                    issue.demos.map(({ title, href }, id) => (
                        <Grid item xs={12} key={id} className={classes.smallWrapper}>
                            <Typography variant="subtitle1">
                                <Link href={href} passHref>
                                    <span className={classes.linkItem}>{title}</span>
                                </Link>
                            </Typography>
                        </Grid>
                    ))}
                {!!issue.videos && (
                    <Typography variant="h5" sx={{ marginTop: 5 }}>
                        {"Videos:"}
                    </Typography>
                )}
                {!!issue.videos &&
                    issue.videos.map(({ title, href }, id) => (
                        <Grid item xs={12} key={id} className={classes.smallWrapper}>
                            <Typography variant="subtitle1">
                                <Link href={href} passHref>
                                    <span className={classes.linkItem}>{title}</span>
                                </Link>
                            </Typography>
                        </Grid>
                    ))}
                {!!issue.games && (
                    <Typography variant="h5" sx={{ marginTop: 5 }}>
                        {"Games:"}
                    </Typography>
                )}
                {!!issue.games &&
                    issue.games.map(({ title, href }, id) => (
                        <Grid item xs={12} key={id} className={classes.smallWrapper}>
                            <Typography variant="subtitle1">
                                <Link href={href} passHref>
                                    <span className={classes.linkItem}>{title}</span>
                                </Link>
                            </Typography>
                        </Grid>
                    ))}
                {/* </Fragment>
                ))} */}
            </Grid>
        </>
    );
};

export default Issue;
