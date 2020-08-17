const vm = require('vm');
const fs = require('fs');

function testQuery () {
  return new Promise(resolve => {
    setTimeout(() => resolve(100500), 2000);
  })
}

function testResult (x) {
  this.callback(x)
}

module.exports = function (fileName, callback) {

  const code = fs.readFileSync(fileName, 'utf8');

  // Формируем контекст 
  const context = {}
  context.testQuery = testQuery.bind(context)
  context.testResult = testResult.bind(context)
  context.callback = callback.bind(context)

  vm.createContext(context);

  vm.runInContext(code, context);

}

