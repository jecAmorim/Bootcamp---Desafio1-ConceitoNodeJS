const express = require('express');
const cors  = require('cors');

const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];


function logRequests(request, response, next){
  const { method, url} = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);
  console.count("");

  next(); //vai pro proximo middleware
}

function validateProjectID(request, response, next){
  const { id } = request.params;

  if(!isUuid(id)){
      return response.status(400).json({erro: 'Invalid project ID. '});
  }

  return next();
}

app.use(logRequests);
app.use('/repositories/:id', validateProjectID);

app.get('/repositories', (request, response) => {
  return response.json(repositories);
});

app.post('/repositories', (request, response) => {
  const { title }  = request.body;

  const repository = {
      id: uuid(), 
      title,
      task: []
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put('/repositories/:id', (request, response) => {
  // title, url, techs do id contido na rota
  const { id } = request.params;
  const { title } = request.body;
  
  const repository = repositories.find( repository => repository.id === id );

  if(!isUuid(id)){
    return response.status(400).json({ error: 'Bad Request'});
  }

  repository.title = title;

  return response.json(repository);
});

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(!isUuid(id)) {
    return response.status(400).json({error: 'Bad Request'});
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post('/repositories/:id/tasks', (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  
  if(repositoryIndex < 0) {
    return response.status(400).json( { error: 'Bad Request'});
  }

  repositories[repositoryIndex].task.push(title);
  
  return response.json(repositories[repositoryIndex]);
});;


module.exports = app;