import { makeStyles } from "@mui/styles";
import { Grid, Box, Button, Input } from "@mui/material";
import { Theme } from "@mui/system";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    formContainer: {
        display: "flex",
        marginTop: theme.spacing(2),
    },
    subBtn: {
        marginLeft: 20,
        textTransform: "capitalize",
    },
}));

export interface formProps {
    width: string;
    label: string;
    borderColor: string;
    labelColor: string;
}

const Form = ({ width, label, borderColor, labelColor }: formProps) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");

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
            className={classes.formContainer}
            spacing={2}
            justifyContent={"center"}
            style={{ width: `${width}` }}>
            <Input
                placeholder={label}
                value={email}
                fullWidth
                disableUnderline
                size="medium"
                onChange={handleEmail}
                sx={{
                    input: {
                        backgroundColor: "#fff",
                        border: `1px solid ${borderColor}`,
                        padding: 1.5,
                        fontSize: 10,
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
