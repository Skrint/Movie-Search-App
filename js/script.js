const $input = document.querySelector('.js-input');
const $form = document.querySelector('.functional');
const $ul = document.querySelector('.movie__list');
$ul.textContent = 'Фильмы не найдены';

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchInput = $input.value;
  fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=6503b203&`)
    .then((data) => data.json())
    .then((res) => {
      let movies = '';
      if (res.Search === undefined || res.Search === null) {
        movies = '';
        $ul.classList.remove('movie__list--active');
        return ($ul.textContent = 'Фильмы не найдены');
      } else {
        res.Search.forEach((item) => {
          movies += `
          <li class='movie__item'>
            <a class='movie__link' href='/film.html?s=${item.imdbID}&apikey=6503b203'>
              <img class='movie__img' src='${item.Poster}' alt=''>
              <div class='movie__content'>
                <h2 class='movie__title'>${item.Title}</h2>
                <time class='movie__year'>${item.Year}</time>
                <p class='movie__text'>${item.Type}</p>
              </div>
            </a>
          </li>
        `;
        });
      }
      $ul.classList.add('movie__list--active');
      $ul.innerHTML = movies;
    });
});
