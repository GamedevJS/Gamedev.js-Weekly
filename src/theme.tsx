import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3b4145",
        },
        secondary: {
            light: "#92bcd8",
            main: "#93bcd8",
        },
    },
    typography: {
        fontFamily: "Merriweather Sans, sans-serif",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // fontSize: 10,
                    padding: 0,
                    margin: 0,
                },
            },
        },
    },
});

// default breakpoints:

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

// const theme = {
//     ...defaultTheme,
//     components: {
//         MuiCssBaseline: {
//             styleOverrides: {
//                 body: {
//                     // fontSize: 10,
//                     backgroundColor: "#00f",
//                 },
//             },
//         },
//     },

// overrides: {
//     MuiCssBaseline: {
//         body: {
//             fontSize: 10,
//             backgroundColor: "#000",
//         },
//     },
// },
// };

export default theme;
