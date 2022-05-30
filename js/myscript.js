const wazzuppo = new Vue ({
    el: "#uozzap",
    data: {
        allChats : [
            {
                contactName : "Tony",
                avatar : "_02",
                active: true,
                messages : [
                    {
                        timeMess : "10/01/2022 15:30",
                        message : "Ciao Tony, non mi hai più detto niente per la pentola a pressione.",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "10/01/2022 15:52",
                        message : "Ti trovi bene?",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "10/01/2022 16:15",
                        message : "Sì, bene. Ci cuciniamo di tutto!",
                        statusMess : "received"
                    }

                ],
            },
            {
                contactName : "Bruce",
                avatar : "_03",
                active : false,
                messages : [
                    {
                        timeMess : "12/02/2022 4:30",
                        message : "Giorgio! alla Bat-bike non va più lo scimano.",
                        statusMess : "received"
                    },
                    {
                        timeMess : "12/02/2022 7:52",
                        message : "Ma come? Non è che hai scarrellato?",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "13/02/2022 00:15",
                        message : "No, ma tutto a posto, ci ha pensato Alfred",
                        statusMess : "received"
                    }

                ],
            },
            {
                contactName : "Murphy",
                avatar : "_04",
                active : false,
                messages : [
                    {
                        timeMess : "01/01/2022 00:07",
                        message : "Buonanno Giorgio! Rispetta la legge!",
                        statusMess : "received"
                    },
                    {
                        timeMess : "01/01/2022 00:52",
                        message : "Grande Robocop! Auguroniii!!!",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "01/01/2022 00:56",
                        message : "Anche a te e famiglia.",
                        statusMess : "received"
                    }

                ],
            },
            {
                contactName : "Daria",
                avatar : "_05",
                active : false,
                messages : [
                    {
                        timeMess : "16/03/2022 22:07",
                        message : "Ciao, mi sa che non riesco a passare... perdnami, saluta gli altri!",
                        statusMess : "received"
                    },
                    {
                        timeMess : "16/03/2022 22:14",
                        message : "Non preoccuparti, recupereremo. A presto!",
                        statusMess : "sent"
                    }
                ],
            },
            {
                contactName : "Goku",
                avatar : "_06",
                active : false,
                messages : [
                    {
                        timeMess : "15/05/2022 14:07",
                        message : "Uei Giorgione! Questa volta ti iscrivi alla partita? ne manca uno!",
                        statusMess : "received"
                    },
                    {
                        timeMess : "15/05/2022 16:52",
                        message : "No, mi spiace, non riesco nemmeno questo martedì. Ho Mondialcasa.",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "16/05/2022 14:56",
                        message : "Accidenti ho dovuto chiamare Vegeta... vabbè",
                        statusMess : "received"
                    },
                    {
                        timeMess : "16/05/2022 15:01",
                        message : "Ahahah, vabbè dai. Invece la finale la guardiamo?",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "16/05/2022 15:07",
                        message : "Ancora non lo so, non credo.",
                        statusMess : "received"
                    }
                ],
            },
            {
                contactName : "Anakin",
                avatar : "_07",
                active : false,
                messages : [
                    {
                        timeMess : "28/05/2022 11:52",
                        message : "L'hai vista?",
                        statusMess : "received"
                    },
                    {
                        timeMess : "28/05/2022 12:06",
                        message : "Sì, poi ne parliamo.",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "28/05/2022 12:07",
                        message : "Comunque bisogna aspettare le altre.",
                        statusMess : "sent"
                    },
                    {
                        timeMess : "28/05/2022 15:12",
                        message : "Grande Evan McGregor. Le prossime le vediamo assieme.",
                        statusMess : "received"
                    },
                    {
                        timeMess : "28/05/2022 15:38",
                        message : "Dai, perchè no. :)",
                        statusMess : "sent"
                    },
                ],
            },
            {
                contactName : "Sarah",
                avatar : "_08",
                active : false,
                messages : [
                    {
                        timeMess : "04/07/2019 21:37",
                        message : "Ciao ancora, che buffo beccarci così. A presto",
                        statusMess : "received"
                    },
                    {
                        timeMess : "4/07/2019 21:49",
                        message : "Sì, bello. Alla prossima rimpatriata!",
                        statusMess : "sent"
                    }
                ]
            }
        ]
    },
    methods : {

    }
})

