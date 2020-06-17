<h2 align="center" color="#7159c1">
	GoStack
	<br></br>
	Desafio 1: Conceitos do NodeJS
	<br></br>
	<img alt="gostack" title="#gostack" src="assets/logo.png" width="250px" />
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jecAmorim/Bootcamp---Conceito-Node.js?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jecAmorim/Bootcamp---Conceito-Node.js">

  <a href="https://github.com/jecAmorim/Next-Level-Week-1/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jecAmorim/Bootcamp---Conceito-Node.js">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/jecAmorim/Bootcamp---Conceito-Node.js/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jecAmorim/Bootcamp---Conceito-Node.js?style=social">
  </a>
</p>

<p align="center">
  <a href="#Sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Exemplo">Exemplo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Middlewares">Middlewares</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-Instalar-o-projeto">Como Instalar o projeto</a>
</p>

## Sobre o desafio
Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

## Rotas

```bash
POST /projects: A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
```

## Exemplo

Se eu chamar a rota POST /projects repassando { id: 1, title: 'Novo projeto' } e a rota POST /projects/1/tasks com { title: 'Nova tarefa' }, meu array de projetos deve ficar assim:

```bash
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

## Middlewares

Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;

## Como Instalar o projeto
```bash
# Clone this repository
$ git clone https://github.com/jecAmorim/Bootcamp---Desafio1-ConceitoNodeJS

# Go into the repository
$ cd Bootcamp---Desafio1-ConceitoNodeJS

# Install dependencies of backend
$ cd backend

$ npm install
or
$ yarn install

# Run
$ yarn start
```


<br></br>
<br></br>
Made by Jeciane Amorim [Get in touch!](https://www.linkedin.com/in/francisca-jeciane-amorim-da-silva-056513184/)
