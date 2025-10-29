import { test, expect } from '@playwright/test';

test('rota /sobre carrega com heading', async ({ page }) => {
  await page.goto('/sobre');
  await expect(page.getByRole('heading', { name: /sobre mim/i })).toBeVisible();
});

test('rota /servicos carrega com heading', async ({ page }) => {
  await page.goto('/servicos');
  await expect(page.getByRole('heading', { name: /nossos servi[cç]os/i })).toBeVisible();
});

test('rota /contato carrega com heading', async ({ page }) => {
  await page.goto('/contato');
  await expect(page.getByRole('heading', { name: /entre em contato/i })).toBeVisible();
});


