// about.tsx
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export const metadata = {
  title: 'About Us',
  description: 'This is a secondary page about our company.',
};

export default function AboutPage() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        {/* individual page content start */}
        <h1 className="text-3xl font-bold">Hello, World!</h1>
        <p className="text-lg">This is a secondary page about our company.</p>
      </div>
      {/* individual page content end */}
      <Footer />
    </div>
  );
}