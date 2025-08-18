const express = require('express');

//express aplicativo - configurando o acesso as funções
const app = express();

//registrar a visualização de engenharia
app.set('view engine', 'ejs');



//ouvindo as requisições na porta
app.listen(3009);

//acesando a rota
app.get('/', (req, res) => {
  //pasando parametros para o body
  const blogs = [
       {titulo: 'criação do corinthians', conteudo: 'O Sport Club Corinthians Paulista foi fundado em 1º de setembro de 1910, por operários do bairro do Bom Retiro, em São Paulo. Inspirado no time inglês Corinthian FC, o clube nasceu com o ideal de ser um time do povo.'},
      {titulo: 'idolos', conteudo: 'Cássio, Marcelinho carioca, Sócrates, Rivelino entre outros. '},
      {titulo: 'quantidade de torcedores', conteudo: 'corinthians tem um total de 41 milhões de torcedores espalhado pelo mundo. '}, 
  ];
      res.render('index', { titulo: 'história', blogs});
});

//nova rota
app.get('/sobre', (req, res) =>{

  res.render('sobre', { titulo: 'conquistas'});
});

//redirecinamento de pagina
app.get('/sobrenos', (req, res) =>{
  res.redirect('./sobre');
});


//erro 404
app.use((req, res) => {
    res.status(404).render('404',{ titulo: '404'});
});