//criando instancia da fila a partir da classe
let minhaFila = new Fila(5);

function addFila(){ 
    const novo = 
        document.getElementById("novoElemento");
   if(minhaFila.enqueue(novo.value)===true){
    alert("Dado inserido");
    novo.value="";
    novo.focus(); // volta o foco para o obj
    console.log(minhaFila);
   }//
   else
    alert("Fila cheia!");
}