// Fungsi untuk mencetak deret Fibonacci
function fibonacci(n) {
  let angka = [0, 1];

  for (let i = 2; i < n; i++) {
    angka[i] = angka[i - 1] + angka[i - 2];
  }

  return angka;
}

const n = 10; // Jumlah deret Fibonacci yang ingin dicetak
console.log('Deret Fibonacci: ', fibonacci(n));

// Kalkulator menggunakan arrow function dan spread operator
const calculator = (operator, ...numbers) => {
  switch (operator) {
    case '+':
      return numbers.reduce((a, b) => a + b, 0);
    case '-':
      return numbers.reduce((a, b) => a - b);
    case '*':
      return numbers.reduce((a, b) => a * b, 1);
    case '/':
      return numbers.reduce((a, b) => a / b);
    case '%':
      return numbers.reduce((a, b) => a % b);
    default:
      return 'Operator tidak valid';
  }
};

console.log('Penjumlahan:', calculator('+', 10, 20, 30));
console.log('Pengurangan:', calculator('-', 50, 10, 5));
console.log('Perkalian:', calculator('*', 2, 3, 4));
console.log('Pembagian:', calculator('/', 100, 2, 5));
console.log('Modulo:', calculator('%', 10, 3));
