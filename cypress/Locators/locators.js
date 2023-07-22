class locatorsPage {

  // signin locators
  userName = '//input[@id="mat-input-1"]'
  password = '//input[@type="password"]'
  login = '//button[contains(text(), "Log In")]'

  chicken='//li[contains(text(), "Fried Chicken")]'
  Bur="(//li[@id='menu-hamburger'])[1]"
  Ice="//li[@id='menu-ice-cream']"
  confirmation='(//h3[normalize-space()="File Uploaded!"])[1]'

  platw='(//ul[@id="plate-items"])[1]'
  
  goTouseManagement="(//h2[normalize-space()='User Management'])[1]"
  gotoMultistore="//h2[normalize-space()='Multi-Store']"
  gotoOptionActribute="(//h2[normalize-space()='Options, attributes'])[1]"
  gotoAffiliate="(//h3[normalize-space()='Affiliates'])[1]"

  file_clic='(//input[@id="file-upload"])[1]'
  filw_up='(//input[@id="file-submit"])[1]'
  scrolling='(//a[@href="#tab-admin"])[1]'
  verifyButtom='(//li[@class="copyright-text"])[1]'
  verifyTop='(//a[normalize-space()="Features"])[1]'
  

  

  // Case Register locators
  addNewCaseBtn = '//*[@id="eic-content"]/app-pre-verification/div[1]/div/mat-icon'
  caseDetails = '(//*[contains(text(), "Case Details")])[1]'
  caseSourceDropdownBtn = '//*[@id="mat-tab-content-1-0"]/div/app-case-details/div[1]/div/fieldset[1]/mat-grid-list/div/mat-grid-tile[1]/figure/div/mat-form-field/div/div[1]/..'
  selectEmail = '(//span[contains(text(), "E-Mail")])[1]'
  clientDropdownBtn = '//span[contains(text(), "Select Client")]'
  company1 = '//span[contains(text(), "Company 1")]'
  legalEntityDropdownBtn = '//span[contains(text(), "Select Legal Entity")]'
  company1_bpo = '//span[contains(text(), "Company 1 BPO")]'
  packageDropdownBtn = '(//span[contains(text(), "Select Package")])[1]'
  check_wise = "//span[normalize-space()='Select Check Wise']"
  address_checkbox = "(//label[@class='mat-checkbox-layout'])[1]"
  assign_check_btn = "//input[@value='Assign Checks']"
  ok_popup = "//button[normalize-space()='OK']"
  check_assign_successfully_popUp = '//h2[contains(text(), "Checks Added Successfully")]'
  receive_date = '(//*[@class="ng-star-inserted"])[4]'
  select_receive_date1 = "//div[normalize-space()='10']"
  select_receive_time = "//div[normalize-space()='11']"
  select_receive_time2 = '(//div[@class="mat-datetimepicker-clock-cell ng-star-inserted"])[25]'
  document_name = '(//input[@type="text"])[2]'
  browser_and_upload_btn = "//button[normalize-space()='Browse & Upload']"
  file_upload = '(//input[@type="file"])[2]'
  authorizationRangeValue = '(//input[@placeholder="Page Range (1-2)"])[1]'
  backgroundCheckFrom = '(//input[@placeholder="Page Range (1-2)"])[2]'
  split_file_upload = "//input[@value='Split and Upload']"
  language_dropdown = '//span[contains(text(), "Select")]/../../..'
  select_language = "//span[normalize-space()='English']"
  save_btn = "//input[@value='Save']"
  save_successfully = '//h2[contains(text(), "Saved Successfully")]'
  nextBtn = '//input[@value="Next"]'
  clickTitleDropdown = '(//*[@role="combobox"])[1]'
  selectTitle = '(//span[contains(text(), "Mr")])[1]/..'
  firstName = '//input[@placeholder="Enter First Name"]'
  fatherName = '//input[@placeholder="Enter Father Name"]'
  dateOfBirth = '//*[@fill="currentColor"]'
  selectDateOfBirth = "//div[normalize-space()='4']"
  genderDropdown = '(//*[@role="combobox"])[2]'
  selectMale = '//*[@id="mat-option-9"]/span'
  maritialStatus = '(//*[@role="combobox"])[3]'
  selectSingle = '//span[contains(text(), "Single")]'
  nationality = '//input[@placeholder="Enter Nationality"]'
  addContactDetails = '//*[@mattooltip="Add Contact Details"]'
  selectDropdown = '//*[@placeholder="Select"]'
  selectMobile = '//span[contains(text(), "Mobile")]/..'
  mobileInputField = '//input[@placeholder="Enter Here"]'
  selectDropdown2 = '(//*[@placeholder="Select"])[2]'
  selectEmail2 = '(//span[contains(text(), "Email")])[1]'
  emailInputField = '(//input[@placeholder="Enter Here"])[2]'
  scarp_button = "//input[@value='Scrap']"

  // Supervisor Role 

  supervisorAdminCheckbox = '(//label[@class="mat-radio-label"])[1]'
  submitBtn = '(//input[@value="Submit"])'
  casesTab = '(//*[@class="mat-tab-label-content"])[2]/..'
  searchBtn = '(//input[@type="button"])[1]'
  subStatusDropdown = '//*[@placeholder="Check Sub Status List"]'
  case_status = '//input[@formcontrolname="AssignedTo"]'
  caseRegisterdCheckbox = '//mat-option[contains(span[1], "CASE_REGISTERED")]'
  searchBtn2 = '(//figure[contains(div[3], "Search")]//button)[1]'
  checkbox10 = '(//input[@type="checkbox"])[10]'
  assignUserDropdown = '//span[contains(text(), "Assign User")]/../../..'
  selectSirExecutive1 = '//span[contains(text(), " SIR Executive-1 ")]/..'
  confirmBtn = '//button[contains(text(), "Confirm")]'
}
export default locatorsPage;