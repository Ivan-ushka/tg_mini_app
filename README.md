# CryptoTracker Telegram Mini App

CryptoTracker - это Telegram Mini App, созданное с использованием React и TypeScript. Приложение позволяет пользователям добавлять криптовалюты в свой портфель, отслеживать баланс и прибыль за последнюю неделю.

## Оглавление

- [Установка](#установка)
- [Использование](#использование)
- [Функционал](#функционал)
- [Технологии](#технологии)
- [Вклад](#вклад)
- [Лицензия](#лицензия)

## Установка

1. Клонируйте репозиторий:

    ```sh
    git clone https://github.com/yourusername/cryptotracker-telegram-mini-app.git
    ```

2. Перейдите в директорию проекта:

    ```sh
    cd cryptotracker-telegram-mini-app
    ```

3. Установите зависимости:

    ```sh
    npm install
    ```

4. Создайте файл `.env` в корне проекта и добавьте необходимые переменные окружения:

    ```env
    REACT_APP_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
    REACT_APP_CRYPTO_API_KEY=your_crypto_api_key
    ```

5. Запустите проект:

    ```sh
    npm start
    ```

## Использование

1. Откройте ваше Telegram Mini App через Telegram.
2. Авторизуйтесь, используя ваш Telegram аккаунт.
3. Добавьте криптовалюты в свой портфель.
4. Следите за балансом и прибылью за последнюю неделю.

## Функционал

- **Добавление криптовалют**: Пользователи могут добавлять криптовалюты в свой портфель.
- **Отслеживание баланса**: Автоматическое обновление баланса на основе текущих рыночных данных.
- **Прибыль за неделю**: Отображение прибыли или убытков за последнюю неделю.

## Технологии

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express (если используется)
- **API**: Telegram Web Apps, Crypto API
- **Стилизация**: CSS, Styled Components

## Вклад

Мы приветствуем вклад в развитие проекта! Если у вас есть предложения или найденные ошибки, пожалуйста, создайте issue или pull request.

## Лицензия

Этот проект лицензирован под [MIT License](LICENSE).
