const { Given, When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const { expect, assert } = require("chai");
// const { initDriver } = require("../support/driverUtil");

Given("I am on {string}", async function (page) {
  await driver.executeScript(function () {
    localStorage.setItem("user_id", "0");
  });
  await driver.get(baseUrl + page);
  await driver.sleep(500);
  var actualUrl = await driver.getCurrentUrl();
  actualUrl = actualUrl.split("/")[3];
  expect(actualUrl).to.equal(page);
});

When("I click on the next button", async function () {
  const registration_button = await driver.findElement(By.className("next"));
  await registration_button.click();
  await driver.sleep(500);
});

Then("I should move forward to the {string} page", async function (next) {
  var expectedUrl = next;
  var actualUrl = await driver.getCurrentUrl();
  actualUrl = actualUrl.split("/")[3];
  expect(actualUrl).to.equal(expectedUrl);
});

When("I click on the back button", async function () {
  const registration_button = await driver.findElement(By.className("back"));
  await registration_button.click();
  await driver.sleep(500);
});

Then("I should go back to the {string} page", async function (previous) {
  var expectedUrl = previous;
  var actualUrl = await driver.getCurrentUrl();
  actualUrl = actualUrl.split("/")[3];
  expect(actualUrl).to.equal(expectedUrl);
});

Given("I am on the passport page", function () {
  driver.get(baseUrl + "passport");
});

Given("I am on passport", function () {
  driver.get(baseUrl + "passport");
});

Given("I have filled in my {string}", function (fullName) {
  driver.findElement(By.className("full_name")).sendKeys(fullName);
});

Then("I should move forward to the review page", function () {
  driver.get(baseUrl + "review");
});

Then("my {string} should be shown", async function (fullName) {
  const fn = await driver.findElement(By.className("review_fn")).getText();
  expect(fn, fullName);
  await driver.sleep(500);
});

//TODO: remove enventually
// When("I restart the app", function () {
//   driver.close();
//   let driver = initDriver();
// });

// Then(
//   "I should be redirected back to {string} where I left off",
//   async function (page) {
//     expect(driver.getCurrentUrl, baseUrl + page);
//   }
// );
