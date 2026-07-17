function toggleOtherReason() {
    const reasonSelect = document.getElementById('reason_contact');
    const otherReasonDiv = document.getElementById('other_reason');
    const otherReasonText = document.getElementById('other_reason_text');

    if (reasonSelect.value === 'Other') {
        otherReasonDiv.style.display = 'block';
        otherReasonText.setAttribute('required', 'required');
    } else {
        otherReasonDiv.style.display = 'none';
        otherReasonText.removeAttribute('required');
    }
}
async function submitConsultanceForm(event) {
    event.preventDefault();

    const form = document.getElementById("consultanceForm");
    const formData = new FormData(form);

    const reasonSelect = formData.get("reason_contact");
    let reasonValue = "";

    if (reasonSelect === "Other") {
        reasonValue = formData.get("other_reason_text");
    } else {
        reasonValue = reasonSelect;
    }

    const data = {
        firstName: formData.get("first_name"),
        lastName: formData.get("last_name"),
        expectedDate: formData.get("expected_date"),
        size: formData.get("house_size"),
        reason: reasonValue,
        email: formData.get("email"),
        phone: formData.get("phone"),
        city: formData.get("city"),
    };

    console.log(data);

    try {
        const response = await fetch("http://localhost:8800/consultance", {
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

document.getElementById("consultancyForm").addEventListener("submit", submitConsultanceForm);