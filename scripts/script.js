const result = document.getElementById("msg");
const suitability = document.getElementById("suggestion");
const nameInput = document.getElementById("box");
const resetButton = document.getElementById("resetButton");
const submitButton = document.getElementById("submitButton");

// LETTER_VALUES is defined in letterValues.js

const nameResults = {
  1: { name: "Suryudu", suitability: "No for Siddhu & No for Sai" },
  2: { name: "Chandhrudu", suitability: "No for Siddhu & No for Sai" },
  3: { name: "Guruvu", suitability: "Ok for Siddhu & No for Sai" },
  4: { name: "Raahuvu", suitability: "Ok for Siddhu & Ok for Sai" },
  5: { name: "Budhudu", suitability: "Second Best for Siddhu &  Second Best for Sai" },
  6: { name: "Shukrudu", suitability: "Best for Siddhu & Best for Sai" },
  7: { name: "Kethuvu", suitability: "Ok for Siddhu & Ok for Sai" },
  8: { name: "Shani", suitability: "Ok for Siddhu & Ok for Sai" },
  9: { name: "Kujudu", suitability: "No for Siddhu & No for Sai" }
};

function resetField() {
  result.textContent = "";
  suitability.textContent = "";
  nameInput.value = "";
  console.log("Fields have been reset.");
}

function submitName() {
  const name = nameInput.value.toLowerCase();
  if (name.length === 0) {
    alert("Please enter a name.");
    return;
  }

  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += LETTER_VALUES[name[i]] || 0;
  }

  while (sum >= 10) {
    sum -= 9;
  }

  const { name: resultName, suitability: resultSuitability } = nameResults[sum] || {};

  if (resultName) {
    result.textContent = `${name} --- ${resultName}`;
    suitability.textContent = resultSuitability;
  } else {
    result.textContent = "Invalid name";
    suitability.textContent = "";
  }

  console.log(name);
}

resetButton.addEventListener('click', resetField);
submitButton.addEventListener('click', submitName);

nameInput.addEventListener('keydown', (event) => {
  if (!/[a-z]/i.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
    event.preventDefault();
  }
});