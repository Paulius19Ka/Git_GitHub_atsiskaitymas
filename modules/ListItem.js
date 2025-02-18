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

        menuList.appendChild(listItem);
    }
}
export default ListItem;