import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data';
import 'cypress-drag-drop';
import 'cypress-file-upload';

Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();

/*===============================================
    Login  
=================================================*/

Given("User open drag & drop website", () => {
    cy.visit(data.chicken);
});

Then("Should drag the fried chicken order",()=>{
   const dataTransfer = new DataTransfer
   cy.xpath(locator.chicken).trigger('dragstart',{
      dataTransfer

   });
   cy.wait(data.oneSecond)

   cy.xpath(locator.platw).trigger('drop',{
      dataTransfer
   })
})

Then("Should drag the hamburger order",()=>{
   // Assuming you have two elements with IDs 'source-element' and 'target-element'
   const dataTransfer = new DataTransfer
   cy.xpath(locator.Bur).trigger('dragstart',{
      dataTransfer

   });
   cy.wait(data.oneSecond)

   cy.xpath(locator.platw).trigger('drop',{
      dataTransfer
   })

})




Then("Should drag the ice cream order",()=>{
   // Assuming you have two elements with IDs 'source-element' and 'target-element'
   const dataTransfer = new DataTransfer
   cy.xpath(locator.Ice).trigger('dragstart',{
      dataTransfer

   });
   cy.wait(data.oneSecond)

   cy.xpath(locator.platw).trigger('drop',{
      dataTransfer
   })

})



Given("User open site", () => {
   cy.visit(data.fileupload);
});

Then("click on the site",()=>{
   cy.xpath(locator.file_clic).attachFile('asdf.pdf')
   cy.wait(data.twoSecond)

})


Then("click the upload button",()=>{
   cy.wait(data.twoSecond)
   cy.xpath(locator.filw_up).click()
   
})

Then("assert the file upload",()=>{
   cy.wait(data.twoSecond)
   cy.xpath(locator.confirmation).should('have.text','File Uploaded!');
})



Given("User open sites", () => {
   cy.visit(data.scrollToView);
});
Then("Scrolling Methods in cypress",()=>{
   cy.wait(data.twoSecond)
   cy.scrollTo(0,300)
   cy.wait(data.twoSecond)


   cy.xpath(locator.scrolling).should('have.text','Admin');
})

Then("scroll to the buttom & verify",()=>{
   cy.scrollTo('bottom')
   cy.wait(data.twoSecond)
   cy.xpath(locator.verifyButtom).should('have.text','© Copyright 2023 OpenCart');
})
Then("scroll to top & verify",()=>{
   cy.scrollTo('top')
   cy.wait(data.twoSecond)
   cy.xpath(locator.verifyTop).should('have.text','Features');
  
})

Then("go to management & verify it",()=>{
   cy.wait(data.twoSecond)
   cy.xpath(locator.goTouseManagement).scrollIntoView()
   cy.xpath(locator.goTouseManagement).should('have.text','User Management');
  

})

Then("go to multi store",()=>{
   cy.wait(data.twoSecond)

   cy.xpath(locator.gotoMultistore).scrollIntoView()
   cy.xpath(locator.gotoMultistore).should('have.text','Multi-Store');
  

})

Then("go to option attribute",()=>{
   cy.wait(data.twoSecond)

   cy.xpath(locator.gotoOptionActribute).scrollIntoView()
   cy.xpath(locator.gotoOptionActribute).should('have.text','Options, attributes');
  

})



Then("go to affiliate",()=>{

   cy.wait(data.twoSecond)
   cy.xpath(locator.gotoAffiliate).scrollIntoView()
   cy.xpath(locator.gotoAffiliate).should('have.text','Affiliates');
   cy.scrollTo('bottom')
   cy.wait(data.twoSecond)
   cy.xpath(locator.verifyButtom).should('have.text','© Copyright 2023 OpenCart');
  

})
// Then("Enter the user login credentials", (dataTable)=> {
//     const data_table = dataTable.rowsHash()
//     cy.wait(data.oneSecond)
//     cy.xpath(locator.userName).type(data_table.email)
//     cy.xpath(locator.password).type(data_table.password)
// })
// Then("Click on the login button", ()=> {
//     cy.xpath(locator.login).click()
//     cy.wait(data.oneSecond)
// })

// /*===============================================
//    Case-Register 
// =================================================*/

