var tempo;
var atual = 1;

function test(){
    alert("Funciona!");
}

function bkChange(opc)
{
   parar();
   switch (opc)
   {
      case 1: document.getElementById("titulo").style.backgroundColor = "#f1ca30";
              document.getElementById("titulo").innerHTML = "Destaque";
              document.getElementById("Banner").style.color = "#f1ca30";
              document.getElementById("Banner").style.backgroundImage = "url('Imagens/Banner/Destaque/jurassic.jpg')";
              document.getElementById("txtB").innerHTML = "Sucesso de bilheteria!";
              
              /*Posters Críticas*/
              document.getElementById("c1").style.backgroundImage = "url('Imagens/Criticas/Series/GoT.jpg')";
              document.getElementById("c2").style.backgroundImage = "url('Imagens/Criticas/Filmes/divertido.jpg')";
              document.getElementById("c3").style.backgroundImage = "url('Imagens/Criticas/Games/witcher.jpg')";
              document.getElementById("c4").style.backgroundImage = "url('Imagens/Criticas/Filmes/mad.jpg')";
              break;
           
      case 2: document.getElementById("titulo").style.backgroundColor = "#d4520f";
              document.getElementById("titulo").innerHTML = "Filmes";
              document.getElementById("Banner").style.color = "#d4520f"; 
              document.getElementById("Banner").style.backgroundImage = "url('Imagens/Banner/Filmes/jack.jpg')";
              document.getElementById("txtB").innerHTML = "Volta filmagens de Piratas do Caribe";
           
              /*Posters Críticas*/
              document.getElementById("c1").style.backgroundImage = "url('Imagens/Criticas/Filmes/dbz.jpg')";
              document.getElementById("c2").style.backgroundImage = "url('Imagens/Criticas/Filmes/dark.jpg')";
              document.getElementById("c3").style.backgroundImage = "url('Imagens/Criticas/Filmes/divertido.jpg')";
              document.getElementById("c4").style.backgroundImage = "url('Imagens/Criticas/Filmes/mad.jpg')";
              break;
           
      case 3: document.getElementById("titulo").style.backgroundColor = "#a6a8ab";
              document.getElementById("titulo").innerHTML = "Séries";
              document.getElementById("Banner").style.color = "#a6a8ab";
              document.getElementById("Banner").style.backgroundImage = "url('Imagens/Banner/Series/walking.jpg')";
              document.getElementById("txtB").innerHTML = "Nova Temporada The Walking Dead";
           
              /*Posters Crítica*/
              document.getElementById("c1").style.backgroundImage = "url('Imagens/Criticas/Series/darevil.jpg')";
              document.getElementById("c2").style.backgroundImage = "url('Imagens/Criticas/Series/orange.jpg')";
              document.getElementById("c3").style.backgroundImage = "url('Imagens/Criticas/Series/flash.jpg')";
              document.getElementById("c4").style.backgroundImage = "url('Imagens/Criticas/Series/GoT.jpg')";
              break;
           
      case 4: document.getElementById("titulo").style.backgroundColor = "#876db0";
              document.getElementById("titulo").innerHTML = "Games";
              document.getElementById("Banner").style.color = "#876db0"; 
              document.getElementById("Banner").style.backgroundImage = "url('Imagens/Banner/Games/edge.jpg')";
              document.getElementById("txtB").innerHTML = "Mirrors Edge em mundo aberto";
           
              /*Posters Crítica*/
              document.getElementById("c1").style.backgroundImage = "url('Imagens/Criticas/Games/mortal.jpg')";
              document.getElementById("c2").style.backgroundImage = "url('Imagens/Criticas/Games/witcher.jpg')";
              document.getElementById("c3").style.backgroundImage = "url('Imagens/Criticas/Games/blood.jpg')";
              document.getElementById("c4").style.backgroundImage = "url('Imagens/Criticas/Games/hardline.jpg')";
              break;
           
      case 5: document.getElementById("titulo").style.backgroundColor = "#f7e100";
              document.getElementById("titulo").innerHTML = "HQ";
              document.getElementById("Banner").style.color = "#f7e100"; 
              document.getElementById("Banner").style.backgroundImage = "inherit";
              document.getElementById("txtB").innerHTML = "Fim do HQ do 4Fantástico";
           
              /*Posters Crítica*/
              document.getElementById("c1").style.backgroundImage = "url('Imagens/Criticas/HQ/batman.jpg')";
              document.getElementById("c2").style.backgroundImage = "url('Imagens/Criticas/HQ/avengers.jpg')";
              document.getElementById("c3").style.backgroundImage = "url('Imagens/Criticas/HQ/quarteto.jpg')";
              document.getElementById("c4").style.backgroundImage = "url('Imagens/Criticas/HQ/suicide.jpg')";
              break;
           
      case 6: document.getElementById("titulo").style.backgroundColor = "#ffac65";
              document.getElementById("titulo").innerHTML = "Música";
              document.getElementById("Banner").style.color = "#ffac65"; 
              document.getElementById("Banner").style.backgroundImage = "url('Imagens/Banner/Musicas/super.jpg')";
              document.getElementById("txtB").innerHTML = "Supercombo sai do SuperStar";
             
              /*Posters Crítica*/
              document.getElementById("c1").style.backgroundImage = "url('Imagens/Criticas/Musicas/hozier.jpg')";
              document.getElementById("c2").style.backgroundImage = "url('Imagens/Criticas/Musicas/super.jpg')";
              document.getElementById("c3").style.backgroundImage = "url('Imagens/Criticas/Musicas/daft.jpg')";
              document.getElementById("c4").style.backgroundImage = "url('Imagens/Criticas/Musicas/sam.jpeg')";
              break;
           
      case 7: document.getElementById("titulo").style.backgroundColor = "darkslategray";
              document.getElementById("titulo").innerHTML = "Atores";
              document.getElementById("Banner").style.color = "darkslategray"; 
              document.getElementById("Banner").style.backgroundImage = "url('Imagens/Banner/Atores/spider.jpg')";
              document.getElementById("txtB").innerHTML = "Novo Homem Aranha";
           
              /*Posters Crítica*/
              document.getElementById("c1").style.backgroundImage = "url('Imagens/Criticas/Atores/jack.jpg')";
              document.getElementById("c2").style.backgroundImage = "url('Imagens/Criticas/Atores/leo.jpg')";
              document.getElementById("c3").style.backgroundImage = "url('Imagens/Criticas/Atores/keira.jpg')";
              document.getElementById("c4").style.backgroundImage = "url('Imagens/Criticas/Atores/depp.jpg')";
              break;
   }
   atual = opc;
   iniciaTempo();
}


function parar() {  window.clearInterval(tempo); }

function mudaComTempo()
{
   atual++;
   if (atual == 7) { atual = 1; }
   bkChange( atual );
}

function iniciaTempo() { tempo = setInterval('mudaComTempo()',20000); }