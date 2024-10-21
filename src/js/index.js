// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
    // passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
   const botaoAlterarTema = document.getElementById("botao-alterar-tema");

   // passo 2 - pegar no js o elemento HTML correspondente ao body
   const body = document.querySelector("body");
   const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

   // passo 3 - identificar o clique do usuário no botão de troca de tema
   botaoAlterarTema.addEventListener("click", () => {
        //passo 3.1 - verificar se o body já tem a classe modo-escuro, caso já,remover a classe modo-escuro do body
        const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
         
        body.classList.toggle("modo-escuro");

         if (modoEscuroEstaAtivo) {
             imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");


          } else {
            imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
          }
        
        
         
        // passo 4 - adicionar a classe modo-escuro no body
        

        //passo 5 - trocar a imgem do botão de alterar tema
        

        //objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remova a classe para mudar ele pro modo claro e mudar a imagem pro sol

        
    });