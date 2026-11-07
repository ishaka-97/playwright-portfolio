import { test } from '../src/fixtures';
import { users, PASSWORD } from '../src/data/users';

test.describe('Connexion', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('connexion réussie avec un utilisateur valide @smoke', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(users.standard, PASSWORD);
    await inventoryPage.expectLoaded();
  });

  test('utilisateur bloqué', async ({ loginPage }) => {
    await loginPage.login(users.locked, PASSWORD);
    await loginPage.expectError('Sorry, this user has been locked out.');
  });

  const invalidCases = [
    { name: 'mot de passe incorrect', user: users.standard, pwd: 'wrong', msg: /do not match/ },
    { name: 'identifiant vide', user: '', pwd: PASSWORD, msg: 'Username is required' },
    { name: 'mot de passe vide', user: users.standard, pwd: '', msg: 'Password is required' },
  ];

  for (const c of invalidCases) {
    test(`erreur : ${c.name}`, async ({ loginPage }) => {
      await loginPage.login(c.user, c.pwd);
      await loginPage.expectError(c.msg);
    });
  }
});
