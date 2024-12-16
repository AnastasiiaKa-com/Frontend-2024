


const img = document.querySelector('#RickAndMorty-img');// Эл.для отображения изображения персонажа
const nameElem = document.querySelector('#name');//Эл.для отображения имени персонажа
const statusElem = document.querySelector('#status');//Эл.для отображения статуса персонажа
const originElem = document.querySelector('#origin');//Эл.для отображения происхождения персонажа


//Выполняем запрос к АРI для получения списка персонажей
fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())//Преобразуем ответ в JSON
.then( data => {
    //Выводим изображение персонажа в консоль
    console.log(data.results [2].image);
    //Устанавливаем изображение
    img.src = data.results [2].image;
    //Устанавливаем имя
    nameElem.textContent = data.results[2].name;
    //Устанавливаем статус
    statusElem.textContent = data.results[2].status;
    //Устанавливаем "Unknown" если прохождение отсутсвует
    const originName = data.results[2].origin.name || "Unknown";
    //Устанавливаем происхождение
    originElem.textContent = originName; 
})
.catch(error => console.error('Ошибка при получении данных:',error));//Обработка ошибок



      

   