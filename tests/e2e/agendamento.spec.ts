import { test, expect } from '@playwright/test';

test('formulário de agendamento envia com sucesso', async ({ page }) => {
  await page.goto('/agendamento');
  await expect(page.getByRole('heading', { name: /agendar consulta/i })).toBeVisible();

  // Data futura (amanhã)
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;

  const form = page.locator('form');
  await form.scrollIntoViewIfNeeded();

  await page.fill('#name', 'Ciclana da Silva');
  await page.fill('#email', 'ciclana@example.com');
  await page.fill('#phone', '(11) 97777-6666');
  await page.fill('#preferredDate', dateStr);
  await page.selectOption('#preferredTime', '14:00');
  await page.selectOption('#modality', 'online');
  await page.fill('#reason', 'Consulta inicial para avaliação.');
  await page.fill('#notes', 'Observações opcionais.');

  await page.getByRole('button', { name: /solicitar agendamento/i }).click();
  await expect(page.getByText(/solicita[çc][aã]o de agendamento enviada com sucesso/i)).toBeVisible({ timeout: 10000 });
});


