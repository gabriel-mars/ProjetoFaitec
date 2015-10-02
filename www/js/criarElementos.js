window.onload = getHash();

function getHash(){
    var hash = location.hash;
    var id = location.hash.split('#')[1];
    
    criarElementos(id);
}

function criarElementos(id){
    alert(id);   
}