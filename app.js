/* https://api.genderize.io?name=peter */
const nameInput = document.querySelector(".input-name");
const btnGuess = document.querySelector(".btn-guess");
const prediction = document.querySelector(".prediction");

const getAPI = (name) => {
  fetch(`https://api.genderize.io?name=${name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
            prediction.style.display = "block";
            nameInput.value = "";
            prediction.innerHTML = `
                <p>${data.name} -  you are probably % ${
                data.probability * 100
            } <span> ${data.gender}</span> !!!' </p>
         `;
    });     
};

const getGender = () => {
  getAPI(nameInput.value);
};

btnGuess.addEventListener("click", getGender);
/*   <p>Olasılıkla yüzde % 90 <span>Erkek</span>'siniz !!!' </p> */
