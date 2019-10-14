**Author**: Deepanshu Goyal
**Email** : deepanshugoyal1989@gmail.com

Coding Challenge - Marvel API - v1
=================
This project is to check restful api of Marvel, where we get  information of all Marvel character and validate it.
In it, we have used WebDriverIO, cucumber, chai, node.js and page object model

Requirements
---------------

- node >= 10.15.x
- java >= java 8

Getting Started
---------------

Install the dependencies:

    npm install
    Add file keys.js in ./util/constant with data of your private key and public key
        module.exports = {
            PRIVATE_KEY: 'paste your private key here',
            PUBLIC_KEY: 'paste your public key here'
        }
    
To run 

    npm test

Reports
---------------

Allure report is used to show results of test execution. Go to ./reports/allure-reports and open
index.html in a browser
