class Login 
{
    setUpUserName(user)
    {
        cy.xpath("//input[@formcontrolname='email']").type(user);
        return this
    }

    setPassword(pass)
    { 
        cy.xpath("//input[@formcontrolname='password']").type(pass);
        return this
    }

    setButtonClick()
    {
        cy.xpath("//button[contains(text(),' Log in ')]").click();
        return this
    }

    verifyErrorMessage()
    {
        cy.xpath("//mat-error[@id='mat-error-0']").should('contain', ' Invalid username or password. ');
        return this
    }
}

export default Login;