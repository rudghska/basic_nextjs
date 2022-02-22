import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello App Component</span>
      <style jsx global>
        {`
          a {
            color: #fff;
          }
        `}
      </style>
    </React.Fragment>
  );
}
