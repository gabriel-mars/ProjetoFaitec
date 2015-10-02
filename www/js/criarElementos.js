window.onload = getHash();

function getHash(){
    var hash = location.hash;
    var id = location.hash.split('#')[1];
    id = parseInt(id, 10);
    
    criarElementos(id);
}

function criarElementos(id){
    console.log(id);   
}
