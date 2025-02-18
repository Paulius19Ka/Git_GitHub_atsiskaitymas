class TabMedia{
    constructor(img){
        this.img = img;
        return this.render();
    }
    render(){
        // If the image name ends with jpg or png. creates ant image tag, if ends with mp4 - video tag
        if(this.img.slice(-3) === 'jpg' || this.img.slice(-3) === 'png'){
            const image = document.createElement('img');
            image.setAttribute('src', `${this.img}`);
            image.setAttribute('alt', `${this.img.slice(8)}`);
            image.classList.add('tabImage');
            return image;
        } else if(this.img.slice(-3) === 'mp4'){
            const video = document.createElement('video');
            video.setAttribute('controls', '');
            video.classList.add('tabVideo');

            const source = document.createElement('source');
            source.setAttribute('src', `${this.img}`);
            source.setAttribute('type', 'video/mp4');
            video.appendChild(source);
            return video;
        }
    }
}
export default TabMedia;