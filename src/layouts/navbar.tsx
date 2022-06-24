import type { NextPage } from "next";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Grid, IconButton, Hidden, Drawer, Divider, Box, List, ListItem } from "@mui/material";
import clsx from "clsx";
import Logo from "../assets/logo/weekly-logo.png";
import Link from "next/link";
import { Theme } from "@mui/system";
import Image from "next/image";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useState, Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "./footer";

const useStyles = makeStyles((theme: Theme) => ({
    appbar: {
        flexGrow: 1,
        backgroundColor: "#fff",
        zIndex: 3000,
        [theme.breakpoints.down("md")]: {
            position: "fixed",
        },
    },
    toolbar: {
        margin: "0 15%",
        padding: 0,
        [theme.breakpoints.down("sm")]: {
            margin: "0 5%",
            height: "10vh",
        },
    },
    menuItem: {
        marginRight: theme.spacing(5),
        color: "#000",
        cursor: "pointer",
        fontWeight: 700,
    },
    menuItemsWrapper: {
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            justifyContent: "space-between",
        },
    },
    logo: {
        display: "flex",
        cursor: "pointer",
        width: "40%",
    },
    activeLink: {
        color: "#93bcd8",
    },
    drawerPaper: {
        top: "10vh",
        minHeight: "90vh",
        alignItems: "start",
        border: "none",
    },
    modal: {
        backgroundColor: "none",
    },
    mobileWrapperItems: {
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        width: "100%",
        padding: "0 30px",
        [theme.breakpoints.down("md")]: {
            height: "calc(90vh - 40px)",
        },
    },
    mobileMenuItems: {
        margin: 0,
        textTransform: "uppercase",
    },
}));

const menuItems = [
    {
        name: "Issues",
        path: "/issues",
    },
    {
        name: "Submit",
        path: "/submit",
    },
    {
        name: "Sponsor",
        path: "/sponsor",
    },
    {
        name: "Legal",
        path: "/legal",
    },
    {
        name: "About",
        path: "/about",
    },
];

const Navbar: NextPage = () => {
    const classes = useStyles();
    const router = useRouter();

    const [open, setOpen] = useState(false);

    const onOpenMenu = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="static" className={classes.appbar} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={6} md={2.5} className={classes.logo} onClick={() => setOpen(false)}>
                        <Link href={"/"} passHref>
                            <Image src={Logo} alt="logo" width={200} height={50} />
                        </Link>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={2} md={9.5} className={classes.menuItemsWrapper}>
                            {menuItems.map(({ path, name }, id) => (
                                <Link href={path} key={id} passHref>
                                    <span
                                        className={clsx(
                                            classes.menuItem,
                                            router.pathname === path ? classes.activeLink : ""
                                        )}>
                                        {name}
                                    </span>
                                </Link>
                            ))}
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid item xs={2} md={9.5} textAlign="end">
                            <IconButton style={{ color: "#000" }} onClick={onOpenMenu}>
                                {open ? <CloseIcon fontSize={"large"} /> : <DragHandleIcon fontSize={"large"} />}
                            </IconButton>
                            <Drawer
                                anchor="bottom"
                                open={open}
                                variant="persistent"
                                classes={{
                                    paper: classes.drawerPaper,
                                    root: classes.modal,
                                }}>
                                <List className={classes.mobileWrapperItems}>
                                    <Divider />
                                    {menuItems.map(({ path, name }, id) => (
                                        <Fragment key={id}>
                                            <ListItem style={{ padding: "25px" }}>
                                                <Link href={path} passHref>
                                                    <span
                                                        onClick={onOpenMenu}
                                                        className={clsx(
                                                            classes.menuItem,
                                                            classes.mobileMenuItems,
                                                            router.pathname === path ? classes.activeLink : ""
                                                        )}>
                                                        {name}
                                                    </span>
                                                </Link>
                                            </ListItem>
                                            <Divider />
                                        </Fragment>
                                    ))}
                                </List>
                                <Footer />
                            </Drawer>
                        </Grid>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
