const message =
  "Merci pour votre message. Le Roi vous répondra personnellement dès sa digestion terminée.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
