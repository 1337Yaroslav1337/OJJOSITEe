// $(function() {
//     $('.stroka').marquee({
//       duration: 9000,
//       startVisible: true,
//       duplicated: true,
//       gap: 150
//     });
//   });

let isRotated = false;

function rotateBody() {
  if (isRotated) {
    document.body.style.transform = "rotate(0deg)";
    document.body.style.direction = "ltr";
  } else {
    document.body.style.transform = "rotate(180deg)";
    document.body.style.direction = "rtl";
  }
  isRotated = !isRotated;
}

// function getLocation() {
//   // Если геолокация поддерживается браузером
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     document.getElementById("location").innerHTML =
//       "Геолокация не поддерживается.";
//   }
// }

// function showPosition(position) {
//   var lat = position.coords.latitude;
//   var lon = position.coords.longitude;
//   alert(
//     `Ракета выпушена по вашим координатам. \nШирота: ${lat} \nДолгота: ${lon}`
//   );
//   console.log(lat, lon);
// }



document.getElementById('searchForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  try {
      const response = await axios.post('/', {}); // Пустое тело запроса, поскольку вам не нужно отправлять данные

      // Обновляем содержимое страницы с данными, полученными от сервера
      const geoDataDiv = document.getElementById('geoData');
      geoDataDiv.innerHTML = ''; // Очищаем содержимое перед добавлением новых данных
      const data = response.data;

      // Создаем элементы для отображения данных
      const ipParagraph = document.createElement('p');
      ipParagraph.textContent = `IP: ${data.ip}`;
      geoDataDiv.appendChild(ipParagraph);

      const cityParagraph = document.createElement('p');
      cityParagraph.textContent = `City: ${data.city}`;
      geoDataDiv.appendChild(cityParagraph);

      const regionParagraph = document.createElement('p');
      regionParagraph.textContent = `Region: ${data.region}`;
      geoDataDiv.appendChild(regionParagraph);

      const countryParagraph = document.createElement('p');
      countryParagraph.textContent = `Country: ${data.country}`
      geoDataDiv.appendChild(countryParagraph);
      console.log('Данные успешно получены!')

      // Добавьте другие данные, если это необходимо

  } catch (error) {
      console.error('Ошибка при получении данных с сервера:', error);
  }
});

