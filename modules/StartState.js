class StartState{
    constructor(){
        return this.render();
    }
    render(){
        console.log('test');
        
        const div = document.createElement('div');
        div.setAttribute('id', 'startState');
        div.classList.add('backgroundOverlay', 'verticalFlex');

        return document.querySelector('main').appendChild(div);
    }
}
export default StartState;