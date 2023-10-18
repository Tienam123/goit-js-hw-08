# Домашнее задание №7

## GO-IT-JS 07 

---

### Критерии приема
* Создан репозиторий goit-js-hw-07.

* При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.

* При посещении живой страницы задания, в консоли нету ошибок и предупреждений.

* Имена переменных и функций понятные, описательные.

* Код отформатирован <span style="display:inline-block;width:47px;border-radius:4px;color:red;background-color:#f6f7f8">**Prettier**</span>.
### Стартовые файлы
[Скачай стартовые файлы](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/07/src) с базовой разметкой, готовыми стилями и подключенными файлами скриптов для каждого задания. Скопируй их себе в проект.  

В файле <span style="display:inline-block;padding:2px;border-radius:4px;color:black;background-color:#f6f7f8">**gallery-items.js**</span> есть массив <span style="display:inline-block;color:black;padding:2px;border-radius:4px;background-color:#f6f7f8">**galleryItems**</span> , который содержит объекты с информацией о изображениях: маленькое (превью), оригинальное (большое) и описание. Мы уже подключили его к каждому из JS-файлов проекта.

---

# Задание 1 - галерея изображений
Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.[Video](https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4)
Выполняй это задание в файлах <span style="display:inline-block;padding:2px;border-radius:4px;color:black;background-color:#f6f7f8">01-gallery.html</span> и <span style="display:inline-block;padding:2px;border-radius:4px;color:black;background-color:#f6f7f8"> 01-gallery.js </span> Разбей его на несколько подзадач:
* Создание и рендер разметки по массиву данных <span style="display:inline-block;padding:2px;border-radius:4px;color:black;background-color:#f6f7f8">01-gallery.html</span> и <span style="display:inline-block;padding:2px;border-radius:4px;color:black;background-color:#f6f7f8"> galleryItems </span> и предоставленному шаблону элемента галереи.
* Реализация делегирования на <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">ul.gallery</span>  и получение <span style="display:inline-block;border-radius:4px;color:black;background-color:#f6f7f8">url</span> большого изображения.
* Подключение скрипта и стилей библиотеки модального окна [basicLightbox](https://basiclightbox.electerious.com/).
Используй [CDN](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) сервис [jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) и добавь в проект ссылки на минифицированные (<span style="display:inline-block;border-radius:4px;color:black;background-color:#f6f7f8">.min</span>) файлы библиотеки.
* Открытие модального окна по клику на элементе галереи. Для этого ознакомься с [документацией](https://github.com/electerious/basicLightbox#readme) и [примерами](https://basiclightbox.electerious.com/).
* Замена значения атрибута <span style="display:inline-block;border-radius:4px;padding:1px;color:black;background-color:#f6f7f8">src</span> элемента <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">\<img></span> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

# Разметка элемента галереи
Ссылка на оригинальное изображение должна храниться в data-атрибуте <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">source</span> на элементе <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">\<img></span>, и указываться в <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">href</span> ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблон.  
Для вставки изображения в Markdown-файле (.md) с использованием HTML-тега \<img>, вы можете использовать следующий синтаксис:

markdown

![Html код](./assets/11241249012378u43.png)  
Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.  

![Внимание](assets/8475983475349.png)  

Добавь закрытие модального окна по нажатию клавиши <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">Escape</span>. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки [basicLightbox](https://basiclightbox.electerious.com/) есть метод для программного закрытия модального окна.

# Задание 2 - библиотека <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">SimpleLightbox</span>  
Сделай такую же галерею как в первом задании, но используя библиотеку  SimpleLightbox[SimpleLightbox](https://simplelightbox.com/), которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи с подключенной библиотекой. [Video](https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4)  
  

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.  

![](assets/349672384.png)  

Выполняй это задание в файлах <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">02-lightbox.html</span>  и <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">02-lightbox.js</span>. Разбей его на несколько подзадач:
* Создание и рендер разметки по массиву данных <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">galleryItems</span> и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
* Подключение скрипта и стилей библиотеки используя [CDN сервис cdnjs](https://cdnjs.com/libraries/simplelightbox). Необходимо добавить ссылки на два файла: <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">simple-lightbox.min.js</span> и <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">simple-lightbox.min.css</span>.
* Инициализация библиотеки после того как элементы галереи созданы и добавлены в <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">ul.gallery</span>. Для этого ознакомься с документацией [SimpleLightbox](https://simplelightbox.com/) - в первую очередь секции «Usage» и «Markup».
* Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута <span style="display:inline-block;padding:1px;border-radius:4px;color:black;background-color:#f6f7f8">alt</span>. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
























