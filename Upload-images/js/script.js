const defaultBtn = document.querySelector("#default-btn"),
    btn = document.querySelector("button"),
    img = document.querySelector("img");

function defaultbtnAtivo() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function () {
    const file = this.files[0];
    reader.onload = function() {
        const result = reader.result;
        img.src = result;
    }
    reader.readAsDataURL(file);
});

/*

     if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
        }
        reader.readAsDataURL(file)
    }
*/