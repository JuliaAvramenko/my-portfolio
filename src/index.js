import styles from "./pages/index.css";


const objects = document.querySelectorAll('.async_image');
console.log(`Hello world from my portfolio: ${JSON.stringify(objects)}`)

Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
        item.classList.remove('async_image');
        return item.nodeName === 'IMG' ?
            item.src = item.dataset.src :
            item.style.backgroundImage = `url(${item.dataset.src})`;
    };

})




setTimeout(function () {

    const workLinkNodes = document.querySelectorAll(".works__link")
    workLinkNodes.forEach((item) => { item.style.display = "flex" })




}, 10000);
