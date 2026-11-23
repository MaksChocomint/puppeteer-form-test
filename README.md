# Автоматизированное тестирование формы

Jest и Puppeteer проверяют [учебную форму приветствия](https://web-scriptor.ru/g/11042024). Chromium открывается в оконном режиме с `slowMo: 140`. Тест вводит имя, нажимает кнопку и сравнивает полученное приветствие с ожидаемым.

## Скринкаст

[Посмотреть скринкаст MP4](screencast.mp4)

В прогоне проверяются четыре имени — Анна, Илья, Анна-Мария и Alex. Итог Jest виден в терминале.

## Запуск

Нужны Node.js 24, npm и графический рабочий стол.

```bash
npm install
npx puppeteer browsers install chrome
npm test
```

Тесты находятся в [greeting.test.mjs](greeting.test.mjs).
