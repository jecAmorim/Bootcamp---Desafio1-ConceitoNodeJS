const express = require('express');
const cors  = require('cors');

const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const projects = [];


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
app.use('/projects/:id', validateProjectID);

app.get('/projects', (request, response) => {
  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const { title }  = request.body;

  const project = {
      id: uuid(), 
      title,
      task: []
  };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  // title, url, techs do id contido na rota
  const { id } = request.params;
  const { title } = request.body;
  
  const project = projects.find( project => project.id === id );

  if(!isUuid(id)){
    return response.status(400).json({ error: 'Bad Request'});
  }

  project.title = title;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(!isUuid(id)) {
    return response.status(400).json({error: 'Bad Request'});
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.post('/projects/:id/tasks', (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);
  
  if(projectIndex < 0) {
    return response.status(400).json( { error: 'Bad Request'});
  }

  projects[projectIndex].task.push(title);
  
  return response.json(projects[projectIndex]);
});;


module.exports = app;