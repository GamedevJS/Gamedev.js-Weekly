import { makeStyles } from "@mui/styles";
import { Grid, Box, Button, Input } from "@mui/material";
import { Theme } from "@mui/system";
import { useState } from "react";
import clsx from "clsx";
import { useMobileVisible } from "../../hooks/useMobileVisible";

const useStyles = makeStyles((theme: Theme) => ({
    formContainer: {
        display: "flex",
        marginTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    },
    mobileFormTop: {
        [theme.breakpoints.down("sm")]: {
            backgroundColor: theme.palette.secondary.light,
            padding: "50px 0",
        },
    },
    inputForm: {
        backgroundColor: "#fff",
        "& input": {
            padding: 12,
            fontSize: 10,
            [theme.breakpoints.down("sm")]: {
                padding: 16,
                fontSize: 16,
            },
        },
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
    },
    subBtn: {
        marginLeft: 20,
        [theme.breakpoints.down("sm")]: {
            width: "80%",
            margin: "25px 0 0 0",
            padding: 12,
        },
    },
}));

export interface formProps {
    width: string;
    label: string;
    borderColor: string;
    labelColor: string;
    formOnTheTop?: boolean;
}

const Form = ({ width, label, borderColor, labelColor, formOnTheTop }: formProps) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");

    // const isMobileVisible = useMobileVisible();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const sentEmail = () => {
        console.log(email);
        setEmail("");
    };

    return (
        <Grid
            container
            item
            wrap={"nowrap"}
            className={clsx(classes.formContainer, formOnTheTop && classes.mobileFormTop)}
            style={{ width: `${width}` }}>
            <Input
                placeholder={label}
                value={email}
                fullWidth
                className={classes.inputForm}
                disableUnderline
                size="small"
                style={{ border: `1px solid ${borderColor}` }}
                onChange={handleEmail}
                sx={{
                    input: {
                        borderColor: `${borderColor}`,
                        color: `${labelColor}`,
                    },
                }}
            />
            <Button className={classes.subBtn} onClick={sentEmail} variant="outlined" color="primary">
                {"Subscribe"}
            </Button>
        </Grid>
    );
};

export default Form;
