import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline, ScopedCssBaseline } from "@mui/material";
import createEmotionCache from "../createEmotionCatche";
import theme from "../theme";

const cache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ScopedCssBaseline>
                <Component {...pageProps} />
            </ScopedCssBaseline>
        </ThemeProvider>
    );
}

export default MyApp;
