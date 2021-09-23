/*
    Atividade I: Inicialize um projeto npm;
    ( x ) Preencha nome do projeto;
    ( x ) Preencha o nome de todos os integrantes do grupo;
    ( x ) Preencha a licença como UNLICENSED;
    ( x ) Preencha a versão como 1.0.

    Atividade II: Instale o Nodemon globalmente em sua máquina. Link com a instrução de instalação: https://www.npmjs.com/package/nodemon.
     x


    Atividade III: Ignore a pasta node_modules
    ( x ) Configure o git, utilizando o arquivo .gitignore, para que ele ignore as alterações realizas na pasta node_modules.

    Atividade IV: Crie o projeto 
    ( X ) Instale o Express no projeto (https://expressjs.com/pt-br/),
    (  ) Implemente a aplicação como as seguintes rotas:
        (  ) Rota http://localhost:1234/
            (  ) Insira o texto: Seja bem-vindo ao [nome_do_projeto].
        (  ) Rota http://localhost:1234/sobre/
            (  ) Insire o texto: Sobre o projeto


    Comandos npm
        npm init -> para inicializar o projeto.
        npm install [nome_do_modulo] -> para instalar um módulo de terceiros.
        npm install -> para instalar o projeto quando esta sem a pasta node_modules.
        npm uninstall [nome_do_modulo] -> para desinstalar um módulo de terceiros.
        npm start -> para executar o projeto. 
*/

// Importar o módulo Express
const express = require('express');

//Inicializar o construtor do Express
const aplicativo = new express();

// Criar Rota 
aplicativo.get('/', function(req,res){
    res.send('Seja bem-vindo ao MESA_DE_TRABALHO_AULA_17');
    
});

//Criar outra Rota
aplicativo.get('/sobre', function(req,res){
    res.send('Sobre o projeto');
})

// Inicializar
aplicativo.listen(1234);