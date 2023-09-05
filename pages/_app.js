/* eslint-disable react/prop-types */
import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { AuthProvider } from '../utils/authContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
      <Footer />
    </AuthProvider>
  );
}
