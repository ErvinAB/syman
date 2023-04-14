class MainPage
{
    verifyTitle()
    {
        cy.xpath("//h2[@class='message-title ng-star-inserted']").should('contain', 'Good Afternoon, Besart')
        return this
    }

    clickonArrowButton()
    {
        cy.xpath("//button[@class='mat-focus-indicator arrow mat-icon-button mat-button-base']").click()
        return this
    }

    verifyDataHubTitle()
    {
        cy.xpath("//p[@class='form-header']").should('contain', 'Data Hub')
        return this
    }

    clickToGoHome()
    {
        cy.xpath("//a[contains(text(), ' Home ')]").click()
        return this
    }

    validateAvailableCredits()
    {
        cy.xpath("//h2[@class='title']").should('contain', 'Available Credits')
        return this
    }

    validateAvailableCreditsNumber()
    {
        cy.xpath("//p[@class='count']").should('contain', ' 1,630 ')
        return this
    }

    validateMainPageContains()
    {
        cy.xpath("/html/body/app-root/app-layout/div/div/div/app-home/div[2]/div/h2").should('contain', 'Analysis Projects')
        return this
    }

    validateFirstItem()
    {
        cy.xpath("//div[1]/div[1]").should('contain', ' AAaa ')
        return this
    }

    validateSecondItem()
    {
        cy.xpath("//div[2]/div[1]").should('contain', ' Multi File test2 ')
        return this
    }

    validateThirdItem()
    {
        cy.xpath("//div[3]/div[1]").should('contain', ' Testtt ')
        return this
    }

}

export default MainPage;
