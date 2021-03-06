import { makeStyles } from "@mui/styles";
import { Typography, Grid, Link } from "@mui/material";
import { Theme } from "@mui/system";
import Image from "next/image";
import RandomImg from "../../assets/images/randomIMG.jpeg";

const useStyles = makeStyles((theme: Theme) => ({
    mainWrapper: {
        margin: "0 15%",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "10vh",
            margin: "0 5%",
            flexDirection: "column",
            alignItems: "center",
        },
    },
    projectContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            marginBottom: 45,
            // flexWrap: "nowrap",
        },
    },
    projetName: {
        textTransform: "uppercase",
    },
}));

const projetsInfo = [
    {
        name: "gamedev.js",
        img: RandomImg,
        href: "http://wp.pl",
    },
    {
        name: "enclave games",
        img: RandomImg,
        href: "http://wp.pl",
    },
    {
        name: "js13kgames",
        img: RandomImg,
        href: "http://wp.pl",
    },
];

const Projects = () => {
    const classes = useStyles();

    return (
        <Grid container style={{ margin: "30px 0" }} rowSpacing={2}>
            <Grid item xs={12}>
                <Typography variant={"h5"} textAlign={"center"}>
                    {"Our other projects"}
                </Typography>
            </Grid>
            <Grid container item className={classes.mainWrapper} xs={12} justifyContent="space-between">
                {projetsInfo.map(({ name, href, img }) => (
                    <Grid item sm={3} className={classes.projectContainer} key={name}>
                        <Link href={href}>
                            <Image src={img} alt={name} />
                        </Link>
                        <Typography variant={"subtitle2"} className={classes.projetName}>
                            {name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Projects;
