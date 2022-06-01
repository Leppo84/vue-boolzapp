const wazzuppo = new Vue ({
    el: "#uozzap",
    data: {
        newMess : "",
        searchEntry : "",
        hidden : false,
        // botAnsw : [],
        allChats : [
            {
                contactName : "Tony",
                avatar : "_02",
                active: false,
                messages : [
                    {
                        dateMess : "10/01/2022",
                        timeMess : "15:30",
                        message : "Ciao Tony, non mi hai più detto niente per la pentola a pressione.",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "10/01/2022",
                        timeMess : "15:52",
                        message : "Ti trovi bene?",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "10/01/2022",
                        timeMess : "16:15",
                        message : "Sì, bene. Ci cuciniamo di tutto!",
                        statusMess : "received"
                    }

                ],
            },
            {
                contactName : "Bruce",
                avatar : "_03",
                active : true,
                messages : [
                    {
                        dateMess : "12/02/2022",
                        timeMess : "4:30",
                        message : "Giorgio! Sulla Bat-bike non va più lo scimano.",
                        statusMess : "received"
                    },
                    {
                        dateMess : "12/02/2022",
                        timeMess : "7:52",
                        message : "Ma come? Non è che hai scarrellato?",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "13/02/2022",
                        timeMess : "00:15",
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
                        dateMess : "01/01/2022",
                        timeMess : "00:07",
                        message : "Buonanno Giorgio! Rispetta la legge!",
                        statusMess : "received"
                    },
                    {
                        dateMess : "01/01/2022",
                        timeMess : "00:52",
                        message : "Grande Robocop! Auguroniii!!!",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "01/01/2022",
                        timeMess : "00:56",
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
                        dateMess : "16/03/2022",
                        timeMess : "22:07",
                        message : "Ciao, mi sa che non riesco a passare... perdnami, saluta gli altri!",
                        statusMess : "received"
                    },
                    {
                        dateMess : "16/03/2022",
                        timeMess : "22:14",
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
                        dateMess : "15/05/2022",
                        timeMess : "14:07",
                        message : "Uei Giorgione! Questa volta ti iscrivi alla partita? ne manca uno!",
                        statusMess : "received"
                    },
                    {
                        dateMess : "15/05/2022",
                        timeMess : "16:52",
                        message : "No, mi spiace, non riesco nemmeno questo martedì. Ho Mondialcasa.",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "16/05/2022",
                        timeMess : "14:56",
                        message : "Accidenti ho dovuto chiamare Vegeta... vabbè",
                        statusMess : "received"
                    },
                    {
                        dateMess : "16/05/2022",
                        timeMess : "15:01",
                        message : "Ahahah, vabbè dai. Invece la finale la guardiamo?",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "16/05/2022",
                        timeMess : "15:07",
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
                        dateMess : "28/05/2022",
                        timeMess : "11:52",
                        message : "L'hai vista?",
                        statusMess : "received"
                    },
                    {
                        dateMess : "28/05/2022",
                        timeMess : "12:06",
                        message : "Sì, poi ne parliamo.",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "28/05/2022",
                        timeMess : "12:07",
                        message : "Comunque bisogna aspettare le altre.",
                        statusMess : "sent"
                    },
                    {
                        dateMess : "28/05/2022",
                        timeMess : "15:12",
                        message : "Grande Evan McGregor. Le prossime le vediamo assieme.",
                        statusMess : "received"
                    },
                    {
                        dateMess : "28/05/2022",
                        timeMess : "15:38",
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
                        dateMess : "04/07/2019",
                        timeMess : "21:37",
                        message : "Ciao ancora, che buffo beccarci così. A presto",
                        statusMess : "received"
                    },
                    {
                        dateMess : "4/07/2019 ",
                        timeMess : "1:49",
                        message : "Sì, bello. Alla prossima rimpatriata!",
                        statusMess : "sent"
                    }
                ]
            }
        ]
    },
    methods : {
        changeContact (position) {
            this.allChats.forEach(chat => {
                chat.active=false;                
            });
            this.allChats[position].active = true;
        },
        botMess (position) {
            this.newMess="";
            let botAnsw = [
                "Forse volevi una parola palindroma: Omordotuanuoraoarounautodromo.", "Va bene...", "Mai una gioia.", "Cosa hai scritto?", "In che senso?", "Comunque è sempre colpa della lobby delle farmacie.", "Va bene Ciccio, ci becchiamo!", "42", "Ehm... forse.", "Sì, certo, ti faccio sapere.", "No, non ho sorelle o amiche da presentarti", "Mmmmhh...", "Ahahahah. No.", "Aahahahh!!!", "Ma sono giaponese!", "Ora devo andare!", "Ci sentiamo dopo!", "No", "Non credo :)", "Ok", "Vai avanti", "No ma fai pure", "Non è divertente,", "Ciao", "Ciao Giorgio", "Bene. Tu invece come stai?", "Bene anche te e famiglia", "Ciaooo!", "Salve!", "Bella!", "Oggi il cane si è pulito il culo in cucina... un macello.", "Speriamo che non piova", "Non dirlo", "Che stanchezza", "Essere famosi è faticoso.", "Voglio uscireee!"
            ];

            let ranNum = Math.floor(Math.random()*36);

            console.log(botAnsw[ranNum]);

            let botAnswer = {
                dateMess : this.getDate(),
                timeMess : this.getHour(),
                message : botAnsw[ranNum],
                statusMess : "received"
            };

            setTimeout(() => {

                this.allChats[position].messages.push(botAnswer);
                              
            }, 3000);

            setTimeout(() => {
                
                
                const scroll = document.querySelector("#wall");
                
                scroll.scrollTo({ top: 90000, behavior: 'smooth' })


                // scroll.scrollTop =scroll.scrollHeight;
                // console.log(scroll.scrollHeight);
                
            }, 3020);
            
            
        },        
        addMess (position) {
            
            let addingMess = {
                dateMess : this.getDate(),
                timeMess : this.getHour(),
                message : this.newMess,
                statusMess : "sent"
            };
            
            if (this.newMess.trim()=="") {
            // non esegue niente
            }
            else {
                this.allChats[position].messages.push(addingMess);
                this.botMess(position);
            }

            setTimeout(() => {

                const scroll = document.querySelector("#wall");
                
                scroll.scrollTo({ top: 90000, behavior: 'smooth' })
                
            }, 20);

        },
        getDate () {
            const d = new Date();
            let today = d.toLocaleDateString();
            return today
        },
        getHour () {
            const t = new Date();
            let now = t.toLocaleTimeString();
            now = now.slice(0,5);
            return now
        },
        // pageScroll() {

        //     window.scrollBy(0,1);
        
        //     scrolldelay = setTimeout(pageScroll,10);
        
        // },
        filterChats () {

            for (let index = 0; index < this.allChats.length; index++) {

                let mydiv = document.getElementById(this.allChats[index].contactName);

                if (this.searchEntry.trim()=="") {

                    mydiv.style.display= "flex";
                    
                }
                else {
                    
                    mydiv.style.display= "none";
                   
                    let entry = this.searchEntry.toLowerCase().trim();

                    let contact = this.allChats[index].contactName.toLowerCase().trim();
                    
                    let match = contact.includes(entry);
                    
                    if (match == true) {

                        mydiv.style.display= "flex";
                        
                    }
                }
            }
        },
    }
});