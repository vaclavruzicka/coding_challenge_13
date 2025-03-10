//Task 2 - Adding Employee Cards Dynamically

//Selecting the employee container with the fet element by ID.
const employeecontainer1 = document.getElementById("employeeContainer")

//Creating a function that creates an employee card given an employee's name and position.
function createEmployeeCard(name, position){
    const employeeCard = document.createElement("div")

    //Using assign attribute to assign a class and an id to the employee card.
    employeeCard.setAttribute("class", "employee-card")
    employeeCard.setAttribute("id", name)

    //Creating a title that displys the employee's name.
    const title = document.createElement("h4")
    title.textContent = name

    //Creating a description that displays the employee's position.
    const description = document.createElement("p")
    description.textContent = position

    //Creating a button that when clicked, will remove the employee's card.
    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"

    //Task 4 - Implementing removal of Employee Cards with Event Bubbling

    //Makes it so that the remove button removes the card using removeChild().
    removeButton.addEventListener("click", (event) => {
        event.stopPropagation()
        employeeCard.parentNode.removeChild(employeeCard)
    })

    //Task 5 - Inline Editing of Employee Details

    //Creating a button that will serve as a way to edit a name and position of an employee.
    const editButton = document.createElement("button")
    editButton.textContent = "Edit Details"

    //Adding an event listener for the edit button to allow for editing to commmence.
    editButton.addEventListener("click", (event) => {
        event.stopPropagation()

        //Creating a title input to allow for typing.
        const  titleInput = document.createElement("input")
        titleInput.value = title.textContent

        //Creating a description input to allow for typing.
        const descriptionInput = document.createElement("input")
        descriptionInput.value = description.textContent

        //Creating a save button that allows for all changes to be saved to the employee card.
        const saveButton = document.createElement("button")
        saveButton.textContent = "Save"

        //Replacing the title and description with the input fields when the edit button is pressed.
        employeeCard.replaceChild(titleInput, title)
        employeeCard.replaceChild(descriptionInput, description)

        //Adding the save button to the employee card when edit is pressed.
        employeeCard.appendChild(saveButton)

        //Adding an event listener to the save button to allow for the typed content to override the original.
        saveButton.addEventListener("click", (event) => {
            event.stopPropagation()

            //Setting the title and description equal to whatever is typed in the input fields.
            title.textContent = titleInput.value
            description.textContent = descriptionInput.value

            //Replacing the input feilds with static text, now with the new typed text.
            employeeCard.replaceChild(title, titleInput)
            employeeCard.replaceChild(description, descriptionInput)

            //Removes the save button after pressing it.
            employeeCard.removeChild(saveButton)
        })
    })

    //Adding the title, description, and remove button to the employee cards.
    employeeCard.appendChild(title)
    employeeCard.appendChild(description)
    employeeCard.appendChild(removeButton)
    employeeCard.appendChild(editButton)
    return employeeCard
}

//Creating three new employees in the employee container using the createEmployeeCard function.
employeecontainer1.appendChild(createEmployeeCard("John Smith", "Sales Associate"))
employeecontainer1.appendChild(createEmployeeCard("Brad Waters", "Manager"))
employeecontainer1.appendChild(createEmployeeCard("Tom Winters", "CEO"))

//Task 3 - Converting NodeLists to Array for Bulk Updates

//Selecting all cards with the same class and making a node list out of them.
const employeeCardNodeList = document.querySelectorAll(".employee-card")

//Taking the node list and creating an array so that I can use array methods.
const employeeCardArray = Array.from(employeeCardNodeList)

//Using forEach so that I can change each of the card colors that are in the array.
employeeCardArray.forEach((card) => {
    card.style.backgroundColor = "BlueViolet"
})

//Task 4 - Continued 

//Adds an event listener so that when a card is clicked, not on the remove button, there is a message that is console logged saying a card was clicked.
employeecontainer1.addEventListener("click", () => {
    console.log("Employee Card Clicked")
})

