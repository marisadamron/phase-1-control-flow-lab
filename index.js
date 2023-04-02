function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(destination){
  if (destination === 'NYC') {
    return 'Ok, sounds good.';
  } else if (destination !== 'NYC') {
    return 'No go.';
  }
}

function switchOnCharmFromTip(gratuity){
  switch(gratuity) {
    case 'generous':
      return ('Thank you so much.');
      break;
    case 'not as generous':
      return ('Thank you.');
      break;
    default:
      return ('Bye.');
      break;
  }
}