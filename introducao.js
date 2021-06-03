function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

console.log(abs(2));
console.log(abs(-3));

function fatorial(n) {
    var produto = 1;
    while(n > 1) {
        produto *= n;
        n--;
    }
    return produto;
};

console.log(fatorial(5));

function fatorial2(n) {
    var produto = 1;
    for (let i = 1; i <= n; i++) {
        produto *= i;
    }
    return produto;
};

console.log(fatorial2(4));

// Definir uma função construtora para incializar um novo objeto Point
function Point(x,y) {      // Por convenção, as construtoras começam com letras maiúsculas.
    this.x = x;            // A palavra-chave this é o novoobjetoque está sendo inicializado.
    this.y = y;            // Armazena osargumentos da função como propriedades do objeto.
}                          // O return não é necessário.