import { makeStyles } from "@mui/styles";
import { Fragment } from "react";
import { Typography, Divider, ListItem, Button, List } from "@mui/material";
import { Theme } from "@mui/system";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => ({
    mainWrapper: {
        backgroundColor: theme.palette.secondary.light,
        padding: "30px 0 70px 0",
    },
    listItem: {
        padding: "12px 0",
    },
    listItemLink: {
        color: theme.palette.secondary.light,
        cursor: "pointer",
    },
    issueBtn: {
        marginTop: 25,
        alignSelf: "center",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 50px",
        },
    },
}));

const emails = [
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
    {
        date: "21/01/2022",
        title: "Issue #420 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        href: "/#420",
    },
];

const IssuesList = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h4" marginTop={4} marginBottom={2}>
                {"Gamedev.js Weekly newsletter archive"}
            </Typography>
            <Typography variant="subtitle1" marginBottom={2}>
                {"Check out any of the recent 10 entries:"}
            </Typography>
            <List>
                <Divider />
                {emails.map(({ href, title, date }, id) => (
                    <Fragment key={id}>
                        <ListItem className={classes.listItem}>
                            <Typography variant={"subtitle1"}>
                                {`${date} -`}{" "}
                                {
                                    <Link href={href} passHref>
                                        <span className={classes.listItemLink}>{title}</span>
                                    </Link>
                                }
                            </Typography>
                        </ListItem>
                        <Divider />
                    </Fragment>
                ))}
            </List>
            <Button className={classes.issueBtn} variant="outlined" color="secondary">
                {"View all issues"}
            </Button>
        </>
    );
};

export default IssuesList;
