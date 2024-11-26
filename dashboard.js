



const monthYear = document.getElementById('month-year');
const datesContainer = document.getElementById('dates');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentDate = new Date(2024, 10); // November 2024

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const lastDayOfPrevMonth = new Date(year, month, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  monthYear.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${year}`;

  datesContainer.innerHTML = '';

  const today = new Date();

  for (let i = startingDay - 1; i >= 0; i--) {
    const prevMonthDate = lastDayOfPrevMonth.getDate() - i;
    const prevMonthCell = document.createElement('div');
    prevMonthCell.classList.add('date', 'disabled');
    prevMonthCell.textContent = prevMonthDate;
    datesContainer.appendChild(prevMonthCell);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dateCell = document.createElement('div');
    dateCell.classList.add('date');
    
    if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dateCell.classList.add('active'); 

      const shadowDiv = document.createElement('div');
      shadowDiv.classList.add('shadow');

      const h1Text = document.createElement('h1');
      h1Text.textContent = i;

      shadowDiv.appendChild(h1Text);
      dateCell.appendChild(shadowDiv);
    }
    else {
      dateCell.textContent = i;
    }

    datesContainer.appendChild(dateCell);
  }

  const remainingCells = 42 - (startingDay + daysInMonth);
  for (let i = 1; i <= remainingCells; i++) {
    const nextMonthCell = document.createElement('div');
    nextMonthCell.classList.add('date', 'disabled');
    nextMonthCell.textContent = i;
    datesContainer.appendChild(nextMonthCell);
  }
}

function goToNextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

function goToPreviousMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

leftArrow.addEventListener('click', goToPreviousMonth);
rightArrow.addEventListener('click', goToNextMonth);

renderCalendar();

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const divNumber = this.getAttribute('data-div'); 
          const newHeading = this.getAttribute('data-heading'); 
          changeContent(divNumber, newHeading, this); 
      });
  });
});

function changeContent(divNumber, newHeading, clickedButton) {
  document.getElementById("dynamicHeading").innerText = newHeading;

  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "none";

  document.getElementById(`div${divNumber}`).style.display = "block";

  const buttons = document.querySelectorAll(".content-btn");
  buttons.forEach(button => button.classList.remove("active"));

  clickedButton.classList.add("active");
}
