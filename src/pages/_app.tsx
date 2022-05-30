// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import { Footer, Navbar } from "../layouts";
import useRemoveServerSideStyles from "../hooks/useRemoveServerSideStyles";

function MyApp({ Component, pageProps }: AppProps) {
    useRemoveServerSideStyles();

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;
