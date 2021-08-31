import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './ReactTypingEffect.css'

 export default function ReactTypingEffectDemo () {
  return (
    <>
    
<div className = 'typing-box-parent'>
  <ReactTypingEffect
    className='typing-box'
    text={["DEVELOPER.","AUDIO ENGINEER.", "PRODUCER."]}
    cursorRenderer={cursor => <h1>{cursor}</h1>}
    displayTextRenderer={(text, i) => {
      return (
        <h1>
          {text.split('>').map((char, i) => {
            const key = `${i}`;
            return (
              <span 
                key={key}
                style={i%2 === 0 ? { color: 'black'} : {}}
              >{char}</span>
            );
          })}
        </h1>
      );
    }}        
  />
</div>
</>
);
};

