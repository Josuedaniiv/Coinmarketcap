import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePageMethods } from "../../pom/home-page/home-page.methods";

When("I visit coinmarketcap.com", function () {
  cy.visit('https://coinmarketcap.com/')
});

When("I click on the burger icon", function () {
  HomePageMethods.clickOnBurgerIcon()
});

Then("I can see that the top menu options are in {string}", function (language: string) {
  HomePageMethods.verifyTopMenuOptionsLanguage(language)
});

When("I change to {string}", function (language: string) {
  HomePageMethods.selectLanguage(language)
});
