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
    removeButton.addEventListener("click", () => {
        employeeCard.remove()
    })

    //Adding the title, description, and remove button to the employee cards.
    employeeCard.appendChild(title)
    employeeCard.appendChild(description)
    employeeCard.appendChild(removeButton)
    return employeeCard
}

//Creating three new employees in the employee container using the createEmployeeCard function.
employeecontainer1.appendChild(createEmployeeCard("John Smith", "Sales Associate"))
employeecontainer1.appendChild(createEmployeeCard("Brad Waters", "Manager"))
employeecontainer1.appendChild(createEmployeeCard("Tom Winters", "CEO"))
