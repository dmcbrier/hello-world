"use client";  // Add this line at the top

// propertiesgetdata.tsx
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

// export const metadata = {
//   title: 'Properties Get Data',
//   description: 'This is a data call page .',
// };

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust the path if necessary

export default function PropertiesList() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);


  //testing start
  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from('properties').select('*');
      console.log('Data:', data); // Log fetched data
      console.log('Error:', error); // Log any errors
  
      if (error) {
        setError(error);
      } else {
        setProperties(data);
      }
    };
  
    fetchProperties();
  }, []);


  return (
    <div>
      {/* Navigation */}
      <Navbar /> {/* Import and render the Navbar component */}
      <div className="content">
        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            properties.map((property) => (
              <div key={property.id}>
                <h2>{property.name}</h2>
                <p>{property.created_at}</p>
              </div>
            ))
          )
        )}
      </div>
      {/* Footer */}
       {/* Footer */}
       <Footer /> {/* Import and render the Footer component */}
    </div>
  );
}


//testing end


//old code
//   useEffect(() => {
//     const fetchProperties = async () => {
//       const { data, error } = await supabase.from('properties').select('*');
//       if (error) {
//         setError(error);
//       } else {
//         setProperties(data);
//       }
//     };

//     fetchProperties();
//   }, []);

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       {properties.map((property) => (
//         <div key={property.id}>
//           <h2>{property.name}</h2>
//           <p>{property.created_at}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
//old code



//Fetch Data
//Rendering Data
  /* Render property details */
//Handling User Interactions (if applicable):
// Update the UI to reflect the new property
