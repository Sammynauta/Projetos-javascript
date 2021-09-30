const defaultBtn = document.querySelector("#default-btn"),
    filename = document.querySelector(".file-name"),
    btn = document.querySelector("button"),
    closeBtn = document.querySelector("#close"),
    caixa = document.querySelector(".caixa"),
    img = document.querySelector("img");

function defaultbtnAtivo() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
            caixa.classList.add("active")
        }
        closeBtn.addEventListener("click", function() {
            img.src = "";
            caixa.classList.remove("active");
        })
        reader.readAsDataURL(file)
    }
    if(this.value) {
        let valueStore = this.value;
        filename.textContent = valueStore;
    }
});