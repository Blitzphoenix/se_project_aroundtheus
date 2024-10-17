const card1= {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  }
const card2= {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  }
const card3= {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  }
const card4= {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  }
const card5= {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  }
const card6= {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  }

let initialCards = [card1 , card2 , card3 , card4 , card5 , card6]


const editButton = document.querySelector("#edit-button");
const closeButton = document.querySelector("#close-button");
const model = document.querySelector(".model");
const modelForm = model.querySelector(".model__form");

const profileName= document.querySelector(".profile__name")
const profileDescription= document.querySelector(".profile__description")
const editProfileName= document.querySelector(".model__form_name")
const editProfileDescription= document.querySelector(".model__form_description")

const cardTemplate = document.querySelector("#card-template").content.firstElementChild
const cardList = document.querySelector(".cards__list")


function closePopup(){
  model.classList.remove("model__open")
}

function getCardElement(cardData){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image")
  const cardTitleEl = cardElement.querySelector(".card__title")

  cardTitleEl.textContent = cardData.name
  cardImageEl.src = cardData.link

  return cardElement
}



editButton.addEventListener("click", () => {
  editProfileName.value=profileName.textContent
  editProfileDescription.value=profileDescription.textContent
  model.classList.add("model__open")
})

closeButton.addEventListener("click", closePopup )
modelForm.addEventListener("submit", (e) => {
  e.preventDefault();
profileName.textContent=editProfileName.value
profileDescription.textContent= editProfileDescription.value
closePopup()
})






initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData)

  cardList.append(cardElement)

});
