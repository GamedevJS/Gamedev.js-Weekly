import type { NextPage } from "next";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Grid, IconButton, Hidden, Drawer } from "@mui/material";
import clsx from "clsx";
import Logo from "../assets/logo/weekly-logo.png";
import Link from "next/link";
import { Theme } from "@mui/system";
import Image from "next/image";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme: Theme) => ({
    appbar: {
        flexGrow: 1,
        backgroundColor: "#fff",
    },
    toolbar: {
        margin: "0 15%",
        padding: 0,
        zIndex: 4999,
    },
    menuItem: {
        marginRight: theme.spacing(5),
        color: "#000",
        cursor: "pointer",
    },
    menuItemsWrapper: {
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            textAlign: "end",
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
        top: 64,
        // backgroundColor: "#000",
        maxHeight: "calc(100vh - 64px)",
        justifyContent: "space-around",
        alignItems: "center",
        // opacity: 0,
        width: "50vw",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
        },
    },
    modal: {
        backgroundColor: "none",
        zIndex: 200,
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
                <Grid container alignItems="center">
                    <Grid item xs={2.5} className={classes.logo}>
                        <Link href={"/"} passHref>
                            <Image src={Logo} alt="logo" />
                        </Link>
                    </Grid>
                    <Hidden mdDown>
                        <Grid
                            item
                            xs={9.5}
                            className={classes.menuItemsWrapper}
                            // sx={{ display: { ["sm, xs"]: "none", md: "block" } }}
                        >
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
                        <Grid item xs={9.5} className={classes.menuItemsWrapper}>
                            <IconButton style={{ color: "#000" }} onClick={onOpenMenu}>
                                {open ? <CloseIcon /> : <DragHandleIcon />}
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={open}
                                onClose={onOpenMenu}
                                elevation={0}
                                variant="persistent"
                                classes={{
                                    paper: classes.drawerPaper,
                                    root: classes.modal,
                                }}>
                                {menuItems.map(({ path, name }, id) => (
                                    <Link href={path} key={id} passHref>
                                        <span
                                            className={clsx(
                                                classes.menuItem,
                                                router.pathname === path ? classes.activeLink : ""
                                            )}
                                            style={{ margin: 0 }}>
                                            {name}
                                        </span>
                                    </Link>
                                ))}
                            </Drawer>
                        </Grid>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
