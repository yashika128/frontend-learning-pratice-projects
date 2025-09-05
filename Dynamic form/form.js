const container = document.getElementById("form-container");

const form = document.createElement("form");
form.id = "userForm";

const fields = [
    { label: "Name:", id: "name", type: "text", pattern: "^[a-zA-Z\\s]+$", title: "Only letters and spaces allowed" },
    { label: "Email:", id: "email", type: "email", 
        pattern: "^[a-zA-Z0-9._%+-]+@gmail\\.com$", title: "Email must be a @gmail.com address" },
    { label: "Phone Number:", id: "phone", type: "tel", pattern: "^\\d{10}$", title: "Phone number must be 10 digits" },
];

const table = document.createElement("table");

// Create input fields
fields.forEach(field => {
    const row = document.createElement("tr");
    const labelCell = document.createElement("td");
    const inputCell = document.createElement("td");

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.label;

    const input = document.createElement("input");
    input.type = field.type;
    input.id = field.id;
    input.name = field.id;
    input.required = true;
    input.pattern = field.pattern;
    input.title = field.title;

    labelCell.appendChild(label);
    inputCell.appendChild(input);
    row.appendChild(labelCell);
    row.appendChild(inputCell);
    table.appendChild(row);
});

// Age select dropdown
const ageRow = document.createElement("tr");
const ageLabelCell = document.createElement("td");
const ageSelectCell = document.createElement("td");

const ageLabel = document.createElement("label");
ageLabel.textContent = "Age:";
ageLabel.setAttribute("for", "age");
ageLabelCell.appendChild(ageLabel);

const ageSelect = document.createElement("select");
ageSelect.name = "age";
ageSelect.id = "age";
const defaultOption = document.createElement("option");
defaultOption.disabled = true;
defaultOption.selected = true;
defaultOption.textContent = "Select your age";
ageSelect.appendChild(defaultOption);

for (let i = 1; i <= 20; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    ageSelect.appendChild(option);
}

ageSelectCell.appendChild(ageSelect);
ageRow.appendChild(ageLabelCell);
ageRow.appendChild(ageSelectCell);
table.appendChild(ageRow);

// Date input field
const dateRow = document.createElement("tr");
const dateLabelCell = document.createElement("td");
const dateInputCell = document.createElement("td");

const dateLabel = document.createElement("label");
dateLabel.textContent = "Date:";
dateLabel.setAttribute("for", "date");

const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "date";
dateInput.name = "date";
dateInput.required = true;
dateInput.min = "2005-01-01";
dateInput.max = "2024-12-31";

dateLabelCell.appendChild(dateLabel);
dateInputCell.appendChild(dateInput);
dateRow.appendChild(dateLabelCell);
dateRow.appendChild(dateInputCell);
table.appendChild(dateRow);

// Submit button
const submitRow = document.createElement("tr");
const submitCell = document.createElement("td");
submitCell.colSpan = 2;
submitCell.style.textAlign = "center";

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";

submitCell.appendChild(submitButton);
submitRow.appendChild(submitCell);
table.appendChild(submitRow);

form.appendChild(table);
container.appendChild(form);

// Form submit handler
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});
