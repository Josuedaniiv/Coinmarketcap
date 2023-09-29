import { HomePageData } from "./home-page.data";
import { HomePageElements } from "./home-page.elements";

export class HomePageMethods{
    static clickOnBurgerIcon(){
        HomePageElements.burgerIcon.click()
    }

    static verifyTopMenuOptionOne(expectedText: string){
        HomePageElements.topMenu.optionOne.then(option=>{
            expect(option.text()).to.eq(expectedText)
        })
    }

    static verifyTopMenuOptionTwo(expectedText: string){
        HomePageElements.topMenu.opionTwo.then(option=>{
            expect(option.text()).to.eq(expectedText)
        })
    }

    static verifyTopMenuOptionThree(expectedText: string){
        HomePageElements.topMenu.optionThree.then(option=>{
            expect(option.text()).to.eq(expectedText)
        })
    }

    static verifyTopMenuOptionFour(expectedText: string){
        HomePageElements.topMenu.optionFour.then(option=>{
            expect(option.text()).to.eq(expectedText)
        })
    }

    static verifyTopMenuOptionFive(expectedText: string){
        HomePageElements.topMenu.optionFive.then(option=>{
            expect(option.text()).to.eq(expectedText)
        })
    }

    static selectLanguage(language: string){
        HomePageElements.buttons.changeLanguage.click()
        HomePageElements.otherElements.searchbox.type(language)
        HomePageElements.otherElements.languageLink(language).click()
    }

    static verifyTopMenuOptionsLanguage(language: string){
        let listOfOptions: {optionOne: string, optionTwo: string, optionThree: string, optionFour: string, optionFive: string} = {optionOne:'', optionTwo: '', optionThree: '', optionFour: '', optionFive: ''}
        if(language.toLocaleLowerCase()=='english'){
            listOfOptions = HomePageData.topMenu.english
        }else if(language.toLocaleLowerCase()=='español'){
            listOfOptions = HomePageData.topMenu.español
        }

        this.verifyTopMenuOptionOne(listOfOptions.optionOne)
        this.verifyTopMenuOptionTwo(listOfOptions.optionTwo)
        this.verifyTopMenuOptionThree(listOfOptions.optionThree)
        this.verifyTopMenuOptionFour(listOfOptions.optionFour)
        this.verifyTopMenuOptionFive(listOfOptions.optionFive)
    }
}