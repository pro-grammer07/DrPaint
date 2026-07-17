async function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  const data = {
    cname: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  console.log(data);

  try {
    const response = await fetch("http://localhost:8800/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      form.reset();

      // Show the modal
      const modal = document.getElementById("successModal");
      const closeModal = document.getElementById("closeModal");

      modal.style.display = "flex";

      // When the user clicks on the close button, close the modal
      closeModal.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, do nothing
      window.onclick = function (event) {
        if (event.target == modal) {
          event.stopPropagation();
        }
      };
    } else {
      const errorData = await response.json();
      console.log("Error:", errorData);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
