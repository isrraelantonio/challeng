//declaração das varáveis a serem utilizadas no código.

let amigos = []

// Criação da função adicionarAmigo. A mesma coleta o valor do input, verifincando inclusive se o mesmo é vázio ou não para tratamento de exceções. 

function adicionarAmigo(){
    
    let amigo =  document.querySelector('input').value.trim();


        if(amigo == ''){ // input vazio?
              alert("digite um nome")
        }else{
            
            if(amigos.includes(amigo)){ // valor cnsta na lista ?
                alert("O seu amigo(a) já está na lista")
                limparCampo()
            }else{ // faça isso então
              amigos.push(amigo)
              apresentar()
              limparCampo()
              
            } 
           
        }
}

function limparCampo(){ // função para limpar o input
    let limpar = document.querySelector('input');
    limpar.value = '';
  }



// A função apresentar junto com o forEach faz a criação de uma lista de item apartir da variável amigo, que recebe elementos dados pelo usuário  apartir do input. 

function apresentar(){
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
  
    amigos.forEach(function(amigo2) {
      let li = document.createElement('li');
      li.textContent = amigo2;
      lista.appendChild(li);
  } );
  
  }



// A função sortearAmigo pega a lista de elemtos da variável amigo e exibe com um amigo seleconado apartir de um sorteio. Para tal fiz uso o do parseint, math.random e o tamanho da lista para fazer essa escolha apartir do indice de cada elemento. Também foi tratada a exceção para lista vazia.
function sortearAmigo(){

    let div = document.getElementById('resultado');
    
      if (amigos.length == 0){
        alert("adicione amigos a sua lista")
      }else{ 
        amigoPremiado = amigos[parseInt(Math.random() * amigos.length)]
        div.innerHTML =`<strong>${amigoPremiado}</strong> foi sorteado!`;
      }
  }
  