require('dotenv').config(); // Arquivo .env
const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routers/router');

const app = express(); // Iniciando servidor

app.use(express.json()); //Resposta via JSON

/*
* Criar -> POST /api/user -- {objeto}
* Buscar -> GET /api/user
* Buscar unico -> GET /api/user/1
* Deletar -> DELETE /api/user/2
* Atualizar - PUT /api/user4 -- {objeto}

*/

app.use('/api', routes)

sequelize.authenticate()
.then(() => {
    console.log("Conexao com o banco de dados deu certo");
})
.catch(err => {
    console.log("Erro ao conectar no banco: ", err);
});

// process.env ? PORT : 3000
const PORT = process.env.PORT || 3000;
// Listen -> Ouvir
//Ouvindo no possivel ou na porta 3000
app.listen(PORT, () => {
    console.log('-----------------');
    console.log(`Running on http://${PORT}`);
    console.log('-----------------');
});