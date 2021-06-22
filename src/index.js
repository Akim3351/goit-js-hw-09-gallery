import './sass/main.scss';
import './js/gallery.js';

const galleryMarkup = galleryItems.map(({ preview, original, description }, index) =>
`<li class = "gallery__item">
<a class = "gallery__link" href = " ">
<img class = "gallery__image" src = "${preview}" data-source = "${original}"
alt = "${description}" data-index = "${index}">
</a>
</li>
`).join('');

const boxElems = {
  modal: document.querySelector('.lightbox'),
  jsGallery: document.querySelector('.js-gallery'),
  modalImage: document.querySelector('.lightbox__image'),
  modalBtn: document.querySelector('.lightbox__button'),

};


console.log(galleryMarkup);

boxElems.jsGallery.innerHTML = galleryMarkup;

const openModalClick = element => {

element.preventDefault();

if (element.target.localName === 'img') {
    boxElems.modalImage.src = element.target.dataset.source;
    boxElems.modalImage.alt = element.target.alt;
    boxElems.modalImage.dataset.index = element.target.dataset.index;
    boxElems.modal.classList.add('is-open');
    window.addEventListener('keydown', escClick);
    window.addEventListener('click', closeModalClick);
    
}
};

const closeWindow = () => {
boxElems.modal.classList.remove('is-open')
boxElems.modalImage.src = '';
boxElems.modalImage.alt = '';
};

const escClick = element => {  
if (element.key === 'Escape') {
  closeWindow();
}
};

const closeModalClick = element  => {
if (element.target.localName !== 'img') {
  closeWindow();

}
};

boxElems.jsGallery.addEventListener('click', openModalClick);
