import { makeStyles } from "@mui/styles";
import { Grid, TextField, Button } from "@mui/material";
import { Theme } from "@mui/system";
import { ChangeEvent, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    formContainer: {
        display: "flex",
        marginTop: theme.spacing(2),
    },
    subBtn: {
        marginLeft: 20,
        borderRadius: 25,
        height: 42,
        backgroundColor: "yellow",
        textTransform: "capitalize",
        padding: "10px 30px",
        borderColor: "orange",
    },
}));

export interface formProps {
    width: string;
    label: string;
}

const Form = ({ width, label }: formProps) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <TextField
                fullWidth
                variant="outlined"
                label={label}
                onChange={handleEmail}
                size={"small"}
                sx={{
                    input: {
                        backgroundColor: "#fff",
                        borderRadius: 1,
                        border: "1px solid #000",
                    },
                    label: {
                        color: "#ccc",
                    },
                }}
            />
            <Button className={classes.subBtn} onClick={sentEmail} variant="outlined">
                {"Subscribe"}
            </Button>
        </Grid>
    );
};

export default Form;
