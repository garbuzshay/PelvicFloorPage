// import "../styles/globals.css";  // use relative path instead of @

// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AccessibilityMenu from '../components/AccessibilityMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Accessibility Menu */}
      <AccessibilityMenu />

      {/* Main Page Content */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
