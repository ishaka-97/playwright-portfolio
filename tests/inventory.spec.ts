import { test, expect } from '../src/fixtures';

test.describe('Catalogue produits', () => {
  test('affiche 6 produits', async ({ loggedIn }) => {
    await expect(loggedIn.items).toHaveCount(6);
  });

  test('tri par prix croissant', async ({ loggedIn }) => {
    await loggedIn.sortBy('lohi');
    const prices = await loggedIn.prices();
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  test('tri par prix décroissant', async ({ loggedIn }) => {
    await loggedIn.sortBy('hilo');
    const prices = await loggedIn.prices();
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
  });

  test('ajout au panier met à jour le badge', async ({ loggedIn }) => {
    await loggedIn.addToCart('Sauce Labs Backpack');
    await loggedIn.addToCart('Sauce Labs Bike Light');
    await expect(loggedIn.cartBadge).toHaveText('2');
  });
});
