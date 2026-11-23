import { setTimeout as pause } from 'node:timers/promises';
import { afterAll, beforeAll, expect, test } from '@jest/globals';
import puppeteer from 'puppeteer';

const url = 'https://web-scriptor.ru/g/11042024';
const names = ['Анна', 'Илья', 'Анна-Мария', 'Alex'];
const normalize = text => text.replace(/\s+/g, ' ').trim();

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 140,
    defaultViewport: null,
    args: ['--window-size=1200,510', '--window-position=30,25'],
  });
  [page] = await browser.pages();
  const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
  expect(response?.ok()).toBe(true);
  await page.waitForSelector('#iii', { visible: true });
  await pause(1000);
});

afterAll(async () => {
  await browser?.close();
});

test.each(names)('форма показывает приветствие для имени «%s»', async name => {
  await page.locator('#iii').fill('');
  await page.type('#iii', name, { delay: 190 });
  await page.click('button');

  const greeting = await page.$eval('#hhh', heading => heading.textContent);
  expect(normalize(greeting)).toBe(`Магистерское приветствие, ${name}!`);
  await pause(700);
});
