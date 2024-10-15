 /** Supabase Client Setup */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(https://ohmvtapddzhjitffssfn.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obXZ0YXBkZHpoaml0ZmZzc2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MjczNTgsImV4cCI6MjA0NDUwMzM1OH0.Xdjgz6ct8OEOhbzNErlWS2hXd4hoysCbr6gW2X4AJz8);

//Fetch Data
JavaScript
const { data: properties, error } = await supabase.from('properties').select('*');

if (error) {
  console.error(error);
} else {
  console.log(properties);
}

//Rendering Data
return (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          {/* Render property details */}
        </div>
      ))}
    </div>
  );

//Handling User Interactions (if applicable):
  const handleCreateProperty = async (newPropertyData) => {
    const { error } = await supabase.from('properties').insert([newPropertyData]);
  
    if (error) {
      console.error(error);
    } else {
      // Update the UI to reflect the new property
    }
  };