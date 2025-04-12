[
    {
        "id": "c1a37f6c3e105a99",
        "type": "tab",
        "label": "WS 🌡️",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "c22861c64a89aa39",
        "type": "inject",
        "z": "c1a37f6c3e105a99",
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
        "x": 150,
        "y": 80,
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
                "0a569045712c0a76",
                "radiation_node"
            ]
        ]
    },
    {
        "id": "radiation_node",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Радиация",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.radsens_dynamic_intensity",
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
        "x": 370,
        "y": 820,
        "wires": [
            [
                "radiation_change"
            ]
        ]
    },
    {
        "id": "radiation_change",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "radiation",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 820,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "d64f89b175dd17f8",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Качество воздуха",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.gw2000a_pm2_5_1",
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
        "x": 370,
        "y": 780,
        "wires": [
            [
                "a04da8703b0ff6ba"
            ]
        ]
    },
    {
        "id": "a04da8703b0ff6ba",
        "type": "change",
        "z": "c1a37f6c3e105a99",
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
        "y": 780,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "7685f14f234e0f39",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Влажность почвы",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.gw2000a_soil_moisture_2",
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
                "9e7de087f6b84a63"
            ]
        ]
    },
    {
        "id": "c6b99af8bb292fda",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Температура почвы",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.gw2000a_soil_temperature_1",
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
        "y": 740,
        "wires": [
            [
                "68707a98b1964e3e"
            ]
        ]
    },
    {
        "id": "68707a98b1964e3e",
        "type": "change",
        "z": "c1a37f6c3e105a99",
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
        "y": 740,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "9e7de087f6b84a63",
        "type": "change",
        "z": "c1a37f6c3e105a99",
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
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "ea44ecbefc73a75f",
        "type": "join",
        "z": "c1a37f6c3e105a99",
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
        "timeout": "5",
        "count": "15",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "",
        "reduceFixup": "",
        "x": 910,
        "y": 440,
        "wires": [
            [
                "d0c3d9ec3aec0b83"
            ]
        ]
    },
    {
        "id": "daf362b85d776ab0",
        "type": "telegram sender",
        "z": "c1a37f6c3e105a99",
        "name": "Отправить в ТГ",
        "bot": "df690a6504c1e710",
        "haserroroutput": false,
        "outputs": 1,
        "x": 1100,
        "y": 360,
        "wires": [
            []
        ]
    },
    {
        "id": "489bcc499b11aa25",
        "type": "telegram command",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "command": "/ws",
        "description": "",
        "registercommand": false,
        "language": "",
        "scope": "default",
        "bot": "df690a6504c1e710",
        "strict": false,
        "hasresponse": true,
        "useregex": false,
        "removeregexcommand": false,
        "outputs": 2,
        "x": 70,
        "y": 300,
        "wires": [
            [
                "98224913bb97a5af",
                "5b0731729a1c863d",
                "64569d99bb39a2aa",
                "db717e2f7fe14f26",
                "3a47c95dce23c32e",
                "abd7f87a6e967a5f",
                "2dde1fd07bd88cfc",
                "0baae7b99b4cfe78",
                "98b1e6b245992fb5",
                "92dbb0025b972a70",
                "406ddfdae80fdb0f",
                "7685f14f234e0f39",
                "c6b99af8bb292fda",
                "d64f89b175dd17f8",
                "radiation_node"
            ],
            []
        ]
    },
    {
        "id": "98224913bb97a5af",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Температура",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_outdoor_temperature",
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
        "y": 40,
        "wires": [
            [
                "a08630693b9c5b76"
            ]
        ]
    },
    {
        "id": "a08630693b9c5b76",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "temp",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 660,
        "y": 40,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "5b0731729a1c863d",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Влажность",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_humidity",
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
        "x": 370,
        "y": 160,
        "wires": [
            [
                "9080cbbfb32ac47d"
            ]
        ]
    },
    {
        "id": "9080cbbfb32ac47d",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "hum",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 160,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "64569d99bb39a2aa",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Скорость ветра",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_wind_speed",
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
        "y": 280,
        "wires": [
            [
                "422e586b599bca9d"
            ]
        ]
    },
    {
        "id": "422e586b599bca9d",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "wind_speed",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 280,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "db717e2f7fe14f26",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Направление ветра",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_wind_direction",
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
        "x": 400,
        "y": 340,
        "wires": [
            [
                "8deb294d34831b88"
            ]
        ]
    },
    {
        "id": "8deb294d34831b88",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "wind_dir",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 340,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "3a47c95dce23c32e",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Давление",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_absolute_pressure",
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
        "x": 370,
        "y": 460,
        "wires": [
            [
                "a843a8ed4024ec76"
            ]
        ]
    },
    {
        "id": "a843a8ed4024ec76",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "pressure",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 460,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "abd7f87a6e967a5f",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Осадки",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_rain_rate",
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
        "x": 360,
        "y": 520,
        "wires": [
            [
                "4a2e5f58872192d2"
            ]
        ]
    },
    {
        "id": "4a2e5f58872192d2",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "precipitation",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 520,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "2dde1fd07bd88cfc",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Точка росы",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_dewpoint",
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
        "x": 370,
        "y": 220,
        "wires": [
            [
                "5f78e12efc0ae81a"
            ]
        ]
    },
    {
        "id": "5f78e12efc0ae81a",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "dewPoint",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 220,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "0baae7b99b4cfe78",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Температура по ощущениям",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_feels_like_temperature",
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
        "x": 430,
        "y": 100,
        "wires": [
            [
                "b8b069024ed74c55"
            ]
        ]
    },
    {
        "id": "b8b069024ed74c55",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "apparentTemp",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 740,
        "y": 100,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "98b1e6b245992fb5",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Индекс UV",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_uv_index",
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
        "x": 370,
        "y": 640,
        "wires": [
            [
                "f30b364d717749b0"
            ]
        ]
    },
    {
        "id": "f30b364d717749b0",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "uvIndex",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 640,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "92dbb0025b972a70",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Осадки за прошедший день",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_daily_rain_rate",
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
        "x": 420,
        "y": 580,
        "wires": [
            [
                "dd7fb7eb82487385"
            ]
        ]
    },
    {
        "id": "dd7fb7eb82487385",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "dailyRain",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 660,
        "y": 580,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "406ddfdae80fdb0f",
        "type": "api-current-state",
        "z": "c1a37f6c3e105a99",
        "name": "Порывы ветра",
        "server": "79fe7aa8.47ef74",
        "version": 3,
        "outputs": 1,
        "halt_if": "",
        "halt_if_type": "str",
        "halt_if_compare": "is",
        "entity_id": "sensor.ws2350_v2_37_wind_gust",
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
        "y": 400,
        "wires": [
            [
                "1dd4022f1f5fa145"
            ]
        ]
    },
    {
        "id": "1dd4022f1f5fa145",
        "type": "change",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "windGust",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 400,
        "wires": [
            [
                "ea44ecbefc73a75f"
            ]
        ]
    },
    {
        "id": "d0c3d9ec3aec0b83",
        "type": "function",
        "z": "c1a37f6c3e105a99",
        "name": "Форматирование",
        "func": "const temp = msg.payload.temp || 'N/A';\nconst apparentTemp = msg.payload.apparentTemp || 'N/A';\nconst hum = msg.payload.hum || 'N/A';\nconst dewPoint = msg.payload.dewPoint || 'N/A';\nconst windSpeed = msg.payload.wind_speed || 'N/A';\nconst windDirRaw = msg.payload.wind_dir || 0;\nconst windGust = msg.payload.windGust || 'N/A';\nconst pressurePa = msg.payload.pressure || 'N/A';\nconst precip = msg.payload.precipitation || 'N/A';\nconst dailyRain = msg.payload.dailyRain || 'N/A';\nconst uvIndex = msg.payload.uvIndex || 'N/A';\nconst soilMoisture = msg.payload.soil_moisture || 'N/A';\nconst airQualityIndex = msg.payload.air_quality || 'N/A';\nconst radiationRaw = msg.payload.radiation || 'N/A';\n\nconst directions = ['⬆️ С', '↗️ СВ', '➡️ В', '↘️ ЮВ', '⬇️ Ю', '↙️ ЮЗ', '⬅️ З', '↖️ СЗ'];\nlet windDir = 'N/A';\n\nif (!isNaN(windDirRaw)) {\n    const dirIndex = Math.round((Number(windDirRaw) % 360) / 45) % 8;\n    windDir = directions[dirIndex];\n}\n\nlet airQualityText = 'N/A';\nif (!isNaN(airQualityIndex)) {\n    const aqi = Number(airQualityIndex);\n    if (aqi <= 50) airQualityText = 'Хорошо';\n    else if (aqi <= 100) airQualityText = 'Умеренно';\n    else if (aqi <= 150) airQualityText = 'Плохо для чувствительных групп';\n    else if (aqi <= 200) airQualityText = 'Плохо';\n    else if (aqi <= 300) airQualityText = 'Очень плохо';\n    else airQualityText = 'Опасно';\n}\n\n// Преобразование давления из Па в мм рт. ст.\nconst pressureMmHg = !isNaN(pressurePa) ? (pressurePa * 0.750062).toFixed(2) : 'N/A';\n\nconst chatId = env.get('TELEGRAM_CHAT_ID') || '-1001548038296';\n\nlet soilMoistureText = 'N/A';\nif (!isNaN(soilMoisture)) {\n    const sm = Number(soilMoisture);\n    if (sm <= 8) soilMoistureText = 'Интенсивно поливаем';\n    else if (sm <= 15) soilMoistureText = 'Поливаем';\n    else if (sm <= 30) soilMoistureText = 'Идеально';\n    else if (sm <= 40) soilMoistureText = 'Хорошо';\n    else soilMoistureText = 'Дренаж';\n}\n\nconst soilTemp = msg.payload.soil_temp || 'N/A';\n\n// Конвертация радиации из мкР/ч в мкЗв/ч\nlet radiationConverted = 'N/A';\nlet radiationText = 'N/A';\nif (!isNaN(radiationRaw)) {\n    radiationConverted = (Number(radiationRaw) * 0.01).toFixed(2); // Умножаем на 0.01\n    const radiationValue = Number(radiationConverted);\n    if (radiationValue <= 0.1) radiationText = 'Фоновый уровень';\n    else if (radiationValue <= 0.2) radiationText = 'Норма';\n    else if (radiationValue <= 0.3) radiationText = 'Повышенный';\n    else if (radiationValue <= 0.6) radiationText = 'Высокий';\n    else radiationText = 'Опасный уровень';\n}\n\nmsg.payload = {\n    chatId: chatId,\n    type: 'message',\n    content: `🌦️ *Метеостанция КП Мастерград:*\\nhttps://www.ecowitt.net/home/share?authorize=USCFFK\\ \\n🌡 Температура: *${temp}°C*\\n🔻🌡️ Ощущается как: *${apparentTemp}°C*\\n💧 Влажность: *${hum}%*\\n🌡️💦 Точка росы: *${dewPoint}°C*\\n🌬 Ветер: *${windSpeed} м/с ${windDir}*\\n💨 Порывы ветра: *${windGust} м/с*\\n🎈 Давление: *${pressureMmHg} мм рт. ст.*\\n☔️ Осадки сейчас: *${precip} мм/ч*\\n🌧️ Осадки за день: *${dailyRain} мм*\\n☀️ УФ-индекс: *${uvIndex}*\\n💧🌱 Влажность почвы: *${soilMoisture}% (${soilMoistureText})*\\n🌡️🌱 Температура почвы: *${soilTemp}°C*\\n🌫️ Качество воздуха: *${airQualityText} (${airQualityIndex})*\\n☢️ Радиация: *${radiationConverted} мкЗв/ч (${radiationText})*`\n};\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 970,
        "y": 240,
        "wires": [
            [
                "d9d7166da600c0c8",
                "631bded2ceea52a7"
            ]
        ],
        "outputLabels": [
            "Сообщение"
        ]
    },
    {
        "id": "d9d7166da600c0c8",
        "type": "debug",
        "z": "c1a37f6c3e105a99",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 960,
        "y": 160,
        "wires": []
    },
    {
        "id": "18322c9922291d22",
        "type": "inject",
        "z": "c1a37f6c3e105a99",
        "name": "По расписанию",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "00 07 * * *",
        "once": true,
        "onceDelay": "",
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 150,
        "y": 80,
        "wires": [
            [
                "98224913bb97a5af",
                "0baae7b99b4cfe78",
                "5b0731729a1c863d",
                "2dde1fd07bd88cfc",
                "64569d99bb39a2aa",
                "db717e2f7fe14f26",
                "406ddfdae80fdb0f",
                "3a47c95dce23c32e",
                "abd7f87a6e967a5f",
                "92dbb0025b972a70",
                "98b1e6b245992fb5",
                "7685f14f234e0f39",
                "c6b99af8bb292fda",
                "d64f89b175dd17f8",
                "radiation_node"
            ]
        ]
    },
    {
        "id": "631bded2ceea52a7",
        "type": "delay",
        "z": "c1a37f6c3e105a99",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1070,
        "y": 300,
        "wires": [
            [
                "daf362b85d776ab0"
            ]
        ]
    },
    {
        "id": "79fe7aa8.47ef74",
        "type": "server",
        "name": "Home Assistant",
        "addon": true,
        "rejectUnauthorizedCerts": true,
        "ha_boolean": "",
        "connectionDelay": false,
        "cacheJson": false,
        "heartbeat": false,
        "heartbeatInterval": "",
        "statusSeparator": "",
        "enableGlobalContextStore": false
    },
    {
        "id": "df690a6504c1e710",
        "type": "telegram bot",
        "botname": "KPMG_TG_Bot",
        "usernames": "",
        "chatids": "2093488216, -1001548038296",
        "baseapiurl": "",
        "testenvironment": false,
        "updatemode": "polling",
        "pollinterval": "2500",
        "usesocks": false,
        "sockshost": "",
        "socksprotocol": "socks5",
        "socksport": "6667",
        "socksusername": "anonymous",
        "sockspassword": "",
        "bothost": "",
        "botpath": "",
        "localbothost": "",
        "localbotport": "8443",
        "publicbotport": "8443",
        "privatekey": "",
        "certificate": "",
        "useselfsignedcertificate": false,
        "sslterminated": false,
        "verboselogging": false
    }
]