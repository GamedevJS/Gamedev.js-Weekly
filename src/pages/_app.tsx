import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline, ScopedCssBaseline } from "@mui/material";
// import createEmotionCache from "../createEmotionCatche";
import theme from "../theme";
import { useEffect } from "react";
import useRemoveServerSideStyles from "../hooks/useRemoveServerSideStyles";

// const cache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
    useRemoveServerSideStyles();

    return (
        <ThemeProvider theme={theme}>
            {/* <ScopedCssBaseline> */}
            <Component {...pageProps} />
            <CssBaseline />
            {/* </ScopedCssBaseline> */}
        </ThemeProvider>
    );
}

export default MyApp;
