const readline = require("readline-sync");

// =======================================================
//                    SISTEMA DE ALUNOS
// =======================================================

let alunos = [];

let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

//----------------------------------------------------------------
        // ---------------- CADASTRAR ALUNOS ---------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = Number(readline.question("Nota: "));

            // 1) Verificar se a nota está entre 0 e 10
            while (nota < 0 || nota > 10) {
                console.log("Nota inválida! Digite um valor entre 0 e 10.");
                nota = Number(readline.question("Nota: "));
            }

            // 2) Criar um objeto aluno
            let aluno = {
                nome: nome,
                idade: idade,
                nota: nota
            };
            
            // 3) Adicionar o aluno ao array
            alunos.push(aluno);

            console.log("Aluno cadastrado com sucesso!");
            break;

//----------------------------------------------------------------
        // -------------- LISTAR ALUNOS -----------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");

        // 1) Verificar se existem alunos cadastrados

                if (alunos.length === 0) {
                    console.log("Nenhum aluno cadastrado.");
                    break;
                }

        // 2) Percorrer o array utilizando FOR
                for (let i = 0; i < alunos.length; i++) {
                }

        // 3) Mostrar: Nome, Idade e Nota
                for (let i = 0; i < alunos.length; i++) {
                    console.log("---------------");
                    console.log("Nome: " + alunos[i].nome);
                    console.log("Idade: " + alunos[i].idade);
                    console.log("Nota: " + alunos[i].nota);
                }

        break;


        // ----- CONSULTAR ALUNOS ----------
        case "3":

    console.log("\n--- CONSULTAR ALUNO ---");

    let nomeBusca = readline.question("Digite o nome: ");

    let alunoEncontrado = false;

    // 1) Percorrer o array procurando
    // pelo nome informado.

    // Se encontrar:
    // - Mostrar os dados
    // - Alterar alunoEncontrado para true
    // - Utilizar BREAK


    if (!alunoEncontrado) {
        console.log("Aluno nao encontrado.");
    }

    break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

    console.log("\n--- SITUACAO DOS ALUNOS ---");

    // TODO:
    // Percorrer todos os alunos

    // Se nota >= 7
    //    Aprovado
    //
    // Senão se nota >= 5
    //    Recuperacao
    //
    // Senão
    //    Reprovado


    break;


        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

    console.log("\nSistema encerrado!");

    executando = false;

    break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

    console.log("\nOpcao invalida!");

    break;
}
}
