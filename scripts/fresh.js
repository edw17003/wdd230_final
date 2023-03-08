const date = new Date();
const year = date.getFullYear();
const modifiedDate = document.lastModified;
const fruitsAPI = 'https://andejuli.github.io/wdd230/fruit.json'
let numDrinks = localStorage.getItem(0) ? localStorage.getItem(0) : 0
let fruit1
let fruit2
let fruit3
let totalCarbs = 0
let totalProtein = 0
let totalFat = 0
let totalSugar = 0
let totalCalories = 0

let response = fetch(fruitsAPI, {mode: 'cors'})
    .then(res => res.json())
    .then(data => {
        fruit1 = data[Math.floor(Math.random() * 40)]
        fruit2 = data[Math.floor(Math.random() * 40)]
        fruit3 = data[Math.floor(Math.random() * 40)]

        document.getElementById('fruit1').value = fruit1.name
        document.getElementsByTagName('label')[3].innerText = fruit1.name

        document.getElementById('fruit2').value = fruit2.name
        document.getElementsByTagName('label')[4].innerText = fruit2.name

        document.getElementById('fruit3').value = fruit3.name
        document.getElementsByTagName('label')[5].innerText = fruit3.name
    })

function submitForm(event) {
    event.preventDefault();
    let orderDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    numDrinks++

    var eachCheckbox = document.getElementsByName('checkbox')
    let allMarkedBoxes = [];
    for (var checkbox of eachCheckbox) {
        if (checkbox.checked) {
            allMarkedBoxes = allMarkedBoxes.concat(' ' + checkbox.value)
            if (checkbox.value == fruit1.name) {
                totalCarbs += fruit1.nutritions.carbohydrates
                totalProtein += fruit1.nutritions.protein
                totalFat += fruit1.nutritions.fat 
                totalSugar += fruit1.nutritions.sugar 
                totalCalories += fruit1.nutritions.calories 
            } else if (checkbox.value == fruit2.name) {
                totalCarbs += fruit2.nutritions.carbohydrates
                totalProtein += fruit2.nutritions.protein
                totalFat += fruit2.nutritions.fat 
                totalSugar += fruit2.nutritions.sugar 
                totalCalories += fruit2.nutritions.calories 
            } else if (checkbox.value == fruit3.name) {
                totalCarbs += fruit3.nutritions.carbohydrates
                totalProtein += fruit3.nutritions.protein
                totalFat += fruit3.nutritions.fat 
                totalSugar += fruit3.nutritions.sugar 
                totalCalories += fruit3.nutritions.calories 
            }
        }
    }
    document.querySelector('.formOutput').innerHTML = `
        <br>
        <h2>Form Values:</h2>
        <hr>
        <p>First Name: ${event.target.elements.fname.value}</p>
        <p>Email: ${event.target.elements.email.value}</p>
        <p>Phone Number: ${event.target.elements.phone.value}</p>
        <p>Fruits: ${allMarkedBoxes}</p>
        <p>Special Instructions: ${event.target.elements.instructions.value}</p>
        <br>
        <h2>Nutrition Information</h2>
        <hr>
        <p>Carbohydrates: ${totalCarbs.toFixed(2)}</p>
        <p>Protein: ${totalProtein.toFixed(2)}</p>
        <p>Fat: ${totalFat.toFixed(2)}</p>
        <p>Sugar: ${totalSugar.toFixed(2)}</p>
        <p>Calories: ${totalCalories.toFixed(2)}</p>
        <br>
        <i>
            <p>Order Date: ${orderDate}</p>
            <p>Drink Mixes Ordered: ${numDrinks}</p>
        </i>
    `
    localStorage.setItem(0, numDrinks)
}

document.querySelector('.copyright').innerHTML = `Copyright ${year} | Jake Edwards`
document.querySelector('.modified').innerHTML = `Last Modified: ${modifiedDate}`
