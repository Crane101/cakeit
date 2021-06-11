import '../styles/globals.css';

import { ContentWrapper, PageWrapper } from '../styles/app.styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import type { AppProps } from 'next/app';
import CakeItFooter from '../components/cake-it-footer';
import CakeItHeader from '../components/cake-it-header';
import Head from 'next/head';
import cakeItTheme from '../theme/mui';

const app = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={cakeItTheme}>
        <Head>
            <title>Cake It</title>
            <meta name="description" content="Cake It demo project using Next js with PWA feature set" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        </Head>
        <PageWrapper>
            <CakeItHeader />
            <ContentWrapper>
                <Component {...pageProps} />
            </ContentWrapper>
            <CakeItFooter />
        </PageWrapper>
    </ThemeProvider>
);

export default app;
