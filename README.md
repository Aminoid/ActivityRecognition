# ActivityRecognition
React Native Module for CMMotionActivityManager

## Directory Structure
* activity-recognition is the core implementation
* ActivityApp is the app demonstrating its use.

## Running ActivityApp
```
cd ActivityApp
```

### Install Dependencies
```
npm install
```

### Linking Libraries
* Follow Step-1 and Step-2 from http://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking

### Running on device
* Follow instructions on https://facebook.github.io/react-native/docs/running-on-device.html
* You will need an Apple Developer account to run it on a device. No need to buy it to simply run on device. Just agree to the Terms and Conditions page and you are good to go.

### What to test
* Shaking the device opens up developer's menu. Select `Debug JS Remotely`. Now you can see the console logs in the browser.
* When you press `Start Activity` button, check if output is coming on the screen. If there is some error, check the logs and revert to me the same.
