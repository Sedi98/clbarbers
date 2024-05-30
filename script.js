// variables

let yearCount = document.querySelector(".yearCount");
let tire = document.querySelector('.tire');





const datePicker = () => {
  const d = new Date();
  let time = d.getFullYear();
  yearCount.innerHTML = time;

  if (time == 2023) {
    yearCount.innerHTML = "";
    tire.innerHTML='';
  }
};


datePicker(); 

