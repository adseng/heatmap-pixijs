import {useEffect, useState} from 'react'
import Konva from "konva";


// 然后你可以按照之前提到的方法创建BaseTexture和Texture

function App() {

    const [url, setUrl] = useState('')

    async function drawHeatMap() {

        const capD = {
            "minX": 8,
            "maxX": 22,
            "minY": 9,
            "maxY": 13,
            "sPoints": [
                {
                    "id": "2a9fcb30201043608ad6ede82d0bc0dd",
                    "moduleId": "1",
                    "num": 2,
                    "mb": 1,
                    "db": 2,
                    "text": "S2",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        16,
                        11
                    ],
                    "index": 2
                },
                {
                    "id": "95b4477883084b44989dd4bbf2b2ecb5",
                    "moduleId": "1",
                    "num": 6,
                    "mb": 2,
                    "db": 2,
                    "text": "S6",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        18,
                        9
                    ],
                    "index": 6
                },
                {
                    "id": "e030c003f8f94fb2b9acd283c38d7b4a",
                    "moduleId": "1",
                    "num": 1,
                    "mb": 1,
                    "db": 1,
                    "text": "S1",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        20,
                        11
                    ],
                    "index": 1
                },
                {
                    "id": "58f9581ef00a498cbc9aee0bd213f16a",
                    "moduleId": "1",
                    "num": 5,
                    "mb": 2,
                    "db": 1,
                    "text": "S5",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        22,
                        9
                    ],
                    "index": 5
                },
                {
                    "id": "cf65fcdc6c7b40deb3c4b7d3bea219b9",
                    "moduleId": "1",
                    "num": 7,
                    "mb": 2,
                    "db": 3,
                    "text": "S7",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        14,
                        9
                    ],
                    "index": 7
                },
                {
                    "id": "408e1aa8593a485888b04097d47349d3",
                    "moduleId": "1",
                    "num": 3,
                    "mb": 1,
                    "db": 3,
                    "text": "S3",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        12,
                        11
                    ],
                    "index": 3
                },
                {
                    "id": "26c04cc8480447258c69627cbb942290",
                    "moduleId": "1",
                    "num": 8,
                    "mb": 2,
                    "db": 4,
                    "text": "S8",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        10,
                        9
                    ],
                    "index": 8
                },
                {
                    "id": "d58b59c4372f4dd0b0d2ff12a8b78961",
                    "moduleId": "1",
                    "num": 4,
                    "mb": 1,
                    "db": 4,
                    "text": "S4",
                    "status": "done",
                    "type": 1,
                    "rfColor": "red",
                    "pos": [
                        8,
                        11
                    ],
                    "index": 4
                }
            ],
            "dPoints": [
                {
                    "id": "c3ee2bfc85774682b742d8a7ade0332f",
                    "moduleId": "1",
                    "num": 6,
                    "mb": 2,
                    "db": 10,
                    "text": "D6",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        16,
                        9
                    ],
                    "index": 6
                },
                {
                    "id": "f7781072dfd345c18422d1d4d02b60c0",
                    "moduleId": "1",
                    "num": 2,
                    "mb": 1,
                    "db": 10,
                    "text": "D2",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        18,
                        11
                    ],
                    "index": 2
                },
                {
                    "id": "d81536e9ac9f47d082c7d79aff2ffcae",
                    "moduleId": "1",
                    "num": 5,
                    "mb": 2,
                    "db": 9,
                    "text": "D5",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        20,
                        9
                    ],
                    "index": 5
                },
                {
                    "id": "80a95ce1c7c94f6e8adf0d03c43d261c",
                    "moduleId": "1",
                    "num": 1,
                    "mb": 1,
                    "db": 9,
                    "text": "D1",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        22,
                        11
                    ],
                    "index": 1
                },
                {
                    "id": "92e47755a3a74761b4a48ca51e0522db",
                    "moduleId": "1",
                    "num": 3,
                    "mb": 1,
                    "db": 11,
                    "text": "D3",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        14,
                        11
                    ],
                    "index": 3
                },
                {
                    "id": "7d769e09f6d74084b62ffa1c15facad5",
                    "moduleId": "1",
                    "num": 7,
                    "mb": 2,
                    "db": 11,
                    "text": "D7",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        12,
                        9
                    ],
                    "index": 7
                },
                {
                    "id": "0b5ea4b483974b2e8106bb00e3ddc5eb",
                    "moduleId": "1",
                    "num": 4,
                    "mb": 1,
                    "db": 12,
                    "text": "D4",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        10,
                        11
                    ],
                    "index": 4
                },
                {
                    "id": "0d5908d2b6cd46ff8391fb741aefc7e4",
                    "moduleId": "1",
                    "num": 8,
                    "mb": 2,
                    "db": 12,
                    "text": "D8",
                    "status": "done",
                    "type": 2,
                    "rfColor": "green",
                    "pos": [
                        8,
                        9
                    ],
                    "index": 8
                }
            ],
            "lines": [
                {
                    "si": {
                        "id": "e030c003f8f94fb2b9acd283c38d7b4a",
                        "moduleId": "1",
                        "num": 1,
                        "mb": 1,
                        "db": 1,
                        "text": "S1",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            20,
                            11
                        ],
                        "index": 1
                    },
                    "di": {
                        "id": "80a95ce1c7c94f6e8adf0d03c43d261c",
                        "moduleId": "1",
                        "num": 1,
                        "mb": 1,
                        "db": 9,
                        "text": "D1",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            22,
                            11
                        ],
                        "index": 1
                    },
                    "index": 1,
                    "s": 1,
                    "d": 1
                },
                {
                    "si": {
                        "id": "e030c003f8f94fb2b9acd283c38d7b4a",
                        "moduleId": "1",
                        "num": 1,
                        "mb": 1,
                        "db": 1,
                        "text": "S1",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            20,
                            11
                        ],
                        "index": 1
                    },
                    "di": {
                        "id": "f7781072dfd345c18422d1d4d02b60c0",
                        "moduleId": "1",
                        "num": 2,
                        "mb": 1,
                        "db": 10,
                        "text": "D2",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            18,
                            11
                        ],
                        "index": 2
                    },
                    "index": 2,
                    "s": 1,
                    "d": 2
                },
                {
                    "si": {
                        "id": "2a9fcb30201043608ad6ede82d0bc0dd",
                        "moduleId": "1",
                        "num": 2,
                        "mb": 1,
                        "db": 2,
                        "text": "S2",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            16,
                            11
                        ],
                        "index": 2
                    },
                    "di": {
                        "id": "f7781072dfd345c18422d1d4d02b60c0",
                        "moduleId": "1",
                        "num": 2,
                        "mb": 1,
                        "db": 10,
                        "text": "D2",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            18,
                            11
                        ],
                        "index": 2
                    },
                    "index": 3,
                    "s": 2,
                    "d": 2
                },
                {
                    "si": {
                        "id": "2a9fcb30201043608ad6ede82d0bc0dd",
                        "moduleId": "1",
                        "num": 2,
                        "mb": 1,
                        "db": 2,
                        "text": "S2",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            16,
                            11
                        ],
                        "index": 2
                    },
                    "di": {
                        "id": "92e47755a3a74761b4a48ca51e0522db",
                        "moduleId": "1",
                        "num": 3,
                        "mb": 1,
                        "db": 11,
                        "text": "D3",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            14,
                            11
                        ],
                        "index": 3
                    },
                    "index": 4,
                    "s": 2,
                    "d": 3
                },
                {
                    "si": {
                        "id": "408e1aa8593a485888b04097d47349d3",
                        "moduleId": "1",
                        "num": 3,
                        "mb": 1,
                        "db": 3,
                        "text": "S3",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            12,
                            11
                        ],
                        "index": 3
                    },
                    "di": {
                        "id": "92e47755a3a74761b4a48ca51e0522db",
                        "moduleId": "1",
                        "num": 3,
                        "mb": 1,
                        "db": 11,
                        "text": "D3",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            14,
                            11
                        ],
                        "index": 3
                    },
                    "index": 5,
                    "s": 3,
                    "d": 3
                },
                {
                    "si": {
                        "id": "408e1aa8593a485888b04097d47349d3",
                        "moduleId": "1",
                        "num": 3,
                        "mb": 1,
                        "db": 3,
                        "text": "S3",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            12,
                            11
                        ],
                        "index": 3
                    },
                    "di": {
                        "id": "0b5ea4b483974b2e8106bb00e3ddc5eb",
                        "moduleId": "1",
                        "num": 4,
                        "mb": 1,
                        "db": 12,
                        "text": "D4",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            10,
                            11
                        ],
                        "index": 4
                    },
                    "index": 6,
                    "s": 3,
                    "d": 4
                },
                {
                    "si": {
                        "id": "d58b59c4372f4dd0b0d2ff12a8b78961",
                        "moduleId": "1",
                        "num": 4,
                        "mb": 1,
                        "db": 4,
                        "text": "S4",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            8,
                            11
                        ],
                        "index": 4
                    },
                    "di": {
                        "id": "0b5ea4b483974b2e8106bb00e3ddc5eb",
                        "moduleId": "1",
                        "num": 4,
                        "mb": 1,
                        "db": 12,
                        "text": "D4",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            10,
                            11
                        ],
                        "index": 4
                    },
                    "index": 7,
                    "s": 4,
                    "d": 4
                },
                {
                    "si": {
                        "id": "58f9581ef00a498cbc9aee0bd213f16a",
                        "moduleId": "1",
                        "num": 5,
                        "mb": 2,
                        "db": 1,
                        "text": "S5",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            22,
                            9
                        ],
                        "index": 5
                    },
                    "di": {
                        "id": "80a95ce1c7c94f6e8adf0d03c43d261c",
                        "moduleId": "1",
                        "num": 1,
                        "mb": 1,
                        "db": 9,
                        "text": "D1",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            22,
                            11
                        ],
                        "index": 1
                    },
                    "index": 8,
                    "s": 5,
                    "d": 1
                },
                {
                    "si": {
                        "id": "e030c003f8f94fb2b9acd283c38d7b4a",
                        "moduleId": "1",
                        "num": 1,
                        "mb": 1,
                        "db": 1,
                        "text": "S1",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            20,
                            11
                        ],
                        "index": 1
                    },
                    "di": {
                        "id": "d81536e9ac9f47d082c7d79aff2ffcae",
                        "moduleId": "1",
                        "num": 5,
                        "mb": 2,
                        "db": 9,
                        "text": "D5",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            20,
                            9
                        ],
                        "index": 5
                    },
                    "index": 9,
                    "s": 1,
                    "d": 5
                },
                {
                    "si": {
                        "id": "95b4477883084b44989dd4bbf2b2ecb5",
                        "moduleId": "1",
                        "num": 6,
                        "mb": 2,
                        "db": 2,
                        "text": "S6",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            18,
                            9
                        ],
                        "index": 6
                    },
                    "di": {
                        "id": "f7781072dfd345c18422d1d4d02b60c0",
                        "moduleId": "1",
                        "num": 2,
                        "mb": 1,
                        "db": 10,
                        "text": "D2",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            18,
                            11
                        ],
                        "index": 2
                    },
                    "index": 10,
                    "s": 6,
                    "d": 2
                },
                {
                    "si": {
                        "id": "2a9fcb30201043608ad6ede82d0bc0dd",
                        "moduleId": "1",
                        "num": 2,
                        "mb": 1,
                        "db": 2,
                        "text": "S2",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            16,
                            11
                        ],
                        "index": 2
                    },
                    "di": {
                        "id": "c3ee2bfc85774682b742d8a7ade0332f",
                        "moduleId": "1",
                        "num": 6,
                        "mb": 2,
                        "db": 10,
                        "text": "D6",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            16,
                            9
                        ],
                        "index": 6
                    },
                    "index": 11,
                    "s": 2,
                    "d": 6
                },
                {
                    "si": {
                        "id": "cf65fcdc6c7b40deb3c4b7d3bea219b9",
                        "moduleId": "1",
                        "num": 7,
                        "mb": 2,
                        "db": 3,
                        "text": "S7",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            14,
                            9
                        ],
                        "index": 7
                    },
                    "di": {
                        "id": "92e47755a3a74761b4a48ca51e0522db",
                        "moduleId": "1",
                        "num": 3,
                        "mb": 1,
                        "db": 11,
                        "text": "D3",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            14,
                            11
                        ],
                        "index": 3
                    },
                    "index": 12,
                    "s": 7,
                    "d": 3
                },
                {
                    "si": {
                        "id": "408e1aa8593a485888b04097d47349d3",
                        "moduleId": "1",
                        "num": 3,
                        "mb": 1,
                        "db": 3,
                        "text": "S3",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            12,
                            11
                        ],
                        "index": 3
                    },
                    "di": {
                        "id": "7d769e09f6d74084b62ffa1c15facad5",
                        "moduleId": "1",
                        "num": 7,
                        "mb": 2,
                        "db": 11,
                        "text": "D7",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            12,
                            9
                        ],
                        "index": 7
                    },
                    "index": 13,
                    "s": 3,
                    "d": 7
                },
                {
                    "si": {
                        "id": "26c04cc8480447258c69627cbb942290",
                        "moduleId": "1",
                        "num": 8,
                        "mb": 2,
                        "db": 4,
                        "text": "S8",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            10,
                            9
                        ],
                        "index": 8
                    },
                    "di": {
                        "id": "0b5ea4b483974b2e8106bb00e3ddc5eb",
                        "moduleId": "1",
                        "num": 4,
                        "mb": 1,
                        "db": 12,
                        "text": "D4",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            10,
                            11
                        ],
                        "index": 4
                    },
                    "index": 14,
                    "s": 8,
                    "d": 4
                },
                {
                    "si": {
                        "id": "d58b59c4372f4dd0b0d2ff12a8b78961",
                        "moduleId": "1",
                        "num": 4,
                        "mb": 1,
                        "db": 4,
                        "text": "S4",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            8,
                            11
                        ],
                        "index": 4
                    },
                    "di": {
                        "id": "0d5908d2b6cd46ff8391fb741aefc7e4",
                        "moduleId": "1",
                        "num": 8,
                        "mb": 2,
                        "db": 12,
                        "text": "D8",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            8,
                            9
                        ],
                        "index": 8
                    },
                    "index": 15,
                    "s": 4,
                    "d": 8
                },
                {
                    "si": {
                        "id": "58f9581ef00a498cbc9aee0bd213f16a",
                        "moduleId": "1",
                        "num": 5,
                        "mb": 2,
                        "db": 1,
                        "text": "S5",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            22,
                            9
                        ],
                        "index": 5
                    },
                    "di": {
                        "id": "d81536e9ac9f47d082c7d79aff2ffcae",
                        "moduleId": "1",
                        "num": 5,
                        "mb": 2,
                        "db": 9,
                        "text": "D5",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            20,
                            9
                        ],
                        "index": 5
                    },
                    "index": 16,
                    "s": 5,
                    "d": 5
                },
                {
                    "si": {
                        "id": "95b4477883084b44989dd4bbf2b2ecb5",
                        "moduleId": "1",
                        "num": 6,
                        "mb": 2,
                        "db": 2,
                        "text": "S6",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            18,
                            9
                        ],
                        "index": 6
                    },
                    "di": {
                        "id": "d81536e9ac9f47d082c7d79aff2ffcae",
                        "moduleId": "1",
                        "num": 5,
                        "mb": 2,
                        "db": 9,
                        "text": "D5",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            20,
                            9
                        ],
                        "index": 5
                    },
                    "index": 17,
                    "s": 6,
                    "d": 5
                },
                {
                    "si": {
                        "id": "95b4477883084b44989dd4bbf2b2ecb5",
                        "moduleId": "1",
                        "num": 6,
                        "mb": 2,
                        "db": 2,
                        "text": "S6",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            18,
                            9
                        ],
                        "index": 6
                    },
                    "di": {
                        "id": "c3ee2bfc85774682b742d8a7ade0332f",
                        "moduleId": "1",
                        "num": 6,
                        "mb": 2,
                        "db": 10,
                        "text": "D6",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            16,
                            9
                        ],
                        "index": 6
                    },
                    "index": 18,
                    "s": 6,
                    "d": 6
                },
                {
                    "si": {
                        "id": "cf65fcdc6c7b40deb3c4b7d3bea219b9",
                        "moduleId": "1",
                        "num": 7,
                        "mb": 2,
                        "db": 3,
                        "text": "S7",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            14,
                            9
                        ],
                        "index": 7
                    },
                    "di": {
                        "id": "c3ee2bfc85774682b742d8a7ade0332f",
                        "moduleId": "1",
                        "num": 6,
                        "mb": 2,
                        "db": 10,
                        "text": "D6",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            16,
                            9
                        ],
                        "index": 6
                    },
                    "index": 19,
                    "s": 7,
                    "d": 6
                },
                {
                    "si": {
                        "id": "cf65fcdc6c7b40deb3c4b7d3bea219b9",
                        "moduleId": "1",
                        "num": 7,
                        "mb": 2,
                        "db": 3,
                        "text": "S7",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            14,
                            9
                        ],
                        "index": 7
                    },
                    "di": {
                        "id": "7d769e09f6d74084b62ffa1c15facad5",
                        "moduleId": "1",
                        "num": 7,
                        "mb": 2,
                        "db": 11,
                        "text": "D7",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            12,
                            9
                        ],
                        "index": 7
                    },
                    "index": 20,
                    "s": 7,
                    "d": 7
                },
                {
                    "si": {
                        "id": "26c04cc8480447258c69627cbb942290",
                        "moduleId": "1",
                        "num": 8,
                        "mb": 2,
                        "db": 4,
                        "text": "S8",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            10,
                            9
                        ],
                        "index": 8
                    },
                    "di": {
                        "id": "7d769e09f6d74084b62ffa1c15facad5",
                        "moduleId": "1",
                        "num": 7,
                        "mb": 2,
                        "db": 11,
                        "text": "D7",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            12,
                            9
                        ],
                        "index": 7
                    },
                    "index": 21,
                    "s": 8,
                    "d": 7
                },
                {
                    "si": {
                        "id": "26c04cc8480447258c69627cbb942290",
                        "moduleId": "1",
                        "num": 8,
                        "mb": 2,
                        "db": 4,
                        "text": "S8",
                        "status": "done",
                        "type": 1,
                        "rfColor": "red",
                        "pos": [
                            10,
                            9
                        ],
                        "index": 8
                    },
                    "di": {
                        "id": "0d5908d2b6cd46ff8391fb741aefc7e4",
                        "moduleId": "1",
                        "num": 8,
                        "mb": 2,
                        "db": 12,
                        "text": "D8",
                        "status": "done",
                        "type": 2,
                        "rfColor": "green",
                        "pos": [
                            8,
                            9
                        ],
                        "index": 8
                    },
                    "index": 22,
                    "s": 8,
                    "d": 8
                }
            ],
            "name": "S8-D8-C22-22-前额(VFT)",
            "textDataList": [
                {
                    "tagging": "FPz",
                    "fontColor": "black",
                    "wrapWidth": 80,
                    "pointXy": "{\"x\":15,\"y\":13}",
                    "id": 1,
                    "pos": [
                        15,
                        13
                    ]
                },
                {
                    "tagging": "右侧",
                    "fontColor": "black",
                    "wrapWidth": 80,
                    "pointXy": "{\"x\":8,\"y\":13}",
                    "id": 2,
                    "pos": [
                        8,
                        13
                    ]
                },
                {
                    "tagging": "左侧",
                    "fontColor": "black",
                    "wrapWidth": 80,
                    "pointXy": "{\"x\":22,\"y\":13}",
                    "id": 3,
                    "pos": [
                        22,
                        13
                    ]
                }
            ]
        }

        const scale = 20
        const h = (capD.maxX - capD.minX + 2) * scale
        const w = (capD.maxY - capD.minY + 1) * scale

        console.log('height, width', h, w)

        const container = document.createElement('div')

        const stage = new Konva.Stage({
            container: container,
            listening: false,
            width: h,
            height: w,
        })

        const layer = new Konva.Layer({
            // x: scale,
            // y: scale
        })

        stage.add(layer)

        capD.lines.forEach(line => {
            const x = ((line.si.pos[0] + line.di.pos[0]) / 2 - capD.minX + 1) * scale
            const y = ((line.si.pos[1] + line.di.pos[1]) / 2 - capD.minY + 1.5) * scale

            console.log(x, y)
            const text = new Konva.Text({
                text: line.index.toString(),
                x,
                y,
                fontSize: 20,
                fontStyle: '#AAA'
            })
            // 减去字体大小
            // text.x(text.x() - text.getWidth() / 2)
            // text.y(text.y() - text.getHeight() / 2)

            layer.add(text)

            const c = new Konva.Circle({
                radius: 2,
                x,
                y,
                fill: '#FF0011'
            })

            layer.add(c)
        })

        const a = stage.toDataURL()
        setUrl(a)
    }

    useEffect(() => {
        drawHeatMap().then()
    }, []);

    return (
        <>
            <img src={url} alt=""/>
        </>
    )
}

export default App
