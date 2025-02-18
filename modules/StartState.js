class StartState{
    constructor(){
        return this.render();
    }
    render(){
        // Creates the starting html page

        // Creates div which stores elements
        const div = document.createElement('div');
        div.setAttribute('id', 'startState');
        div.classList.add('verticalFlex');

        // Creates the gem image
        const gem = document.createElement('img');
        gem.setAttribute('src', './media/gem-regular.svg');
        gem.setAttribute('alt', 'a gem');
        gem.classList.add('gem');

        // Creates the vertical lines, used between the gem image, the div which includes a heading and a paragraph, and the list
        const verticalLine0 = document.createElement('div');
        verticalLine0.classList.add('verticalLine');
        const verticalLine1 = document.createElement('div');
        verticalLine1.classList.add('verticalLine');

        // Creates a div, to store the heading and the paragraph
        const headerAndTextWrapper = document.createElement('div');
        headerAndTextWrapper.classList.add('headerAndTextWrapper');

            // Creates the heading
            const heading = document.createElement('h1');
            heading.classList.add('fontWhiteUppercase');
            heading.textContent = 'Metaverse'
            
            // Creates the paragraph
            const paragraph = document.createElement('p');
            paragraph.classList.add('fontWhiteUppercase');
            paragraph.innerHTML = `Innovation that will shape how we <span class="fontDotUnderline">connect</span> in the world an <span class="fontDotUnderline">opportunity</span> for everybody.`;

        headerAndTextWrapper.append(heading, paragraph);

        // Creates an unordered list
        const unorderedList = document.createElement('ul');
        unorderedList.classList.add('fontWhiteUppercase', 'menuList');

        div.append(gem, verticalLine0, headerAndTextWrapper, verticalLine1, unorderedList);

        return document.querySelector('main').appendChild(div);
    }
}
export default StartState;