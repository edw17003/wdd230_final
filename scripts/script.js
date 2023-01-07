const date = new Date();
const year = date.getFullYear();
const modifiedDate = document.lastModified

document.querySelector('h2').innerHTML = `${'&copy;'}${year}  |  Jake Edwards  |  Idaho`;
document.querySelector('.dateUpdated').textContent = `Last Updated: ${modifiedDate}`