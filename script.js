//your JS code here. If required.
// Get references to the dropdown and button
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');

// Add click event to the button
removeButton.addEventListener("click", () => {
  // Get the selected index
  const selectedIndex = colorSelect.selectedIndex;

  // If something is selected, remove it
  if (selectedIndex >=0) {
    colorSelect.remove(selectedIndex);
  }
});
