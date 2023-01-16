const date = new Date();
const year = date.getFullYear();
const modifiedDate = document.lastModified;
const fruitsAPI = 'https://fruityvice.com/api/fruit/all'
let numDrinks = localStorage.getItem(0)
let fruit1
let fruit2
let fruit3
let totalCarbs
let totalProtein
let totalFat
let totalSugar
let totalCalories

let response = fetch(fruitsAPI, {mode: 'cors'})
    .then(res => res.json())
    .then(data => {
        fruit1 = data[Math.floor(Math.random() * 40)]
        fruit2 = data[Math.floor(Math.random() * 40)]
        fruit3 = data[Math.floor(Math.random() * 40)]
        totalCarbs = (
            fruit1.nutritions.carbohydrates 
            + fruit2.nutritions.carbohydrates
            + fruit3.nutritions.carbohydrates
        )
        totalProtein = (
            fruit1.nutritions.protein 
            + fruit2.nutritions.protein
            + fruit3.nutritions.protein
        )
        totalFat = (
            fruit1.nutritions.fat 
            + fruit2.nutritions.fat
            + fruit3.nutritions.fat
        )
        totalSugar = (
            fruit1.nutritions.sugar 
            + fruit2.nutritions.sugar
            + fruit3.nutritions.sugar
        )
        totalCalories = (
            fruit1.nutritions.calories 
            + fruit2.nutritions.calories
            + fruit3.nutritions.calories
        )

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
        if (checkbox.checked)
            allMarkedBoxes = allMarkedBoxes.concat(' ' + checkbox.value)
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
