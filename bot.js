{
    "0": {
        "block_uuid": "c58ac60d-f0ba-402b-a922-e9994af0f31a",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "hola {{contact.first_name}}, soy  Newton,  tu asesor virtual.\n\nSi deseas contactar con un asesor, simplemente escribe el número y estará encantado de ayudarte.\n\n8️⃣ ASESOR\n\nSi deseas recibir información sobre el número correspondiente, escríbelo:\n\n1️⃣Matrículas en línea 💳\n2️⃣Talleres ⚽\n3️⃣Página de Facebook´🅵\n4️⃣Por qué elegir a Isaac Newton🥇\n5️⃣Ubicación  🗺️",
                    "type": "external",
                    "chat_sources": [
                        {
                            "id": 22619471
                        }
                    ],
                    "is_in_starting_block": true
                }
            },
            {
                "handler": "wait_answer",
                "params": {
                    "type": "question",
                    "step": 1
                }
            }
        ]
    },
    "1": {
        "block_uuid": "2044cfe1-0e19-470f-a6f2-00be82e12954",
        "question": [
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 2
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "1",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 8
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "2",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 14
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "3",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 15
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "4",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 18
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "5",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 22
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "8",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 21
                }
            }
        ]
    },
    "2": {
        "block_uuid": "040b9eea-5db2-4b37-9d38-673a5cbbbbb6",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "Gracias por preferirnos! Esperamos servirte nuevamente. Visítanos y Dale 👍 ME GUSTA. 👉https://www.facebook.com/I.E.P.ISAAC.NEWTON/?locale=es_LA",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 3
                }
            }
        ]
    },
    "3": {
        "block_uuid": "bca95749-9820-45c4-8d9e-a24308c5cfb0",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "\"Excelente opción, estás a punto de vivir la mejor experiencia educativa de toda la región de Huánuco. 😃Para el proceso de inscripción, HAGA CLIC en el siguiente enlace 👉REGÍSTRESE\nhttps://docs.google.com/forms/d/e/1FAIpQLSdThOiIGdFJEKEeyFO8Xyc_8N3NubSYx5Rwc_FlsMpX7EUtzQ/viewform",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 4
                }
            }
        ]
    },
    "4": {
        "block_uuid": "9bee0990-61ab-4135-b96c-9db1caa4ff77",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "Estoy aquí para ayudarte. Por favor, indícame si tienes alguna otra pregunta o necesitas asistencia adicional seleccionando la opción correspondiente:\n1️⃣si\n2️⃣no",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "wait_answer",
                "params": {
                    "type": "question",
                    "step": 5
                }
            }
        ]
    },
    "5": {
        "block_uuid": "f0d2169b-5166-4cba-af3c-8864c73b76de",
        "question": [
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 0
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "1",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "conditions",
                "params": {
                    "logic": "and",
                    "result": [
                        {
                            "handler": "goto",
                            "params": {
                                "type": "question",
                                "step": 6
                            }
                        }
                    ],
                    "conditions": [
                        {
                            "term1": "{{message_text}}",
                            "term2": "2",
                            "operation": "=",
                            "value_type": "custom_value"
                        }
                    ]
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 13
                }
            }
        ]
    },
    "6": {
        "block_uuid": "db94219b-18c4-4ede-984c-d984d90ab92d",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "¡Muchas gracias por su preferencia! 😃Visítanos en nuestras redes sociales.\n#facebook👉https://www.facebook.com/I.E.P.ISAAC.NEWTON/photos?locale=es_LA\n#web👉https://www.ieisaacnewton.edu.pe/portal/mision-vision/\n#youtube👉https://www.youtube.com/@institucioneducativaisaacn7723",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "4fa15c49-a944-462f-b80d-9ce2b6e3917e",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 7
                }
            }
        ]
    },
    "7": {
        "block_uuid": "0cb83b74-da90-4b9b-be9b-21b3ab3fde17",
        "question": [
            {
                "handler": "waits",
                "params": {
                    "logic": "or",
                    "conditions": [
                        {
                            "event": {
                                "source": "message",
                                "action": "received"
                            },
                            "action": {
                                "type": "question",
                                "step": 0
                            }
                        }
                    ]
                }
            }
        ]
    },
    "8": {
        "block_uuid": "e01a1ae4-c8a1-411c-8698-aaba299a0889",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "𝑪𝒐𝒏𝒕𝒂𝒎𝒐𝒔 𝒄𝒐𝒏 𝒕𝒂𝒍𝒍𝒆𝒓𝒆𝒔 𝒅𝒆 :",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 9
                }
            }
        ]
    },
    "9": {
        "block_uuid": "0c735ab6-d30c-44a0-9ecf-8fd6f6471dba",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "【ＴＥＮＩＳ】",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "fc1d83e6-0039-4a71-8760-bc2807e3f405",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 10
                }
            }
        ]
    },
    "10": {
        "block_uuid": "ae44fdbf-7480-4f03-a058-f2876a94fb9e",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "【𝐁𝐀𝐒𝐊𝐄𝐓𝐁𝐀𝐋𝐋】",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "f6930cc4-318a-4d70-8a92-0330895c3674",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 11
                }
            }
        ]
    },
    "11": {
        "block_uuid": "8a2b0b21-a603-4ae4-b788-5aabd32b98ea",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "【𝐕𝐎𝐋𝐄𝐈𝐁𝐎𝐋】",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "8ce8f12b-45c8-4643-8c48-600d83776b80",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 12
                }
            }
        ]
    },
    "12": {
        "block_uuid": "0477906a-878b-46eb-98cf-8ef2e6567661",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "Contamos con muchas actividades más en las que puedes potenciar tus capacidades. 😃",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 4
                }
            }
        ]
    },
    "13": {
        "block_uuid": "d7336c92-2703-4921-a87e-c30a4df815ca",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "No te entiendo🤷‍♂️\n¿Hay algo más en que te pueda ayudar? \n1️⃣si\n2️⃣no",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "wait_answer",
                "params": {
                    "type": "question",
                    "step": 5
                }
            }
        ]
    },
    "14": {
        "block_uuid": "40129a85-efa0-4ef7-8181-ec1c6a0c80e4",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "Explora nuestra página\n👉\nhttps://www.facebook.com/I.E.P.ISAAC.NEWTON?locale=es_LA",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "51036068-1f0a-4b45-81bb-da57139e8501",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 4
                }
            }
        ]
    },
    "15": {
        "block_uuid": "97f22eba-2e78-42e7-b6ac-ea2eee3a9f16",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "Contamos con: \n🏢 Infraestructuras modernas \n👨‍🏫 Docentes de alta capacidad \n👨‍⚖️ Directivos prestigiosos \n🥇 Logros regionales y nacionales",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 16
                }
            }
        ]
    },
    "16": {
        "block_uuid": "1c442409-2756-43da-aeff-752e7c327d50",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "f6121213-2665-4246-bb19-72a48f4c956b",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 17
                }
            }
        ]
    },
    "17": {
        "block_uuid": "ee3c7c8f-d570-4ca2-b87d-5ec37b7a2b99",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "72b9894e-dae9-4be9-9ee9-4499f01d2d9b",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 4
                }
            }
        ]
    },
    "18": {
        "block_uuid": "3e18838a-dbfd-4e6d-94c8-5f829f62fb57",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "Nos encontramos ubicados en: 🏢 Jirón 2 de Mayo 1450, Huánuco 1000",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 19
                }
            }
        ]
    },
    "19": {
        "block_uuid": "3a9a3ce5-c2e6-4ae8-9476-2c43cfa14b3c",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "",
                    "type": "external",
                    "attachments": [
                        {
                            "type": "picture",
                            "value": "aab105b8-426d-4e6b-9c82-e156f0918ed6",
                            "is_external": true
                        }
                    ],
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 4
                }
            }
        ]
    },
    "20": {
        "block_uuid": "0bb16881-e6a8-4687-9d44-6cb156ebac46",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "En breve, un asesor se comunicará contigo. Gracias por preferirnos. 😃Visítanos y Dale 👍ME GUSTA.\nhttps://www.facebook.com/I.E.P.ISAAC.NEWTON/?locale=es_LA",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 4
                }
            }
        ]
    },
    "21": {
        "block_uuid": "be9f5b4a-e056-46e9-9e50-ab1e8b6612a9",
        "question": [
            {
                "handler": "send_message",
                "params": {
                    "tag": "",
                    "text": "No te entiendo🤷‍♂️\n\n\nSi deseas contactar con un asesor, simplemente escribe el número y estará encantado de ayudarte.\n\n8️⃣ ASESOR\n\nSi deseas recibir información sobre el número correspondiente, escríbelo:\n\n1️⃣Matrícula en línea💳\n2️⃣Información de los programas  ✏️\n3️⃣Página de Facebook【´𝗳】\n4️⃣Por qué elegir Isaac Newton🥇\n5️⃣Ubicación",
                    "type": "external",
                    "is_in_starting_block": false,
                    "send_to_all_chat_sources": true
                }
            },
            {
                "handler": "wait_answer",
                "params": {
                    "type": "question",
                    "step": 1
                }
            }
        ]
    },
    "22": {
        "block_uuid": "cc23d4ee-0415-4773-9f6b-3b798f67e3ac",
        "question": [
            {
                "handler": "trigger",
                "params": {
                    "trigger": {
                        "delay": 0,
                        "action": "create_task",
                        "segments": [
                            ""
                        ],
                        "settings": {
                            "task_text": "este contacto necesita hablar con un asesor",
                            "task_type": "2",
                            "deadline-days": "",
                            "deadline-hours": "",
                            "task_type_name": "Reunión",
                            "within-deadline": "0",
                            "deadline-minutes": "",
                            "responsible_user": "10064755"
                        },
                        "date_exec": 0,
                        "handler_code": "amocrm",
                        "execution_condition": {
                            "id": 45,
                            "name": "execute_trigger"
                        }
                    },
                    "element_type": "lead"
                }
            },
            {
                "handler": "goto",
                "params": {
                    "type": "question",
                    "step": 20
                }
            }
        ]
    },
    "conversation": false
}