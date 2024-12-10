
//image display
function enlargeImage(imgElement) {
    const mainImage = document.getElementById('enlarged-image');
    mainImage.src = imgElement.src;
}

//1st dropdown
function toggleDropdown() {
    var dropdownOptions = document.querySelector(".dropdown-options");
    dropdownOptions.style.display = dropdownOptions.style.display === "none" ? "block" : "none";
}
function toggleDropdown(dropdownId) {
    var dropdownOptions = document.getElementById(dropdownId);
    dropdownOptions.style.display = dropdownOptions.style.display === "none" ? "block" : "none";
}



function toggleDropdown(contentId, iconId) {
    var dropdownContent = document.getElementById(contentId);
    var icon = document.getElementById(iconId);
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block"; 
        icon.textContent = "−"; 
    } else {
        dropdownContent.style.display = "none"; 
        icon.textContent = "+"; 
    }
}








