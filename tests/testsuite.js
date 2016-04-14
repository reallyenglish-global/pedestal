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
  outputSettings: {
    errorColor: {
      red: 255,
      green: 255,
      blue: 0
    },
    errorType: 'movement',
    transparency: 0.3
  }*/
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

  });

      // {
      //   "label": "Homepage - Booked Lessons tab - Current Bookings",
      //   "url": "../../dist/index.html",
      //   "hideSelectors": [],
      //   "removeSelectors": [],
      //   "selectors": [
      //     "#lesson-table-tabs",
      //     "#current-bookings-panel > .lesson-set:first-of-type"
      //   ],
      //   "readyEvent": null,
      //   "delay": 0,
      //   "onBeforeScript": null,
      //   "onReadyScript": "selectBookedLessonTab"
      // },
      // {
      //   "label": "Homepage - Booked Lessons tab - Completed Bookings",
      //   "url": "../../dist/index.html",
      //   "hideSelectors": [],
      //   "removeSelectors": [],
      //   "selectors": [
      //     "#lesson-table-tabs",
      //     "#completed-lessons-panel > .lesson-set:first-of-type"
      //   ],
      //   "readyEvent": null,
      //   "delay": 0,
      //   "onBeforeScript": null,
      //   "onReadyScript": "selectCompletedLessonsTab"
      // },
      // {
      //   "label": "Homepage - Booked Lessons tab - Incompleted Bookings",
      //   "url": "../../dist/index.html",
      //   "hideSelectors": [],
      //   "removeSelectors": [],
      //   "selectors": [
      //     "#lesson-table-tabs",
      //     "#incompleted-lessons-panel > .lesson-set:first-of-type"
      //   ],
      //   "readyEvent": null,
      //   "delay": 0,
      //   "onBeforeScript": null,
      //   "onReadyScript": "selectIncompletedLessonTab"
      // },
      // {
      //   "label": "Homepage - Booked Lessons tab - Cancelled Bookings",
      //   "url": "../../dist/index.html",
      //   "hideSelectors": [],
      //   "removeSelectors": [],
      //   "selectors": [
      //     "#lesson-table-tabs",
      //     "#cancelled-lessons-panel > .lesson-set:first-of-type"
      //   ],
      //   "readyEvent": null,
      //   "delay": 0,
      //   "onBeforeScript": null,
      //   "onReadyScript": "selectCancelledLessonTab"
      // },
      // {
      //   "label": "Book a lesson page",
      //   "url": "../../dist/booking.html",
      //   "hideSelectors": [],
      //   "removeSelectors": [],
      //   "selectors": [
      //     ".day-picker",
      //     ".pagination",
      //     ".row.small-up-4.medium-up-7",
      //     ".callout > .booking-row:last-of-type"
      //   ],
      //   "readyEvent": null,
      //   "delay": 0,
      //   "onBeforeScript": null,
      //   "onReadyScript": null
      // },
      // {
      //   "label": "How to Study page - Getting Started tab",
      //   "url": "../../dist/how-to-study.html",
      //   "hideSelectors": [],
      //   "removeSelectors": [],
      //   "selectors": [
      //     ".tabs",
      //     "#get-started"
      //   ],
      //   "readyEvent": null,
      //   "delay": 0,
      //   "onBeforeScript": null,
      //   "onReadyScript": null
      // }

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