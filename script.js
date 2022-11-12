
function calculaTributos() {
    let mediaRecolhimento = document.querySelector('#mediaDeRecolhimento').value;
    
    let icms27 = Number(mediaRecolhimento) * 0.27;
    let icms73 = Number(mediaRecolhimento) * 0.73;
    let antecipacao = icms73 * 0.10;
    let protege6 = icms73 * 0.06;
    let protege15 = icms73 * 0.15;
    let protegeOvg = icms73 * 0.015;
    let benefícioLiquido = icms73 - (icms27 + antecipacao + protege6 + protege15 + protegeOvg)
    
    let elementoResultado = document.querySelector("#resultadoSimulacao");
    elementoResultado.innerHTML = `
    <h3> Obrigações Tributárias do Produzir </h3>
    <ul class="listaObrigacoes">        
        <li class="listaObrigacoesItem">Subvenção 73% ${formataMoeda(icms73)} </li>
        <li class="listaObrigacoesItem">ICMS 27% ${formataMoeda(icms27)}</li>
        <li class="listaObrigacoesItem">Antecipação 10% ${formataMoeda(antecipacao)}</li>
        <li class="listaObrigacoesItem">Protege 6%  ${formataMoeda(protege6)}</li>
        <li class="listaObrigacoesItem">Protege 15%  ${formataMoeda(protege15)}</li>
        <li class="listaObrigacoesItem">Protege OVG 1,5% ${formataMoeda(protegeOvg)}</li>
        <li class="listaObrigacoesItem">Benefício líquido ${formataMoeda(benefícioLiquido)}</li>

  
    </ul>
    `
    calculaProgoias();
    
}

function calculaProgoias(){
    let mediaRecolhimento = document.querySelector('#mediaDeRecolhimento').value;
    mediaRecolhimento = Number(mediaRecolhimento);
    
    //calculo do Progoiás no primeiro ano
    let icms64 = mediaRecolhimento * 0.64;
    let icms36 = mediaRecolhimento * 0.36;
    let protegeAno1 = mediaRecolhimento * 0.1;
    let benefícioLiquido1ano = icms64 - (icms36 + protegeAno1);

    //calculo do Progoiás no segundo ano
    let icms65 = mediaRecolhimento * 0.65;
    let icms35 = mediaRecolhimento * 0.35;
    let protegeAno2 = mediaRecolhimento * 0.08;
    let benefícioLiquido2ano = icms65 - (icms35 + protegeAno2);

    //calculo do Progoiás no terceiro ano
    let icms66 = mediaRecolhimento * 0.66;
    let icms34 = mediaRecolhimento * 0.34;
    let protegeAno3 = mediaRecolhimento * 0.06;
    let benefícioLiquido3ano = icms66 - (icms34 + protegeAno3);

    let elementoResultado = document.querySelector("#resultadoSimulacaoProgoias");
    elementoResultado.innerHTML = `
    <h3> Obrigações Tributárias do Pro Goiás </h3>
    
    <h4>Primeiro ano de utilização</h4>

    <ul class="listaObrigacoesProGoias"> 
        <li class="listaObrigacoesItemPro">Subvenção 64% ${formataMoeda(icms64)} </li>
        <li class="listaObrigacoesItemPro">ICMS 36% ${formataMoeda(icms36)}</li>
        <li class="listaObrigacoesItemPro">PROTEGE 10% ${formataMoeda(protegeAno1)}</li>
        <li class="listaObrigacoesItemPro">Benefício Liquido  ${formataMoeda(benefícioLiquido1ano)}</li>
          
    </ul>

    <h4>Segundo ano de utilização</h4>

    <ul class="listaObrigacoesProGoias">
        <li class="listaObrigacoesItemPro">Subvenção 65% ${formataMoeda(icms65)} </li>
        <li class="listaObrigacoesItemPro">ICMS 35% ${formataMoeda(icms35)}</li>
        <li class="listaObrigacoesItemPro">PROTEGE 8% ${formataMoeda(protegeAno2)}</li>
        <li class="listaObrigacoesItemPro">Benefício Liquido  ${formataMoeda(benefícioLiquido2ano)}</li>
          
    </ul>

    <h4>Terceiro e demais anos de utilização</h4>

    <ul class="listaObrigacoesProGoias"> 
        <li class="listaObrigacoesItemPro">Subvenção 66% ${formataMoeda(icms66)} </li>
        <li class="listaObrigacoesItemPro">ICMS 34% ${formataMoeda(icms34)}</li>
        <li class="listaObrigacoesItemPro">PROTEGE 6% ${formataMoeda(protegeAno3)}</li>
        <li class="listaObrigacoesItemPro">Benefício Liquido  ${formataMoeda(benefícioLiquido3ano)}</li>
          
    </ul>
    `
}

function formataMoeda(valor){
    valor = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return valor;
}

function limparSimulação() {
    let elementoResultado = document.querySelector("#resultadoSimulacao");
    elementoResultado.innerHTML = ``
    
    elementoResultado = document.querySelector("#resultadoSimulacaoProgoias");
    elementoResultado.innerHTML = ``
    document.getElementById('mediaDeRecolhimento').value = ``

}