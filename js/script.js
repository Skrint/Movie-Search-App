const $input = document.querySelector('.js-input');
const $button = document.querySelector('.js-btn');
const $ul = document.querySelector('.movie__list');

const params = new URLSearchParams(location.search);

const id = params.get('id');

//* картинка - Poster
//* Заголовок - Title
//* Год - Year
//* тип - Type

console.log(id);

$button.addEventListener('click', () => {
  const fast = $input.value;
  fetch(`https://www.omdbapi.com/?s=${fast}&apikey=6503b203`)
    .then((data) => data.json())
    .then((res) => {
      for (let i = 0; i < res.Search.length; i++) {
        const $li = document.createElement('li');
        $li.classList.add('movie__item');
        const $link = document.createElement('a');
        $link.href = 'film.html';
        const $content = document.createElement('div');
        const $img = document.createElement('img');
        $img.classList.add('movie__img');
        $img.src = res.Search[i].Poster;
        const $h2 = document.createElement('h2');
        $h2.classList.add('movie__title');
        $h2.textContent = res.Search[i].Title;
        const $time = document.createElement('time');
        $time.classList.add('movie__year');
        $time.textContent = res.Search[i].Year;
        const $p = document.createElement('p');
        $p.classList.add('movie__text');
        $p.textContent = res.Search[i].Type;
        $content.append($h2);
        $content.append($time);
        $content.append($p);
        $link.append($img);
        $link.append($content);
        $li.append($link);
        $ul.append($li);
      }
    });
});
