const headd = document.getElementById("ull");
const oper = document.getElementById("opn");
const closse = document.getElementById("cls");
oper.addEventListener('click',() => {
    headd.classList.toggle("show")
});
closse.addEventListener('click',() => {
    headd.classList.remove("show")
});