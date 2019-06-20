const PLACE_NAME = window.location.search.match(/\?placeName=(.*)/)[1];
const wikiUrl = 'https://pt.wikipedia.org/api/rest_v1/page/summary';
const wikiUrlEn = 'https://en.wikipedia.org/api/rest_v1/page/summary';

fetch(`${wikiUrl}/${PLACE_NAME}`)
  .then(resp => resp.json())
  .then(resp => {
    const wikiTitle = resp.title;
    const wikiSummary = resp.extract;
    const moreUrl = resp.content_urls.mobile.page;

    summary.innerHTML = `
      <h1>${wikiTitle}</h1>
      <p id='text' class='text'>${wikiSummary}</p>
      <a class='read-more' href='${moreUrl}' target='_blank'>Saiba mais...</a>
    `;

    if (PLACE_NAME === 'Museu_de_Arte_de_S%C3%A3o_Paulo') {
      showPhotos('Museu_de_Arte_de_Sao_Paulo');
    } else if (PLACE_NAME === 'Parque_Trianon') {
      showPhotos('Parque_Trianon');
    } else if (PLACE_NAME === 'Conjunto_Nacional') {
      showPhotos('Conjunto_Nacional');
    } else if (PLACE_NAME === 'Funda%C3%A7%C3%A3o_C%C3%A1sper_L%C3%ADbero') {
      showPhotos('Fundação_Cásper_Líbero');
    } else if (PLACE_NAME === 'Edif%C3%ADcio_Anchieta') {
      showPhotos('Edifício_Anchieta');
    }
    fetchTTS(wikiSummary);
  });

$('#btnEnglish').on('click', () => {
  $('#summary').text('');
  fetch(`${wikiUrlEn}/${PLACE_NAME}`)
    .then(resp => resp.json())
    .then(resp => {
      const wikiTitle = resp.title;
      const wikiSummary = resp.extract;
      const moreUrl = resp.content_urls.mobile.page;

      summary.innerHTML = `
        <h1>${wikiTitle}</h1>
        <p id='text' class='text'>${wikiSummary}</p>
        <a class='read-more' href='${moreUrl}' target='_blank'>Read more...</a>
    `;

      fetchTTS(wikiSummary);
    });
})

