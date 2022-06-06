import React from "react";
import { ServerStyleSheets } from "@mui/styles";
import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
        return originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });
    };
    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
