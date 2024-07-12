function adicionarFilme() {
    var campoImagemFilme = document.querySelector('#imagemFilme');
    var campoLinkFilme = document.querySelector('#linkFilme');
    var campoNomeFilme = document.querySelector('#nomeFilme');

    var imagemFilme = campoImagemFilme.files[0];
    var linkFilme = campoLinkFilme.value;
    var nomeFilme = campoNomeFilme.value;

    if (imagemFilme && (imagemFilme.type == 'image/jpeg' || imagemFilme.type == 'image/png' || imagemFilme.type == 'image/jfif')) {
        var reader = new FileReader();
        reader.onload = function(e) {
            listarImagemFilmesNatela(e.target.result, linkFilme, nomeFilme);
        }
        reader.readAsDataURL(imagemFilme);
    } else {
        alert('Imagem inválida');
    }

    campoImagemFilme.value = '';
    campoLinkFilme.value = '';
    campoNomeFilme.value = '';
}

function listarImagemFilmesNatela(imagemFilme, linkFilme, nomeFilme) {
    var listaImagemFilmes = document.querySelector('#listaFilmes');
    listaImagemFilmes.innerHTML += `
        <div class="filme">
            <a href="${linkFilme}" target="_blank">
                <img src="${imagemFilme}" alt="${nomeFilme}">
            </a>
            <p>${nomeFilme}</p>
        </div>`;
}
