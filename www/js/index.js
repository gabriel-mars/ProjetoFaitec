var numerodeReceitas = [0];
function principal() {
    var botao = document.getElementById("search_button");
    botao.onclick = function() {
       var ingri = document.getElementsByName("ingrediente");
       var tamanhoOl = document.getElementById("check").children;
        var ingredientes = [];
       validaCheck(ingri,ingredientes,tamanhoOl);
        
        event.preventDefault();
        return false;
    };
}

function validaCheck(ingri,ingredientes,tamanhoOl){
    var naoChecados = 0;
    for (var i = 0; i < ingri.length; i++){
        if(ingri[i].checked == true){
            ingredientes.push(ingri[i].value);
        } else {
            naoChecados = naoChecados+1;
        }
    }
    
    if (naoChecados == ingri.length){
        alert ("Selecione pelo menos um item.");
        return;
    }    
    pesquisa (ingredientes,tamanhoOl);
    
}

function pesquisa (ingredientes,tamanhoOl) {
    var receitas = listaReceita.receitas;
    var ol = document.getElementById("ol");
      
// for para procurar as receitas    
    for (var i=0; i < receitas.length; i++) {
        var numIngr = 0;
        //for para buscar ingredientes
        for (var j=0; j < receitas[i].ingredientes.length; j++) {
            for (var k = 0; k <ingredientes.length; k++){
                //comparar com a busca
                if (ingredientes[k] == receitas[i].ingredientes[j]) {
                    numIngr = numIngr + 1;
                }
                if (numIngr == receitas[i].ingredientes.length){
                    // criar item link e li
                    var a = document.createElement("a");
                    var nomeItem = receitas[i].nome;
                    var item = document.createTextNode(nomeItem);
                    var li = document.createElement("li");
                    Materialize.toast('Receita(s) Encontrada(s)!', 2000);
                                        
                    for(var m = 0; m < listItem; m++){
                        var listado = tamanhoOl[m].childNodes[0];
                        a.setAttribute('href', "../www/receitas.html#" + receitas[i].id);
                        a.appendChild(item);
                        li.appendChild(a);
                        ol.appendChild(li);
                        numerodeReceitas = parseInt(numerodeReceitas +1, 10);
                        numIngr = 0;
                    }
                }
            }
        }
    }
    document.getElementById("p1").innerHTML = numerodeReceitas;    
}

principal ();