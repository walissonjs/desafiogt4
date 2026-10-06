const readline = require("readline-sync");

// =======================================================
//                    SISTEMA DE ALUNOS
// =======================================================

// Array para armazenar os alunos. Os colchetes [] indicam que é um array, ou seja, uma lista de elementos.
let alunos = [];

// Variável de controle do Loop (evitar ficar digitando true sempre)
let executando = true;

// Estrutura de repetição, que vai repetir enquanto a variável executando for trues
while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS:");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    //readLine.question é uma função que permite ler a entrada do usuário no console. Ela exibe uma mensagem (prompt) e espera o usuário digitar algo, retornando o valor digitado como uma string. Neste caso, vamos abordar um switch case, que é uma estrutura de controle de fluxo que permite executar diferentes blocos de código com base no valor de uma expressão. O switch case é útil quando temos várias opções possíveis e queremos executar um bloco específico para cada opção.

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        //----------------------------------------------------------------
        // ---------------- CADASTRAR ALUNOS ---------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = parseFloat(readline.question("Nota: "));

            // 1) TODO: Verificar se a nota está entre 0 e 10
            if (nota >= 0 && nota <= 10) {

                // 2) TODO: Criar um objeto aluno
                let aluno = {
                    nome: nome,
                    idade: idade,
                    nota: nota
                }

                // 3) TODO: Adicionar o aluno ao array
                alunos.push(aluno);
                console.log("Aluno cadastrado com sucesso!");
            } else {
                console.log("Nota inválida! Digite um valor entre 0 e 10.");
            }
            break;

        //----------------------------------------------------------------
        // -------------- LISTAR ALUNOS -----------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS: ---");

            // 1) Verificar se existem alunos cadastrados

            if (alunos.length !== 0) {
                for (let aluno of alunos) {
                    //EXEMPLO 01
                    console.log("---------------");
                    console.log("Nome: " + aluno.nome);
                    console.log("Idade: " + aluno.idade);
                    console.log("Nota: " + aluno.nota+"\n");

                    // EXEMPLO 02
                    // console.log(`
                    //     ID do Aluno: ${alunos.indexOf(aluno)+1}
                    //     Nome: ${aluno.nome}
                    //     Idade: ${aluno.idade}
                    //     Nota: ${aluno.nota}
                    // `);

                    // EXEMPLO 03
                    // for (let i = 0; i < alunos.length; i++) {
                    //     console.log("---------------");
                    //     console.log("Nome: " + alunos[i].nome); // alunos[i] é o aluno atual no loop, e .nome acessa a propriedade nome desse aluno. O [i] é usado para acessar o elemento na posição i do array alunos.
                    //     console.log("Idade: " + alunos[i].idade);
                    //     console.log("Nota: " + alunos[i].nota);
                    // }
                }

            } else {
                console.log("Nenhum aluno cadastrado!");
            }
            console.log("--- Total de Alunos: ---");
            console.log(alunos.length);
            break;
        // 2) Percorrer o array utilizando FOR
        // for (let i = 0; i < alunos.length; i++) {
        // }

        // 3) Mostrar: Nome, Idade e Nota
        // for (let i = 0; i < alunos.length; i++) {
        //     console.log("---------------");
        //     console.log("Nome: " + alunos[i].nome); // alunos[i] é o aluno atual no loop, e .nome acessa a propriedade nome desse aluno. O [i] é usado para acessar o elemento na posição i do array alunos.
        //     console.log("Idade: " + alunos[i].idade);
        //     console.log("Nota: " + alunos[i].nota);
        //     console.log("---------- Resumo Alunos: -----");
        //     console.log(alunos);
        // }


        //----------------------------------------------------------------
        // ----- CONSULTAR ALUNOS ----------
        case "3":

            console.log("\n--- CONSULTAR ALUNO: ---");
            let nomeBusca = readline.question("Digite o nome do aluno: ").toLowerCase();
            let alunoEncontrado = false;

            // 1) Percorrer o array procurando pelo nome informado.

            for (let i = 0; i < alunos.length; i++) {
                // Se encontrar:
                // - Mostrar os dados
                if (alunos[i].nome.toLowerCase() === nomeBusca) {
                    console.log("----- Pesquisa: ----");
                    console.log("Aluno: " + alunos[i].nome);
                    console.log("Idade: " + alunos[i].idade);
                    console.log("Nota: " + alunos[i].nota);

                    // - Alterar alunoEncontrado para true
                    alunoEncontrado = true;
                    break;
                    // - Utilizar BREAK
                }
            }
            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
                break;
            }
            break


        //----------------------------------------------------------------
        //---------------------------- SITUAÇÃO --------------------------
        case "4":

            console.log("\n--- SITUAÇÃO DOS ALUNOS: ---\n");

            // 2) Percorrer todos os alunos
            if (alunos.length === 0) {
                console.log("Nenhum aluno Cadastrado!");
            }
                for (let i = 0; i < alunos.length; i++) {
                    let aluno = alunos[i];
                    console.log(`\nNome: ${aluno.nome}`);
                    console.log(`Nota: ${aluno.nota}`);

                    // Se nota >= 7 >>>> Aprovado
                    // Senão se nota >= 5 >>>> Recuperacao
                    // Senão >>>> Reprovado
                    if (aluno.nota >= 7) {
                        console.log(`------------------\n→ Situação: Aprovado(a)!`);
                    } else if (aluno.nota >= 5) {
                        console.log(`------------------\n→ Situação: Em Recuperação!`);
                    } else {
                        console.log(`------------------\n→ Situação: Reprovado(a)!`);
                    }
                }
        break;

        // --------------------------------
        //        ENCERRAR APLICAÇÃO
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
