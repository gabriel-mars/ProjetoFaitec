window.onload = getHash();

function getHash(){
    var hash = location.hash;
    var id = location.hash.split('#')[1];
    id = parseInt(id, 10);
    
    criarElementos(id);
}

function criarElementos(id){
    var div = document.getElementById('container');
    var receita = listaReceita.receitas;
    
    for(var i = 0; i < receita.length; i++){
       if(receita[i].id == id){
           var titulo = document.createTextNode(receita[i].nome);
           var h1 = document.createElement('h1');
           h1.appendChild(titulo);
           div.appendChild(h1);
           return(receita[i]);
       }
    }  
}
