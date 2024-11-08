function showInstructions(type) {
    let text = '';

    if (type === 'burns') {
        text = 'Para queimaduras: Resfrie a área com água corrente por pelo menos 10 minutos. Evite usar gelo ou substâncias caseiras.';
    } else if (type === 'choking') {
        text = 'Para engasgo: Se a pessoa está consciente, tente a manobra de Heimlich. Se inconsciente, inicie RCP e peça ajuda imediatamente.';
    } else if (type === 'cuts') {
        text = 'Para cortes: Limpe a ferida com água, aplique pressão com um pano limpo para parar o sangramento e cubra com um curativo.';
    }

    document.getElementById('instruction-text').innerText = text;
}