import Login from "../PageObjects/loginPage";
import MainPage from "../PageObjects/mainPage";

describe('Symanto Automation', () => {
  
  // get data from testData.json
  let userdata;
  before( () => {
    cy.fixture("testData").then((data) =>{
      userdata=data
    })
  } 
  )

  

  it('title verification of symanto', () => {
    cy.visit(userdata.url)
     cy.title().should('eq', 'Symanto Insights Platform')
     cy.url().should('include', 'dev-app.symanto.com/')
  

  })

  it('enters wrond credentials', () => {
    cy.visit(userdata.url)
    // using page object model
    const login = new Login()

    login.setUpUserName(userdata.incorectemail);
    login.setPassword(userdata.incorrectpassword);
    login.setButtonClick();
    login.verifyErrorMessage();
  })

  it('enters correct credentials', () => {
    cy.visit(userdata.url)

    const login = new Login()
    const mainpage = new MainPage()

    //login from -> loginPage.js
    login.setUpUserName(userdata.email);
    login.setPassword(userdata.password);
    login.setButtonClick();

    cy.wait(500)
    //main page after logging in from -> mainPage.js
    mainpage.verifyTitle()
    mainpage.clickonArrowButton()
    mainpage.verifyDataHubTitle()
    mainpage.clickToGoHome()
    mainpage.validateAvailableCredits()
    mainpage.validateAvailableCreditsNumber()
    mainpage.validateMainPageContains()
    mainpage.validateFirstItem()
    mainpage.validateSecondItem()
    mainpage.validateThirdItem()
    
    // cy.wait(500)
    // cy.xpath("//h2[@class='message-title ng-star-inserted']").should('contain', 'Good Afternoon, Besart')
    // cy.wait(500)
    // cy.xpath("//button[@class='mat-focus-indicator arrow mat-icon-button mat-button-base']").click()
    // cy.xpath("//p[@class='form-header']").should('contain', 'Data Hub')
    // cy.xpath("//a[contains(text(), ' Home ')]").click()
    // //validate Available Credits
    // cy.xpath("//h2[@class='title']").should('contain', 'Available Credits')
    // cy.xpath("//p[@class='count']").should('contain', ' 1,630 ')
    // //validate the first three rows of Analysis Projects
    // cy.xpath("/html/body/app-root/app-layout/div/div/div/app-home/div[2]/div/h2").should('contain', 'Analysis Projects')
    // cy.xpath("//div[1]/div[1]").should('contain', ' AAaa ')
    // cy.xpath("//div[2]/div[1]").should('contain', ' Multi File test2 ')
    // cy.xpath("//div[3]/div[1]").should('contain', ' Testtt ')
  
  })


  it('signs up on sign up page', () => {
    cy.visit(userdata.url)
    cy.xpath("//a[contains(text(),'Register for free')]").click()
    cy.wait(500)
    cy.xpath("//p[contains(text(),'Hi, welcome to Symanto!')]").should('contain', 'Hi, welcome to Symanto!')
    cy.xpath("//input[@id='mat-input-2']").type(userdata.UserName)
    cy.xpath("//input[@id='mat-input-3']").type(userdata.UserSurname)
    cy.xpath("//input[@id='mat-input-4']").type(userdata.UserCompany)
    cy.xpath("//input[@id='mat-input-5']").type(userdata.UserEmail)
    cy.xpath("//input[@id='mat-input-6']").type(userdata.UserPassword)
    cy.xpath("//*[@id='mat-checkbox-1']/label/span[1]").click()
    cy.xpath("//*[@id='mat-checkbox-2']/label/span[1]").click()
  })

})