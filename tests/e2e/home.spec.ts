import { test, expect } from '@playwright/test';

test('home carrega e tem título correto', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Psicanálise e Saúde Mental/i);
  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toBeVisible();
});

test('links principais estão visíveis', async ({ page }) => {
  await page.goto('/');
  const header = page.locator('header');
  await expect(header).toBeVisible();
  const sobreAll = page.getByRole('link', { name: /sobre/i });
  const servicosAll = page.getByRole('link', { name: /servi[cç]os/i });
  const contatoAll = page.getByRole('link', { name: /contato/i });

  // Se estiver em viewport mobile, os links ficam no menu colapsado; abre o menu.
  if (!(await sobreAll.first().isVisible())) {
    const toggle = page.getByRole('button', { name: /toggle menu/i });
    if (await toggle.isVisible()) {
      await toggle.click();
      await page.waitForTimeout(200); // aguarda menu animar
    }
  }

  await expect(sobreAll.last()).toBeVisible();
  await expect(servicosAll.last()).toBeVisible();
  await expect(contatoAll.last()).toBeVisible();
});


