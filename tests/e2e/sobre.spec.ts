import { test, expect } from '@playwright/test';

test('página Sobre: título e heading', async ({ page }) => {
  await page.goto('/sobre');
  await expect(page).toHaveTitle(/Sobre\s*\|\s*Psicanalista/i);
  await expect(page.getByRole('heading', { name: /sobre mim/i })).toBeVisible();
});


