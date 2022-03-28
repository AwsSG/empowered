![Final project image home page](documentation/)

## **Contents**

* [**Testing**](#testing)
  * [**Navigation**](#navigation)
  * [**Advent Calendar Door**](#advent-calendar-door)
  * [**Pop Up Box Puzzle Instructions**](#pop-up-box-puzzle-instructions)
  * [**Github image links**](#github-image-links)
  * [**Github image links**](#github-image-links)
  * [**Validator testing**](#Validator-testing)
    * [**HTML Validation**](#HTML-Validation)
    * [**CSS Validation**](#CSS-Validation)
    * [**JS Validation**](#JS-Validation)
  * [**Lighthouse report**](#Lighthouse-Report)
  * [**Compatibility**](#Compatibility)
  * [**Responsiveness**](#Responsiveness)
  * [**Functionality**](#Functionality)

# **Testing**

Usability was tested with the below user acceptance testing, sent to new users to ensure testing from different users, on different devices and browsers to ensure issues were caught and where possible fixed during development.


|             | User Action | Expected result  | Y/N | Comment |
|-------------|-------------|------------------|-----|---------|
|Sign Up      |             |                  |     |         |
|1            | Click GET STARTED button in home page | Sign up page | Y | Sign up page opens |
|2            | Click on GET STARTED from navbar | Dropdown menu with 2 options login/signup | Y | User will choose between 2 options |
|3            | Click on REGISTER from navbar in dropdown menu| Register Page | Y | Register page opens |
|4            | Enter valid username and password | Profile page | Y | User is signed up |
|5            | Enter valid username and password | Profile page | Y | User is logged in |
| Log In      |             |                  |     |         |
|1            | Click on REGISTER from navbar in dropdown menu| Register Page | Y | Register page opens |
|2            | Click on login from dropdown menu | Login page | Y | Login page opens |
|3            | Enter valid username and password | Profile page | Y | User is signed up |
|4            | Click on login from dropdown menu | Login page | Y | Login page opens |
|Log Out      |             |                  |     |         |
|1            | Click on logout button | Home page | Y | User is logged out |
|2            | Click browser back button | You are still logged out | Y | session is ended |










| Feature      | Expected          | Testing  | Result | Pass/Fail |
|-------------|-------------|-----|----------|:----:|
| Code-Vent Calendar Page Title | To redirect to home page | Clicked Code-Vent Calendar Page Title | Title navigates to home page | Pass |
| Navbar - Home link - desktop view | Redirect to home page | Clicked link | Navigates to home page | Pass |
|Navbar - Log in/register button - desktop view | open menu to select either log in or register page | Clicked button | Drop down menu opens | Pass |
| Navbar - Log in link in drop down menu - desktop view| Navigates to log in page | Clicked link | Taken to log in page | Pass |
| Navbar - Register link in drop down menu - desktop view | Navigates to register page | Clicked link | Taken to register page | Pass |
| Navbar - Log out link - desktop view | logs you out | clicked link | logged out of profile | Pass |
| Navbar - Hamburger Menu button - mobile view | Open menu to select either log in or register page | Clicked button | Drop down menu opens | Pass |
| Navbar - Home link in drop down menu - mobile view | Navigates to home page | Clicked link | Taken to home page | Pass |
| Navbar - Log in link in drop down menu - mobile view | Navigates to log in page | Clicked link | Taken to log in page  | Pass |
| Navbar - Register link in drop down menu - mobile view | Navigates to register page | Clicked Link | Taken to register page | Pass |
| Navbar - Log out link - mobile view | logs you out | clicked link | 
| Footer - Name - Aws Sabah Gheni | Navigates to GitHub account in new tab | Clicked image | New tab opens to GitHub account | Pass |
| Footer - Name - Theo Wright | Navigates to GitHub account in new tab | Clicked image | New tab opens to GitHub account | Pass |
| Footer - Name - Iuliia Konovalova | Navigates to GitHub account in new tab | Clicked image | New tab opens to GitHub account | Pass |
| Footer - Name - Kera Cudmore | Navigates to GitHub account in new tab | Clicked image | New tab opens to GitHub account | Pass |
| Footer - Name - Anna | Navigates to GitHub account in new tab | Clicked image | New tab opens to GitHub account | Pass |
| Footer - Team Image - Anna | Navigates to GitHub account in new tab | Clicked image | New tab opens to GitHub account | Pass |
| Profile Page - Choose emoji drown down menu | When a selection is made that choice is displayed | Clicked each menu option | Each option displated the choice made | Pass |
| Profile page - add note button | adds note | clicked button | Banner displays showing "Your feelings were recorded successfully" | Pass |
| Profile page - View emotional history button | Navigates to my history | Clicked button | Taken to calendar page | Pass |
| Calendar Page - Back Button | Moves the calendar back in time | Clicked button | Moves calendar back | Pass |
| Calendar Page - next button | Moves the calendar forward in time | Clicked button | Moves calendar forwards | Pass |
| Calendar Page - Calendar dates | When a date is selected you are shown the emoji you chose for that day and your log entry if made | Clicked on a date | Emoji and log displayed | Pass |

[Back to contents](#contents)

---

## Validator testing

### HTML Validation

- No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator except jinja syntax.

    - Home page:
* [HTML](https://validator.w3.org/nu/?doc=http%3A%2F%2Fempowere.herokuapp.com%2Fhome)

    - Log In page:
* [HTML](https://validator.w3.org/nu/?doc=http%3A%2F%2Fempowere.herokuapp.com%2Flogin)

    - Register page:
* [HTML](https://validator.w3.org/nu/?doc=http%3A%2F%2Fempowere.herokuapp.com%2Fregister)

    - Profile page:
* [HTML](documentation/testing/profilehtmlvalidator.png)

    - Calendar page:
* [HTML](documentation/testing/calendarhtmlvalidator.png)

### CSS Validation

- No errors were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator: 
    * [CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmanni8436.github.io%2Fhackvent-calendar%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- The CSS validator shows the multiple warning regardless the use of webkit and clip property. However, everything works perfectly well without any issues.


### JS Validation
*  js files were checked by the official [JSHint](https://jshint.com/):
    * [script.js](documentation/testing/testing_hintjs_script.png);
    * [calendar.js](documentation/testing/testing_hintjs_calendar.png);

### Python Validation
Valentin Bryukhanov's [online validation tool](http://pep8online.com/) was used to ensure that all of the project's Python source code is [Pep 8-compliant](https://legacy.python.org/dev/peps/pep-0008/). This checking was done manually by copying python code and pasting it into the validator.

No errors were found:

- **app.py**

![Python Validator](documentation/testing/testing_python.png)


## Lighthouse Report

![Lighthouse Report](documentation/testing/lighthousehome.png)

## Compatibility:

+ The app was tested on the following browsers: Chrome, Firefox, Brave, Edge:

  - Chrome:

  ![Main Page](documentation/testing/browser_chrome.gif)
  
  - Firefox:

  ![Main Page](documentation/testing/browser_firefox.gif)

  - Safari:

  ![Main Page](documentation/testing/browser_safari.gif)
  

## Responsiveness:

+ The app was checked with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

  1. Mobile Screens:

    - Mobile 320x480, 320x568, 360x640, 375x667, 384x640, 411x731, 414x736:

     ![Mobile](documentation/responsiveness/responsiveness_mobile_devices.gif)

      
  1. Tablets Screens:

    - Tablet 600x960, 768x1024, 800x1280, 1366x1024, 1600x900, 1680x1050, 1920x1080, 1920x1200:
        
    ![Tablet](documentation/responsiveness/responsiveness_tablet_devices.gif)
      
  1. Desktop Screens:

    - Desktop 1024x600, 1024x800, 1366x768, 1440x900:
        
    ![Desktop](documentation/responsiveness/responsiveness_desktop_devices.gif)


## Functionality:

The functionality of the links in the app was checked as well by different users.

 ![Functionality](documentation/responsiveness/observe_functionality.gif)