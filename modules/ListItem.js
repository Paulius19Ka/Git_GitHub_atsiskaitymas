import Tab from "./Tab.js";

class ListItem{
    constructor(){
        return this.render();
    }
    render(){
        // Fetching data from a file
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Running a loop through the data.json > tabs array
            data.tabs.forEach(tab => {
                const menuList = document.querySelector('.menuList');

                // Creating a list item element, assigning text content to "heading" from data.json
                const listItem = document.createElement('li');
                listItem.textContent = tab.heading;

                // Adding an event listener to every list item / creates a tab
                listItem.addEventListener('click', () => {
                    new Tab(tab);
                })
                menuList.appendChild(listItem);

                return menuList;
            })
        })
        .catch(error => console.error('Error: ', error));
    }
}
export default ListItem;