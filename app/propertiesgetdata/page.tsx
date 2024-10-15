

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // Adjust the path if necessary

export default function PropertiesList() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from('properties').select('*');
      if (error) {
        setError(error);
      } else {
        setProperties(data);
      }
    };

    fetchProperties();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          <h2>{property.name}</h2>
          <p>{property.created_at}</p>
        </div>
      ))}
    </div>
  );
}


//Fetch Data
//Rendering Data
  /* Render property details */
//Handling User Interactions (if applicable):
// Update the UI to reflect the new property
