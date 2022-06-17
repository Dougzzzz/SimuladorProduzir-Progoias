
function calculaTributos() {
    let mediaRecolhimento = document.querySelector('#mediaDeRecolhimento').value;
   
    let icms27 = mediaRecolhimento * 0.27;
    let icms73 = mediaRecolhimento * 0.73;
    let antecipacao = icms73 * 0.10;
    let protege6 = icms73 * 0.06;
    let protege15 = icms73 * 0.15;
    let protegeOvg = icms73 * 0.015;
    
    let elementoResultado = document.querySelector("#resultadoSimulacao");
    elementoResultado.innerHTML = `
    <ul>
    <li>ICMS 73% R$ ${icms73.toFixed(2)} Este é o valor do Incentivo</li>
    <li>ICMS 27% R$ ${icms27.toFixed(2)}</li>
    <li>Antecipação 10% R$ ${antecipacao.toFixed(2)}</li>
    <li>Protege 6% R$ ${protege6.toFixed(2)}</li>
    <li>Protege 15% R$ ${protege15.toFixed(2)}</li>
    <li>Protege OVG 1,5% R$ ${protegeOvg.toFixed(2)}</li>
    <li></li>
    <li></li>
</ul>
    `
    
}

