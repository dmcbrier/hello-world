// about.tsx

// navigation start
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function YourPage() {
  return (
    <div>
      <Navbar />
      {      
      /* individual page content start*/
      export const metadata = {
        title: 'About Us',  // Title for the page
        description: 'This is a secondary page about our company.', // Optional: add a description
      };
      
      export default function About() {
        return (
          <div>
            <h1>Hello, World!</h1>
            <p>This is a secondary page about our company.</p>
          </div>
        );
      }      
      /* individual page content end*/
      }
      <Footer />
    </div>
  );
}




