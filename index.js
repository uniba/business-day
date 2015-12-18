'use strict';

const isCommonHoliday = require('holiday-jp').isHoliday;
const additionalHolidays = require('./additional_holidays');

module.exports = function(date) {
  const isAdditionalHoliday = additionalHolidays.some((str) => {
    const d = new Date(str);
    return d.getFullYear() === date.getFullYear() && d.getMonth() === date.getMonth() && d.getDate() === date.getDate();
  });
  
  const isHoliday = date.getDay() == 6 || date.getDay() == 0 || isCommonHoliday(date) || isAdditionalHoliday;

  return !isHoliday;
};
