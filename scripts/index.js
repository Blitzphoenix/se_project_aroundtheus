const card1 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};
const card2 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
};
const card3 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
};
const card4 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
};
const card5 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};
const card6 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};


const initialCards = [card1, card2, card3, card4, card5, card6];

const editButton = document.querySelector("#edit-button");
const addButton = document.querySelector("#add-button");
const editcloseButton = document.querySelector("#edit-profile-close-button");
const addcloseButton = document.querySelector("#add-profile-close-button");
const modal = document.querySelector(".modal");
const editmodal = document.querySelector("#edit-profile-modal");
const addmodal = document.querySelector("#add-card-modal")
const editmodalForm = editmodal.querySelector(".modal__form_edit");
const addmodalForm = addmodal.querySelector(".modal__form_add");

const imagemodal=document.querySelector("#card-image-modal");
const imagemodalsrc=document.querySelector(".modal__image");
const imagemodalname=document.querySelector(".modal__title");
const imageclosebutton = imagemodal.querySelector(".modal__close")

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileName = document.querySelector("#name");
const editProfileDescription = document.querySelector("#description");


const cardtitle = addmodal.querySelector("#card-title");
const cardurl = addmodal.querySelector("#card-url");


const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector(".cards__list");

function closePopup() {
  editmodal.classList.remove("modal_open");
  addmodal.classList.remove("modal_open");
  imagemodal.classList.remove("modal_open");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likebutton = cardElement.querySelector(".card__like-button");
  const deletebutton = cardElement.querySelector(".card__delete-button");
  const image = cardElement.querySelector(".card__image")

  likebutton.addEventListener("click",()=>{
  likebutton.classList.toggle("card__like-button_active");
});

deletebutton.addEventListener("click",()=>{
cardElement.remove();
});

image.addEventListener("click",()=>{
  imagemodal.classList.add("modal_open");
  imagemodalsrc.src = cardData.link;
  imagemodalsrc.alt = cardData.name;
  imagemodalname.textContent= cardData.name;
  });

cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

editButton.addEventListener("click", () => {
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
  editmodal.classList.add("modal_open");
});

addButton.addEventListener("click", () => {

  addmodal.classList.add("modal_open");
});

editcloseButton.addEventListener("click", closePopup);

addcloseButton.addEventListener("click", closePopup);

imageclosebutton.addEventListener("click", closePopup);

editmodalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;
  closePopup();

});

addmodalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name=cardtitle.value;
  const link=cardurl.value;
  const cardElement = getCardElement({name , link});
  cardList.prepend(cardElement)
  closePopup();
});



initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.append(cardElement);
});



