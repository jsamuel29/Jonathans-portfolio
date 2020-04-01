const getSleepHours = day => {
    switch(day) {
      case 'Monday':
        return 8
        break;
      case 'Tuesday':
        return 7
        break;
      case 'Wednesday':
        return 8
        break;
      case 'Thursday':
        return 5
        break;
      case 'Friday':
        return 8
        break;
      case 'Saturday':
        return 7
        break;
      case 'Sunday':
        return 8
        break;
      default:
        return 'Error';
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep')
    } else if(actualSleepHours > idealSleepHours) {
      console.log("You've got " + (idealSleepHours - actualSleepHours) + " more this week")
    } else if(actualSleepHours < idealSleepHours) {
      console.log("The user should get some rest because you slept " + (idealSleepHours - actualSleepHours) + " hour(s) less than you should have this week")
    } else {
      console.log('Error! Something went wrong')
    }
  };
  calculateSleepDebt();
  
  