const scrollers = document.querySelectorAll("#content-container");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
} 

function addAnimation() { 
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = querySelector('#contents');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerContent.appendChild(duplicatedItem);
        });
    });
}


// ------------Search Codes---------

// Sample data for searching
const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
];

// Function to perform the search
function performSearch(query) {
    const results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    displayResults(results);
}

// Function to display search results on the page
function displayResults(results) {
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "No results found.";
    } else {
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.textContent = result;
            resultsContainer.appendChild(resultElement);
        });
    }
}

// Event listeners for search input and button
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    performSearch(searchInput.value);
});

searchInput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        performSearch(searchInput.value);
    }
});
