import { expect } from '@playwright/test';

// Mandatory field error messages
const mandatoryFieldErrors = {
  errorMessages: [
    'Caller Required.',
    'Client is required',
    'Location is required',
    'First Name is required',
    'Last Name is required',
    'Address Is Required',
    'Zip is required',
    'City is Required',
    'State is Required',
    'Main Phone is required',
    'LossFirstName is Required',
    'LossLastName is Required',
    'LossAddress is Required',
    'LossCity is Required',
    'State is Required',
    'Date of Loss is required.',
    'Required Service is required',
    'Loss description is required',
    'Preferred Provider is required',
  ],
};

// Consolidated locators from adminCreateJobPage
const createJobPageLocators = {
  saveBtn: '#ctl00_ContentPlaceHolder1_Button_SaveAndGoToSlideBoardBottom',
};

class CreateClaimMandatoryFieldsPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Click Save button (from adminCreateJobPage)
   */
  async clickSaveButton() {
    await this.page.locator(createJobPageLocators.saveBtn).click();
  }

  /**
   * Setup dialog handler and capture message
   * @returns {Promise<string>} The dialog message
   */
  async setupDialogHandlerAndGetMessage() {
    let message = '';
    this.page.once('dialog', async (dialog) => {
      message = dialog.message();
      await dialog.accept();
    });
    return message;
  }

  /**
   * Validate all mandatory field errors in dialog message
   */
  validateAllMandatoryFieldErrors(message) {
    mandatoryFieldErrors.errorMessages.forEach((errorMsg) => {
      expect(message).toContain(errorMsg);
    });
  }

  /**
   * Verify URL hasn't changed after failed submission
   */
  async verifyURLUnchanged(expectedURL) {
    await expect(this.page).toHaveURL(expectedURL);
  }
}

export default CreateClaimMandatoryFieldsPage;
