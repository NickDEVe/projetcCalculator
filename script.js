
 
function insert(num){
    let numero= document.getElementById("visor").innerText;
    document.getElementById("visor").innerHTML= numero + num;
}



function deletar(){

    document.getElementById("visor").innerHTML=" "


}


function calcular(){

    let visor= document.getElementById("visor").innerHTML;

    if (visor){
        document.getElementById("visor").innerHTML= eval(visor);
    }
   


}