const cities = [
    {
        id: 1,
        name: "Paris",

        places: [
            {
                id: 101,
                name: "Eiffel Tower",

                questions: [
                    {
                        question: "Where is the Eiffel Tower?",
                        options: [
                            "Paris",
                            "London",
                            "Rome",
                            "Berlin"
                        ],
                        correctAnswer: "Paris"
                    },
                    {
                        question: "What is the Eiffel Tower made of?",
                        options: [
                            "Wood",
                            "Iron",
                            "Glass",
                            "Stone"
                        ],
                        correctAnswer: "Iron"
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        name: "Japan",

        places: [
            {
                id: 201,
                name: "Mount Fuji",

                questions: [
                    {
                        question: "What is the highest mountain in Japan?",
                        options: [
                            "Mount Fuji",
                            "Mount Everest",
                            "Mount Kilimanjaro",
                            "Mount Elbrus"
                        ],
                        correctAnswer: "Mount Fuji"
                    },
                    {
                        question: "What type of mountain is Mount Fuji?",
                        options: [
                            "Volcano",
                            "Hill",
                            "Plateau",
                            "Canyon"
                        ],
                        correctAnswer: "Volcano"
                    }
                ]
            },

            {
                id: 202,
                name: "Tokyo Tower",

                questions: [
                    {
                        question: "In which city is Tokyo Tower?",
                        options: [
                            "Tokyo",
                            "Kyoto",
                            "Osaka",
                            "Nara"
                        ],
                        correctAnswer: "Tokyo"
                    }
                ]
            }
        ]
    }
];

export default cities;