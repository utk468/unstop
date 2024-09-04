const diseaseInput = document.querySelector(".symptoms input");
const searchIcon = document.querySelector(".symptoms svg");
const result = document.querySelector(".symptoms .result");
const form = document.querySelector("form");
const symptomsChecker = document.querySelector(".symptomschecker");
const symptomsBox = document.querySelector(".symptoms");
const cross = document.querySelector(".symptoms .cross")
async function getDisease() {
    const diseaseName = diseaseInput.value.trim();
    if (!diseaseName) {
        result.innerHTML = "Please enter a disease name"; // Allowing line breaks
        return;
    }

    const api = `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${encodeURIComponent(diseaseName)}&df=term_icd9_code,primary_name`;

    try {
        const response = await fetch(api);
        if (!response.ok) {
            result.innerHTML = `Error fetching data: ${response.status}`;
            return;
        }

        const data = await response.json();
        console.log(data)
        // Checking if data is available and formatting the output
        if (data[3] && data[3].length > 0) {
            // Assuming data[3] contains the desired results
            const formattedResults = data[3].map(item => `${item[1]} (ICD-9: ${item[0]})`).join('<br><br>');
            result.innerHTML = `<h2>Results regarding ${diseaseName}</h2><br>${formattedResults}`; // Using <br> for line breaks
        } else {
            result.innerHTML = "No results found. Try checking the spelling or enter any other keyword";
        }

        console.log(data); // To check the structure of the data
    } catch (error) {
        result.innerHTML = "Error fetching data, please try again.";
        console.error(error); // Log the error for debugging
    }
}

searchIcon.onclick = getDisease; // Directly assign the getDisease function to the click event

form.onsubmit = (event) => {
    event.preventDefault();
    getDisease(); // Call the same getDisease function on form submit
};

symptomsChecker.addEventListener("click", () => {
    if (symptomsBox.style.display == "none") {
        symptomsBox.style.display = "block";
    } else {
        symptomsBox.style.display = "none";
    }
});
cross.addEventListener("click", () => {
    if (symptomsBox.style.display == "none") {
        symptomsBox.style.display = "block";
    } else {
        symptomsBox.style.display = "none";
    }
})