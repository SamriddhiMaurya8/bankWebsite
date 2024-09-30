// document.querySelectorAll('.footerBottom__menu--column--strong').forEach(header => {
//     const button = header.querySelector('.accordion-button');
//     const content = header.nextElementSibling;

//     header.addEventListener('click', () => {
//         const isOpen = content.style.maxHeight;

//         document.querySelectorAll('.accordion-content').forEach(item => {
//             item.style.maxHeight = null;
//         });
//         document.querySelectorAll('.accordion-button').forEach(btn => {
//             btn.textContent = '+';
//         });

        
//         if (!isOpen) {
//             content.style.maxHeight = content.scrollHeight + "px";
//             button.textContent = '-';
//         }
//     });
// });


document.querySelectorAll('.footerBottom__menu--column--strong').forEach(header => {
    const button = header.querySelector('.accordion-button');
    const content = header.nextElementSibling;

    header.addEventListener('click', () => {
        content.classList.toggle('open');
        button.classList.toggle('open');
    });
});

