import { test, expect } from '@playwright/test';

test('página Serviços: heading e cards', async ({ page }) => {
  await page.goto('/servicos');
  await expect(page).toHaveTitle(/Servi[cç]os\s*\|\s*Atendimento/i);
  await expect(page.getByRole('heading', { name: /nossos servi[cç]os/i })).toBeVisible();
  await expect(page.locator('h2:has-text("Terapia")')).toHaveCount(2);
});


