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

        const heading = document.createElement('h2');
        heading.textContent = this.tab.heading;

        const paragraphWrapper = document.createElement('div');
        // Runing a loop through the array in data object, to create paragraphs for each paragraph in array
        this.tab.paragraphs.forEach(paragraph => {
            const paragraphEl = document.createElement('p');
            paragraphEl.textContent = paragraph;

            paragraphWrapper.appendChild(paragraphEl);
        })

        tabWrapper.append(heading, paragraphWrapper);

        return document.querySelector('body').appendChild(tabWrapper);
    }
}
export default Tab;