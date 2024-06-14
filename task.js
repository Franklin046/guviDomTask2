document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let form = e.target;
  let firstName = form.firstName.value;
  let lastName = form.lastName.value;
  let email = form.email.value;
  let address = form.address.value;
  let pincode = form.pincode.value;
  let gender = form.gender.value;
  let foodElements = form.food;
  let state = form.state.value;
  let country = form.country.value;

  // Get selected foods
  let selectedFoods = [];
  for (let i = 0; i < foodElements.length; i++) {
    if (foodElements[i].checked) {
      selectedFoods.push(foodElements[i].value);
    }
  }

  // Validate selected foods
  if (selectedFoods.length !== 2) {
    document.getElementById("foodError").innerText =
      "Please select exactly two food options.";
    return;
  } else {
    document.getElementById("foodError").innerText = "";
  }

  // Create a new row and cells
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${pincode}</td>
                <td>${gender}</td>
                <td>${selectedFoods.join(", ")}</td>
                <td>${state}</td>
                <td>${country}</td>
            `;

  // Append the new row to the table
  document.querySelector("#userTable tbody").appendChild(newRow);

  // Clear the form
  form.reset();
});

// Ensure only 2 checkboxes can be selected
const checkboxes = document.querySelectorAll('input[name="food"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const checkedCount = document.querySelectorAll(
      'input[name="food"]:checked'
    ).length;
    if (checkedCount >= 2) {
      checkboxes.forEach((cb) => {
        if (!cb.checked) {
          cb.disabled = true;
        }
      });
    } else {
      checkboxes.forEach((cb) => (cb.disabled = false));
    }
  });
});
