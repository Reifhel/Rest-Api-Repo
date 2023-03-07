function cria_projeto() {
    url = "https://api.github.com/users/Reifhel/repos";

    fetch(url)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data);
        let i = 0;

        const corpo = document.getElementById('links');

        while(i < data.length){
            let div = document.createElement('div');
            div.className = 'repositorio';

            let nome = document.createElement('h3');
            nome.classList.add('nome');

            let descricao = document.createElement('p');
            descricao.classList.add('descricao');

            let botoesLink = document.createElement('div');

            let linkGit = document.createElement('a');
            linkGit.classList.add('botaoLink');

            let linkPortfolio = document.createElement('a');
            linkPortfolio.classList.add('botaoLink');

            botoesLink.className = 'botoesLink';
            botoesLink.appendChild(linkGit);
            botoesLink.appendChild(linkPortfolio);

            nome.innerHTML = data[i].name.replaceAll("-", " ");
            descricao.innerHTML = data[i].description;
            linkGit.innerHTML = 'GitHub';
            linkPortfolio.innerHTML = 'Página Web';

            linkGit.href = data[i].html_url;
            linkGit.target = '_blank';

            if(data[i].has_pages){
                linkPortfolio.href = data[i].homepage;
                linkPortfolio.target = '_blank';
            } else {
                linkPortfolio.href = '#';
                linkPortfolio.classList.add('inclicavel');
            }
            

            div.appendChild(nome);
            div.appendChild(descricao);
            div.appendChild(botoesLink);
            

            corpo.appendChild(div);
            i++;
        }
    });


} 

window.addEventListener('load', function(){
    cria_projeto();
});
