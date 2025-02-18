import StartState from "./StartState.js";
import ListItem from "./ListItem.js";

class Tab{
    constructor(tab){
        this.tab = tab;
        return this.render();
    }
    render(){
        // Removes the starging elements from the page
        const startState = document.getElementById('startState');
        startState.remove();

        const tabWrapper = document.createElement('div');
        tabWrapper.setAttribute('id', 'tabState');
        tabWrapper.classList.add('tabWrapper', 'backgroundOverlay', 'verticalFlex');

        const heading = document.createElement('h2');
        heading.textContent = this.tab.heading;

        const paragraphWrapper = document.createElement('div');
        // Runing a loop through the array in data object, to create paragraphs for each paragraph in array
        this.tab.paragraphs.forEach(paragraph => {
            const paragraphEl = document.createElement('p');
            paragraphEl.textContent = paragraph;

            paragraphWrapper.appendChild(paragraphEl);
        })
        const closeButton = document.createElement('img');
        closeButton.setAttribute('src', './media/xmark-solid.svg');
        closeButton.setAttribute('alt', 'close tab button');
        closeButton.classList.add('closeButton');
        closeButton.addEventListener('click', e => {
            const tabState = document.getElementById('tabState');
            tabState.remove();
            new StartState();
            new ListItem();
        })

        tabWrapper.append(heading, paragraphWrapper, closeButton);

        return document.querySelector('main').appendChild(tabWrapper);
    }
}
export default Tab;