// Then("Click on the add new case plus buttn", ()=> {
//     cy.xpath(locator.addNewCaseBtn).click()
//     cy.xpath(locator.caseDetails).click()
//     cy.wait(data.fiveSecond)
// })
// Then("Click on the case source dropdown button and select email", ()=> {
//    cy.xpath(locator.caseSourceDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectEmail).click()
//    cy.wait(data.oneSecond)
// })
// Then("Click on the client dropdown button and select company 1", ()=> {
//    cy.xpath(locator.clientDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.company1).click()
//    cy.wait(data.twoSecond)
// })
// Then("Select company1 bpo from legal entity dropdown", ()=> {
//    cy.xpath(locator.legalEntityDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.company1_bpo).click()
//    cy.wait(data.oneSecond)
// })
// Then("Select Address Check from package dropdown button", ()=> {
//    cy.xpath(locator.packageDropdownBtn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.check_wise).click()
//    cy.wait(data.fiveSecond)
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.address_checkbox).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.assign_check_btn).click()
//    cy.wait(data.twoSecond)
// })
// Then("Verify the check assign successfully", ()=> {
//    cy.xpath(locator.check_assign_successfully_popUp).should("have.text", "Checks Added Successfully")
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.ok_popup).click()
//    cy.wait(data.oneSecond)
// })
// Then("Select receive date and case TAT start date", ()=> {
//    cy.xpath(locator.receive_date).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.select_receive_date1).click()
//    cy.xpath(locator.select_receive_time).click()
//    cy.xpath(locator.select_receive_time2).click()
// })
// Then("Enter the document name", ()=> {
//    cy.xpath(locator.document_name).type("asdf.pdf")
//    cy.wait(data.oneSecond)
// })
// Then("Click on browser & upload button and upload the file", ()=> {
//    cy.xpath(locator.browser_and_upload_btn).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.file_upload).attachFile('asdf.pdf')
//    cy.wait(data.twoSecond)
// })
// Then("Enter the authorization & background check form value", ()=> {
//    cy.xpath(locator.authorizationRangeValue).type('1-1')
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.backgroundCheckFrom).type('1-1')
//    cy.wait(data.oneSecond)
// })
// Then("Click on the split & file upload button", ()=> {
//    cy.xpath(locator.split_file_upload).type('1-1')
//    cy.wait(data.fiveSecond)
// })
// Then("Select language from language dropdown", ()=> {
//    cy.xpath(locator.language_dropdown).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.select_language).click()
//    cy.wait(data.oneSecond)
// })
// Then("Click on the save button", ()=> {
//    cy.xpath(locator.save_btn).click()
//    cy.wait(data.twoSecond)
// })
// Then("Check that the saved successfully popup is appear", ()=> {
//    cy.xpath(locator.save_successfully).should("have.text", "Saved Successfully")
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.ok_popup).click()
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.nextBtn).click()
//    cy.wait(data.twoSecond)
// })
// Then("Select Title from the title dropdown", ()=> {
//   cy.xpath(locator.clickTitleDropdown).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectTitle).click()
//   cy.wait(data.oneSecond)
// })
// Then("Enter the first name and father name", ()=> {
//   cy.xpath(locator.firstName).type("testtest")
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.fatherName).type("testasdf")
//   cy.wait(data.oneSecond)
// })
// Then("Select date of birth from calender", ()=> {
//   cy.xpath(locator.dateOfBirth).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectDateOfBirth).click()
//   cy.wait(data.oneSecond)
// })
// Then("Select gender from gender dropdown", ()=> {
//   cy.xpath(locator.genderDropdown).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectMale).click()
//   cy.wait(data.oneSecond)
// })
// Then("Select maritial status from maritial dropdown and Enter nationality", ()=> {
//   cy.xpath(locator.maritialStatus).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.selectSingle).click()
//   cy.wait(data.oneSecond)
//   cy.xpath(locator.nationality).type("indian")
//   cy.wait(data.oneSecond)
// })
// Then("Click on the add contact details and enter the contact type & details", ()=> {
//    cy.xpath(locator.addContactDetails).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectDropdown).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectMobile).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.mobileInputField).type("7543987777")
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.addContactDetails).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectDropdown2).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectEmail2).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.emailInputField).type("test@ninsetys.com")
//    cy.wait(data.oneSecond)
// })
// Then("Click on the scrap button", ()=> {
//    cy.xpath(locator.scarp_button).click()
//    cy.wait(data.oneSecond)
// })
// Then("Check that the case register successfully done", ()=> {
//    cy.xpath(locator.save_successfully).should("have.text", "Saved Successfully")
//    cy.wait(data.twoSecond)
//    cy.xpath(locator.ok_popup).click()
//    cy.wait(data.twoSecond)
// })


// /*===============================================
//   Supervising and Assign To SIR Role
// =================================================*/

// Then("Click on the supervisor -pvt admin and click submit button", ()=> {
//    cy.xpath(locator.supervisorAdminCheckbox).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.submitBtn).click()
//    cy.wait(data.oneSecond)
// })
// Then("Click on the cases tab and click search button", ()=> {
//    cy.xpath(locator.casesTab).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.searchBtn).click()
//    cy.wait(data.oneSecond)
// })
// Then("Select case register checkbox from sub status dropdown", ()=> {
//    cy.xpath(locator.subStatusDropdown).click()
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.caseRegisterdCheckbox).click()
//    cy.wait(data.twoSecond)
// })
// Then("Click search button after selecting the sub status", ()=> {
//    cy.xpath(locator.searchBtn2).click({force:true})
//    cy.wait(data.oneSecond)
// })

// Then("Select any checkbox and assign case to sir role", ()=> {
//    cy.xpath(locator.checkbox10).click({force: true})
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.assignUserDropdown).click({force:true})
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.selectSirExecutive1).click({force:true})
//    cy.wait(data.oneSecond)
//    cy.xpath(locator.confirmBtn).click({force:true})
//    cy.wait(data.twoSecond)
// })