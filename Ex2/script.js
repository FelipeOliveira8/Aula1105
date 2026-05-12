window.onload = function(){
    const descricao = document.getElementById('edtDescricao');
    const endereco = document.getElementById('edtEndereco');
    const adicionar = document.getElementById('btnAdicionar');
    const links = document.getElementById('ulLinks');

    adicionar.addEventListener('click', function(){
        let msg = [];
        if(descricao.value == '') msg.push('Descricao');
        if(endereco.value == '') msg.push('Endereco');

        if(msg.length>0){
            alert("Por favor, preencha o(s) campo(s): " + msg.join(', '));
            return;
        }

        const novaLista = document.createElement('li');
        const novoA = document.createElement('a');

        novoA.textContent = descricao.value;
        novoA.href = endereco.value;
        novoA.target = '_blank';
        novaLista.append(novoA);

        links.append(novaLista);
        descricao.value='';
        endereco.value='';
    });
}