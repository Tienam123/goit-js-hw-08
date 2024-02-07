import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = gallery.insertAdjacentHTML('afterbegin',
  createMarkup(galleryItems));
const instance = basicLightbox.create(`
    <img src='' width='800' height='600'>
`, {
  closable: false,
  onShow: (instance) => {
    instance.element().addEventListener('click', onCardCloseClick);
    window.addEventListener('keydown', onPressButton);
  },
});

// Делегируем события клика
gallery.addEventListener('click', onCardOpen);

// Создание разметки
function createMarkup(array) {
  return array.map(({ original, preview, description }) => {
    return `<li class='gallery__item'>
  <a class='gallery__link' href='${original}'>
    <img
      class='gallery__image'
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`;
  }).join('');
}

// Функция открытия модалки
function onCardOpen(e) {
  if (e.target === this) {
    return;
  }
  e.preventDefault();
  instance.show(() => {
    instance.element().querySelector('img').src = '';
    instance.element().querySelector('img').src = e.target.dataset.source;
  });
}

// Функция скрытия модалки
function onCardCloseClick(e) {
  instance.close();
  removeEventListener('click', onCardCloseClick);
}

// Закрытие модалки по Esc
function onPressButton(e) {

  if (e.code === 'Escape') {
    instance.close();
    removeEventListener('keydown', onPressButton);
  }
}