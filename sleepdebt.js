/* || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday' || day === 'saturday' || day === 'sunday') {
    return 9
  } */

const getSleepHours = (day) => {
  if (day === 'monday') {
    return 9
  }
  if (day === 'tuesday') {
    return 9
  }
  if (day === 'wednesday') {
    return 9
  }
  if (day === 'thursday') {
    return 9
  }
  if (day === 'friday') {
    return 9
  }
  if (day === 'saturday') {
    return 9
  }
  if (day === 'sunday') {
    return 9
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

// console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  const idealHours = 9.5
  return idealHours * 7
}

// console.log(getIdealSleepHours())

  const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours){
    console.log('Perfect sleep!')
  }
  if (actualSleepHours > idealSleepHours) {
    console.log('You got enough sleep.')
    console.log('You are ' + (actualSleepHours - idealSleepHours) + ' hours above ideal amount.')
  }
  if (actualSleepHours < idealSleepHours) {
    console.log('You need more sleep!')
    console.log('You are ' + (idealSleepHours - actualSleepHours) + ' hours below ideal amount.')
  }
}

calculateSleepDebt()