const gallery = document.querySelectorAll('.gallery')[0]
const pictures: Element[] = Array.from(gallery.children)
const smallUrls: string[] = pictures.map(e => elementToImg(e).src)
const bigUrls: string[] = pictures.map(getHref)
let currentImage = 0

function getHref(elem: Element): string {
    let anchor = <HTMLAnchorElement>elem.children[1]
    return anchor.href
}

function elementToImg(elem: Element): HTMLImageElement {
    return <HTMLImageElement>elem.children[0].children[0].children[0]
}

function swap(a: Element, b: Element) {
    gallery.insertBefore(a, b)
}

function enlargeImage(image: Element, shouldSwap: boolean) {
    const img = elementToImg(image)
    img.src = bigUrls[currentImage]
    // gallery has margin-left of 60px
    img.width = document.documentElement.clientWidth - 60
    if (shouldSwap) {
        swap(gallery.children[currentImage], gallery.children[0])
    }
}

function restoreCurrentImage() {
    const img = elementToImg(pictures[currentImage])
    img.src = smallUrls[currentImage]
    img.width = 108
    // Swap with all previous images in increasing order
    for (let i = 0; i !== currentImage; i++) {
        swap(gallery.children[currentImage], gallery.children[i])
    }
}

function nextImage() {
    restoreCurrentImage()
    currentImage++
    enlargeImage(pictures[currentImage], true)
}

function previousImage() {
    restoreCurrentImage()
    currentImage--
    enlargeImage(pictures[currentImage], false)
}


document.addEventListener('keypress', function onPress(event) {
    if (event.key === 'a' && currentImage > 0) {
        return previousImage()
    } else if (event.key === 'd' && currentImage < pictures.length - 1) {
        return nextImage()
    }
})

enlargeImage(pictures[0], true)
