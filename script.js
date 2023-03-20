//criando instancia da fila a partir da classe
let minhaFila = new Fila(5);

function addFila(){ 
    const novo = 
        document.getElementById("novoElemento");
   if(minhaFila.enqueue(novo.value)===true){
    novo.value="";
    novo.focus(); // volta o foco para o obj
    mostrarFila();
   }//
   else
    alert("Fila cheia!");
}
//--------------------------------------------------    
function mostrarFila(){
    const filaElemento = 
       document.getElementById("listFila");
    filaElemento.textContent = 
        minhaFila.toString();   
}