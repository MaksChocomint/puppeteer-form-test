# Автоматизированное тестирование формы

Jest и Puppeteer проверяют [учебную форму приветствия](https://web-scriptor.ru/g/11042024). Chromium открывается в оконном режиме с `slowMo: 140`. Тест вводит имя, нажимает кнопку и сравнивает полученное приветствие с ожидаемым.

## Скринкаст

[Скачать скринкаст из GitHub Actions](https://github.com/MaksChocomint/puppeteer-form-test/actions/runs/45251370142#artifacts)

В разделе **Artifacts** откройте `screencast.mp4`. Для скачивания GitHub просит войти в аккаунт.

В прогоне проверяются четыре имени — Анна, Илья, Анна-Мария и Alex. Итог Jest виден в терминале.

## Запуск

Нужны Node.js 24, npm и графический рабочий стол.

```bash
npm install
npx puppeteer browsers install chrome
npm test
```

Тесты находятся в [greeting.test.mjs](greeting.test.mjs).
