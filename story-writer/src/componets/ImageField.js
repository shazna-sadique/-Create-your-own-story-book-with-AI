import * as React from 'react';
import useState from 'react';
import Button from '@mui/material/Button';  

export default function ImageField({setSelectedImage}){

    const handleClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        console.log(imageSrc)
      };

return(
    <>
        <div className='imgContainer'>
            <h1>SELECT IMAGE HERE</h1>
            <div  className="image-grid">
            <img src="image 1.webp"  onClick={() => handleClick('image 1.webp')}></img>
            <img src="image 2.webp"  onClick={() => handleClick('image 2.webp')}></img>
            <img src="image 3.webp"   onClick={() => handleClick('image 3.webp')}></img>
            <img src="image 3.webp"  onClick={() => handleClick('image 3.webp')}></img>
            <img src="image 3.webp"   onClick={() => handleClick('image 3.webp')}></img>
            <img src="image 3.webp"  onClick={() => handleClick('image 3.webp')}></img>
            <img src="image 2.webp"  onClick={() => handleClick('image 2.webp')}></img>
            <img src="image 2.webp"  onClick={() => handleClick('image 3.webp')}></img>
            <img src="image 2.webp"  onClick={() => handleClick('image 3.webp')}></img>
            <img src="image 3.webp"  onClick={() => handleClick('image 3.webp')}></img>
            <img src="image 2.webp"  onClick={() => handleClick('image 2.webp')}></img>
            <img src="image 2.webp"  onClick={() => handleClick('image 2.webp')}></img>
        
            </div>
        </div>
    </>
         
);
        
}