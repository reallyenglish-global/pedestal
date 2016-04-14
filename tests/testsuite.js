var fs = require('fs');
var phantomcss = require('phantomcss');

phantomcss.init({
  rebase: casper.cli.get("rebase"),
  // SlimerJS needs explicit knowledge of this Casper, and lots of absolute paths
  casper: casper,
  libraryRoot: fs.absolute(fs.workingDirectory + '/node_modules/phantomcss'),
  screenshotRoot: fs.absolute(fs.workingDirectory + '/tests/screenshots'),
  failedComparisonsRoot: fs.absolute(fs.workingDirectory + '/tests/failures'),
  addLabelToFailedImage: false,
  /*
  screenshotRoot: '/screenshots',
  failedComparisonsRoot: '/failures'
  casper: specific_instance_of_casper,
  libraryRoot: '/phantomcss',
  fileNameGetter: function overide_file_naming(){},
  onPass: function passCallback(){},
  onFail: function failCallback(){},
  onTimeout: function timeoutCallback(){},
  onComplete: function completeCallback(){},
  hideElements: '#thing.selector',
  addLabelToFailedImage: true,
  */
  outputSettings: {
    errorColor: {
      red: 255,
      green: 255,
      blue: 0
    },
    errorType: 'movement',
    transparency: 0.45
  }
});

casper.test.begin('Booking system template visual tests', function (test) {

  casper.on('remote.message', function (msg) {
    this.echo(msg);
  })

  casper.on('error', function (err) {
    this.die("PhantomJS has errored: " + err);
  });

  casper.on('resource.error', function (err) {
    casper.log('Resource load error: ' + err, 'warning');
  });
  /*
    The test scenario
  */

  casper.start('http://localhost:8000');

  casper.viewport(1024, 768);

  casper.then(function () {
    phantomcss.screenshot('#task-lesson-tabs', 'Tabs');
    phantomcss.screenshot('.callout.callout-success', 'Success callout');
    phantomcss.screenshot('.callout.callout-primary', 'Callout');
    phantomcss.screenshot('#study-tasks > .lesson-set:first-of-type', 'Lesson Set');
  });

  casper.then(function() {
    casper.click('#booked-lessons-button');
    phantomcss.screenshot('#lesson-table-tabs', 'Tabs for the Booked Lessons page');
    phantomcss.screenshot('#current-bookings-panel > .lesson-set:first-of-type', 'Booked lessons set');
  });

  casper.then(function() {
    casper.click('#completed-lessons-button');
    phantomcss.screenshot('#completed-lessons-panel > .lesson-set:first-of-type', 'Completed lessons set');
    casper.click('#completed-lessons-panel > .lesson-set:first-of-type .show-feedback');
    phantomcss.screenshot('#completed-lessons-panel > .lesson-set:first-of-type .lesson-assessment-feedback', 'Assessment Feedback')
  });

  casper.then(function() {
    casper.click('#incompleted-lessons-button');
    phantomcss.screenshot('#incompleted-lessons-panel > .lesson-set:first-of-type', 'Incompleted lessons set');
  });

  casper.then(function() {
    casper.click('#cancelled-lessons-button');
    phantomcss.screenshot('#cancelled-lessons-panel > .lesson-set:first-of-type', 'Cancelled lessons set');
  });

  casper.then(function() {
    casper.click('a[href="booking.html"]');
    phantomcss.screenshot('.day-picker', 'Day Picker');
    phantomcss.screenshot('.pagination', 'Pagination');
    phantomcss.screenshot('.row.small-up-4.medium-up-7', 'Row of Teachers');
    phantomcss.screenshot('.callout > .booking-row:last-of-type', 'Booking Row');
    // casper.click('button[data-open="bookModal"]');
  });

  casper.then(function() {
    casper.click('a[href="how-to-study.html"]');
    phantomcss.screenshot('.tabs', 'Tabs in Get Started page');
    phantomcss.screenshot('#get-started', 'Get Started Panel');
    phantomcss.screenshot('#get-started > .callout:first-of-type', 'Intro to Get Started');
    phantomcss.screenshot('#get-started > .callout:nth-of-type(2)', 'Step of Get Started');
  });

  casper.then(function now_check_the_screenshots() {
    phantomcss.compareAll();
  });

  /*
  Casper runs tests
  */
  casper.run(function () {
    console.log('\nTHE END.');
    // phantomcss.getExitStatus() // pass or fail?
    casper.test.done();
  });
});