import noImage from "../assets/no-image-placeholder-6f3882e0.webp"

// function to get the game images in smaller size, so it can load faster
const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = "media/";
    const index = url.indexOf(target)+target.length
    return url.slice(0,index) + "crop/600/400/" + url.slice(index)
}

export default getCroppedImageUrl;