## Automation framework: TestCafe
## Test reporting tool: Reporter HTML
### Author: Floreth Gonzalez
<br><br>
### Pre-requisites:
```Shell
npm install testcafe
npm install dotenv
npm install testcafe-reporter-html
``` 
### To run all tests:
```Shell
cd <repo_path/TestCafe>
```
```Shell
npm run test-all-<web browser>
```
E.g. Chrome
```Shell
npm run test-all-chrome
```

### To run the test report:
```Shell
npm run report-all-<web browser>
```
E.g. Chrome
```Shell
npm run report-all-chrome
```