<h2 align="center" color="#7159c1">
	GoStack - Conceitos Node.js
	<br></br>
	<img alt="gostack" title="#gostack" src="assets/logo.svg" width="250px" />
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
  <a href="#Oque-é-Node.js?">Oque é Node.js?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Características-do-Node">Características do Node</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Exemplo">Exemplo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-Instalar-o-projeto">Como Instalar o projeto</a>
</p>

## Oque é Node.js?

Plataforma que permite usar JavaScript no back-end, onde o back-end é a camada onde fica a regra de negócios da aplicação e a manipulação do banco de dado, como também o funcionamento  da aplicação com integrações com serviços de terceiros. 
Vantagem de não lidar com eventos do usuário final, ele lida com rotas e integrações construída em cima da V8.


## Características do Node

:pushpin: Event-loop<br></br>
:pushpin: Node single-thread<br></br>
:pushpin: Non-blocking I/O<br></br>

## Rotas

GET:  Buscar informações do back-end
POST: Criar uma informação no back-end
PUT/PATH: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

## Exemplo

Supondo que temos um array com o Projeto 1 e Projeto 2, quando chamar a rota get, a saida deve ser um array com ['Projeto 1','Projeto 2']. 
Simulação:

```html
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});
```

## Como Instalar o projeto
```bash
# Clone this repository
$ git clone https://github.com/jecAmorim/Next-Level-Week-1

# Go into the repository
$ cd Next-Level-Week-1

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
