import StartState from "./StartState.js";
import ListItem from "./ListItem.js";
import TabMedia from "./TabMedia.js";

class Tab{
    constructor(tab){
        this.tab = tab;
        return this.render();
    }
    render(){
        const main = document.querySelector('main');
        main.classList.remove('backgroundOverlay');
        main.classList.add('backgroundOverlayTabOpen');
        // Removes the starging elements from the page
        const startState = document.getElementById('startState');
        startState.remove();

        const tabWrapper = document.createElement('div');
        tabWrapper.setAttribute('id', 'tabState');
        tabWrapper.classList.add('tabWrapper', 'tabBackground', 'verticalFlex');

        const heading = document.createElement('h2');
        heading.textContent = this.tab.heading;

        // Class to create images/videos in tabs, depending on file type
        const image = new TabMedia(this.tab.image);

        const paragraphWrapper = document.createElement('div');
        paragraphWrapper.classList.add('tabParagraphWrapper');
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
            main.classList.remove('backgroundOverlayTabOpen');
            main.classList.add('backgroundOverlay');
            new StartState();
            new ListItem();
        })

        tabWrapper.append(heading, image, paragraphWrapper, closeButton);

        return document.querySelector('main').appendChild(tabWrapper);
    }
}
export default Tab;