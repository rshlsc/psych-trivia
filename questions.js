const triviaQuestions = [
    // CHARACTERS (1-25)
    {
        id: 1,
        category: "Characters",
        question: "What childhood trauma created Shawn's fear of clowns?",
        correctAnswer: "A clown birthday party prank gone wrong",
        incorrectAnswers: [
            "A haunted house incident at age 7",
            "Henry forcing him to watch *It*",
            "Falling into a sewer during a circus parade"
        ],
        source: "S3E10: \"Six Feet Under the Sea\"",
        explanation: "Shawn revealed this childhood trauma during a case involving a clown-themed crime scene.",
        difficulty: 2
    },
    {
        id: 2,
        category: "Characters",
        question: "What's Juliet's middle name?",
        correctAnswer: "Anita",
        incorrectAnswers: [
            "Marie",
            "Lynn",
            "Victoria"
        ],
        source: "S8E5: \"1967: A Psych Odyssey\"",
        explanation: "Her full name was revealed as Juliet Anita O'Hara during her job interview flashback.",
        difficulty: 3
    },
    {
        id: 3,
        category: "Characters",
        question: "Which actors played Young Shawn and Young Gus?",
        correctAnswer: "Liam James and Carlos McCullers II",
        incorrectAnswers: [
            "Skyler Gisondo and Caleel Harris",
            "Tyrel Jackson Williams and Isaah Brown",
            "Nathan Kress and Rico Rodriguez"
        ],
        source: "S1E7: \"Who Ya Gonna Call?\"",
        explanation: "Liam James played Young Shawn and Carlos McCullers II played Young Gus in the early seasons.",
        difficulty: 2
    },
    {
        id: 4,
        category: "Characters",
        question: "What's Lassiter's daughter's full name?",
        correctAnswer: "Lily Ewan Lassiter",
        incorrectAnswers: [
            "Marlowe Victoria Lassiter",
            "Lucy Spencer Lassiter",
            "Ruby McNab Lassiter"
        ],
        source: "S8E2: \"S.E.I.Z.E. the Day\"",
        explanation: "Named Lily after Lassiter's grandmother and Ewan after Juliet's brother.",
        difficulty: 2
    },
    {
        id: 5,
        category: "Characters",
        question: "What real MLB team did Henry Spencer play for?",
        correctAnswer: "Detroit Tigers",
        incorrectAnswers: [
            "Los Angeles Dodgers",
            "Seattle Mariners",
            "New York Yankees"
        ],
        source: "S4E8: \"Let's Doo-Wop It Again\"",
        explanation: "Corbin Bernsen, who played Henry, had a real connection to the Detroit Tigers through his career.",
        difficulty: 2
    },
    {
        id: 25,
        category: "Characters",
        question: "What's Woody's Ph.D. specialization?",
        correctAnswer: "Forensic Entomology",
        incorrectAnswers: [
            "Taxidermy Techniques",
            "Vintage Wine Chemistry",
            "Medieval Torture Devices"
        ],
        source: "S5E12: \"Dual Spires\"",
        explanation: "Woody's expertise in the study of bugs has come in handy for determining time of death in several cases.",
        difficulty: 3
    },

    // MYSTERIES & CASES (26-50)
    {
        id: 26,
        category: "Mysteries",
        question: "What Hitchcock film did \"Psycho\" (S3E1) parody?",
        correctAnswer: "Vertigo",
        incorrectAnswers: [
            "Rear Window",
            "North by Northwest",
            "The Birds"
        ],
        source: "S3E1: \"Psycho\"",
        explanation: "The episode featured a bell tower scene that directly referenced Hitchcock's Vertigo.",
        difficulty: 1
    },
    {
        id: 27,
        category: "Mysteries",
        question: "Which episode remade an earlier season's plot?",
        correctAnswer: "S8E6: \"Remake A.K.A. Cloudy... With Improvement\"",
        incorrectAnswers: [
            "S5E10: \"Extradition: British Columbia\"",
            "S3E16: \"An Evening with Mr. Yang\"",
            "S6E16: \"Santabarbaratown 2\""
        ],
        source: "Rebooting S1E12",
        explanation: "This episode was a deliberate remake of the Season 1 episode \"Cloudy... With a Chance of Murder.\"",
        difficulty: 3
    },
    {
        id: 28,
        category: "Mysteries",
        question: "What real crime inspired \"Santabarbaratown\"?",
        correctAnswer: "1975 disappearance of LA prosecutor Vincent Craven",
        incorrectAnswers: [
            "The Black Dahlia murder",
            "The Zodiac Killer case",
            "The Lufthansa heist"
        ],
        source: "Steve Franks interview (2011)",
        explanation: "Creator Steve Franks revealed this inspiration in a 2011 interview about the show's real-world influences.",
        difficulty: 3
    },
    {
        id: 29,
        category: "Mysteries",
        question: "How many alternate endings did \"100 Clues\" film?",
        correctAnswer: "Three",
        incorrectAnswers: [
            "Two",
            "Five",
            "Seven"
        ],
        source: "S7E5 DVD commentary",
        explanation: "Mirroring the 1985 film Clue, which also had multiple endings shown in different theaters.",
        difficulty: 2
    },
    {
        id: 30,
        category: "Mysteries",
        question: "Which episode features a Twin Peaks dream sequence?",
        correctAnswer: "S8E9: \"A Nightmare on State Street\"",
        incorrectAnswers: [
            "S4E5: \"Shawn Gets the Yips\"",
            "S7E15: \"Nip and Suck It\"",
            "S2E13: \"Black and Tan: A Crime of Fashion\""
        ],
        source: "Maggie Lawson tweet (2014)",
        explanation: "This episode included several dream sequences, including one that paid homage to David Lynch's Twin Peaks.",
        difficulty: 2
    },
    {
        id: 50,
        category: "Mysteries",
        question: "What's the only episode without a murder?",
        correctAnswer: "S5E9: \"No Country for Two Old Men\"",
        incorrectAnswers: [
            "S2E12: \"The Old and the Restless\"",
            "S4E3: \"High Noon-ish\"",
            "S7E2: \"Cirque du Soul\""
        ],
        source: "Psych's Essential Episode Guide (2013)",
        explanation: "This episode focused on an art theft rather than the show's usual murder investigations.",
        difficulty: 2
    },

    // RUNNING JOKES (51-75)
    {
        id: 51,
        category: "Running Jokes",
        question: "Name three pineapple sightings from Seasons 1-3.",
        correctAnswer: "Pilot fruit bowl, S2E15 lamp, S2E1 pool float",
        incorrectAnswers: [
            "S1E4: Hospital gift basket",
            "S3E7: Police evidence locker",
            "S2E8: Gus's desk ornament"
        ],
        source: "Fan-compiled \"Pineapple Tracker\"",
        explanation: "The pineapple became the show's signature Easter egg, appearing in nearly every episode in some form.",
        difficulty: 1
    },
    {
        id: 52,
        category: "Running Jokes",
        question: "What nickname did Tim Curry give Gus' car?",
        correctAnswer: "The Blueberry",
        incorrectAnswers: [
            "The Grape Escape",
            "Purple People Eater",
            "Plum Crazy"
        ],
        source: "S2E1: \"American Duos\"",
        explanation: "Tim Curry's character named the blue Echo, and the nickname stuck for the rest of the series.",
        difficulty: 1
    },
    {
        id: 53,
        category: "Running Jokes",
        question: "How many nicknames does Gus have?",
        correctAnswer: "126+",
        incorrectAnswers: [
            "89",
            "150",
            "200+"
        ],
        source: "2020 Psych reunion panel",
        explanation: "Steve Franks confirmed this number during the 2020 reunion, though fans continue to count new ones from the movies.",
        difficulty: 3
    },
    {
        id: 54,
        category: "Running Jokes",
        question: "Which episode hides two pineapples?",
        correctAnswer: "S6E12: \"Last Night Gus\"",
        incorrectAnswers: [
            "S4E8: \"Let's Doo-Wop It Again\"",
            "S7E5: \"100 Clues\"",
            "S3E15: \"Tuesday the 17th\""
        ],
        source: "James Roday interview (2017)",
        explanation: "This episode featured both a pineapple sculpture and pineapple juice, making it the first double pineapple appearance.",
        difficulty: 2
    },
    {
        id: 55,
        category: "Running Jokes",
        question: "What's the Blueberry's license plate?",
        correctAnswer: "6SNW739",
        incorrectAnswers: [
            "4PPL3S4U",
            "PSYCH1C",
            "BLUBRY1"
        ],
        source: "S2E1 freeze frame",
        explanation: "Eagle-eyed fans spotted this detail in a freeze frame of the iconic blue Echo.",
        difficulty: 3
    },
    {
        id: 75,
        category: "Running Jokes",
        question: "Which cast member ad-libbed \"suck it\"?",
        correctAnswer: "James Roday Rodriguez",
        incorrectAnswers: [
            "Dulé Hill",
            "Kirsten Nelson",
            "Tim Omundson"
        ],
        source: "S2E1 blooper reel",
        explanation: "What started as an ad-lib became one of the show's most iconic catchphrases, complete with its own theme song.",
        difficulty: 2
    },

    // SURPRISING FACTS (76-100)
    {
        id: 76,
        category: "Surprising Facts",
        question: "Which West Wing star nearly played Henry?",
        correctAnswer: "Richard Schiff",
        incorrectAnswers: [
            "Martin Sheen",
            "Rob Lowe",
            "Bradley Whitford"
        ],
        source: "Corbin Bernsen podcast (2019)",
        explanation: "Bernsen revealed that Schiff was seriously considered for the role before he was cast.",
        difficulty: 3
    },
    {
        id: 77,
        category: "Surprising Facts",
        question: "How many takes for Shawn's jellybean scene?",
        correctAnswer: "47",
        incorrectAnswers: [
            "25",
            "32",
            "50"
        ],
        source: "Inside Psych (2007)",
        explanation: "This S1E12 scene required 47 takes because James Roday kept laughing during the jellybean counting.",
        difficulty: 2
    },
    {
        id: 78,
        category: "Surprising Facts",
        question: "What song did Maggie Lawson sing live?",
        correctAnswer: "I've Heard It Both Ways",
        incorrectAnswers: [
            "I Know, You Know",
            "S.E.I.Z.E. the Day",
            "Jamaican Inspector Man"
        ],
        source: "Psych: The Musical documentary",
        explanation: "Unlike most musical numbers which were pre-recorded, Lawson performed this song completely live on set.",
        difficulty: 2
    },
    {
        id: 79,
        category: "Surprising Facts",
        question: "Which prop sold for $8,250 in 2017?",
        correctAnswer: "Blueberry's steering wheel",
        incorrectAnswers: [
            "Shawn's Psych diploma",
            "Lassiter's signature revolver",
            "Pineapple from S1E1"
        ],
        source: "Julien's Auctions archive",
        explanation: "The iconic steering wheel from Gus's Toyota Echo became one of the most valuable Psych props at auction.",
        difficulty: 3
    },
    {
        id: 80,
        category: "Surprising Facts",
        question: "What's Psych's fake Santa Barbara address?",
        correctAnswer: "1702 Baker St.",
        incorrectAnswers: [
            "221B Baker St.",
            "42 Wallaby Way",
            "123 Psych Lane"
        ],
        source: "S1E1: \"Pilot\"",
        explanation: "A nod to Sherlock Holmes' famous address (221B Baker St), modified to fit the Psych universe.",
        difficulty: 1
    },
    {
        id: 100,
        category: "Surprising Facts",
        question: "What's the crew's nickname for Dulé Hill?",
        correctAnswer: "Dulé-stiltskin",
        incorrectAnswers: [
            "Magic Head",
            "Gus-Tastic",
            "The Velvet Fog"
        ],
        source: "2018 Comic-Con panel",
        explanation: "This playful nickname was revealed by the cast during their 2018 Comic-Con appearance.",
        difficulty: 2
    }
]; 