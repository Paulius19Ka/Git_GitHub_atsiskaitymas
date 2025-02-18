class StartState{
    constructor(){
        return this.render();
    }
    render(){
        // Creates the starting html page
        const div = document.createElement('div');
        div.setAttribute('id', 'startState');
        div.classList.add('verticalFlex');

        const gem = document.createElement('img');
        gem.setAttribute('src', './media/gem-regular.svg');
        gem.setAttribute('alt', 'a gem');
        gem.classList.add('gem');

        const verticalLine0 = document.createElement('div');
        verticalLine0.classList.add('verticalLine');
        const verticalLine1 = document.createElement('div');
        verticalLine1.classList.add('verticalLine');

        const headerAndTextWrapper = document.createElement('div');
        headerAndTextWrapper.classList.add('headerAndTextWrapper');

            const heading = document.createElement('h1');
            heading.classList.add('fontWhiteUppercase');
            heading.textContent = 'Metaverse'
            const paragraph = document.createElement('p');
            paragraph.classList.add('fontWhiteUppercase');
            paragraph.innerHTML = `Innovation that will shape how we <span class="fontDotUnderline">connect</span> in the world an <span class="fontDotUnderline">opportunity</span> for everybody.`;

        headerAndTextWrapper.append(heading, paragraph);

        const unorderedList = document.createElement('ul');
        unorderedList.classList.add('fontWhiteUppercase', 'menuList');

        div.append(gem, verticalLine0, headerAndTextWrapper, verticalLine1, unorderedList);

        return document.querySelector('main').appendChild(div);
    }
}
export default StartState;