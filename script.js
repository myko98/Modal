window.onload = function () {
  //query selectors
  let emailState = false;
  let emailModal = document.querySelector(".email-modal");
  let closeButton = document.querySelector(".email-modal__close-button");
  let emailInput = document.querySelector(".email-modal__input");
  let emailButton = document.querySelector(".email-modal__button");
  let errorMessage = document.querySelector(".error-message");
  let thankContainer = document.querySelector(".email-thank");
  let declineOffer = document.querySelector(".email-modal__decline-offer");

  //functions
  const emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const closeModal = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  const showModal = () => {
    if (emailState == false) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };

  const addErrors = () => {
    errorMessage.classList.add("error-message-active");
    emailInput.classList.add("error");
  };
  const removeErrors = () => {
    errorMessage.classList.remove("error-message-active");
    emailInput.classList.remove("error");
  };

  const showThankMessage = () => {
    thankContainer.classList.add("email-thank--success");
    setTimeout(() => {
      closeModal();
    }, 3000)
  };

  emailButton.addEventListener("click", () => {
    if (emailIsValid(emailInput.value)) {
      showThankMessage();
    } else {
      addErrors();
    }
  });

  emailInput.addEventListener("click", () => {
    console.log("hi");
    removeErrors();
  });

  document.documentElement.addEventListener("mouseleave", () => {
    showModal();
  });

  closeButton.addEventListener("click", () => {
    closeModal();
  });

  declineOffer.addEventListener("click", () => {
    closeModal();
  });
};
