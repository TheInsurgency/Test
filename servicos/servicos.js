import colecaoUf from "../dados.js";

export { colecaoUf }

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
};

export const buscarUfsPorInicial = (inicial) => {
    const inicialMaiuscula = inicial.toUpperCase();
    return colecaoUf.filter(uf => uf.sigla.startsWith(inicialMaiuscula));
  };

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
};