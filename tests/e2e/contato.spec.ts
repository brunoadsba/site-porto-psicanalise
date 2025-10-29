import { test, expect } from '@playwright/test';

test('formulário de contato envia com sucesso', async ({ page }) => {
  await page.goto('/contato');
  await expect(page.getByRole('heading', { name: /entre em contato/i })).toBeVisible();

  const form = page.locator('form');
  await form.scrollIntoViewIfNeeded();

  await page.fill('#name', 'Fulano de Tal');
  await page.fill('#email', 'fulano@example.com');
  await page.fill('#phone', '(11) 98888-7777');
  await page.selectOption('#subject', 'duvidas');
  await page.fill('#message', 'Mensagem válida com mais de dez caracteres.');

  await page.getByRole('button', { name: /enviar mensagem/i }).click();
  await expect(page.getByText(/mensagem enviada com sucesso/i)).toBeVisible({ timeout: 10000 });
});


