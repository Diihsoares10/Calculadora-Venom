const calculator = {
	numbers: [], // cria um array vazio para armazenar os números e operadores digitados
	input: function (value) { // função para adicionar o número ou operador digitado
	  this.numbers.push(value); // adiciona o valor ao final do array 'numbers'
	  document.querySelector('#result').value = this.numbers.join(''); // junta todos os elementos do array em uma string e atualiza o valor do input com essa string
	},
	operacao: function (operator) { // função para adicionar um operador (+, -, *, /)
	  this.numbers.push(' ' + operator + ' '); // adiciona o operador como uma string separada por espaços
	  document.querySelector('#result').value = this.numbers.join(''); // junta todos os elementos do array em uma string e atualiza o valor do input com essa string
	},
	clear: function (all = false) { // função para limpar o último número ou operador digitado
		if (all) {
		  this.numbers = []; // redefine o array para um array vazio
		} else {
		  this.numbers.pop(); // remove o último elemento do array
		}
		document.querySelector('#result').value = this.numbers.join(''); // junta todos os elementos do array em uma string e atualiza o valor do input com essa string

	},
	calculate: function () { // função para calcular o resultado da expressão matemática digitada
	  const expression = this.numbers.join(''); // junta todos os elementos do array em uma string para criar a expressão matemática
	  const result = eval(expression); // avalia a expressão matemática usando a função eval()
	  document.querySelector('#result').value = result; // atualiza o valor do input com o resultado da expressão
	}
  };
  