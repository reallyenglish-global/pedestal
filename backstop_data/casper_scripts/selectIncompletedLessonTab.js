module.exports = function(casper, scenario, vp) {
  casper.click('#booked-lessons-button');
  casper.click('#incompleted-lessons-button');
}