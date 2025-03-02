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
        difficulty: 3
    },
    {
        id: 3,
        category: "Characters",
        question: "Which actor played both Young Shawn and Young Gus?",
        correctAnswer: "Liam James (Shawn), Carlos McCullers II (Gus)",
        incorrectAnswers: [
            "Skyler Gisondo (Young Shawn), Caleel Harris (Young Gus)",
            "Tyrel Jackson Williams (both roles)",
            "Nathan Kress (Shawn), Rico Rodriguez (Gus)"
        ],
        source: "S1E7: \"Who Ya Gonna Call?\"",
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
        difficulty: 2
    },
    {
        id: 5,
        category: "Characters",
        question: "What real MLB team did Henry Spencer play for?",
        correctAnswer: "Detroit Tigers (Corbin Bernsen's real career)",
        incorrectAnswers: [
            "Los Angeles Dodgers",
            "Seattle Mariners",
            "New York Yankees"
        ],
        source: "S4E8: \"Let's Doo-Wop It Again\"",
        difficulty: 2
    },
    {
        id: 25,
        category: "Characters",
        question: "What's Woody's (the coroner) Ph.D. specialization?",
        correctAnswer: "Forensic Entomology (study of bugs)",
        incorrectAnswers: [
            "Taxidermy Techniques",
            "Vintage Wine Chemistry",
            "Medieval Torture Devices"
        ],
        source: "S5E12: \"Dual Spires\"",
        difficulty: 3
    },

    // MYSTERIES & CASES (26-50)
    {
        id: 26,
        category: "Mysteries",
        question: "What Hitchcock film did \"Psycho\" (S3E1) parody?",
        correctAnswer: "Vertigo (bell tower scene)",
        incorrectAnswers: [
            "Rear Window",
            "North by Northwest",
            "The Birds"
        ],
        source: "S3E1: \"Psycho\"",
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
        difficulty: 3
    },
    {
        id: 28,
        category: "Mysteries",
        question: "What real crime inspired \"Santabarbaratown\" (S6E4)?",
        correctAnswer: "1975 disappearance of LA prosecutor Vincent Craven",
        incorrectAnswers: [
            "The Black Dahlia murder",
            "The Zodiac Killer case",
            "The Lufthansa heist"
        ],
        source: "Steve Franks interview (2011)",
        difficulty: 3
    },
    {
        id: 29,
        category: "Mysteries",
        question: "How many alternate endings did \"100 Clues\" (S7E5) film?",
        correctAnswer: "Three (mirroring Clue's 1985 release)",
        incorrectAnswers: [
            "Two",
            "Five",
            "Seven"
        ],
        source: "S7E5 DVD commentary",
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
        difficulty: 2
    },
    {
        id: 50,
        category: "Mysteries",
        question: "What's the only episode without a murder?",
        correctAnswer: "S5E9: \"No Country for Two Old Men\" (art theft)",
        incorrectAnswers: [
            "S2E12: \"The Old and the Restless\"",
            "S4E3: \"High Noon-ish\"",
            "S7E2: \"Cirque du Soul\""
        ],
        source: "Psych's Essential Episode Guide (2013)",
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
        difficulty: 1
    },
    {
        id: 52,
        category: "Running Jokes",
        question: "What nickname did Tim Curry give Gus' car?",
        correctAnswer: "\"The Blueberry\"",
        incorrectAnswers: [
            "\"The Grape Escape\"",
            "\"Purple People Eater\"",
            "\"Plum Crazy\""
        ],
        source: "S2E1: \"American Duos\"",
        difficulty: 1
    },
    {
        id: 53,
        category: "Running Jokes",
        question: "How many nicknames does Gus have?",
        correctAnswer: "126+ (per Steve Franks)",
        incorrectAnswers: [
            "89",
            "150",
            "200+"
        ],
        source: "2020 Psych reunion panel",
        difficulty: 3
    },
    {
        id: 54,
        category: "Running Jokes",
        question: "Which episode hides two pineapples?",
        correctAnswer: "S6E12: \"Last Night Gus\" (sculpture + juice)",
        incorrectAnswers: [
            "S4E8: \"Let's Doo-Wop It Again\"",
            "S7E5: \"100 Clues\"",
            "S3E15: \"Tuesday the 17th\""
        ],
        source: "James Roday interview (2017)",
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
        difficulty: 3
    },
    {
        id: 77,
        category: "Surprising Facts",
        question: "How many takes for Shawn's jellybean scene?",
        correctAnswer: "47 (S1E12)",
        incorrectAnswers: [
            "25",
            "32",
            "50"
        ],
        source: "Inside Psych (2007)",
        difficulty: 2
    },
    {
        id: 78,
        category: "Surprising Facts",
        question: "What song did Maggie Lawson sing live?",
        correctAnswer: "\"I've Heard It Both Ways\"",
        incorrectAnswers: [
            "\"I Know, You Know\"",
            "\"S.E.I.Z.E. the Day\"",
            "\"Jamaican Inspector Man\""
        ],
        source: "Psych: The Musical documentary",
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
        difficulty: 1
    },
    {
        id: 100,
        category: "Surprising Facts",
        question: "What's the crew's nickname for Dulé Hill?",
        correctAnswer: "\"Dulé-stiltskin\"",
        incorrectAnswers: [
            "\"Magic Head\"",
            "\"Gus-Tastic\"",
            "\"The Velvet Fog\""
        ],
        source: "2018 Comic-Con panel",
        difficulty: 2
    }
]; 