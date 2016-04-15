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

To start the web server and run the project, just run the following command:

```bash
npm start
```

Once it has all been compiled you can see an example application via this URL:

<http://localhost:8000>

### Styleguide/Documentation

After starting the web server, you can find the styleguide at this URL:

<http://localhost:8000/styleguide>

### Modular CSS

Booking System Template uses the [SMACSS](https://smacss.com/) methodology to keep it's CSS modular.

### Testing

We use [PhantomCSS](https://github.com/Huddle/PhantomCSS) to create visual regression tests. To run these tests, firstly our web server need to be up and then you simply run:

```bash
npm test
```
