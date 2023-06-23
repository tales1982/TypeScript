class DadosClient {
    name;
    lastname;
    username;
    city;
    state;
    zip;
    constructor(name, lastname, username, city, state, zip) {
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}
const form = document.querySelector(".ordeForm");
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const inputName = document.querySelector(".inputName");
    const valueInputName = inputName.value;
    const imputLastName = document.querySelector(".lastName");
    const valueLastName = imputLastName.value;
    const imputUserName = document.querySelector(".userName");
    const valueUserName = imputUserName.value;
    const inputCity = document.querySelector(".inputCity");
    const valueInputCity = inputCity.value;
    const imputState = document.querySelector(".imputState");
    const valueImputState = imputState.value;
    const imputZip = document.querySelector(".imputZip");
    const valueImputZip = imputZip.value;
    let tales = new DadosClient(valueInputName, valueLastName, valueUserName, valueInputCity, valueImputState, valueImputZip);
    //console.log(tales);
    showValue(tales);
    alert("Formulário enviado!");
});
function showValue(newClient) {
    const span = document.getElementById("ul");
    const liName = document.createElement("li");
    liName.textContent = `The frist name: ${newClient.name}`;
    const liLastName = document.createElement("li");
    liLastName.textContent = `Your last name: ${newClient.lastname}`;
    const liUserName = document.createElement("li");
    liUserName.textContent = `Your Username is: ${newClient.username}`;
    const liCity = document.createElement("li");
    liCity.textContent = `Your city is: ${newClient.city}`;
    const liState = document.createElement("li");
    liState.textContent = `Your State is: ${newClient.state}`;
    const liZip = document.createElement("li");
    liZip.textContent = `Your zip code is: ${newClient.zip}`;
    span.append(liName, liLastName, liUserName, liCity, liState, liZip);
}
