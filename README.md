# Booking System Template

Booking System Template is a responsive front-end framework based on [Foundation Sites](http://foundation.zurb.com/).

##Getting Started

The easiest way to get started is to download the a zip of latest release [here](https://github.com/reallyenglish/booking-system-template/archive/master.zip).

You can also with bower:

```bash
bower install https://github.com/reallyenglish/booking-system-template.git#1.0.0
```

## Working on Booking System Template

Firstly we would need to install these dependencies:

* Ruby 1.9+
* [Node.js](http://nodejs.org)
* [bower](http://bower.io): `npm install bower -g`
* [Gulp](http://gulpjs.com/): `npm install -g gulp-cli`

Then we install ruby gems (compass and friends):

```bash
bundle install
```

We should then install our bower components using the following command:

```bash
bower install
```

Also we need to install our npm dependencies too:

```bash
npm install
```

To run the project, just run the following command:

```bash
gulp
```

Once it has all been compiled you can see an example application via this URL:

<http://localhost:8000>

###Modular CSS

Booking System Template uses the [SMACSS](https://smacss.com/) methodology to keep it's CSS modular.
