import { makeStyles } from "@mui/styles";
import { Typography, Grid, Button, Box } from "@mui/material";
import { Theme } from "@mui/system";
import clsx from "clsx";

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
    titleMargin: {
        marginBottom: 20,
    },
}));

export interface WrapperProps {
    titlePage?: string;
    data: Array<DataProps>;
}

export interface DataProps {
    title: string;
    description1: string;
    description2?: string;
}

const Wrapper = ({ data, titlePage }: WrapperProps) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainWrapper} rowSpacing={4}>
            <Grid item xs={10}>
                {data?.map(({ title, description1, description2 }: DataProps) => (
                    <Box key={title} mb={2}>
                        <Typography
                            className={clsx(classes.title, title === `${titlePage}` && classes.titleMargin)}
                            variant={title === `${titlePage}` ? "h5" : "h6"}>
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
    );
};

export default Wrapper;
