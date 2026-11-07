# Playwright Portfolio – Tests E2E automatisés

![Tests Playwright](https://github.com/ishaka-97/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)

Framework d'automatisation de tests end-to-end réalisé avec **Playwright** et **TypeScript**, exécuté en continu sur **GitHub Actions**.
Application testée : [Sauce Demo](https://www.saucedemo.com), site de démonstration e-commerce.

📊 **[Voir le dernier rapport de tests](https://ishaka-97.github.io/playwright-portfolio/)**

## Ce que montre ce projet

- **Page Object Model** : chaque page a sa classe (`src/pages`)
- **Fixtures personnalisées** : session déjà connectée injectée dans les tests (`src/fixtures`)
- **Tests data-driven** : cas d'erreur de connexion générés à partir d'un tableau
- **Multi-navigateurs** : Chromium, Firefox et mobile (Pixel 7)
- **Sélecteurs robustes** via les attributs `data-test`
- **Étapes lisibles** dans le rapport avec `test.step`
- **CI/CD** : tests à chaque push, chaque pull request et chaque lundi, rapport HTML publié sur GitHub Pages
- Traces, captures et vidéos conservées en cas d'échec

## Structure

```
.github/workflows/playwright.yml   Pipeline CI
src/
  pages/      Page Objects (Login, Inventory, Checkout)
  fixtures/   Fixtures Playwright personnalisées
  data/       Jeux de données de test
tests/        Scénarios de test
playwright.config.ts
```

## Lancer en local

```bash
npm install
npx playwright install
npm test                 # tous les navigateurs
npm run test:chromium    # Chromium seulement
npx playwright test --grep @smoke
npm run report           # ouvrir le rapport HTML
```

## Auteur

**Siaka KONE** – Ingénieur QA (5 ans d'expérience) : automatisation Playwright/TypeScript, tests de charge Gatling, CI/CD.
