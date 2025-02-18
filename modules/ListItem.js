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

        listItem.addEventListener('click', () => {
            console.log(this.tab.heading);
        })

        menuList.appendChild(listItem);

        return menuList;
    }
}
export default ListItem;