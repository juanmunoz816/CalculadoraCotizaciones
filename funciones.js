console.log("hola mundo")

const btnCalcular = document.querySelector('#calcular');
const btnVolver = document.querySelector('#volver');

const mostrarRespuesta = document.querySelector('#respuesta')

const inputganacia = document.querySelector('#ganancia');
const selectArl = document.querySelector('#arl');
checkPlanilla = document.querySelector('#miCheck');

const rTotal = document.querySelector('#rTotal')
const rSeguridad = document.querySelector('#rSeguridad')
const rSalud = document.querySelector('#rSalud')
const rPension = document.querySelector('#rPension')
const rArl = document.querySelector('#rArl')
const rIBC = document.querySelector('#rIBC')
const rTotalRetenciones = document.querySelector('#rTotalRetenciones')
const rIca = document.querySelector('#rIca')
const rRetefuente = document.querySelector('#rRetefuente')

const salarioMinimoCo = 1160000;


btnCalcular.addEventListener('click' , calcularTotal);
btnVolver.addEventListener('click' , volverInicio);


function calcularTotal(){


    const ganancia = Number(inputganacia.value);
    const Arl = Number(selectArl.value);
    const valorCheck =checkPlanilla.checked;

    let valorIBC = salarioMinimoCo;

    if(!ganancia || !Arl){
        alert("debes ingresar un Valor y selecionar una Actividad")
        return;
    }
    
    if(ganancia>salarioMinimoCo){
        valorIBC = ganancia * 0.40
    }else{
        valorIBC = salarioMinimoCo
    }

    if(valorCheck === false){
        valorIBC = 0
    }
    
    const valorSalud = valorIBC * 0.125;
    const valorPension = valorIBC * 0.16;
    const ValorArl = valorIBC*Arl;
    const ValorICA = ganancia*0.01;
    const ValorRetefuente = ganancia*0.11;
    
    const valorPelanilla = valorPension + valorSalud + ValorArl;
    const valorRetenciones = ValorICA + ValorRetefuente;
    const valorTotal = ganancia + valorPelanilla + valorRetenciones;

    rTotal.innerText = "$" + valorTotal.toLocaleString();
    rSeguridad.innerText = "$" + valorPelanilla.toLocaleString();
    rSalud.innerText = "$" + valorSalud.toLocaleString();
    rPension.innerText = "$" + valorPension.toLocaleString();
    rArl.innerText = "$" + ValorArl.toLocaleString();
    rIBC.innerText = "$" + valorIBC.toLocaleString();
    rTotalRetenciones.innerText = "$" + valorRetenciones.toLocaleString();
    rIca.innerText = "$" + ValorICA.toLocaleString();
    rRetefuente.innerText = "$" + ValorRetefuente.toLocaleString();

    mostrarRespuesta.style.display = "block";
}

function volverInicio(){
    location.reload();
}