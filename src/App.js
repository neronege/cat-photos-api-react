import './App.css';
import { useEffect, useState } from 'react';


const App = () => {

const [photo, setPhoto] = useState('');

useEffect(() => {
  fetch('https://thatcopy.pw/catapi/rest/')
  .then(res => res.json())
  .then(res => setPhoto(res))
  .catch(error =>(error));
},'');
console.log("PHOTO: ", photo);
  
return(
  <div>
  <h2>{photo.id}</h2>
  <p>
  <img 
  src={photo.url}
  alt={photo.name}
  style={{width: "400px"}}
/>
  </p>
   </div>


 )

   }
 
export default App;
