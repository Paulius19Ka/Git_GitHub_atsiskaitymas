import ListItem from "./modules/ListItem.js";

// Fetching data from a file
fetch('data.json')
.then(response => response.json())
.then(data => {
    // Running a loop through the data.json > tabs array
    data.tabs.forEach(tab => {
        // Class that creates a list item for every object in the array
        new ListItem(tab);
    })
})
.catch(error => console.error('Error: ', error));