import { test } from '../src/fixtures';

test.describe('Parcours d\'achat', () => {
  test('commande complète de bout en bout @smoke', async ({ loggedIn, checkoutPage }) => {
    await test.step('Ajouter un produit au panier', async () => {
      await loggedIn.addToCart('Sauce Labs Backpack');
      await loggedIn.openCart();
    });

    await test.step('Renseigner les informations client', async () => {
      await checkoutPage.startFromCart();
      await checkoutPage.fillInformation('Siaka', 'KONE', '00225');
    });

    await test.step('Valider la commande', async () => {
      await checkoutPage.finish();
      await checkoutPage.expectOrderComplete();
    });
  });
});
