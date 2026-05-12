window.onload = function(){
    const btnAdicionar = document.getElementById('btnAdicionar');
    const descricao = document.getElementById('edtDescricao');
    const valor = document.getElementById('edtValor');
    const select = document.getElementById('cmbSelect');

    btnAdicionar.addEventListener('click', function(){
        let msg = [];
        if(descricao.value == '') msg.push('Descricao');
        if(valor.value == '') msg.push('Valor');

        if(msg.length>0){
            alert("Por favor, preencha o(s) campo(s): " + msg.join(', '));
            return;
        }
        
        const option = document.createElement('option');
        option.textContent = descricao.value;
        option.value = valor.value;

        select.append(option);
        descricao.value = '';
        valor.value = '';
    });
}