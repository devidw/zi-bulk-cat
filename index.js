const createCategory = (categoryName) => {
  // Open the add category form
  document.querySelector(".category-tree-view span[data-ember-action]").click()

  // Fill in the name of the category
  const inputEl = document.querySelector(".category-form .ember-text-field")
  inputEl.value = categoryName
  inputEl.dispatchEvent(new Event("input", { bubbles: true }))

  // Submit the form
  document.querySelector(".category-form button[type='submit']").click()
}

const categoryNames = prompt("Enter category names separated by commas")
const categoryNamesArray = categoryNames.split(",")

// Trim whitespaces from category names
categoryNamesArray.map((categoryName) => categoryName.trim())

// Loop over the category names and create them, wait a sec between each
categoryNamesArray.forEach((categoryName, index) => {
  setTimeout(() => {
    createCategory(categoryName)
  }, index * 1000)
})
