// ! теория

// HTTP - HyperText Transfer Protocol - протокол передачи гипертекста
// API - Application Programming Interface - интерфейс для 'общения' программ друг с другом

// * делаем fetch запрос за данными к API (частный случай работы с сервером)

// * в ответ на fetch запрос приходит объект Promise в состоянии <Pending>
// * его не получится обработать синхронно - нужно использовать методы работы с асинхронными данными

// const data = fetch('https://dog.ceo/api/breeds/image/random')
// console.log(data)
// * ответ с сервера мы получаем в формате JSON
// JSON - JavaScript Object Notation

// ! делаем запрос

// находим пустой элемент img, чтобы добавить в него данные из API
const img = document.querySelector('#dog-img')
const btnUpd = document.querySelector('#btn-update')

function getDog(){fetch("https://dog.ceo/api/breeds/image/random")
    // первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
    .then(res => res.json())
    // в data уже придут обработанные данные готовые к использованию
    .then(data => {
      // перезаписываем аттрибут src значением из data
      img.src = data.message
    })
    getDog()
}


  btnUpd.addEventListener('click',getDog);


 
