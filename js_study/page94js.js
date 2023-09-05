const doinnertext = () => {
    document.getElementById("current").innerText = new Date();
}
const doinnerhtml = () => {
    document.getElementById("current").innerHTML = "<i>" + new Date() + "</i>";
}