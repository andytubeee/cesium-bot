const getNextCode = (date) => {
  // if date is tuesday, use today's date
  // else, get the next tuesday
  const nextTuesday = new Date(date);
  if (nextTuesday.getDay() === 2) {
    // if today is tuesday, use today's date
  } else {
    nextTuesday.setDate(date.getDate() + ((2 + 7 - date.getDay()) % 7));
  }

  const day = nextTuesday.getDate();
  const month = nextTuesday.getMonth() + 1;
  const { abs, floor, sin, cos } = Math;
  return abs(floor(999999 * sin(cos(day + month))));
};

module.exports = { getNextCode };
