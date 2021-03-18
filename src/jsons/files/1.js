const challenge_data = {
  id: 1,
  name: "",
  description:
    "La propiedad background-color se utiliza para cambiar el color de fondo del elemento, el reto es cambiar el background-color del elemento a rojo",
  abilitie: ["prop", "display flexbox"],
  keywords: "",
  resolved: 0,
  attempts: 0,
  hints: [
    {
      id: 1,
      description: "selector",
      url: "http/mdn/selectores",
    },
    {
      id: 2,
      description: "classes",
      url: "https/w3school/classes css",
    },
  ],
  challenge: {
    mco_input:
      ".divHola { background-color: cyan; width: 50px; height: 50px; }",
    user_input: "",
    output: [
      {
        language: "html",
        value:
          "<div class='final_divLayout'><div class='final_divHola'>Hola</div></div>",
      },
      {
        language: "css",
        value:
          ".final_divLayout { width: 300px; height: 300px; } .final_divHola { background-color: red; width: 50px; height: 50px; }",
      },
      {
        language: "js",
        value: "",
      },
    ],
    image:
      " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAi9SURBVHhe7dnBrdNQEEDRdEhL2VEKpVAKZYQMwsiynI/8cZBycxZnkfHY0ltd2bncLpdbwfV6BYC3JegAECDoABAg6AAQIOgAEPC0oF/uvm9mz7R3OAB4F7+C/vW3bSTHt7tH1z4i6ADw/wg6AAQIOgAEfCroP+4m2GszX9sGfZ6x3j879nuHA4B3MXU9FPQJ8TbIszOzCf0yW+/MfHaWa8sz1vv/au9wAPAu/gR9AvvIOuhf7tZxfjSf+z56C//b9aP2DgcA72LKeugNfUK892a9t7cO9t5nekEHgHNMWZ8e9Jlv7xN0ADjP4aB/5pP7XrwFHQDOczjoE+FtjGdnZsvvsd7Zxn6eJ+gAcJ7DQR9L1BcT7OXaYh3s7f/ny/2CDgDnmLLuBvLV7B0OAN6FoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQMBlbwgAvBZBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAAEEHgABBB4AAQQeAl3e9/QSqleVHT8+u/AAAAABJRU5ErkJggg==",
    validatorRules: [
      {
        id: 1,
        name: "La clase divHola debe existir",
        rule: "$exists(cssRules[selectorText='.divHola'])",
      },
      {
        id: 2,
        name: "La propiedad background-color debe existir",
        rule:
          "$exists(cssRules[selectorText='.divHola'].style.'background-color')",
      },
      {
        id: 3,
        name:
          "El valor de la propiedad background-color debe ser igual a 'red'",
        rule:
          "(cssRules[selectorText='.divHola'].style.'background-color' = 'red')",
      },
    ],
    editor_data: [
      {
        language: "html",
        value: "<div class='divLayout'><div class='divHola'>Hola</div></div>",
      },
      {
        language: "css",
        value: ".divHola { background-color: cyan; width: 50px; height: 50px;}",
      },
      {
        language: "js",
        value: "",
      },
    ],
    hints: [
      {
        id: 1,
        name: "bg-color: green",
        description:
          "Vas por buen camino, consulta esta guia para saber mas de colores",
        url: "http//mdn/css-bg-color",
      },
    ],
  },
};

export { challenge_data };
