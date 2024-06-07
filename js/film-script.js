const $filmItem = document.querySelector('.film__item');

const params = new URLSearchParams(location.search);
const id = params.get('s');

fetch(`http://www.omdbapi.com/?i=${id}&apikey=6503b203&`)
  .then((data) => data.json())
  .then((res) => {
    $filmItem.innerHTML = `
			<div class="film__content">
						<img class="film__img" src="${res.Poster}" alt="">
						<div class="film__info">
							<h1 class="film__title">${res.Title}</h1>
							<p class="film__text">Год: <span class="film__text film__text--blue film__year">${res.Year}</span></p>
							<p class="film__text">Рейтинг: <span class="film__text film__text--blue film__rating">${res.Rated}</span></p>
							<p class="film__text">Дата выхода: <span class="film__text film__text--blue film__date">${res.Released}</span></p>
							<p class="film__text">Продолжительность: <span class="film__text film__text--blue film__duration">${res.Runtime}</span>
							</p>
							<p class="film__text">Жанр: <span class="film__text film__text--blue film__genre">${res.Genre}</span></p>
							<p class="film__text">Режиссер: <span class="film__text film__text--blue film__producer">${res.Director}</span></p>
							<p class="film__text">Сценарий: <span class="film__text film__text--blue film__scenario">${res.Writer}</span></p>
							<p class="film__text">Актеры: <span class="film__text film__text--blue film__actors">${res.Actors}</span></p>
						</div>
					</div>
					<p class="film__descr">${res.Plot}</p>
		`;
  });
