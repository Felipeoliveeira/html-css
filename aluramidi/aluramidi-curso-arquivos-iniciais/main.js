function tocaSomPom(){
   document.querySelector('#som_tecla_pom').play() 
}
const listaDeTeclas = document.querySelectorAll('.tecla')
const listaDeSons = document.querySelectorAll('audio')
listaDeTeclas[0].onclick = listaDeSons[0];