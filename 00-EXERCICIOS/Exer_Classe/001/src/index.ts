class DadosClient {
    name: string;
    lastname: string;
    username: string;
    city: string;
    state: string;
    zip: string;
  
    constructor(
      name: string,
      lastname: string,
      username: string,
      city: string,
      state: string,
      zip: string
    ) {
      this.name = name;
      this.lastname = lastname;
      this.username = username;
      this.city = city;
      this.state = state;
      this.zip = zip;
    }
  }
  
  const form = document.querySelector(".ordeForm") as HTMLFormElement;
  
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
  
    const inputName = document.querySelector(".inputName") as HTMLInputElement;
    const valueInputName = inputName.value;
  
    const imputLastName = document.querySelector(".lastName") as HTMLInputElement;
    const valueLastName = imputLastName.value;
  
    const imputUserName = document.querySelector(".userName") as HTMLInputElement;
    const valueUserName = imputUserName.value;
  
    const inputCity = document.querySelector(".inputCity") as HTMLInputElement;
    const valueInputCity = inputCity.value;
  
    const imputState = document.querySelector(".imputState") as HTMLInputElement;
    const valueImputState = imputState.value;
  
    const imputZip = document.querySelector(".imputZip") as HTMLInputElement;
    const valueImputZip = imputZip.value;
  
    let tales: DadosClient = new DadosClient(
      valueInputName,
      valueLastName,
      valueUserName,
      valueInputCity,
      valueImputState,
      valueImputZip
    );
  
    //console.log(tales);
    showValue(tales);
  
    alert("Formulário enviado!");
  });
  
  function showValue(newClient: DadosClient) {
    const span = document.getElementById("ul") as HTMLFormElement;
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


    span.append(liName,liLastName,liUserName,liCity,liState,liZip);
  }
  