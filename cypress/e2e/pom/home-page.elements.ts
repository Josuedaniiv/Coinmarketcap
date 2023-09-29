export class HomePageElements{
    static get burgerIcon(){
        return cy.get('[data-role="global-header"] svg').eq(2)
    }

    static get topMenu(){
        return{
            optionOne: cy.get('[role="menu"] p[font-size="16"]').eq(0),
            opionTwo: cy.get('[role="menu"] p[font-size="16"]').eq(15),
            optionThree: cy.get('[role="menu"] p[font-size="16"]').eq(19),
            optionFour: cy.get('[role="menu"] p[font-size="16"]').eq(24),
            optionFive: cy.get('[role="menu"] p[font-size="16"]').eq(35),
        }
    }

    static get buttons(){
        return{
            changeLanguage: cy.get('[title="Change your language"]')
        }
    }

    static get otherElements(){
        return{
            searchbox: cy.get('[placeholder="Search"]'),
            languageLink(lan: string){
                return cy.contains(lan)
            }
        }
    }
}