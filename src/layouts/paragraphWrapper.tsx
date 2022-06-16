import { makeStyles } from "@mui/styles";
import { Typography, Grid, Button, Box } from "@mui/material";
import { Theme } from "@mui/system";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    mainWrapper: {
        margin: "0 15%",
        width: "auto",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "10vh",
            margin: "0 5%",
        },
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
    children?: React.ReactNode;
}

export interface DataProps {
    title?: string;
    subtitle?: string;
    description1: string;
    description2?: string;
    description3?: string;
}

const Wrapper = ({ data, titlePage, children }: WrapperProps) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainWrapper} rowSpacing={4}>
            <Grid item md={10}>
                {data?.map(({ title, description1, description2, description3, subtitle }: DataProps) => (
                    <Box key={title} mb={2}>
                        {!!title && (
                            <Typography
                                className={clsx(classes.title, title === `${titlePage}` && classes.titleMargin)}
                                variant={title === `${titlePage}` ? "h5" : "h6"}>
                                {title}
                            </Typography>
                        )}

                        {!!subtitle && (
                            <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                {subtitle}
                            </Typography>
                        )}
                        <Typography variant={"body1"}>{description1}</Typography>
                        {children}
                        {!!description2 && (
                            <Typography variant={"body1"} mt={2}>
                                {description2}
                            </Typography>
                        )}
                        {!!description3 && (
                            <Typography variant={"body1"} mt={2}>
                                {description3}
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
