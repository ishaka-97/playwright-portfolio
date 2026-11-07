import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly completeHeader: Locator;

  constructor(private readonly page: Page) {
    this.completeHeader = page.getByTestId('complete-header');
  }

  async startFromCart() {
    await this.page.getByTestId('checkout').click();
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.getByTestId('firstName').fill(firstName);
    await this.page.getByTestId('lastName').fill(lastName);
    await this.page.getByTestId('postalCode').fill(postalCode);
    await this.page.getByTestId('continue').click();
  }

  async finish() {
    await this.page.getByTestId('finish').click();
  }

  async expectOrderComplete() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
