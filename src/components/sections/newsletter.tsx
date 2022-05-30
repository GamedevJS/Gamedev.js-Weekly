import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import { Theme } from "@mui/system";
import Form from "../form/form";

const useStyles = makeStyles((theme: Theme) => ({
    mainWrapper: {
        backgroundColor: theme.palette.secondary.light,
        padding: "30px 0 70px 0",
    },
}));

const Newsletter = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent={"center"} className={classes.mainWrapper}>
            <Grid item xs={12}>
                <Typography variant={"h5"} textAlign={"center"}>
                    {"Join our newsletter!"}
                </Typography>
            </Grid>
            <Form width={"45%"} label={"email address"} borderColor={"#000"} labelColor={"#cbcbcc"} />
        </Grid>
    );
};

export default Newsletter;
