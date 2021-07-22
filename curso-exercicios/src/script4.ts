function resumo(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome}, tudo bem? Você têm ${usuario.idade} anos`;
};

let u = {
    nome: 'Vitor', 
    idade: 23
};

resumo(u);