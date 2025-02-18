class Tab{
    constructor(tab){
        this.tab = tab;
        return this.render();
    }
    render(){
        console.log(this.tab)
        const tabWrapper = document.createElement('div');

        const heading = document.createElement('h2');
        heading.textContent = this.tab.heading;

        const paragraphWrapper = document.createElement('div');
        this.tab.paragraphs.forEach(paragraph => {
            

            const paragraphEl = document.createElement('p');
            paragraphEl.textContent = paragraph;

            paragraphWrapper.appendChild(paragraphEl);
        })

        tabWrapper.append(heading, paragraphWrapper);

        document.querySelector('body').appendChild(tabWrapper);

    }
}
export default Tab;