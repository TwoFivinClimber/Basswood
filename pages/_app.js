/* eslint-disable react/prop-types */
import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { AuthProvider } from '../utils/authContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}
