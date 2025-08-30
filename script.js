// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // ===========================================
  // Part 1: JavaScript Basics
  // ===========================================
  
  // DOM Interactions (Part 4 requirement): Get elements from the page
  const numberForm = document.getElementById('numberForm');
  const numberInput = document.getElementById('numberInput');
  const numberResult = document.getElementById('numberResult');

  // Event Listener (Part 4 requirement): Handle form submission
  numberForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Variable declaration and conversion (Part 1)
    const inputValue = parseFloat(numberInput.value);

    // Conditional statement (Part 1) and Function Call (Part 2)
    const resultMessage = checkNumberType(inputValue);
    
    // DOM Interaction (Part 4 requirement): Display the result
    displayMessage(numberResult, resultMessage);
  });

  // ===========================================
  // Part 2: Functions — Reusable Logic
  // ===========================================

  /**
   * Custom Function 1: Checks if a number is positive, negative, or zero.
   * @param {number} num The number to check.
   * @returns {string} A descriptive message.
   */
  function checkNumberType(num) {
    if (isNaN(num)) {
      return "Please enter a valid number.";
    } else if (num > 0) {
      return "The number is positive.";
    } else if (num < 0) {
      return "The number is negative.";
    } else {
      return "The number is zero.";
    }
  }

  /**
   * Custom Function 2: Displays a message in a specified DOM element.
   * @param {HTMLElement} element The element to update.
   * @param {string} message The message to display.
   */
  function displayMessage(element, message) {
    element.textContent = message;
  }

  // ===========================================
  // Part 3: Loops — Repetition
  // ===========================================

  // DOM Interactions (Part 4 requirement): Get elements for the loop section
  const generateListBtn = document.getElementById('generateListBtn');
  const dynamicList = document.getElementById('dynamicList');

  // Event Listener (Part 4 requirement)
  generateListBtn.addEventListener('click', () => {
    // Clear any existing list items
    dynamicList.innerHTML = '';
    
    // Loop Example 1: Use a for loop to generate content
    for (let i = 1; i <= 5; i++) {
      // DOM Interaction (Part 4 requirement): Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = `List Item #${i}`;
      dynamicList.appendChild(listItem);
    }
  });

  // Loop Example 2: Use a forEach loop to process an array
  // This is a simple, non-visible example for demonstration
  const fruits = ['Apple', 'Banana', 'Cherry'];
  console.log("--- forEach Loop Example ---");
  fruits.forEach(fruit => {
    console.log(`I love eating ${fruit}.`);
  });


  // ===========================================
  // Part 4: Mastering the DOM
  // (All interactions are part of this section)
  // ===========================================
  
  // DOM Interactions (Part 4 requirement): Get elements for toggling
  const toggleBtn = document.getElementById('toggleBtn');
  const toggleContent = document.getElementById('toggleContent');

  // Event Listener (Part 4 requirement): Toggle a class on click
  toggleBtn.addEventListener('click', () => {
    // DOM Interaction: Toggling a class
    // This adds the 'hidden' class if it's not present, and removes it if it is.
    toggleContent.classList.toggle('hidden');
  });

});
