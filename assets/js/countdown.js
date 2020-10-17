let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
  const now = Date.now()
  const then = now + seconds * 1000

  // Clear any existing timers
  clearInterval(countdown)

  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)

    // Check if the countdown should stop
    if (secondsLeft < 0) {
      clearInterval(countdown)
      notify("Time's Up!", "Your timer has ended.")
      return
    }

    // Display time
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`

  document.title = 'Time left - ' + display;
  timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const adjustedHour = hour > 12 ? hour - 12 : hour
  const minutes = end.getMinutes()

  endTime.textContent = `⏰ be back by ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

function notify(title, body) {
  if (typeof process !== 'undefined') {
    const myNotification = new Notification(title, {
      body: body
    })
  }
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
})
