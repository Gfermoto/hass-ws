[
    {
        "id": "d6e3b810017820f6",
        "type": "tab",
        "label": "WS 🌡️",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "c22861c64a89aa39",
        "type": "inject",
        "z": "d6e3b810017820f6",
        "name": "По расписанию",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "00 07 * * *",
        "once": false,
        "onceDelay": "",
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 110,
        "y": 160,
        "wires": [
            [
                "47c5f2fbf73d0b2a",
                "98c65e6e10ede3a9",
                "bbfa4c18b87a6203",
                "df2e2ce1337148fd",
                "d1bf82f8d2898b93",
                "d70df2fefe30e820",
                "30e41a1aeeb8015e",
                "fc39ca4107043079",
                "00965f0c5d7b2593",
                "a4ecb3ee79dc5621",
                "c266f087f35bbc9c",
                "e01c75d183c8cf07",
                "soil_temp_node",
                "0a569045712c0a76"
            ]
        ]
    },
    {
        "id": "0a569045712c0a76",
        "type": "api-current-state",
        "z": "d6e3b810017820f6",
        "name": "Качество воздуха",
        "server": "home_assistant_server",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.air_quality_index",
        "state_type": "str",
        "blockInputOverrides": false,
        "outputProperties": [
            {
                "property": "payload",
                "propertyType": "msg",
                "value": "",
                "valueType": "entityState"
            },
            {
                "property": "data",
                "propertyType": "msg",
                "value": "",
                "valueType": "entity"
            }
        ],
        "for": 0,
        "forType": "num",
        "forUnits": "minutes",
        "x": 380,
        "y": 760,
        "wires": [
            [
                "d8d558e704be0eb4"
            ]
        ]
    },
    {
        "id": "d8d558e704be0eb4",
        "type": "change",
        "z": "d6e3b810017820f6",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "air_quality",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 760,
        "wires": [
            [
                "bad267d6e0bb0a9e"
            ]
        ]
    },
    {
        "id": "e01c75d183c8cf07",
        "type": "api-current-state",
        "z": "d6e3b810017820f6",
        "name": "Влажность почвы",
        "server": "home_assistant_server",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.soil_moisture",
        "state_type": "str",
        "blockInputOverrides": false,
        "outputProperties": [
            {
                "property": "payload",
                "propertyType": "msg",
                "value": "",
                "valueType": "entityState"
            },
            {
                "property": "data",
                "propertyType": "msg",
                "value": "",
                "valueType": "entity"
            }
        ],
        "for": 0,
        "forType": "num",
        "forUnits": "minutes",
        "x": 380,
        "y": 700,
        "wires": [
            [
                "71a957275572ad3e"
            ]
        ]
    },
    {
        "id": "soil_temp_node",
        "type": "api-current-state",
        "z": "d6e3b810017820f6",
        "name": "Температура почвы",
        "server": "home_assistant_server",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.soil_temperature",
        "state_type": "str",
        "blockInputOverrides": false,
        "outputProperties": [
            {
                "property": "payload",
                "propertyType": "msg",
                "value": "",
                "valueType": "entityState"
            },
            {
                "property": "data",
                "propertyType": "msg",
                "value": "",
                "valueType": "entity"
            }
        ],
        "for": 0,
        "forType": "num",
        "forUnits": "minutes",
        "x": 380,
        "y": 730,
        "wires": [
            [
                "soil_temp_change"
            ]
        ]
    },
    {
        "id": "soil_temp_change",
        "type": "change",
        "z": "d6e3b810017820f6",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "soil_temp",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 730,
        "wires": [
            [
                "bad267d6e0bb0a9e"
            ]
        ]
    },
    {
        "id": "71a957275572ad3e",
        "type": "change",
        "z": "d6e3b810017820f6",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "soil_moisture",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 700,
        "wires": [
            [
                "bad267d6e0bb0a9e"
            ]
        ]
    },
    {
        "id": "bad267d6e0bb0a9e",
        "type": "join",
        "z": "d6e3b810017820f6",
        "name": "Сбор данных",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "",
        "joinerType": "str",
        "useparts": true,
        "accumulate": false,
        "timeout": "20",
        "count": "13",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "",
        "reduceFixup": "",
        "x": 910,
        "y": 440,
        "wires": [
            [
                "9acc4609a3d735f6"
            ]
        ]
    },
    {
        "id": "9acc4609a3d735f6",
        "type": "function",
        "z": "d6e3b810017820f6",
        "name": "Форматирование",
        "func": "const temp = msg.payload.temp || 'N/A';\nconst apparentTemp = msg.payload.apparentTemp || 'N/A';\nconst hum = msg.payload.hum || 'N/A';\nconst dewPoint = msg.payload.dewPoint || 'N/A';\nconst windSpeed = msg.payload.wind_speed || 'N/A';\nconst windDirRaw = msg.payload.wind_dir || 0;\nconst windGust = msg.payload.windGust || 'N/A';\nconst pressurePa = msg.payload.pressure || 'N/A';\nconst precip = msg.payload.precipitation || 'N/A';\nconst dailyRain = msg.payload.dailyRain || 'N/A';\nconst uvIndex = msg.payload.uvIndex || 'N/A';\nconst soilMoisture = msg.payload.soil_moisture || 'N/A';\nconst airQualityIndex = msg.payload.air_quality || 'N/A';\n\nconst directions = ['⬆️ С', '↗️ СВ', '➡️ В', '↘️ ЮВ', '⬇️ Ю', '↙️ ЮЗ', '⬅️ З', '↖️ СЗ'];\nlet windDir = 'N/A';\n\nif (!isNaN(windDirRaw)) {\n    const dirIndex = Math.round((Number(windDirRaw) % 360) / 45) % 8;\n    windDir = directions[dirIndex];\n}\n\nlet airQualityText = 'N/A';\nif (!isNaN(airQualityIndex)) {\n    const aqi = Number(airQualityIndex);\n    if (aqi <= 50) airQualityText = 'Хорошо';\n    else if (aqi <= 100) airQualityText = 'Умеренно';\n    else if (aqi <= 150) airQualityText = 'Плохо для чувствительных групп';\n    else if (aqi <= 200) airQualityText = 'Плохо';\n    else if (aqi <= 300) airQualityText = 'Очень плохо';\n    else airQualityText = 'Опасно';\n}\n\nconst pressureMmHg = !isNaN(pressurePa) ? (pressurePa * 0.750062).toFixed(2) : 'N/A';\nconst chatId = env.get('TELEGRAM_CHAT_ID');\n\nlet soilMoistureText = 'N/A';\nif (!isNaN(soilMoisture)) {\n    const sm = Number(soilMoisture);\n    if (sm <= 8) soilMoistureText = 'Интенсивно поливаем';\n    else if (sm <= 15) soilMoistureText = 'Поливаем';\n    else if (sm <= 30) soilMoistureText = 'Идеально';\n    else if (sm <= 40) soilMoistureText = 'Включаем дренаж';\n    else soilMoistureText = 'Включаем дренаж на полную';\n}\n\nconst soilTemp = msg.payload.soil_temp || 'N/A';\n\nmsg.payload = {\n    chatId: chatId,\n    type: 'message',\n    content: `🌦️ *Метеостанция:*\\nhttps://example.com/meteodata\\n🌡 Температура: *${temp}°C*\\n🔻🌡️ Ощущается как: *${apparentTemp}°C*\\n💧 Влажность: *${hum}%*\\n🌡️💦 Точка росы: *${dewPoint}°C*\\n🌬 Ветер: *${windSpeed} м/с ${windDir}*\\n💨 Порывы ветра: *${windGust} м/с*\\n🎈 Давление: *${pressureMmHg} мм рт. ст.*\\n☔️ Осадки сейчас: *${precip} мм/ч*\\n🌧️ Осадки за день: *${dailyRain} мм*\\n☀️ УФ-индекс: *${uvIndex}*\\n💧🌱 Влажность почвы: *${soilMoisture}% (${soilMoistureText})*\\n🌡️🌱 Температура почвы: *${soilTemp}°C*\\n🌫️ Качество воздуха: *${airQualityText} (${airQualityIndex})*`\n};\n\nreturn msg;\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 950,
        "y": 240,
        "wires": [
            [
                "a45998c5c9a1d064",
                "39cb2c7ba566a939"
            ]
        ],
        "outputLabels": [
            "Сообщение"
        ]
    },
    {
        "id": "dea458478824f0d2",
        "type": "telegram sender",
        "z": "d6e3b810017820f6",
        "name": "Отправить в ТГ",
        "bot": "telegram_bot",
        "haserroroutput": false,
        "outputs": 1,
        "x": 1100,
        "y": 360,
        "wires": [
            []
        ]
    },
    {
        "id": "b4be86314cc35122",
        "type": "telegram command",
        "z": "d6e3b810017820f6",
        "name": "",
        "command": "/ws",
        "description": "",
        "registercommand": false,
        "language": "",
        "scope": "default",
        "bot": "telegram_bot",
        "strict": false,
        "hasresponse": true,
        "useregex": false,
        "removeregexcommand": false,
        "outputs": 2,
        "x": 70,
        "y": 300,
        "wires": [
            [
                "47c5f2fbf73d0b2a",
                "98c65e6e10ede3a9",
                "bbfa4c18b87a6203",
                "df2e2ce1337148fd",
                "d1bf82f8d2898b93",
                "d70df2fefe30e820",
                "30e41a1aeeb8015e",
                "fc39ca4107043079",
                "00965f0c5d7b2593",
                "a4ecb3ee79dc5621",
                "c266f087f35bbc9c",
                "e01c75d183c8cf07",
                "soil_temp_node",
                "0a569045712c0a76"
            ],
            []
        ]
    },
    // ... (остальные узлы с обезличенными entity_id и параметрами)
    {
        "id": "home_assistant_server",
        "type": "server",
        "name": "Home Assistant",
        "addon": true
    },
    {
        "id": "telegram_bot",
        "type": "telegram bot",
        "botname": "YOUR_BOT_NAME",
        "chatids": "YOUR_CHAT_ID",
        "baseapiurl": "",
        "updatemode": "polling"
    }
]
