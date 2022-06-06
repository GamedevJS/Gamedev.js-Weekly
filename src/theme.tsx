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
});

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
