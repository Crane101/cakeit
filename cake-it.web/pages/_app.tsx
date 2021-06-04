import '../styles/globals.css';

import type {AppProps} from 'next/app';

const app = ({Component, pageProps}: AppProps) => <Component {...pageProps} />;
export default app;
