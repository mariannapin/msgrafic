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
                            "<p style='float: right;'>Comic book</p>" +
                            "<br />" +
                            "<p style='float: right;'>Written and illustrated by: Marianna Serocka</p>" +
                            "<br />" +
                            "<p style='float: right;'>Published by: Centrala Ltd.</p>" +
                            "<br />" +
                            "<br />" +
                            "<br />" +
                            "<p style='text-align: center;'><b><a target='_blank' rel='noopener noreferrer' href='http://centrala.org.uk/pl/sklep/disco-cry/'>DISCO CRY</a></b></p>" +
                            "<br />" +
                            "<p style='text-align: center;'><b><a target='_blank' rel='noopener noreferrer' href='https://artkomiks.pl/autor/marianna-serocka/'>ART KOMIKS</a></b></p>" +
                            "<br />" +
                            "<p style='text-align: center;'><b><a target='_blank' rel='noopener noreferrer' href='https://www.polskieradio.pl/10/482/Artykul/1682219,Disco-Cry-czyli-apetyt-na-wieczne-imprezy'>INTERVIEW</a></b></p>",
                        "type" : "full",
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
            },
            {
                "id" : "ph",
                "name" : "Ph",
                "image" : "images/Ph_main.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "src" : "images/Ph1.jpg",
                        "type" : "full",
                        "name" : "Ph"
                    },
                    {
                        "src" : "images/Ph2.jpg",
                        "type" : "full",
                        "name" : "Ph"
                    },
                    {
                        "src" : "images/Ph3.jpg",
                        "type" : "full",
                        "name" : "Ph"
                    },
                    {
                        "src" : "images/Ph4.jpg",
                        "type" : "full",
                        "name" : "Ph"
                    },
                    {
                        "src" : "images/Ph5.jpg",
                        "type" : "full",
                        "name" : "Ph"
                    },
                    {
                        "src" : "images/Ph6.jpg",
                        "type" : "full",
                        "name" : "Ph"
                    },
                    {
                        "src" : "images/Ph7.jpg",
                        "type" : "full",
                        "name" : "Ph"
                    },
                    {
                        "contentType": "description",
                        "text" : "<div>" +
                            "<p>Marianna Serocka works within the visual arts in a wide range of media and techniques. For several years her leading photo blog became her paradoxically exhibitionist-intimate diary. Ubiquitous, a selfie, becomes disturbing in her self-portrait in which the completely obscured face looks at the viewer. Voyeuristic participation stops at the surface of the mask." +
                            "<br/><br /> Serocka’s  series of photographs is a very intimate, although sometimes deeply ironic narrative in which the story telling is the commonly accessible language. Marianna eagerly reaches for pop-cultural patterns giving them, in a perverse way, an individual and intimate character. These patterns are marked by the stigma of an ambiguous melancholic aura. </p>" +
                            "</div>" +
                            "<br /><p style='float: right;'>M.Zawada</p><br /><br /><br />"+
                            "<p style='text-align: center;'><a style=\"position: absolute;z-index: 1000\" href=\"http://ph46n.blogspot.com/\">See more...</a></p><br /><br /><br />",
                        "type" : "full"
                    }
                ]
            },
            {
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
                    },
                    {
                        "contentType": "description",
                        "text" : "<p>The exhibition was created as inspiration on the content of the \"Disco Cry\" art book</p>" +
                            "<p>Das is wiksa, solo exhibition</p>" +
                            "<p>18.06 - 2.07.2016 Henryk Gallery, Kraków</p>"+
                            "<p>Curator: Aleksander Celusta</p>"+
                            "<p>Photos, Studio FilmLove</p>",
                        "type" : "full"
                    }
                ]
            }, {
                "id" : "na_wieczor",
                "name" : "Kuch luftowy",
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
                            "<p style='float: right;'>Zavka</p><br /><br /><br />" +
                            "</br>" +
                            "<p>Projekt, ilustracje i skład książki „Kuch Luftowy” :  Marianna Serocka</p>" +
                            "</br>" +
                            "<p>Książka zrealizowana dzięki Stypendium Twórczemu Miasta Krakowa</p>",
                        "type" : "full"
                    }
                ]
            },
            {
                "id" : "lobster_killer",
                "name" : "Lobster killer",
                "image" : "images/lobsterkiller.jpeg",
                "className" : "link--white",
                "items" : [
                    {
                        "contentType": "description",
                        "text" : "<p>Coming soon</p>",
                        "type" : "full"
                    }
                ]
            },
            {
                "id" : "asfalt",
                "name" : "Asfalt Records",
                "image" : "images/asfalt_main.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "src" : "images/asfalt1.jpg",
                        "type" : "large",
                        "name" : "Asfalt"
                    }, {
                        "src" : "images/asfalt2.jpg",
                        "type" : "large",
                        "name" : "Asfalt"
                    }, {
                        "src" : "images/asfalt3.jpg",
                        "type" : "large",
                        "name" : "Asfalt"
                    }, {
                        "src" : "images/asfalt4.jpg",
                        "type" : "large",
                        "name" : "Asfalt"
                    },
                    {
                        "contentType": "description",
                        "text" : "<p>Layout and illustrations for Asfalt Shop</p>",
                        "type" : "full"
                    }
                ]
            },
            {
                "id" : "dramat",
                "name" : "3 witches",
                "image" : "images/dramat_main.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "contentType": "description",
                        "text" : "<p>Spot and photography promoting fashion brand Dramat<br/>" +
                            "Written and produced by: Dramat <br/>" +
                            "Video directed by: Marianna Serocka and Dramat<br/>" +
                            "DOP,  editing and effects by: Marianna Serocka</p>",
                        "type" : "full"
                    }
                ]
            },{
                "id" : "Undine",
                "name" : "Undine",
                "image" : "images/undine_main.jpg",
                "className" : "link--white",
                "items" : [
                    {
                        "src" : "images/Un1.jpg",
                        "type" : "full",
                        "name" : "Undine"
                    },
                    {
                        "src" : "images/Un2.jpg",
                        "type" : "full",
                        "name" : "Undine"
                    },
                    {
                        "contentType": "description",
                        "text" : "<p>Videos and photos promoting music duo: Undine<br/>"+
                        "Written and produced by: Undine<br/>" +
                        "Video directed by: Pat Dudek and Marianna Serocka <br/>" +
                        "DOP by : Marianna Serocka<br/>" +
                        "Editor: Agata Urban<br/>" +
                        "Color correction + effects: Nikodem Witkowski",
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
                      "text" : "<div><p></p>" +
                          "2019 <p></p> Wszystkie oczy na mnie | performansy choreograficzne, BWA Katowice<p></p> Głębokie słuchanie, BWA Katowice<p></p>" +
                          "2018 <p></p> Interes, Potencja, Warsaw Gallery Weekend, Warszawa <p></p> <p></p> Versailles is over, Négyszoba Galéria, Budapest, Hungary <p></p> <a href=\"http://widna.pl/index.php/ozimina/\">Ozimina, Widna Gallery, Kraków </a><p></p><p></p>" +
                          "2017 <p></p> NO PROBLEM, Potencja Gallery, Kraków<p></p> 2016 <p></p> Zadyma - Behind the Smoke - interdisciplinary and international exhibition under the patronage of JM Rector of the Academy of Fine Arts, TYTANO Dolne Młyny Foundation and Initiative, Kraków<p></p> Zespół Pieśni i Tańca Henryk, Henryk Gallery, Kraków <p></p> Das ist Wiksa, Henryk Gallery, Kraków <p></p> Rysować naturalnie, GSW Chłodna 20, Suwałki <p></p> Drawing exhibition in Coma Festival in Brno <p></p> Art Book fair in Stokholm  <p></p> Women International Comics Art Festival in Brussels<p></p>" +
                          "2015 <p></p> Focus on fashion / Pokonkursowa wystawa fotografii mody / International Fashion Photography Exhibition, Muzeum Inżynierii Miejskiej, Kraków<p></p>" +
                          "2014 <p></p> The Best Diploma of 2014” exhibition in Palace of Art Krakow <p></p> International comics Culture Festival LIGATURA , Poznań<p></p><p></p>" +
                          "2013 <p></p> Lux Helsinki - Lantern Park, The lanterns embrace the wintry park as the sun goes down, with the park’s own lighting adding to the effect, Helsinki<p></p>" +
                          "2012 <p></p> SIOSTRO, BASEN, 42 FAMA, The International Artist Campus, Świnoujście<p></p>" +
                          "<b>UPCOMING</b><p>" +
                          "2020</p> Świetlica Barchnowy we współpracy z Gminny Ośrodek Kultury i Sportu Grodzisko Owidz<p>" +
                          "2021</p> Muzeum Ziemi Kociewskiej w Starogardzie Gdańskim <p></p> Starogardzkie Centrum Kultury<p></p><p>" +
                          "2022</p> Fabryka Sztuk, Tczew <p></p>" +
                          "<b>AWARDS AND ACHIEVEMENTS</b><p></p>" +
                          "2018 <p></p> Creative scholarship of the city of Krakow<p></p>" +
                          "2017 <p></p> Sejsmograf Młoda Polska Scena Artystyczna (17.06 - 19.06.2016)<br> A review of the Young Małopolska Art Scene organized by the Contemporary Art Gallery Bunkier Sztuki in Krakow in cooperation with BWA Sokół in Nowy Sącz and BWA in Tarnów\n" +
                          "<p></p> Creative scholarship of the city of Krakow <p></p>" +
                          "<b>RESIDENCIES</b><p></p> <p></p>" +
                          "2019 <p></p> Residency program at Baltic Gallery of Contemporary Art (1.10 - 30.10.2019)<p></p><p></p>" +
                          "2017 <p></p> Literary residency at Petőfi Irodalmi Múzeum in Budapest (1.09 - 30.10.2017) <p></p> </div>",
                  }
                ]
            ]
        }
    })
);

export default getGallery;
