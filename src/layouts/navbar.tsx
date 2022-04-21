import type { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Box, Link } from "@mui/material";
import Logo from "../assets/logo/weekly-logo.png";
import { Theme } from "@mui/system";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
    appbar: {
        flexGrow: 1,
        backgroundColor: "#fff",
    },
    toolbar: {
        justifyContent: "space-between",
        margin: "0 20%",
    },
    menuItem: {
        marginLeft: theme.spacing(5),
    },
    logo: {
        width: 150,
        display: "flex",
    },
}));

const menuItems = [
    {
        name: "Issue",
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
    const classes = useStyles(0);

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Link href={"/"} className={classes.logo}>
                    <Image src={Logo} alt="logo" />
                </Link>
                <Box>
                    {menuItems.map(({ path, name }) => (
                        <Link href={path} key={name} className={classes.menuItem} underline={"none"}>
                            {name}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
