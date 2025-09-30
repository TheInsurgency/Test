



import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorInicial, colecaoUf } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
  const nomeUf = req.query.busca;
  const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ "erro": "Nenhuma UF encontrada" });
  }
});

app.get('/ufs/:iduf', (req, res) => {
  const uf = buscarUfPorId(req.params.iduf);

  if (uf) {
    res.json(uf);
  } else if (isNaN(parseInt(req.params.iduf))) {
    res.status(400).send({ "erro": "Requisição inválida" });
  } else {
    res.status(404).send({ "erro": "UF não encontrada" });
  }
});

app.get('/ufs/inicial/:inicial', (req, res) => {
    const inicial = req.params.inicial;
    const resultado = buscarUfsPorInicial(inicial);
  
    if (resultado && resultado.length > 0) {
      res.json(resultado);
    } else {
      res.status(404).json({ erro: "Nenhuma UF encontrada com a sigla inicial fornecida" });
    }
  });

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});



// Thats Bad code i made some time ago