const scrollers = document.querySelectorAll("#content-container");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
} 

function addAnimation() { 
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = querySelector('#contents');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerContent.appendChild(duplicatedItem);
        });
    });
}