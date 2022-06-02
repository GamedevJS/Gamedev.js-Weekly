import type { NextPage } from "next";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Theme } from "@mui/system";
import Wrapper from "../layouts/paragraphWrapper";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        color: "#0f0",
        letterSpacing: theme.spacing(1),
    },
}));

const legalInfo = [
    {
        title: "Legal",
        description1: "Below you will find out:",
        description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
    },
    {
        title: "Privacy policy",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
        description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
    },
    {
        subtitle: "What information we collect",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
    },
    {
        subtitle: "What we do with your information",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
        description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
        description3:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. ",
    },
    {
        title: "Anti-spam protection",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
        description2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
    },
    {
        title: "Terms of service",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
    },
    {
        title: "GDPR policies and compliance notices",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
        subtitle: "What is 'personally identifiable information'",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
    },
    {
        subtitle: "What personally identifiable information do we hold",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nisl sed urna dignissim maximus at sed nisl. Morbi convallis vel enim sed varius. Sed mollis purus quis pretium mollis. Donec rutrum nulla eget pulvinar maximus. Sed ut blandit libero. Fusce efficitur pulvinar egestas. Vestibulum faucibus ante at nulla porta vestibulum.",
    },
];

const Legal: NextPage = () => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>GamedevJS - Weekly - Legal</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Wrapper data={legalInfo} titlePage="Legal" />
        </>
    );
};

export default Legal;
