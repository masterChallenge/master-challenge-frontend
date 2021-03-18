import * as csstree from 'css-tree'
import * as cssom from 'cssom'
import stringify from 'json-stringify-safe'
import jsonata from 'jsonata'

const parser = ( userCSS ) => {

  let isValidCSS = true
  let parseErrorsSintax = []
  let parseWarningsLexer = []
  let declarations = []
  let cssAST = {}

  let syntax = csstree.lexer  
  
  let astCSSTree = csstree.parse(userCSS, {
    positions: true,
    tolerant: true,
    onParseError: function(e, fallbackNode) {
      parseErrorsSintax.push(e);
    }
  })

  csstree.walk(astCSSTree, (node) => {
    if(node.type === 'Declaration') {
      node.value.important = false;
      declarations.push({
        node: node,
        property: node.property,
        value: node.value,
      })
    }
  })
  
  declarations.forEach((declaration) => {
    let node = declaration.value;
    let match = syntax.matchProperty(declaration.property, node);
    let error = match.error;

    if (error !== null) {
        let type = error.rawMessage || error.message
        let message = error.message;

        if (/^Unknown property/.test(message)) {
          type = 'Unknown property'
          message = message.replace(/:.*/, '') +
                '\n   value: ' + csstree.generate(node) + '\n  ^';
        } else if (error.name !== 'SyntaxMatchError') {
            // ignore non-match errors
            return;
        }

        parseWarningsLexer.push({
            type,
            declaration,
            message
        });
    }
  })

  if(parseErrorsSintax.length > 0 || parseWarningsLexer.length > 0) {
    isValidCSS = false
    return {
      isValidCSS,
      parseErrorsSintax,
      parseWarningsLexer
    }
  }

  const astcssom = cssom.parse(userCSS)
  cssAST = JSON.parse(stringify(astcssom))
  
  return {
    isValidCSS,
    parseErrorsSintax,
    cssAST,
    parseWarningsLexer
  }
}

const validate = (userCSS, validatorRules) => {
  
  let isChallengePassed = true
  let failed = []

  const { 
    isValidCSS, 
    parseErrorsSintax, 
    cssAST,
    parseWarningsLexer
  } = parser(userCSS)

  if(!isValidCSS) {
    isChallengePassed = false
    return {
      isValidCSS,
      parseErrorsSintax,
      isChallengePassed,
      parseWarningsLexer,
      failed
    }
  }    
    
  validatorRules.forEach(element => {

    let expression = jsonata(element.rule)
    let result = expression.evaluate(cssAST)

    if (!result) {
      isChallengePassed = false
      failed.push(element)
    }
  })

  return {
    isChallengePassed,
    failed,
    isValidCSS,
    parseErrorsSintax,
    parseWarningsLexer
  }  
}

export {
  validate,
  parser
}