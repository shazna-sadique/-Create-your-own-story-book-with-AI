import WritingField from './componets/RitingField';
import './style.css';
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import ImageField from './componets/ImageField.js';
import RitingField from './componets/RitingField';
import { useState } from 'react';

function App() {
const [showImage , setShowImage] = useState('')

function setSelectedImage(img) {
  console.log(img)
  setShowImage(img)
}

  return (
    <div className="App"> 
     <div className='section'>
      <div className='wrapper'>
        <div className='row'>
          <div className='col1'>
            <div className='grammerly'>
            <GrammarlyEditorPlugin className='fr' clientId="">
              <RitingField className="area"/> 
            </GrammarlyEditorPlugin>
            <div className='imagearea'>
            <img src={showImage} style={{width:"300px" ,height:"552px"}}></img>
          </div>
             </div>
          </div>
          <div className='col2'>
          <ImageField setSelectedImage={setSelectedImage} />
          </div>
        </div>
      </div>
     </div> 
    </div>
  );
}

export default App;
{/* <GrammarlyEditorPlugin clientId="client_8kroHSBy3nvJXccGVfrEN1">
<RitingField/> 
</GrammarlyEditorPlugin>
<RitingField/> */}