const DDay = document.querySelector("#DDay");

function find_day(){
  const target_day = new Date("2024-11-16");  //디데이 설정
  const today = new Date();
  
  diff_day = target_day - today;
  const day = Math.floor(diff_day / (1000*60*60*24));
  DDay.innerText = `${day}일`;
}
find_day();
setInterval(find_day, 1000);