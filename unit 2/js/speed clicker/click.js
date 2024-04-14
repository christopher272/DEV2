let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;

updateClickCount();

document.addEventListener("click", function() {
    clickCount++;
    updateClickCount();
    localStorage.setItem("clickCount", clickCount);
});

function updateClickCount() {
    document.getElementById("clickCount").innerText = "Click count: " + clickCount;
}

document.getElementById("resetButton").addEventListener("click", function() {
    // Reset the click count
    clickCount = -1;
    updateClickCount();

    // Clear the click count from localStorage
    localStorage.removeItem("clickCount");
});
