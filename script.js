//VALIDAÇÃO DA SOLICITAÇÃO DE PRODUTOS
document.addEventListener("DOMContentLoaded", function () {
    const botaoSolicitar = document.querySelectorAll('.btn-amarelo')

    botaoSolicitar.forEach(botao => {
        botao.addEventListener('click', function (event) {
            alert("Seu produto foi solicitado com sucesso!");
        });
    });
});

//VALIDAÇÃO DA PÁGINA DE CONTATO

// Aguarda o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

    //  Formata o número automaticamente enquanto o usuário digita:
    //  (XX) XXXX-XXXX  ou  (XX) XXXXX-XXXX

    let campoTelefone = document.getElementById("telefone");

    if (campoTelefone) {
        campoTelefone.addEventListener("input", function () {

        });
    }

    campoTelefone.addEventListener("input", function () {

        // Remove tudo que não for número
        let valor = campoTelefone.value.replace(/\D/g, "");

        // Limita a 11 dígitos no máximo
        valor = valor.substring(0, 11);

        // Aplica a máscara conforme a quantidade de dígitos digitados
        if (valor.length > 10) {
            // Celular: (XX) XXXXX-XXXX
            valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else {
            // Fixo: (XX) XXXX-XXXX
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        }

        campoTelefone.value = valor;

    });


    //  VALIDAÇÃO DO FORMULÁRIO NO ENVIO

    // Seleciona o formulário pelo id
    let formulario = document.getElementById("formContato");

    formulario.addEventListener("submit", function (evento) {

        // Impede o envio padrão do formulário enquanto validamos os campos
        evento.preventDefault();

        // Pega os valores digitados em cada campo (trim remove espaços nas pontas)
        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefone = document.getElementById("telefone").value.trim();
        let mensagem = document.getElementById("mensagem").value.trim();


        //  Validação do Nome 

        if (nome === "") {
            alert("Por favor, preencha o campo Nome.");
            document.getElementById("nome").focus();
            return;
        }

        if (nome.length < 3) {
            alert("O nome deve ter pelo menos 3 letras.");
            document.getElementById("nome").focus();
            return;
        }


        // ---- Validação do E-mail ----
        let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            alert("Por favor, informe um e-mail válido (exemplo: nome@email.com).");
            document.getElementById("email").focus();
            return;
        }


        // ---- Validação do Telefone ----
        let telefoneValido = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

        if (!telefoneValido.test(telefone)) {
            alert("Telefone inválido. Exemplo: (21) 99999-9999");
            document.getElementById("telefone").focus();
            return;
        }


        // ---- Validação da Mensagem ----

        if (mensagem.length < 10) {
            alert("A mensagem deve ter pelo menos 10 caracteres.");
            document.getElementById("mensagem").focus();
            return;
        }


        // Todos os campos estão corretos
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");

        // Limpa todos os campos de uma vez usando o método reset do formulário
        formulario.reset();

    });

});
