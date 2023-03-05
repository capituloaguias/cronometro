const countdown1 = document.querySelector('#countdown1')
const countdown2 = document.querySelector('#countdown2')

const countdownDate1 = new Date('Sep 04, 2023 00:00:00').getTime()
const countdownDate2 = new Date('Mar 04, 2025 00:00:00').getTime()

function getData(timeLeft) {
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  hours = String(hours).length == 1 ? `0${hours}` : hours
  minutes = String(minutes).length == 1 ? `0${minutes}` : minutes
  seconds = String(seconds).length == 1 ? `0${seconds}` : seconds

  return [days, hours, minutes, seconds]
}

function validate(date, text, interval, element) {
  const now = new Date().getTime()
  const timeLeft = date - now

  if (timeLeft < 0) {
    clearInterval(interval)
    element.textContent = text
  } else {
    const [days, hours, minutes, seconds] = getData(timeLeft)
  
    element.textContent = `${days}:${hours}:${minutes}:${seconds}`
  }
}

validate(countdownDate1, 'A cápsula do tempo de 6 meses já pode ser aberta!', null, countdown1)
validate(countdownDate2, 'A cápsula do tempo de 2 anos já pode ser aberta!', null, countdown2)

const interval1 = setInterval(() => validate(countdownDate1, 'A cápsula do tempo de 6 meses já pode ser aberta!', interval1, countdown1), 1000)

const interval2 = setInterval(() => validate(countdownDate2, 'A cápsula do tempo de 2 anos já pode ser aberta!', interval2, countdown2), 1000)