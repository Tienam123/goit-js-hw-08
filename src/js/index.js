const data = [
  {
    name: [
      `<ul>
          <li>Создан репозиторий goit-js-hw-07</li>
          <li>При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.</li>
          <li>Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне.</li>
          <li> Посмотри демо видео работы галереи.</li>
          <li>Код отформатирован Prettier</li>
          <li><a href='../01-gallery.html'>Перейти на страницу выполнения задания</a></li>
        </ul>`,
    ],
  },
  {
    name: [
      `<ul>
           <li>Создан репозиторий goit-js-hw-07</li>
          <li>При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.</li>
          <li>Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox</li>
          <li>которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна</li>
          <li>A также пролистывание изображений при помощи клавиатуры</li>
          <li>Посмотри демо видео работы галереи с подключенной библиотекой.</li>
          <li>После чего вставит все li за одну операцию в список ul#ingredients.</li>
          <li>Код отформатирован Prettier</li>
          <li><a href='../02-video.html'>Перейти на страницу выполнения задания</a></li>
        </ul>`,
    ],
  },
  {
    name: [
      `<ul>
          <li>Создан репозиторий goit-js-hw-07</li>
          <li>При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.</li>
          <li>Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox</li>
          <li>которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна</li>
          <li>A также пролистывание изображений при помощи клавиатуры</li>
          <li>Посмотри демо видео работы галереи с подключенной библиотекой.</li>
          <li>После чего вставит все li за одну операцию в список ul#ingredients.</li>
          <li>Код отформатирован Prettier</li>
          <li><a href='../03-feedback.html'>Перейти на страницу выполнения задания</a></li>
        </ul>`,
    ],
  },
];
const buttons = document.querySelectorAll('.btn-resources');
const tabContent = document.querySelector('#tab-content');
buttons.forEach(el => el.addEventListener('click', handleClickTab));

function handleClickTab(e) {
  buttons.forEach((el, index) => {
      el.classList.remove('active');
    },
  );
  e.target.classList.add('active');
  tabContent.innerHTML = data[e.target.dataset.number].name;

}