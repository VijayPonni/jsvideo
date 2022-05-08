hello = () => {
    document.getElementsById("demo").innerHTML += this;
}

window.addEventListener("load",hello);

document.getElementById("btn").addEventListener("click",hello);