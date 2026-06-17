// console.log("Olá mundo!");

// const nome = prompt("Digite o seu nome");
// alert("Bem vindo " + nome);

function somar() {
    const n1 = Number(prompt("Digite o primeiro numero"));
    const n2 = Number(prompt("Digite o segundo numero"));
    const soma = n1 + n2;

    alert(`A soma entre ${n1} e ${n2} é igual a: ${soma}`);
}

function somarImputs() {
    const n1 = Number(document.querySelector("#n1_soma").value);
    const n2 = Number(document.querySelector("#n2_soma").value);
    const resultado = n1 + n2;
    document.querySelector("#resultado_soma").textContent = `O resultado da soma é igual a ${resultado}`;
}

function multiplicar() {
    const n1 = Number(prompt("Digite o primeiro número"));
    const n2 = Number(prompt("Digite o segundo número"));

    const multiplicacao = n1 * n2;

    alert(`O produto de ${n1} e ${n2} é igual a: ${multiplicacao}`);
}

function multiplicarInput() {
    const n1 = Number(document.querySelector("#n1_multiplicacao").value);
    const n2 = Number(document.querySelector("#n2_multiplicacao").value);
    const resultado = n1 * n2;
    document.querySelector("#resultado_multiplicacao").textContent = `O resultado da multiplicacao é igual a ${resultado}`;
}