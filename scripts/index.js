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
const editCloseButton = document.querySelector("#edit-profile-close-button");
const addCloseButton = document.querySelector("#add-profile-close-button");
const editModal = document.querySelector("#edit-profile-modal");
const addModal = document.querySelector("#add-card-modal");
const editModalForm = editModal.querySelector(".modal__form_edit");
const addModalForm = addModal.querySelector(".modal__form_add");

const imageModal = document.querySelector("#card-image-modal");
const imageModalSrc = document.querySelector(".modal__image");
const imageModalName = document.querySelector(".modal__title");
const imageCloseButton = imageModal.querySelector(".modal__close");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileName = document.querySelector("#name");
const editProfileDescription = document.querySelector("#description");

const cardTitle = addModal.querySelector("#card-title");
const cardUrl = addModal.querySelector("#card-url");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector(".cards__list");

function openPopup(modal) {
  modal.classList.add("modal_open");
}

function closePopup(modal) {
  modal.classList.remove("modal_open");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likebutton = cardElement.querySelector(".card__like-button");
  const deletebutton = cardElement.querySelector(".card__delete-button");

  likebutton.addEventListener("click", () => {
    likebutton.classList.toggle("card__like-button_active");
  });

  deletebutton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    openPopup(imageModal);
    imageModalSrc.src = cardData.link;
    imageModalSrc.alt = cardData.name;
    imageModalName.textContent = cardData.name;
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

editButton.addEventListener("click", () => {
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
  openPopup(editModal);
});

addButton.addEventListener("click", () => {
  openPopup(addModal);
});

editCloseButton.addEventListener("click", () => closePopup(editModal));

addCloseButton.addEventListener("click", () => closePopup(addModal));

imageCloseButton.addEventListener("click", () => closePopup(imageModal));

editModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;
  closePopup(editModal);
});

addModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cardTitle.value;
  const link = cardUrl.value;
  const cardElement = getCardElement({ name, link });
  cardList.prepend(cardElement);
  cardTitle.value = "";
  cardUrl.value = "";

  closePopup(addModal);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.append(cardElement);
});
