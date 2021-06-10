import '../styles/globals.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import type { AppProps } from 'next/app';
import CakeItFooter from '../components/cake-it-footer';
import CakeItHeader from '../components/cake-it-header';
import { ContentWrapper } from '../styles/app.styles';
import Head from 'next/head';
import cakeItTheme from '../theme';

const app = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={cakeItTheme}>
        <Head>
            <title>Cake It</title>
            <meta name="description" content="Cake It demo project using Next js with PWA feature set" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
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
        <CakeItHeader />
        <ContentWrapper>
            <Component {...pageProps} />
        </ContentWrapper>
        <CakeItFooter />
    </ThemeProvider>
);

export default app;
