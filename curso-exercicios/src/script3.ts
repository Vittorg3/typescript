let names = ['vitor', 'lucas', 90];

names.forEach(function(nome) {
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase());
    } else {
        console.log(nome);
    }
});