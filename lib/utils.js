const WEEKDAYS = [
  'maandag',
  'dinsdag',
  'woensdag',
  'donderdag',
  'vrijdag',
  'zaterdag',
  'zondag'
];

const utils = {
  renderPrice (price) {
    const rendered = price.toString();
    return `${rendered.slice(0, -2)}.${rendered.slice(-2)}`;
  },

  // TODO: refactor and add spec
  getToday () {
    let date = new Date();
    let days = date.getDate();
    let months = date.getMonth() + 1; // January is 0
    let weekday = WEEKDAYS[date.getDay()];

    if (days < 10) {
      days = '0' + days;
    }

    if (months < 10) {
      months = '0' + months;
    }

    return `${days}-${months} ${weekday}`;
  }
};

module.exports = utils;