const express = require("express");
const app = express();
const PORT = 3000;

const models = require('./models');

app.use(express.json());

app.get("/cliente", async (req: any, res: any) => {
    const clientes = await models.Cliente.findAll();
    res.json(clientes);
});

app.put("/cliente", async (req: any, res: any) => {
    const nome = req.body.nome || '';
    const usuario = req.body.usuario || '';
    const senha = req.body.senha || '';
    const cpf = req.body.cpf || '';
    const dataNasc = req.body.dataNasc || '';
    await models.Cliente.create({ nome, usuario, senha, cpf, dataNasc });
    res.sendStatus(200);
});

app.delete("/cliente/:id", async (req: any, res: any) => {
    const id = req.params.id;
    const cliente = await models.Cliente.findByPk(id);
    if (!cliente) {
        res.sendStatus(404);
        return;
    }
    models.Cliente.destroy({ where: { id } });
    res.sendStatus(200);
});

app.patch("/cliente/:id", async (req: any, res: any) => {
    const id = req.params.id;
    const cliente = await models.Cliente.findByPk(id);
    if (!cliente) {
        res.sendStatus(404);
        return;
    }
    const nome = req.body.nome || cliente.nome;
    const usuario = req.body.usuario || cliente.usuario;
    const senha = req.body.senha || cliente.senha;
    const cpf = req.body.cpf || cliente.cpf;
    const dataNasc = req.body.dataNasc || cliente.dataNasc;
    await models.Cliente.update({ nome, usuario, senha, cpf, dataNasc }, { where: { id } });
    res.sendStatus(200);
});
 
app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})
