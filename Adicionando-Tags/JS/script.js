const ul = document.querySelector("ul"),
    input = ul.querySelector("input"),
    contadorTag = document.querySelector(".detalhes span");

let tags = [], maxTags = 10;

countTag();

function countTag() {
    input.focus();
    contadorTag.innerHTML = maxTags - tags.length; // subtraindo o valor maximo de tags da quantidade de tags existentes.
}

function addTag(e) {
    if (e.key == "Enter") {
        let tag = e.target.value.replace(/\s+/g, ' '); // remove espaços indesejados de tags que usuário possa colocar
        if (tag.length > 1 && !tags.includes(tag)) // se o comprimento das tags for maior que 1 e a tag ainda não existir
        {
            if (tags.length < 10) {
                tag.split(',').forEach(tag => { //separando cada tag da vírgula ","
                    tags.push(tag); // adicionando cada tag dentro do array
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
}

function createTag() {
    ul.querySelectorAll("li").forEach(li => li.remove()); // removendo tags que depois de adicionadas acabam ficando duplicadas
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag} <i class="fas fa-times" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag); // adicionando li dentro ul tag
    });
    countTag();
}

function remove(element, tag) {
    let index = tags.indexOf(tag); // pegando a remocao do index tag
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; // excluindo a tag selecionada do array.
    element.parentElement.remove(); // excluindo a li tag
    countTag();
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () => {
    tags.length = 0; // array fica vazia
    ul.querySelectorAll("li").forEach(li => li.remove()); // remove todas
    countTag();
});