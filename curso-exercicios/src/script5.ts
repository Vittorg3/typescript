function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você têm ${usuario.idade} anos`;
    } else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
    
};

let u = {
    nome: 'Vitor', 
    idade: 23
};

resumo(u);