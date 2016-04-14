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

casper.test.begin('Coffee machine visual tests', function (test) {

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
    phantomcss.screenshot('body', 'Homepage');
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