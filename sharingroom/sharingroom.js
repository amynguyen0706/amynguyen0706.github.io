const button = document.querySelector("#post-btn");
const input = document.querySelector("#post-input");
const content_area = document.querySelector("#content_area");

button.addEventListener("click", (e) =>{content_area.innerHTML +=
    `<p>${input.value}</p>`}
)