import React, { useEffect, useRef } from 'react'
import Ruler from "@scena/react-ruler"

export default function Panel ({
  css, 
  html
}){

  const refRulerHorizontal = useRef()
  const refRulerVertical = useRef()

  useEffect(() => {
    refRulerHorizontal.current.resize()
    refRulerVertical.current.resize()

    window.addEventListener("resize", () => {
      
      refRulerHorizontal.current.resize()
      refRulerVertical.current.resize()
    });

    setInterval(() => {
      window.dispatchEvent(new Event('resize'))
    }, 2500)
  }, [])

  function createMarkup() {
    const htmlCSS = `
    <div>
      <div id="topDiv" style="display: flex; flex-direction: column; max-height:500px; max-width:500px">
        <div id="insideDiv" style="overflow: hidden;">
          <style> 
            ${css} 
          </style> 
          ${html}
        </div>
      </div>
    </div>
    `

    return {__html: htmlCSS};
  }

  return (
    <>
      <div className="relative bg-gray-200 w-1/4 border-2 border-secondary-darker p-0.5">
        <div style={{
          position: 'absolute',
          width: '25px',
          height: '25px',
          background: '#444',
          boxSizing: 'border-box'
        }}></div>
        <Ruler 
          ref={refRulerHorizontal} 
          type="horizontal" 
          style={{ 
            position: 'absolute',
            left: '30px', 
            width: 'calc(100% - 30px)', 
            height: '25px',
            maxHeight:'500px',
            maxWidth: '500px',
          }} />

        <Ruler 
          ref={refRulerVertical} 
          type="vertical" 
          style={{ 
            position: 'absolute',
            top: '30px', 
            width: '25px', 
            height: 'calc(100% - 30px)'
          }} />

        <div style={{ position: 'absolute', top: '30px', left: '30px', maxHeight:'calc(100% - 30px)', width: 'calc(100% - 30px)'}} dangerouslySetInnerHTML={createMarkup()}>
        </div>
      </div>
    </>
  )
}
