import StartState from "./StartState.js";
import ListItem from "./ListItem.js";
import TabMedia from "./TabMedia.js";

class Tab{
    constructor(tab){
        this.tab = tab;
        return this.render();
    }
    render(){
        // Removes the start page overlay, adds a darker overlay, displayed together with the tab
        const main = document.querySelector('main');
        main.classList.remove('backgroundOverlay');
        main.classList.add('backgroundOverlayTabOpen');

        // Removes the starging elements from the page
        const startState = document.getElementById('startState');
        startState.remove();

        // Creates the tab, where the image and paragraphs are placed
        const tabWrapper = document.createElement('div');
        tabWrapper.setAttribute('id', 'tabState');
        tabWrapper.classList.add('tabWrapper', 'tabBackground', 'verticalFlex');

        // Creates a heading, assigns it's text content from the data file
        const heading = document.createElement('h2');
        heading.textContent = this.tab.heading;

        // Class to create images/videos in tabs, depending on file type
        const image = new TabMedia(this.tab.image);

        // Creates a div, to place paragraphs in
        const paragraphWrapper = document.createElement('div');
        paragraphWrapper.classList.add('tabParagraphWrapper');

        // Runing a loop through the array in data object, to create paragraphs for each paragraph in array
        this.tab.paragraphs.forEach(paragraph => {
            const paragraphEl = document.createElement('p');
            paragraphEl.textContent = paragraph;

            paragraphWrapper.appendChild(paragraphEl);
        })

        // Creates an image which will act as a clickable object to close tha tab
        const closeButton = document.createElement('img');
        closeButton.setAttribute('src', './media/xmark-solid.svg');
        closeButton.setAttribute('alt', 'close tab button');
        closeButton.classList.add('closeButton');

        // Adds an event listener to convert the image into a clickable object
        closeButton.addEventListener('click', e => {
            // Removes the tab from page
            const tabState = document.getElementById('tabState');
            tabState.remove();

            // Swaps the background overlays
            main.classList.remove('backgroundOverlayTabOpen');
            main.classList.add('backgroundOverlay');

            // Creates the start page
            new StartState();
            new ListItem();
        })

        tabWrapper.append(heading, image, paragraphWrapper, closeButton);

        return document.querySelector('main').appendChild(tabWrapper);
    }
}
export default Tab;