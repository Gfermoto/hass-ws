# hass-ws
Автоматизируйте публикацию данных локальной погодной станции в Telegram с помощью Home Assistant (HASS) и Node-RED.

# 🌦️ Метеостанция на базе Home Assistant & Node-RED  

**Локальная система мониторинга погоды с интеграцией в Telegram**  
_Собирайте данные, анализируйте и получайте умные уведомления — без облаков и подписок!_  

---

## 🌟 Основные возможности  
- ✅ **Сбор данных**: Температура воздуха/почвы, влажность, давление, УФ-индекс, осадки  
- ✅ **Telegram-бот**: Автоматические отчеты, кастомизация сообщений, экстренные оповещения  
- ✅ **Локальное решение**: Данные хранятся только на ваших устройствах  

---

## 🛠 Технологии  
<p align="center">
  <img src="https://img.shields.io/badge/Home_Assistant-41BDF5?logo=home-assistant&logoColor=white" alt="Home Assistant">
  <img src="https://img.shields.io/badge/Node--RED-8F0000?logo=nodered&logoColor=white" alt="Node-RED">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white" alt="Telegram">
</p>

---

## 🚀 Быстрый старт  
### 1. Установите:  
- [Home Assistant](https://www.home-assistant.io/)  
- [Node-RED](https://nodered.org/) (рекомендуется через [HACS](https://hacs.xyz/))  
- Telegram-бота через [@BotFather](https://t.me/BotFather)  

### 2. Клонируйте репозиторий:  
```bash
git clone https://github.com/yourusername/weather-station.git
cd weather-station
```

### 3. Настройка:  
1. **Интеграция с Home Assistant**  
Добавьте в `configuration.yaml`:  
```yaml
sensor:
  - platform: your_sensor_platform
    name: "Температура воздуха"
    # Дополнительные параметры датчиков
```

2. **Настройка Telegram-бота**  
Создайте файл `.env`:  
```ini
TELEGRAM_BOT_TOKEN = "ВАШ_ТОКЕН"
TELEGRAM_CHAT_ID = "ВАШ_CHAT_ID"
```

3. **Импорт потока Node-RED**  
   - Откройте интерфейс Node-RED  
   - Выберите **Import → Clipboard**  
   - Вставьте содержимое файла `flows.json`  

---

## 📂 Структура проекта  
```
.
├── flows/               # Потоки Node-RED
│   └── main_flow.json   # Основной рабочий процесс
├── docs/                # Документация
│   ├── setup_hass.md    # Настройка Home Assistant
│   └── bot_config.md    # Инструкция для Telegram-бота
├── scripts/             # Вспомогательные скрипты
├── .env.example         # Шаблон конфигурации
└── LICENSE              # Лицензия MIT
```

---

## 🤝 Участие в разработке  
Приветствуются:  
- 🐞 Сообщения об ошибках в **Issues**  
- 💡 Идеи улучшений через **Pull Requests**  
- 📚 Перевод документации  

**Лицензия:** [MIT](LICENSE) | **Версия:** 1.0.0  

---

> 💡 **Важно!**  
> - Замените `yourusername` на ваш GitHub-аккаунт  
> - Укажите реальные `ВАШ_ТОКЕН` и `ВАШ_CHAT_ID`  
> - Настройте `configuration.yaml` под ваши датчики  

## 📞 Поддержка
- GitHub Issues
- [Telegram канал DIYIoT Lab](https://t.me/DIYIoT_Lab) - Подписывайтесь на наш канал для получения обновлений и полезной информации
- [Telegram группа DIYIoT Zone](https://t.me/DIYIoT_Zone) - Присоединяйтесь к нашему сообществу для обсуждения и взаимопомощи

## 🔗 Полезные ссылки
- [DIYIoT Lab](https://t.me/DIYIoT_Lab) - Наш Telegram канал с новостями и обновлениями проекта
- [DIYIoT Zone](https://t.me/DIYIoT_Zone) - Сообщество разработчиков и энтузиастов
- [Home Assistant](https://www.home-assistant.io/)
- [Node-RED](https://nodered.org/)

```
