import React from "react";

export default function Panel({ css, html, panelInfo }) {
  function createMarkup() {
    const htmlCSS = `
    <div>
      <div id="topDiv" style="display: flex; flex-direction: column; max-height:500px; max-width:500px">
        <div id="insideDiv" style="">
          <style> 
            ${css} 
          </style> 
          ${html}
        </div>
      </div>
    </div>
    `;

    return { __html: htmlCSS };
  }

  return (
    <>
      <div className="relative bg-gray-200 w-1/4 border-2 border-secondary-darker overflow-hidden">
        <div style={{
            position: 'absolute',
            bottom: 0,
            fontSize: '20px',
            fontWeight: 500,
            color: '#FF5500',
            background: 'bisque',
            width: '100%',
            padding: '5px'
        }}>{panelInfo}</div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "500px",
            maxHeight: "100%",
            width: "100%",
            padding: 2,
            overflow: "hidden",
          }}
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
      </div>
    </>
  );
}
