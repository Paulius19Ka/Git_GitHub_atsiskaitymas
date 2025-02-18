class TabMedia{
    constructor(img){
        this.img = img;
        return this.render();
    }
    render(){
        // If the image name ends with jpg or png. creates ant image tag, if ends with mp4 - video tag
        if(this.img.slice(-3) === 'jpg' || this.img.slice(-3) === 'png'){
            // Creates the image tag, and assigns attributes, source/alt from the data file
            const image = document.createElement('img');
            image.setAttribute('src', `${this.img}`);
            image.setAttribute('alt', `${this.img.slice(8)}`);
            image.classList.add('tabImage');
            return image;
        } else if(this.img.slice(-3) === 'mp4'){
            // Creates the video tag, assigns attributes so that it loops and autoplays
            const video = document.createElement('video');
            video.setAttribute('autoplay', '');
            video.setAttribute('loop', '');
            video.classList.add('tabVideo');

            // Creates source tag, assigns source from the data file
            const source = document.createElement('source');
            source.setAttribute('src', `${this.img}`);
            source.setAttribute('type', 'video/mp4');
            video.appendChild(source);
            return video;
        }
    }
}
export default TabMedia;