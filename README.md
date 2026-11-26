# 4CODE — сайт студии

Одностраничный лендинг: `index.html` + собранный Tailwind CSS.

## Локальный запуск

```bash
npm install
npm run build:css
npm run serve
# http://127.0.0.1:4173/
```

`npm run watch:css` — пересборка стилей при правках.

## Что правится в `index.html`

- `STUDIO_CONFIG.CONTACTS` — Telegram, Авито, почта.
- `STUDIO_CONFIG.ANALYTICS.yandexMetrikaId` — номер счётчика Яндекс.Метрики. Пока пустой, скрипт аналитики не загружается.
- `STUDIO_CONFIG.PRICES` — цены тарифов.
- `src/og-image.html` — исходник OG-картинки `og-image.jpg` (1200×630).
