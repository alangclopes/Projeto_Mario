document.addEventListener('DOMContentLoaded', function() {
    fetch('')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('eleicao');
            data.forEach(eleicao => {
                const option = document.createElement('option');
                option.value = eleicao.id;
                option.textContent = eleicao.nome;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar categorias:', error);
        });
});