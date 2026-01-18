const EntContactManagerCompany = {
  addNewCompanyBtn: '#ctl00_ContentPlaceHolder1_btnAddNewCompany',
  companyNameInput: '#ctl00_ContentPlaceHolder1_RadTxtCompanyName',
};

class ContactManagerCompany {
  constructor(page) {
    this.page = page;
  }

  async clickAddNewCompany() {
    await this.page.locator(EntContactManagerCompany.addNewCompanyBtn).click();
  }
  async enterCompanyName(companyName) {
    await this.page.locator(EntContactManagerCompany.companyNameInput).fill(companyName);
  }
}

export default ContactManagerCompany;
export { EntContactManagerCompany };
