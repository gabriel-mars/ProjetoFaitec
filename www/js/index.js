var numerodeReceitas = [];
function principal() {
    var botao = document.getElementById("search_button");
    botao.onclick = function() {
        clearField();
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
        Materialize.toast('Selecione pelo menos um item!', 2000);
        return;
    }    
    pesquisa (ingredientes,tamanhoOl);
    
}

function pesquisa (ingredientes,tamanhoOl) {
    var receitas = listaReceita.receitas;
    var ol = document.getElementById("ol");
    var link = 0;
      
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
                    link++;
                    
                    if(tamanhoOl == 0){
                        /*a.href = receitas[i].link;
                        a.appendChild(item);
                        li.appendChild (a);
                        ol.appendChild (li);*/
                        //numerodeReceitas = parseInt(numerodeReceitas+1, 10);
                        //numIngr = 0;
                    }else{
                        var listItem = tamanhoOl.length;
                        for(var m = 0; m < listItem; m++){
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
    }
    if(link != 0){
        Materialize.toast('Receita(s) Encontrada(s)!', 2000);
    }else{
        Materialize.toast('Nenhuma receita encontrada!', 2000);   
    }
}

//função para remover os filhos do ol
function clearField(){
    var elemento = document.getElementById('ol');
    while(elemento.hasChildNodes()){
        elemento.removeChild(elemento.lastChild);
    }
}

principal ();
