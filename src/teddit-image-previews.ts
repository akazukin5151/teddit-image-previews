import { browser } from "webextension-polyfill-ts"

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

function enlargeImage(image: Element, shouldSwap: boolean, deliberatelyToggled: boolean) {
    const img = elementToImg(image)
    img.src = bigUrls[currentImage]
    let height = document.documentElement.clientHeight
    img.style.setProperty('max-height', height.toString() + 'px', 'important')
    if (shouldSwap) {
        swap(gallery.children[currentImage], gallery.children[0])
    }
    if (deliberatelyToggled) {
        img.scrollIntoView()
    }
}

function restoreCurrentImage() {
    const img = elementToImg(pictures[currentImage])
    img.src = smallUrls[currentImage]
    // No need to restore size again, because the enlarge function changes only max
    // Swap with all previous images in increasing order
    for (let i = 0; i !== currentImage; i++) {
        swap(gallery.children[currentImage], gallery.children[i])
    }
}

function nextImage(deliberatelyToggled: boolean) {
    if (currentImage < pictures.length - 1) {
        restoreCurrentImage()
        currentImage++
        enlargeImage(pictures[currentImage], true, deliberatelyToggled)
    }
}

function previousImage(deliberatelyToggled: boolean) {
    if (currentImage > 0) {
        restoreCurrentImage()
        currentImage--
        enlargeImage(pictures[currentImage], false, deliberatelyToggled)
    }
}

function make_button(label: string, onclick: () => void) {
    let btn = document.createElement("button")
    btn.textContent = label
    btn.style.background = 'none'
    btn.style.border = 'none'
    btn.style.fontSize = 'small'
    btn.style.color = '#0645ad'
    btn.style.cursor = 'pointer'
    btn.onclick = onclick
    return btn
}

function add_buttons() {
    const info = document.querySelectorAll('.info')[0]
    const title = info.children[1]
    const links = title.children[4]

    let prev = make_button('prev', () => previousImage(true))
    prev.style.marginLeft = '10px'
    prev.style.marginRight = '10px'
    links.append(prev)

    let next = make_button('next', () => nextImage(true))
    links.append(next)
}

function main() {
    document.addEventListener('keypress', async (event) => {
        const settings = await browser.storage.sync.get()
        switch (event.key) {
            case settings.prev_image:
                return previousImage(true)
            case settings.next_image:
                return nextImage(true)
        }
    })
    enlargeImage(pictures[0], true, false)
    add_buttons()
}

main()
