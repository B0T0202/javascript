function calcularMedia(botao) {
    const linha = botao.closest('tr');
    // console.log(linha);
    const nota1 = Number(linha.querySelector('.nota_1').value);
    const nota2 = Number(linha.querySelector('.nota_2').value);
    // console.log(nota1);
    // console.log(nota2);
    const media = (nota1 + nota2) / 2;
    // console.log(media)

    const colunaMedia = linha.querySelector(".media");
    colunaMedia.textContent = media.toFixed(2);

    const colunaStatus = linha.querySelector(".status");

    let badge = "";
    if (media >= 7) {
        badge = `<span class="badge text-bg-success">Aprovado<span>`;
    } else {
        badge = `<span class="badge text-bg-danger">Reprovado<span>`;
    }

    // colunaStatus.textContent = media >= 7 ? "Aprovado" : "Reprovado";
    colunaStatus.innerHTML = badge;
}