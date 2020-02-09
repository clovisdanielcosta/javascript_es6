function fn (){
  return 'code here';
};

  const arrowFn = () => 'Code here';
  const arrowFn2 = () => {
      //Mais de uma expressão
      return 'Code here';
  };

  // Funções também são objetos
  fn.prop = 'Posso criar propriedades';

  console.log(fn());
  console.log(fn.prop);

  // Receber parâmetros
  const logValue = value => console.log(value);
  const logFnResults = fnParam => console.log(fnParam());

logFnResults(fn);

// Receber e retornar Funções
const controlFnExec => fnParam => allowed => {
    id (allowed) {
      fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
  return function(allowed) {
    if (allowed) {
      fnParam();
    }
  }
} 
