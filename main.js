import ListItem from "./modules/ListItem.js";

fetch('data.json')
.then(response => response.json())
.then(data => {
    console.log(data.tabs);
    data.tabs.forEach(tab => {
        new ListItem(tab);
    })
})
.catch(error => console.error('Error: ', error));