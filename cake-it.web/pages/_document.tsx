import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <link rel="apple-touch-icon" href="/icons/logo_120x120.png" sizes="120x120" />
                    <link rel="apple-touch-icon" href="/icons/logo_152x152.png" sizes="152x152" />
                    <link rel="apple-touch-icon" href="/icons/logo_167x167.png" sizes="167x167" />
                    <link rel="apple-touch-icon" href="/icons/logo_180x180.png" sizes="180x180" />
                    <meta name="msapplication-TileImage" content="/icons/logo_144x144.png" />
                    <meta name="msapplication-TileColor" content="#cf36ff" />
                    <meta name="theme-color" content="#f321bf" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
