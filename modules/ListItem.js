class ListItem{
    constructor(tab){
        this.tab = tab;
        return this.render();
    }
    render(){
        console.log(this.tab.heading)
        const menuList = document.querySelector('.menuList');

        const listItem = document.createElement('li');
        listItem.textContent = this.tab.heading;

        menuList.appendChild(listItem);
    }
}
export default ListItem;