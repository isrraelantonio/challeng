//declaração das varáveis a serem utilizadas no código.

let amigos = []

// Criação da função adicionarAmigo. A mesma coleta o valor do input, verifincando inclusive se o mesmo é vázio ou não para tratamento de excessões. 

function adcionoarAmigo(){

    let amigo =  document.querySelector('input').value


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
