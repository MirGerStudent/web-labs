const getDate = (UTC) => setInterval(() => {
  let date_date = new Date().toLocaleString('ru-RU', {
    timeZone: `${UTC}`,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    locale: 'ru-RU'
  });
  let date_time = new Date().toLocaleString('ru-RU', {timeZone: `${UTC}`, hour : '2-digit', minute : '2-digit', second : '2-digit'});

  let date = document.getElementsByClassName("date")[0];  
  let timer = document.getElementsByClassName("timer")[0];

  date.textContent = date_date;
  timer.textContent = date_time;
  
}, 1000);

window.onload = () => {
  let zones = [ "Europe/Moscow", "Asia/Omsk", "Asia/Yekaterinburg"]
  let curr_UTC_date = getDate("Asia/Omsk");  

  let timeZones = document.getElementsByClassName("check");
  for (let i = 0; i < timeZones.length; i++) {
    timeZones.item(i).addEventListener("click", () => {
      console.log("lol", `${zones[i]}`)
      clearInterval(curr_UTC_date);
      curr_UTC_date = getDate(`${zones[i]}`);
    });
  }
}