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
        })
    }
    fetchData()
}) 