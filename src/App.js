// IMPORT useState
import React, {useState} from "react";
import "./styles.css";
import imagesArr from "./imageData";

// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img)
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  
  // select the index on click
  // set the big image use state to the index selected
  const selectImage = (imageUrl) => {
    setBigImage(imageUrl);
  }

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT

  const images = imagesArr.map((ele, index) => {
    return(
      <img src={ele.img} alt={ele.city} className='thumb' key={index} onClick={() => selectImage(ele.img)}/>
    )
  })
  
  

  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}

        <img src={bigImage} id="bigimage" alt=""/>
      </div>
    </div>
  );
}
