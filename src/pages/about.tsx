import type { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Button, Box } from "@mui/material";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
    mainWrapper: {
        margin: "0 15%",
        width: "auto",
    },
    contactBtn: {
        borderRadius: 25,
        backgroundColor: "yellow",
        textTransform: "capitalize",
        padding: "5px 60px",
        borderColor: "orange",
    },
    title: {
        fontWeight: "bold",
    },
}));

const aboutInfo = [
    {
        title: "About",
        description1:
            "Gamedev.js Weekly is a weekly newsletter about HTML5 Game Development sent every Friday. It was created by Andrzej Mazur from Enclave Games at the beginning of 2014. The first issue was sent out on Friday, January 10th 2014, and the newsletter is being emailed to subscribers every single week since then.",
        description2:
            "The list currently holds about 7000 active subscribers via Mailchimp. It is built and managed organically - only those who really want to subscribe are doing sa, and inactive or spam accounts are regularly removed. Open rates are around 25-35% after the first week of publication, and click rates around 6-12%.",
    },
    {
        title: "Donate",
        description1:
            "If you're interested in supporting the newsletter with a donation, then feel free to use PayPal: either through sending funds to the PayPal ID contact@gamedevjsweekly.com or by using PayPal Me service directly. For other donation options please reach out via email to talk about the details.",
    },
    {
        title: "Contact",
        description1: "To get in touch please send an email to contact@gamedevjsweekly.com",
    },
];

const About: NextPage = () => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>GamedevJS - Weekly - About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid container className={classes.mainWrapper} rowSpacing={4}>
                <Grid item xs={10}>
                    {aboutInfo.map(({ title, description1, description2 }) => (
                        <Box key={title} mb={2}>
                            <Typography
                                className={classes.title}
                                variant={title === "About" ? "h5" : "h6"}
                                mb={title === "About" && 2}>
                                {title}
                            </Typography>
                            <Typography variant={"body1"}>{description1}</Typography>
                            {!!description2 && (
                                <Typography variant={"body1"} mt={2}>
                                    {description2}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={12} style={{ display: "flex" }} justifyContent="center">
                    <Button variant="outlined" className={classes.contactBtn}>
                        {"Contact us"}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default About;
