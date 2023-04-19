/* eslint-disable react/prop-types */
import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
