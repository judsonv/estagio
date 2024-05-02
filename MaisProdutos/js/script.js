var listaProdutos = [[0,'Microfone','microfone.jpg','E se você curte fazer uma livezinha, mic pra você...',false,'3,44'],
[1,'Teclado','teclado.jpg','Os melhores teclados para um gamer...',false,'5,55'],
[2,'Fone','fone.jpg','Nós temos os melhores fones com redução de ruído que você pode imaginar...',false,'6,00'],
[3,'Kit games','kit.jpg','E se você joga que tal aproveitar aquele kit gamer de alta qualidade...',false,'10,52'],
[4,'Monitor','monitor.jpg','Os nossos monitores propõem um jogo ainda melhor...',false,'0,85'],
[5,'Mouse','mouse.jpg','E ainda temos uma linha de mouses gamer fenomenais, para deixar o seu setup full...',false,'0,85']]


var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}


function montarCardProdutos(){
    
    document.getElementById("divProdutos").innerHTML = "";

    for (var i = 0;i<listaProdutos.length;i++){        
        var conteudo = "";        
        conteudo += '<div class="card">';
        conteudo += `<img src="img/${listaProdutos[i][2]}" class="photo">`;
        conteudo += '<div class="legenda">';
        conteudo += `<h2>${listaProdutos[i][1]}</h2>`;
        conteudo += listaProdutos[i][3];
        if(listaProdutos[i][4] == false){
            conteudo += '</div>';
            conteudo += `<button onclick="comprar(${listaProdutos[i][0]})">Comprar</button>`;
            conteudo += '</div>';
        }
        else{
            conteudo += '</div>';
            conteudo += `<button class="comprado">Comprado</button>`;
            conteudo += '</div>';

        }

       
        document.getElementById("divProdutos").innerHTML += conteudo;
    } 
}

function comprar(id){

    listaProdutos[id][4] = true;

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho",JSON.stringify(carrinho));

    montarCardProdutos();
}


