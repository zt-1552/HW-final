;(function($, undefined) {

var card = [];

card[0] = {
  image: "img/1517501131.jpg",
  title: "Не показывает картинку из папки",
  text_card: "Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это."
}

card[1] = {
  image: "img/1520152698.jpg",
  title: "Зачем нужен язык программирования Rust?",
  text_card: "Rust набирает популярность, но при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимущества языка программирования Rust."
}

card[2] = {
  image: "img/1518258565.jpg",
  title: "Что выбрать C++ или C#? С чего лучше начать?",
  text_card: "Между собой оба языка очень похожи. Статья поможет расставить всё по своим местам."
}

card[3] = {
  image: "img/1516438067.jpg",
  title: "3 логические задачи для настоящего программиста",
  text_card: "Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересных задачи, которые заставят вас задуматься."
}

card[4] = {
  image: "img/1517495970.jpg",
  title: "Как создать свою криптовалюту?",
  text_card: "Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. Мы расскажем вам общий алгоритм!"
}

card[5] = {
  image: "img/1516439711.jpg",
  title: "ТОП 10: Подборка хобби для программиста",
  text_card: "Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести время вне работы, а также улучшить логические и креативные способности мозга."
}

card[6] = {
  image: "img/1516890380.jpg",
  title: "СЕО-продвижение – верный способ улучшить свой бизнес",
  text_card: "Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. Мы расскажем про верные способы СЕО-продвижения, позволяющие раскрутить сайт!"
}

card[7] = {
  image: "img/1516366532.jpg",
  title: "10 самых популярных сайтов написанных на Django",
  text_card: "Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django."
}

var i;
var card_item = 0;

$("button#button_loading").on('click', function() {
  i = card_item;
  card_item = card_item + 4;
  if (card_item > 8) {
    return;
    } else {
      while (i < card_item) {
        showCard(card[i]);
        i++;
      }
      if (i > 6) {
        $("#loading").hide();
      }
    }
})

function showCard (elem) {
  var contentShow = $('<div>').attr({'class':'col-sm-6 col-sx-12 mb-4 d-flex align-items-stretch'});
  contentShow.html('<div class="card"><img class="card-img-top" src="' + elem.image + '" alt=""><div class="card-body pr-5 d-flex flex-column justify-content-start align-items-start"><h5 class="card-title">' + elem.title + '</h5><p class="card-text">' + elem.text_card + '</p><a href="#" class="btn btn-warning mt-auto">Читать далее</a></div></div>');
  $('#news').append(contentShow);
}

$('#search').on('click', function (){
  $('#modal-window').modal();
})


})(jQuery);
