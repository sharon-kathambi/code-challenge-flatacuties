// Your code here
document.addEventListener('DOMContentLoaded', () => {
    function fetchData(){
        fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(data => renderNames(data))
    }

    function renderNames(data){
        let characterName = document.querySelector('#character-bar')
        data.map(function(character){
            let span = document.createElement('span')

            span.innerHTML = character.name

            characterName.appendChild(span)

            span.addEventListener('click', () => {
                const characterName = document.getElementById("name");
                const characterImage = document.getElementById("image");
                const characterVoteCount = document.getElementById("vote-count");
                
                characterName.textContent = character.name;
                characterImage.setAttribute('src', character.image);
                characterVoteCount.textContent = character.votes;
            })
        })
    }
    fetchData()
}) 