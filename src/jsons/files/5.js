const challenge_data = {
  id: 1,
  name: "",
  description: "La propiedad de margin se puede especificar utilizando uno, dos, tres o cuatro valores. Para este reto deberas modificar el margin en la clase divHola y utilizar 3 valores para obtener el resultado de la imagen y especificar las medidas en pixeles",
  abilitie: [
    "prop", "display flexbox"
  ],
  keywords: "",
  resolved: 0,
  attempts: 0,
  hints: [
    {
      id:1,
      keyword:"selector",
      url: "http/mdn/selectores"
    },
    {
      id:2,
      keyword:"classes",
      url: "https/w3school/classes css"
    }
  ],
  challenge: {
    mco_input: ".divHola { background-color: cyan; width: 50px; height: 50px; }",
    user_input: "",
    output: [
      {
        language: "html",
        value: "<div class='final_divLayout'><div class='final_divContainer'><div class='final_divHola'>Hola</div></div></div>"
      },
      {
        language: "css",
        value: ".final_divLayout{width:100px;height:100px;display:flex;justify-content:center;align-items:center;}.final_divHola{background-color:cyan;width:auto;height:150px;margin:5px 10px 30px;}.final_divContainer{background:green;width:150px;height:max-content;overflow:overlay;}"
      },
      {
        language: "js",
        value: ""
      }
    ],
    image: "data:image/png;base64,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cICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwAGCDgAHCDoAHCDoAHCAoAPAAYIOAAcIOgAcIOgAcICgA8ABgg4ABwg6ABwg6ABwgKADwLzfv3+TzGo+UHNIaAAAAABJRU5ErkJggg==",
    validatorRules: [
      {
        id: 1,
        name: "La clase divHola debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'])",
        
      },
      {
        id: 2,
        name: "La propiedad margin en divHola debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'].style.'margin')"
      },
      {
        id: 3,
        name: "La propiedad margin debe tener 3 elementos",
        rule: "($count($split(cssRules[selectorText='.divHola'].style.'margin', ' ')) = 3)"
      },
      {
        id: 4,
        name: "El valor de la propiedad margin debe ser igual a '5px 10px 30px'",
        rule: "(cssRules[selectorText='.divHola'].style.'margin' = '5px 10px 30px')"
      }
    ],
    editor_data: [
      {
        language: "html",
        value: "<div class='divLayout'><div class='divContainer'><div class='divHola'>Hola</div></div></div>"
      },
      {
        language: "css",
        value: " .divHola {            background-color: cyan;            width: auto;            height: 150px;        margin: 20px;        }        .divContainer {          background: green;          width: 150px;          height: max-content;        overflow: overlay;                }"
      },
      {
        language: "js",
        value: ""
      }
    ],
    hints: [
      {
        id: 1,
        name: "bg-color: green",
        description: "Vas por buen camino, consulta esta guia para saber mas de colores",
        url: "http//mdn/css-bg-color"
      }
    ]
  }
}


export { challenge_data }