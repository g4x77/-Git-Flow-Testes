document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || cpf === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Cadastro realizado com sucesso!");
    }
});