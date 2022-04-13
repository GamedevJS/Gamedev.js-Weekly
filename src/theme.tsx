import { createTheme } from "@mui/material";

// declare module "@mui/material/styles" {
//     interface Theme {
//         palette: {
//             primary: {
//                 main: string;
//             };
//             secondary: {
//                 main: string;
//             };
//         };
//     }
// }

const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
        },
        secondary: {
            main: "#f00",
        },
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
