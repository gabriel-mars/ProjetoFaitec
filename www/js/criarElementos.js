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
           var prep = document.createTextNode(receita[i].preparo);
           var rendi = document.createTextNode(receita[i].rendimento);
           
           var p1 = document.createElement('p');
           var p2 = document.createElement('p');
           var h1 = document.createElement('h1');
           
           h1.appendChild(titulo);
           p1.appendChild(prep);
           p2.appendChild(rendi);
           
           div.appendChild(h1);
           div.appendChild(p1);
           div.appendChild(p2);
           
           return(receita[i]);
       }
    }  
}
