//@flow
const requestData = () => ({
    type: 'REQUEST_DATA',
});

const receiveData = (data: Object) => ({
    type: 'RECEIVE_DATA',
    data,
});

export const initAPI = () => (
    async (dispatch: Function) => {
        dispatch(requestData());
        const response = await dispatch(getGallery());
        dispatch(receiveData(response));
    }
);

const getGallery = () => (
    async () => ({
        "gallery": [
            {
                "id" : "disco_cry",
                "name" : "Disco Cry",
                "image" : "images/discocry.jpg",
                "className" : "link--black",
                "items" : [
                    {
                        "src" : "images/001.jpg",
                        "type" : "",
                        "name" : "001"
                    },
                     {
                        "src" : "images/Marianna Serocka_Strona_24.jpg",
                        "type" : "full",
                        "name" : "Marianna Serocka_Strona_24"
                    },
                    {
                        "src" : "images/Marianna Serocka_Strona_22.jpg",
                        "type" : "",
                        "name" : "Marianna Serocka_Strona_22"
                    },
                    {
                        "src" : "images/discocry.jpg",
                        "type" : "full",
                        "name" : "discocry"
                    },
                    {
                        "contentType": "description",
                        "text" : "<div style='font-style: italic;'>" +
                            "<p>Based on a true story. Every girl knows this, all these Saturday nights that stretch until dawn and cannot end. Coming back home with a hangover, broken heart and a strange guy on top of that. “Disco Cry” is an account of one of these nights that leave memories you’d rather not have.</p>" +
                            "<p>Marianna wittily uses paper as a means to explore her fondness for ornaments. Impatient drawings and wild colours, increasingly intense as the night progresses, reach a climax at the end of the story.</p>" +
                            "<p>An amusing read that will calm your conscience after a sleepless night. Just beware of men in crocodile shoes.</p>" +
                            "</div>" +
                            "<p style='float: right;'>Klara Sladkova, No Ordinary Heroes</p>" +
                            "<br />" +
                            "<br />" +
                            "<div style='font-style: italic;'><p>I haven’t read it but I like it.</p></div>" +
                            "<p style='float: right;'>Jenny, Tooting Broadway</p>" +
                            "<br />" +
                            "<br />" +
                            "<br />" +
                            "<p style='text-align: center;'><b><a target='_blank' rel='noopener noreferrer' href='http://centrala.org.uk/pl/sklep/disco-cry/'>DISCO CRY</a></b></p>" +
                            "<br />" +
                            "<p style='text-align: center;'><b><a target='_blank' rel='noopener noreferrer' href='https://artkomiks.pl/autor/marianna-serocka/'>ART KOMIKS</a></b></p>",
                        "type" : "full",
                    },
                    {
                        "contentType": "description",
                        "text" : "<p>- Pisałam komiks o tym, co mnie w tamtym momencie kręciło - mówi Marianna Serocka, autorka. - To jest komiks o dziewczynach 19-20-21-letnich, które \"zapalają się\", żeby iść na imprezę - dodaje.</p>"+
                            "<br /><p>- Ten komiks jest soczysty. Jest w nim moc kolorów, pęd, co odzwierciedla głód wrażeń, apetyt na życie - opowiada rysowniczka i zdradza, że tworząc go sięgała po wiele inspiracji m.in. filmy \"Trainspotting\" czy \"Dziewczyny do wzięcia\".</p>"+
                            "<br /><p>Marianna Serocka opowiada, że komiks powstawał, gdy była w imprezowym ciągu - imprezy zaczynały się we wtorek, a kończyły w środę następnego tygodnia. - Mieszała mi się jawa ze snem, to widać w tym komiksie, on jest bardzo abstrakcyjny - dzikość imprez wylewa się z tych kartek - wyjaśnia.</p>",
                        "type" : "full"
                    }
                ]
            }, {
                "id" : "all_eyes_on_me",
                "name" : "All Eyes On Me",
                "image" : "images/All_Eyes_On_Me.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-13.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-14.jpg",
                        "type" : "large",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-15.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-01.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-02.jpg",
                        "type" : "large",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-25.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-16.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-17.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-18.jpg",
                        "type" : "large",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-21.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-19.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "src" : "images/galeria-bwa-wszystkie-oczy-na-mnie-20.jpg",
                        "type" : "full",
                        "name" : "All eyes on me"
                    },
                    {
                        "contentType": "description",
                        "text" : "<div style='font-style: italic;'>" +
                            "<p>I feed on it when someone looks at me when I dance. I do not pay attention to him, but I move with commitment, thanks to the awareness that he is looking at me. His / her mindfulness supports my personal satisfaction with the dance practice at the dance studio and at the party. He does not have to look at all the time. I feel connected to it, even if it is not watching at the moment. My involvement in the composition of movement does not drop. \n" +
                            "I perform even when I am in a crowd at a party and move with other people. Friends, strangers. I do not dance, that someone would admire me or seduce me. But without anyone looking, my satisfaction with dancing diminishes. This is my dancer experience. I would like people at parties not to feel assessed / blocked when someone is watching them, but they have used this situation for themselves. \n" +
                            "It is obviously important who and how he looks, what his goal is. I like it when it looks with curiosity and does not expect anything. Only watching. And if there are 60 people at the party and everyone will only look at me for a second in a minute, it's like I was watched for a full minute? And how do you look at each other in the same second, will I have enough power for another 10 minutes of dancing? \n" +
                            "Is it always about looking at, or is it enough to have a physical presence in one room?\n" +
                            "Do you know them and if they have a conscious intention of support. But if they have one? We want to offer such experience.</p>" +
                            "</div></br>"+
                            "<p style='float: right;'>Text & leading: Monika Kiwak</p></br>"+
                            "<p style='float: right;'>Photo by: Aleksandra Kulus</p></br>"+
                            "<p style='float: right;'>Light: Marianna Serocka</p></br></br>"+
                            "<p>The performance realized in the framework  Creative Scholarships the City of Krakow</p>"+
                            "<p>With support: BWA Contemporary Art Gallery in Katowice</p></br>",
                            "type" : "full"
                    }
                ]
            }, {
                "id" : "das_ist_wiksa",
                "name" : "Das ist wiksa",
                "image" : "images/WIKSA.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "src" : [
                            "images/diw2.jpg",
                            "images/diw3.jpg"
                        ],
                        "type" : "double",
                        "name" : "Das ist wiksa"
                    },
                    {
                        "src" : [
                            "images/diw4.jpg",
                            "images/diw5.jpg"
                        ],
                        "type" : "double",
                        "name" : "Das ist wiksa"
                    },
                    {
                        "src" : "images/diw9.jpg",
                        "type" : "full",
                        "name" : "Das ist wiksa"
                    },
                    {
                        "src" : [
                            "images/diw6.jpg",
                            "images/diw8.jpg"
                        ],
                        "type" : "double",
                        "name" : "Das ist wiksa"
                    }
                ]
            }, {
                "id" : "na_wieczor",
                "name" : "Na wieczór",
                "image" : "images/Bez nazwy-2.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "src" : "images/20.jpg",
                        "type" : "large",
                        "name" : "20"
                    },
                    {
                        "src" : "images/Bez nazwy-2.jpg",
                        "type" : "full",
                        "name" : "Bez nazwy-2"
                    },
                    {
                        "src" : [
                            "images/5(2)-cotakabledziutkajesteś.jpg",
                            "images/102 (2).jpg"
                        ],
                        "type" : "double",
                        "name" : "5(2)-cotakabledziutkajesteś"
                    },
                    {
                        "contentType": "description",
                        "text" : "<div style='font-style: italic;'>" +
                            "<p>Na wieczór, na jesień, na schyłek życia. Wycinanka. Wycinki z życia. Ścinki wspomnień, obserwacji, przekonań, kulek różańca, snów.\n" +
                            "Welcome to Los Jebłos! Oto polska wieś. Niebo i ziemia. Bardziej ziemia. Przyziemność. Czarna i przygniatająca jak całe Los Jebłos – niegdyś wiocha “zabita dechami”, teraz “domeczki z ogródkami”.</p>" +
                            "</div>" +
                            "<p style='float: right;'>Zavka</p>",
                        "type" : "full"
                    }
                ]
            }
        ],
        "about" : {
            "title" : "About",
            "page" : [
                [
                    {
                        "place" : "left",
                        "title" : "CONTACT",
                        "text" : "<p>T +48 515 832 618<br /><a href=\"mailto:marianna.serocka@gmail.com\">marianna.serocka@gmail.com</a><br /></p>" +
                            "<p><b><a style='position: absolute;z-index: 1000' href='http://whatthehell.shopshood.com/'>>> SHOP <<</a></b></p>"
                    },
                    {
                        "place" : "middle",
                        "text" : "<p>  Marianna Serocka, b.1988 in Starogard Gdanski, Poland. Work and lives in Kraków.</p> Since my official comic book debut in 2016 I’ve been working for a wide range of clients including press, advertising, music and fashion industry.</p> <b>EDUCATION</b> </p>2009-2014 Academy of Fine Arts in Krakow, Poland. MA Degree in Painting </p>2012-2013 Aalto University in Helsinki, Finland.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>All images © Marianna Serocka 2019</p>"
                    }
                ],
                [
                  {
                      "place" : "left",
                      "title" : "",
                      "text" : ""
                  },
                  {
                      "place" : "middle",
                      "title" : "EXHIBITIONS",
                      "text" : "</p> 2019 </p> Wszystkie oczy na mnie | performansy choreograficzne, BWA Katowice</p> Głębokie słuchanie, BWA Katowice </p> 2018 </p> Versailles is over, Négyszoba Galéria, Budapest, Hungary </p> <a href=\"http://widna.pl/index.php/ozimina/\">Ozimina,Widna Gallery,Kraków </a></p> </p> 2017 </p> NO PROBLEM,Potencja Gallery,Kraków </p> 2016 </p> Zespół Pieśni i Tańca Henryk, Henryk Gallery, Kraków </p> Das ist Wiksa, Henryk Gallery, Kraków </p> Rysować naturalnie, GSW Chłodna 20, Suwałki</p> <b>AWARDS AND ACHIEVEMENTS</b> </p> 2019 </p> BGSW </p> </p> 2018 </p> Stypendium Twórcze Miasta Krakowa </p> 2017 </p> Rezydencja Wyszechradzka w Budapeszie </p> Sejsmograf Młoda Polska Scena Artystyczna </p> Stypendium Twórcze Miasta Krakowa </p>"
                  }
                ]
            ]
        }
    })
);

export default getGallery;
