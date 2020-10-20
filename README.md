# :alarm_clock: JS Countdown Timer

Designed in HTML & CSS, developed in JavaScript.

## :pushpin: Summary

Set a countdown timer for breaks throughout the day. Select a preset option or add your own custom time.

This can be run inside a browser or as a desktop app using Electron.

## :point_right: Demo

[Try it out](https://joshuarobertson.github.io/countdown-timer/)

## :iphone: Builing & running the app

Setup local development for building and shipping an app:

```bash
# 1. install Electron globally if you don't have it
$ npm install electron -g

# 2. install dependencies
$ npm install

# 3. run the command for building app for your system
$ npm run make

# 4. package the app
$ npm run package
```

Your app should now be available inside of **out/countdown-timer-**

### Having issues?
You might need to simply import Electron Forge first

See: https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-the-application

### Other distribution options

Here we've used Electron Forge, but there are other (potentially better distribution packages) distribution packages available: https://www.electronjs.org/docs/tutorial/application-distribution#application-distribution

### License

Developed by: [Josh Robertson](https://github.com/JoshuaRobertson/)
