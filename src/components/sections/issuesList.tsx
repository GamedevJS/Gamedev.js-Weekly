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
        id: "420",
    },
    {
        date: "21/01/2022",
        title: "Issue #421 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "421",
    },
    {
        date: "21/01/2022",
        title: "Issue #422 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "422",
    },
    {
        date: "21/01/2022",
        title: "Issue #423 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "423",
    },
    {
        date: "21/01/2022",
        title: "Issue #424 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "424",
    },
    {
        date: "21/01/2022",
        title: "Issue #425 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "425",
    },
    {
        date: "21/01/2022",
        title: "Issue #426 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "426",
    },
    {
        date: "21/01/2022",
        title: "Issue #427 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "427",
    },
    {
        date: "21/01/2022",
        title: "Issue #428 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "428",
    },
    {
        date: "21/01/2022",
        title: "Issue #429 Web GameDev Summit, Make JavaScript Games, and Vampires Survivors",
        id: "429",
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
                {emails.map(({ id, title, date }, index) => (
                    <Fragment key={index}>
                        <ListItem className={classes.listItem}>
                            <Typography variant={"subtitle1"}>
                                {`${date} -`}{" "}
                                {
                                    <Link href={`issue/${id}`} passHref>
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
                {"view all issues"}
            </Button>
        </>
    );
};

export default IssuesList;
