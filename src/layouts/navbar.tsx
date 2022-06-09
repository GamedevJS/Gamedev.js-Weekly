import type { NextPage } from "next";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Grid } from "@mui/material";
import clsx from "clsx";
import Logo from "../assets/logo/weekly-logo.png";
import Link from "next/link";
import { Theme } from "@mui/system";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
    appbar: {
        flexGrow: 1,
        backgroundColor: "#fff",
    },
    toolbar: {
        margin: "0 15%",
        padding: 0,
    },
    menuItem: {
        marginRight: theme.spacing(5),
        color: "#000",
        cursor: "pointer",
    },
    menuItemsWrapper: {
        textAlign: "center",
    },
    logo: {
        display: "flex",
        cursor: "pointer",
        width: "40%",
    },
    activeLink: {
        color: "#93bcd8",
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

    return (
        <AppBar position="static" className={classes.appbar} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Grid container alignItems="center">
                    <Grid item xs={2.5} className={classes.logo}>
                        <Link href={"/"} passHref>
                            <Image src={Logo} alt="logo" />
                        </Link>
                    </Grid>
                    <Grid item xs={9.5} className={classes.menuItemsWrapper}>
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
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
