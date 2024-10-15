/* This file is responsible for wrapping all your pages with a common layout */

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
