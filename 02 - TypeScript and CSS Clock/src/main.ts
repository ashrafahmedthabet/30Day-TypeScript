const secondHand: HTMLDivElement | null =
  document.querySelector(".second-hand");
const minsHand: HTMLDivElement | null = document.querySelector(".min-hand");
const hourHand: HTMLDivElement | null = document.querySelector(".hour-hand");

function setDate() {
  const now: Date = new Date();

  const seconds: number = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  if (secondHand) secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins: number = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  if (minsHand) minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour: number = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
