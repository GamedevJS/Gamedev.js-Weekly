import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#3b4145",
        },
        secondary: {
            light: "#92bcd8",
            main: "#93bcd8",
        },
        divider: "#92bcd8",
    },
    typography: {
        fontFamily: "Merriweather Sans, sans-serif",
        htmlFontSize: 16,
        fontSize: 16,
        h4: {
            fontWeight: 800,
        },
        h5: {
            fontWeight: 800,
        },
        h6: {
            fontWeight: 800,
        },
    },
});

// default breakpoints:

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const theme = {
    ...defaultTheme,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    padding: 0,
                    margin: 0,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 25,
                    padding: "5px 30px",
                    textTransform: "capitalize",
                    color: "#fff",
                    "&:hover": {
                        background: "transparent",
                        backgroundColor: "transparent",
                    },
                },
            },
            variants: [
                {
                    props: { color: "primary" },
                    style: {
                        background: "#ffcc00",
                        borderColor: "#ff9900",
                        "&:hover": {
                            backgroundColor: "#ffcc00",
                            borderColor: "#ff9900",
                        },
                    },
                },
                {
                    props: { color: "secondary" },
                    style: {
                        background: defaultTheme.palette.secondary.light,
                        borderColor: defaultTheme.palette.secondary.main,
                        "&:hover": {
                            background: defaultTheme.palette.secondary.light,
                            borderColor: defaultTheme.palette.secondary.main,
                        },
                    },
                },
            ],
        },
    },
};
// };

export default theme;
