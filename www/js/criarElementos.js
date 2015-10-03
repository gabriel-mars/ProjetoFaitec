window.onload = getHash();

function getHash(){
    var hash = location.hash;
    var id = location.hash.split('#')[1];
    id = parseInt(id, 10);
    
    criarElementos(id);
}

function criarElementos(id){
    var div = document.getElementById('container');
    var receitas = listaReceita.receitas;
    
    for(var i = 0; i < receitas.length; i++){
       var receita = receitas[i];
       if(receita.id == id){
           var titulo = document.createTextNode(receita.nome);
           var h1 = document.createElement('h1');
           h1.appendChild(titulo);
           div.appendChild(h1);
           
           var ol = document.createElement('ol');
           for(var j = 0; j <receita.totalIngri.length; j++){
               var ingrediente = receita.totalIngri[j];
               var text = document.createTextNode(ingrediente);
               var li = document.createElement('li');
               li.appendChild(text);
               ol.appendChild(li);
           }
           div.appendChild(ol);
           
           var prep = document.createTextNode(receita.preparo);
           var p1 = document.createElement('p');
           p1.appendChild(prep);
           div.appendChild(p1);
           
           var rendi = document.createTextNode(receita.rendimento);
           var p2 = document.createElement('p');
           p2.appendChild(rendi);
           div.appendChild(p2);
           
           break;
       }
    }  
}
