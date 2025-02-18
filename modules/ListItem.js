import Tab from "./Tab.js";

class ListItem{
    constructor(tab){
        this.tab = tab;
        return this.render();
    }
    render(){
        const menuList = document.querySelector('.menuList');

        // Creating a list item element, assigning text content to "heading" from data.json
        const listItem = document.createElement('li');
        listItem.textContent = this.tab.heading;

        // Adding an event listener to every list item
        listItem.addEventListener('click', () => {
            new Tab(this.tab);
        })

        menuList.appendChild(listItem);

        return menuList;
    }
}
export default ListItem;