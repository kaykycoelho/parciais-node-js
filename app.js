const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3009);

app.get('/', (req, res) => {
  const sites = [
    {titulo: 'Criação Do Corinthians', conteudo: 'O Sport Club Corinthians Paulista foi fundado em 1º de setembro de 1910, por operários do bairro do Bom Retiro, em São Paulo. Inspirado no time inglês Corinthian FC, o clube nasceu com o ideal de ser um time do povo.'},
    {titulo: 'Idolos', conteudo: 'Cássio, Marcelinho carioca, Sócrates, Rivelino entre outros. '},
    {titulo: 'Quantidade De Torcedores', conteudo: 'Corinthians tem um total de 41 milhões de torcedores espalhado pelo mundo. '}, 
  ];
  res.render('index', { titulo: 'História', sites });
});

app.get('/sobre', (req, res) => {
  res.render('sobre', { titulo: 'Conquistas' });
});

app.get('/sobrenos', (req, res) => {
  res.redirect('./sobre');
});

app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});
