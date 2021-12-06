function alterarBorder() {
    let top_left = document.querySelector('#top-left').value;
    let top_right = document.querySelector('#top-right').value;
    let bottom_left = document.querySelector('#bottom-left').value;
    let bottom_right = document.querySelector('#bottom-right').value;

    document.getElementById('radiusBox').style.borderRadius = `${top_left}% ${top_right}% ${bottom_right}% ${bottom_left}%`
    

    document.getElementById('textGenerated').textContent = `border-radius: ${top_left}% ${top_right}% ${bottom_right}% ${bottom_left}%;`

};

function copy(){

    navigator.clipboard.writeText(document.getElementById('textGenerated').textContent);

    window.alert("Copiado com Sucesso");
};