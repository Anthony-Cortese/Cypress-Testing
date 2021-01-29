describe("Form app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234")
    })
});

const nameInput = cy.get('input[name="name"]')
const emailInput = cy.get('input[name="email"]')
const passwordInput = cy.get('input[name="password"]')
const submitBtn = () => cy.get("#submitBtn");
const termsInput = () => cy.get()

it("these elements should exist", () => {
    nameInput().should("exist")
    emailInput().should("exist")
    passwordInput().should("exist")
    submitBtn().should("exist")
    termsInput().should("exist")
});


it("can type in the inputs of name, password, and email", () => {

nameInput()
    .should("have.value", "")
    .type("please type in your name")
    .should("have.value", "please type in your name");

emailInput()
    .should("have.value", "")
    .type("must have a valid email")
    .should("have.value", "must have a valid email");

passwordInput()
    .should("have.value", "")
    .type("must have a password")
    .should("have.value", "must have a password");
    
})

it("submit button should be disabled until everything is filled out", () => {
    submitBtn().should("be.disabled")
    nameInput().type("The network itself requires minimal structure.");
    submitBtn().should("be.disabled");
    nameInput().clear();
    passwordInput().type("password");
    submitBtn().should("be.disabled");
    passwordInput().clear()
    submitBtn().should("be.disabled");
    emailInput().type("The network itself requires minimal structure.");
    submitBtn().should("be.disabled");
    emailInput().clear()
    submitBtn().should("not.be.disabled");
})