const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'dean winchester': {
        'name': 'Dean Winchester',
        'name meaning': [
            'Leader',
            'Valley'
        ],
        'seasons': [
            'Season 1',
            'Season 2',
            'Season 3',
            'Season 4',
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11',
            'Season 12',
            'Season 13',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Human',
            'formerly': 'Ghost',
            'cured': [
                'Knight of Hell',
                'Vampire',
                'Jefferson Starship'
            ]
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'general': [
                'Michael Sword',
                'Righteous Man',
                'Soldier of Heaven',
                'Dean Smith',
                'Impala67',
                'Dean Campbell',
                'Clint Eastwood'
            ],
            'crowley': [
                'Squirrel',
                'Not Moose',
                'Jerk'
            ],
            'claire': [
                'Hasselhoff',
                'Pretty Old'
            ],
            'david': 'Buffy',
            'gabriel': 'Dean-O',
            'sonny': 'Dee-Dawg',
            'benny': 'Chief',
            'metatron': 'Humanity',
            'himself': 'Batman',
            'elkins': 'Sheriff',
            'sam': 'Jerk',
            'neil': "Michael's monkey suit",
            'billie': "Messenger of God's Destruction",
            'god': 'The ultimate killer'
        },
        'occupation': {
            'primary': [
                'Hunter',
                'Man of Letters',
                'Member of Team Free Will',
                'True Vessel of Michael'
            ],
            'formerly': [
                "Hell's Torturer",
                "Alternate Michael's cage",
                'Soldier of Heaven',
                'Bearer of the Mark of Cain',
                'Knight of Hell',
                'Member of Team Save the World',
                'Construction Worker'
            ],
            'briefly': [
                'Director of Sales and Marketing at Sandover Bridge & Iron Inc',
                'Sheriff',
                'Death'
            ]
        },
        'affiliation': [
            'American Men of Letters',
            'Winchester Family'
        ],
        'family': {
            'paternal grandfather': 'Henry Winchester',
            'paternal grandmother': 'Millie Winchester',
            'maternal grandfather': 'Samuel Campbell',
            'maternal grandmother': 'Deanna Campbell',
            'father': 'John Winchester',
            'mother': 'Mary Winchester',
            'younger brother': 'Sam Winchester',
            'younger half-brother': 'Adam Milligan',
            'surrogate son': 'Jack Kline',
            'surrogate father': 'Bobby Singer',
            'nephew': 'Dean Winchester II'
        },
        'portrayed by': {
            'main': 'Jensen Ackles',
            'younger': [
                'Brock Kelly',
                'Dylan Everett'
            ]
        },
        'deaths': {
            'in my time of dying': 'By Reaper Tessa',
            'mystery spot': [
                'Shot by Mr. Carpiak at the Mystery Spot',
                'Ran over by a car',
                'Crushed by a falling piano',
                'Choked on a sausage',
                'Slipped in the shower',
                'Poisoned by a taco',
                'Electrocuted by his razor',
                'Accidentally killed with an axe by Sam',
                'Mauled by a golden retriever',
                'Shot by a robber',
                'Almost 100 other unknown ways'
            ],
            'no rest for the wicked': "Mauled by Lillith's hellhounds and dragged to hell",
            'dark side of the moon': 'Killed by Hunters Roy and Walt',
            'appointment in samarra': "Died for seven minutes to contact Death",
            'do you believe in miracles?': 'Killed by Metatron with an angel blade to the heart',
            'red meat': 'Died by self-induced drug overdose',
            'first blood': 'Heart temporarily stopped by Reaper Billie',
            'advanced thanatology': 'Self-injected with a drug to temporarily die',
            'carry on': 'Pushed by a vampire onto rebar sticking out of a wooden post'
        }

    },
    'sam winchester': {
        'name': 'Sam Winchester',
        'name meaning': [
            'name of God',
            'God has heard'
        ],
        'seasons': [
            'Season 1',
            'Season 2',
            'Season 3',
            'Season 4',
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11',
            'Season 12',
            'Season 13',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Human',
            'formerly': [
                'Special Children',
                'Ghost'
            ],
            'cured': 'Rabid'
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'general': [
                'Sammy',
                'Boy With The Demon Blood',
                'Sam Wesson',
                'Keith',
                'Sam Campbell'
            ],
            'crowley': [
                'Moose',
                'Winchester Jumbo Size',
                'Samantha'
            ],
            'dean': [
                'Bitch',
                'Walker',
                "Rowena's protégé"
            ],
            'kipling': [
                'Beyoncé',
                'Barbarian'
            ],
            'angels': 'Abomination',
            'gordon': 'The Antichrist',
            'rowena': 'Giant',
            'lucifer': 'Kiddo',
            'billie': "Messenger of God's destruction"
        },
        'occupation': {
            'primary': [
                'Hunter',
                'Man of Letters',
                'Member of Team Free Will',
                'True Vessel of Lucifer'
            ],
            'formerly': [
                'Handyman',
                'Member of Team Save the World',
                'Law Student',
                'Leader of Mark of Cain removal team',
                'Member of American hunters squad'
            ],
            'briefly': [
                'Tech Support Associate at Sandover Bridge & Iron Inc',
                'True Vessel of Lucifer'
            ]
        },
        'affiliation': [
            'American Men of Letters',
            'Winchester Family'
        ],
        'family': {
            'paternal grandfather': 'Henry Winchester',
            'paternal grandmother': 'Millie Winchester',
            'maternal grandfather': 'Samuel Campbell',
            'maternal grandmother': 'Deanna Campbell',
            'father': 'John Winchester',
            'mother': 'Mary Winchester',
            'older brother': 'Dean Winchester',
            'younger half-brother': 'Adam Milligan',
            'surrogate son': 'Jack Kline',
            'surrogate father': 'Bobby Singer',
            'ex-wife': 'Becky Rosen',
            'wife': 'Unnamed Wife',
            'son': 'Dean Winchester II'
        },
        'portrayed by': {
            'main': 'Jared Padalecki',
            'younger': 'Colin Ford'
        },
        'deaths': {
            'all hell breaks loose - part 1': 'Stabbed in the back by Jake Talley',
            'wishful thinking': 'Struck by lightning',
            'sympathy for the devil': 'Lungs briefly taken away by angel Zachariah',
            'the song remains the same': 'Impaled with a pipe by fallen angel Anna Milton',
            'dark side of the moon': 'Killed by Hunters Roy and Walt',
            'first blood': 'Heart temporarily stopped by Reaper Billie',
            'beat the devil': 'Throat ripped out by Apocalypse World Vampires',
            'carry on': 'Dies due to natural causes'
        }

    },
    'castiel': {
        'name': 'Castiel',
        'name meaning': [
            'My cover is God',
            'Shield of God'
        ],
        'seasons': [
            'Season 4',
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11',
            'Season 12',
            'Season 13',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Seraph',
            'formerly': 'Angel',
            'temporarily': 'Human'
        },
        'status': 'Alive',
        'alias': {
            'general': [
                'Cas',
                'Emmanuel',
                'Steve',
                'God',
                'Agent Beyoncé',
                'James Novak',
                'Dr. Novak',
                'Charles'
            ],
            'dean': [
                'Chuckles',
                'Huggy Bear',
                'Sunshine',
                'E.T.',
                'Happy Meal',
                'Baby in a trenchcoat'
            ],
            'meg': [
                'Clarence',
                'Unicorn'
            ],
            'crowley': [
                'Cassie',
                'Feathers',
                'Angel of Thursday'
            ],
            'angels': [
                'Commander',
                'Angel of Thursday',
                "God's Chosen"
            ],
            'rowena': [
                'Feathers',
                'Handsome Angel'
            ],
            'lucifer': [
                "Winchester's purse dog",
                'Cassandra'
            ],
            'balthazar': 'Cassie',
            'pamela': 'Feathers',
            'god': 'Angel of Thursday',
            'metatron': 'Asstiel',
            'mick davies': 'Attack Dog',
            'cecily': 'Captain Sexy',
            'demons': "God's Chosen"
        },
        'occupation': {
            'primary': [
                'Fallen Angel',
                'Member of Team Free Will',
                'Adviser to Jack Kline'
            ],
            'formerly': [
                'Commander',
                'Member of Mark of Cain removal team',
                'Gas Station Clerk (as a human)',
                "Lucifer's Vessel"
            ],
            'briefly': [
                'Ruler of Heaven',
                'Leviathan Vessel'
            ]
        },
        'affiliation': [
            'Host of Heaven (on-off)',
            'Castiel Loyalists',
            'Winchester Family',
            'God (formerly)'
        ],
        'family': {
            'father': 'God',
            'siblings': 'Angels',
            'older brothers': 'Archangels',
            'aunt': 'The Darkness',
            'adoptive Son': 'Jack Kline',
            'vessel': 'Jimmy Novak'
        },
        'portrayed by': {
            'main': 'Misha Collins'
        },
        'deaths': {
            'lucifer rising': 'Exploded at the molecular level by archangel Raphael',
            'swan song': 'Exploded at the molecular level by Lucifer',
            'hello, cruel world': 'Imploded from the effects of acting as a vessel to all of the Leviathans',
            "i'm no angel": 'Tortured and stabbed with an angel blade by April Kelly',
            'all along the watchtower': 'Stabbed through the back with an angel blade by Lucifer',
            'despair': 'Absorbed into the Empty'
        }

    },
    'john winchester': {
        'name': 'John Winchester',
        'name meaning': [
            'Graced by God',
            'God is Gracious'
        ],
        'seasons': [
            'Season 1',
            'Season 2',
            'Season 3',
            'Season 4',
            'Season 5',
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11',
            'Season 14'
        ],
        'species': {
            'currently': 'Human',
            'briefly': 'Ghost'
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'meg': [
                'Johnny',
                'John Boy'
            ],
            'sam': 'Sir',
            'dean': 'Sir'
        },
        'occupation': {
            'primary': 'Hunter',
            'formerly': 'Mechanic',
            'retired': 'Marine',
            'termporarily': 'Vessel'
        },
        'affiliation': [
            'United States Marine Corps (formerly)',
            'Winchester Family'
        ],
        'family': {
            'father': 'Henry Winchester',
            'mother': 'Millie Winchester',
            'father-in-law': 'Samuel Campbell',
            'mother-in-law': 'Deanna Campbell',
            'ex-fiance': 'Betty',
            'wife': 'Mary Winchester',
            'sons': [
                'Dean Winchester', 
                'Sam Winchester',
                'Adam Milligan'
            ],
            'grandson': 'Dean Winchester II'
        },
        'portrayed by': {
            'main': 'Jeffrey Dean Morgan',
            'younger': 'Matt Cohen'
        },
        'deaths': {
            'in the beginning': 'Neck snapped by demon Azazel',
            'in my time of dying': "Shot by demon Azazel"
        }

    },
    'mary winchester': {
        'name': 'Mary Winchester',
        'name meaning': [
            'Bitter',
            'Beloved'
        ],
        'seasons': [
            'Season 1',
            'Season 2',
            'Season 4',
            'Season 5',
            'Season 6',
            'Season 11',
            'Season 12',
            'Season 13',
            'Season 14'
        ],
        'species': {
            'currently': 'Human',
            'briefly': 'Ghost'
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'lucifer': [
                'Mama',
                'Mama Winchester'
            ],
            'crowley': 'Mother Winchester',
        },
        'occupation': {
            'primary': [
                'Hunter', 
                'Co-leader of a resistance movement'
            ],
            'formerly': 'Housewife'
        },
        'affiliation': [
            'Campbell Family',
            'Winchester Family',
            'American Men of Letters',
            'British Men of Letters'
        ],
        'family': {
            'father-in-law': 'Henry Winchester',
            'mother-in-law': 'Millie Winchester',
            'father': 'Samuel Campbell',
            'mother': 'Deanna Campbell',
            'ex-fiance': 'Betty',
            'husband': 'John Winchester',
            'sons': [
                'Dean Winchester', 
                'Sam Winchester'
            ],
            'stepson': 'Adam Milligan',
            'surrogate son': 'Jack Kline',
            'grandson': 'Dean Winchester II'
        },
        'portrayed by': {
            'main': 'Samantha Smith',
            'younger': 'Amy Gumenick'
        },
        'deaths': {
            'pilot': 'Pinned to the ceiling by demon Azazel and burned to ash',
            'absence': "Accidentally pulverized by Jack Kline"
        }

    },
    'bobby singer': {
        'name': 'Bobby Singer',
        'name meaning': [
            'Bright fame',
            'Shining Glory'
        ],
        'seasons': [
            'Season 1',
            'Season 2',
            'Season 3',
            'Season 4',
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11',
            'Season 15'
        ],
        'species': {
            'currently': 'Human',
            'briefly': 'Vengeful Spirit'
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'general': [
                'Bob',
                'Willis',
                'Castle'
            ]
        },
        'occupation': {
            'primary': 'Hunter'
        },
        'affiliation': [
            'Singer Family',
            'Winchester Family'
        ],
        'family': {
            'father': 'Ed Singer',
            'mother': 'Unnamed Mother',
            'wife': 'Karen Singer',
            'surrogate sons': [
                'Dean Winchester', 
                'Sam Winchester'
            ]
        },
        'portrayed by': {
            'main': 'Jim Beaver'
        },
        'deaths': {
            'swan song': 'Neck telekinetically snapped by Lucifer',
            "death's door": 'Shot in the head by Dick Roman',
            'survival of the fittest': 'Ghost laid to rest by Dean Winchester'
        }

    },
    'ellen harvelle': {
        'name': 'Ellen Harvelle',
        'name meaning': [
            'Torch',
            'Light'
        ],
        'seasons': [
            'Season 2',
            'Season 5',
            'Season 6'
        ],
        'species': {
            'currently': 'Human'
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'occupation': {
            'primary': [
                'Hunter',
                "Harvelle's Roadhouse owner",
                'Bartender'
            ]
        },
        'affiliation': [
            'Bobby Singer',
            'Winchester Family'
        ],
        'family': {
            'husband': 'William Anthony Harvelle',
            'daughter': 'Jo Harvelle'
        },
        'portrayed by': {
            'main': 'Samantha Ferris'
        },
        'deaths': {
            'abandon all hope...': 'Sacrificed herself using a detonator, killing both herself and some Hellhounds'
        }
    },
    'jo harvelle': {
        'name': 'Ellen Harvelle',
        'name meaning': 'God is gracious',
        'seasons': [
            'Season 2',
            'Season 5',
            'Season 7'
        ],
        'species': {
            'currently': 'Human',
            'briefly': 'Vengeful Spirit'
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'general': [
                'Joanna Beth',
                'Joanna'
            ]
        },
        'occupation': {
            'primary': [
                'Hunter',
                "Harvelle's Roadhouse Waitress"
            ]
        },
        'affiliation': [
            'Bobby Singer',
            'Winchester Family'
        ],
        'family': {
            'father': 'William Anthony Harvelle',
            'mother': 'Ellen Harvelle'
        },
        'portrayed by': {
            'main': 'Alona Tal'
        },
        'deaths': {
            'abandon all hope...': 'Mauled by Hellhounds'
        }
    },
    'crowley': {
        'name': 'Crowley',
        'name meaning': 'Descendant of the hardy warrior',
        'seasons': [
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11',
            'Season 12'
        ],
        'species': {
            'currently': 'Crossroad Demon',
            'formerly': 'Human'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'The King',
                'Father Crowley'
            ],
            'dean': [
                'Limey',
                'The Man with all the mojo',
                'Captain Evil',
                'The King of rotten',
                'Full-metal douche',
                'Bitch',
                'Boris'
            ],
            'demons': [
                'Lucky the Leprechaun',
                'Your majesty'
            ],
            'himself': [
                'The New Devil',
                'Agent Jay-Z',
                'Uncle Crowley'
            ],
            'lucifer': [
                'Doggie',
                'Puppy',
                'Spanky'
            ],
            'bobby singer': 'King of the dirtbags',
            'abaddon': 'The salesman',
            'castiel': 'Agent Zappa',
            'ramiel': 'Kid',
            'kipling': 'Ponce-y son of a bitch'
        },
        'occupation': {
            'primary': 'Demonic Deal-Maker',
            'formerly': [
                'King of Hell',
                'King of the Crossroads',
                "Lilith's Second-in-Command",
                'Tailor (as a human)',
                'Member of Team Save the World'
            ]
        },
        'affiliation': [
            'Hell',
            'Lilith',
            'Winchester Family (on-off)'
        ],
        'family': {
            'father': 'Unnamed Father',
            'mother': 'Rowena MacLeod',
            'son': 'Gavin MacLeod'
        },
        'portrayed by': {
            'main': 'Mark Sheppard'
        },
        'deaths': {
            'apocalypse world': 'Killed himself with an angel blade to seal Lucifer in an alternate reality'
        }
    },
    'lucifer': {
        'name': 'Lucifer',
        'name meaning': [
            'Shining One',
            'Light-bearer'
        ],
        'seasons': [
            'Season 4',
            'Season 5',
            'Season 7',
            'Season 11',
            'Season 12',
            'Season 13',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Archangel'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'The Devil',
                'Satan',
                'Samael',
                'Serpent',
                'Deceiver',
                'Light Bringer',
                'Fallen One',
                'Dark Lord',
                'Angel of Light',
                'Apollyon',
                'Beelzebub',
                'The Dark Angel',
                'Lord of Flies',
                'Father of Lies',
                'King of Hell',
                'Ruler of Hell',
                'King Snake',
                'Old Scratch'
            ],
            'himself': [
                'Luci',
                'Prince of Darkness',
                'King of Lies',
                'The new Favorite',
                'Dark Master'
            ],
            'crowley': [
                'Dog',
                'Puppy',
                'Marmaduke',
                'Morning Star',
                'Abomination'
            ],
            'jervis': [
                'Prince of Darkness',
                'Liege'
            ],
            'gabriel': [
                'Luci',
                'Great Big Bag of Dicks'
            ],
            'asmodeus': [
                'Lu',
                'Lord Lucifer'
            ],
            'balthazar': 'Luci',
            'michael': 'Little Brother',
            'rowena': 'Dark Prince',
            'castiel': 'Assbutt',
            'angels': 'The Adversary',
            'alternate michael': 'Lu',
            'anael': 'Lord Lucifer',
            'drexel': 'Lord Lucifer',
            'jofiel': "Heaven's Most Hated",
            'abraxas': 'The Big Man'
        },
        'occupation': {
            'primary': [
                'Fallen Archangel', 
                'Creator of Demons'
            ],
            'formerly': [
                'Ruler of Heaven',
                'King of Hell',
                "Bearer of the Mark of Cain",
                'Member of Team Save the World'
            ],
            'briefly': 'President of the United States'
        },
        'affiliation': [
            'Hell',
            'Heaven',
            'God'
        ],
        'family': {
            'father': 'God',
            'younger siblings': 'Angels',
            'older brother': 'Michael',
            'younger brothers': [
                'Raphael',
                'Gabriel'
            ],
            'aunt': 'The Darkness',
            'son': 'Jack Kline',
            'vessel': 'Nick',
            'creations': 'Demons'
        },
        'portrayed by': {
            'main': 'Mark Pellegrino'
        },
        'deaths': {
            'let the good times roll': 'Stabbed in the side with the archangel blade by Dean Winchester',
            'inherit the earth': 'Stabbed with the archangel blade by Michael'
        }
    },
    'meg': {
        'name': 'Meg',
        'name meaning': 'Pearl',
        'seasons': [
            'Season 1',
            'Season 2',
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 8'
        ],
        'species': {
            'currently': 'Demon',
            'formerly': 'Human'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'Meg Masters',
                "Meg (her first vessel's name)"
            ],
            'meg masters': 'Pure Evil',
            'the shadow': 'The Queen'
        },
        'occupation': {
            'primary': 'Rogue Demon',
            'formerly': [
                'Servant of Lucifer',
                "Servant of Azazel",
                'Nurse'
            ]
        },
        'affiliation': [
            'Castiel',
            'Winchester Family',
            'Lucifer (formerly)',
            'Azazel (formerly)'
        ],
        'family': {
            'creator': 'Lucifer',
            'father': 'Azazel',
            'brother': 'Tom',
            'aunt': 'Dagon',
            'uncles': [
                'Ramiel',
                'Asmodeus'
            ]
        },
        'portrayed by': {
            'main': 'Rachel Miner',
            'first vessel': 'Nicki Aycox'
        },
        'deaths': {
            'goodbye stranger': 'Stabbed with an angel blade by demon Crowley'
        }
    },
    'jody mills': {
        'name': 'Jody Mills',
        'name meaning': 'Praised',
        'seasons': [
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11',
            'Season 12',
            'Season 13',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Human'
        },
        'status': 'Alive',
        'alias': {
            'general': 'Sheriff Mills'
        },
        'occupation': {
            'primary': [
                'Sheriff',
                'Hunter'
            ],
            'formerly': 'Member of American hunters squad'
        },
        'affiliation': [
            'Winchester Family',
            'Bobby Singer'
        ],
        'family': {
            'husband': 'Sean Mills',
            'son': 'Owen Mills',
            'adopted daughters': [
                'Alex Jones',
                'Claire Novak',
                'Patience Turner',
                'Kaia Nieves'
            ]
        },
        'portrayed by': {
            'main': 'Kim Rhodes'
        }
    },
    'claire novak': {
        'name': 'Claire Novak',
        'name meaning': [
            'Clear',
            'Light'
        ],
        'seasons': [
            'Season 4',
            'Season 10',
            'Season 11',
            'Season 12',
            'Season 13'
        ],
        'species': {
            'currently': 'Human',
            'cured': 'Werewolf'
        },
        'status': 'Alive',
        'alias': {
            'dean': [
                'Miley Cyrus',
                'Clarisse'
            ],
            'general': 'Agent Beatrice Quimby',
            'alex jones': 'Biker Barbie',
            'donna': 'Rainbow Bright'
        },
        'occupation': {
            'primary': 'Hunter',
            'briefly': [
                'Vessel',
                'Thief'
            ]
        },
        'affiliation': [
            'Novak Family',
            'Winchester Family'
        ],
        'family': {
            'father': 'Jimmy Novak',
            'son': 'Amelia Novak',
            'adoptive mother': 'Jody Mills',
            'adoptive sisters': [
                'Alex Jones',
                'Patience Turner'
            ]
        },
        'portrayed by': {
            'main': 'Kathryn Love Newton',
            'younger': 'Sydney Imbeau'
        }
    },
    'charlie bradbury': {
        'name': 'Charlie Bradbury',
        'name meaning': [
            'Free Spirit',
            'Free Thinker'
        ],
        'seasons': [
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 10'
        ],
        'species': {
            'currently': 'Human'
        },
        'status': 'Deceased',
        'alias': { 
            'general': [
                'Celeste Middleton (birth name)',
                'Charlie Bradbury',
                'Queen of Moons',
                'Woman of Letters',
                'Dark Charlie',
                'Carrie Heinlein'
            ],
            'dean': [
                'Kiddo',
                'Your Highness'
            ],
            'dick roman': 'Kiddo',
            'sam': 'Your Highness'
        },
        'occupation': {
            'primary': [
                'Hacker',
                'Hunter',
                'Woman of Letters'
            ],
            'formerly': [
                'IT employee at RRE',
                'Member of Mark of Cain removal team'
            ]
        },
        'affiliation': [
            'Winchester Family',
            'Men of Letters'
        ],
        'family': {
            'father': 'Unnamed Father',
            'mother': 'Gertrude Middleton'
        },
        'portrayed by': {
            'main': 'Felicia Day'
        },
        'deaths': {
            'slumber party': 'Killed with a blast by the Wicked Witch',
            'dark dynasty': 'Stabbed several times by Eldon Frankenstein'
        }
    },
    'ruby': {
        'name': 'Ruby',
        'name meaning': 'Deep, red precious stone',
        'seasons': [
            'Season 3',
            'Season 4',
            'Season 15'
        ],
        'species': {
            'currently': 'Demon',
            'formerly': [
                'Human',
                'Witch'
            ]
        },
        'status': 'Deceased',
        'alias': {
            'general': 'Kristy'
        },
        'occupation': {
            'primary': 'Double-agent for Lilith',
            'formerly': 'Witch'
        },
        'affiliation': [
            'Lilith',
            'Winchester Family (feigned)',
            'Lucifer',
            'Hell'
        ],
        'family': {
            'creator': 'Lucifer'
        },
        'portrayed by': {
            'main': 'Genevieve Padalecki',
            'first vessel': 'Katie Cassidy'
        },
        'deaths': {
            'lucifer rising': 'Killed with the demon-killing knife by Dean Winchester'
        }
    },
    'bela talbot': {
        'name': 'Bela Talbot',
        'name meaning': 'Destruction',
        'seasons': 'Season 3',
        'species': {
            'currently': 'Human',
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'Abbie Talbot',
                'Lugosi',
                'Alex',
                'Mina Chandler'
            ]
        },
        'occupation': {
            'primary': 'Thief'
        },
        'affiliation': [
            'Winchester Family (on-off)',
            'Lilith (formerly)'
        ],
        'family': {
            'father': 'Deceased'
        },
        'portrayed by': {
            'main': 'Lauren Cohan',
            'younger': 'Tiera Skovbye'
        },
        'deaths': {
            'time is on my side': 'Killed by hellhounds and her soul dragged to Hell'
        }
    },
    'lisa braeden': {
        'name': 'Lisa Braeden',
        'name meaning': [
            'Oath from God',
            'Devoted to God'],
        'seasons': [
            'Season 3',
            'Season 5',
            'Season 6'
        ],
        'species': {
            'currently': 'Human',
        },
        'status': 'Alive',
        'occupation': {
            'primary': 'Yoga Instructor'
        },
        'affiliation': 'Dean Winchester (formerly)',
        'family': {
            'son': 'Ben Braeden'
        },
        'portrayed by': {
            'main': 'Cindy Sampson'
        }
    },
    'rowena macLeod': {
        'name': 'Rowena MacLeod',
        'name meaning': 'Destruction',
        'seasons': [
            'Season 10',
            'Season 11',
            'Season 12',
            'Season 13',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Hell Soul',
            'formerly': [
                'Human',
                'Witch'
            ]
        },
        'status': [
            'Deceased',
            'Soul exists in Hell'
        ],
        'alias': {
            'lucifer': [
                'Red',
                'Witch Bitch'
            ],
            'oskar': 'Auntie Rowena',
            'clea': 'Row',
            'catriona loughlin': 'Raggedy Ann',
            'trish': 'Braveheart',
            'demons': 'Queen Mother',
            'dean': 'Natasha'
        },
        'occupation': {
            'primary': [
                'Witchcraft',
                'Quueen of Hell'
            ],
            'formerly': [
                'Member of Team Save the World',
                'Member of Mark of Cain removal team',
                'Vessel'
            ]
        },
        'affiliation': [
            'Winchester Family',
            'The Grand Coven (formerly)',
            'Crowley (on-off)',
            'Hell'
        ],
        'family': {
            'son': 'Fergus MacLeod',
            'grandson': 'Gavin MacLeod',
            'ex-fiances': [
                'Ben',
                'Louis'
            ],
            'ex-lovers': [
                'Ben',
                'Louis',
                'Gabriel',
                'Grancis Tumblety'
            ]
        },
        'portrayed by': {
            'main': 'Ruth Connell'
        },
        'deaths': {
            'the devil in the details': 'Neck snapped by Lucifer',
            'all along the watchtower': 'Head crushed and body burned by Lucifer',
            'the rupture': 'Sacrifices herself when casting a spell to send all demons back to Hell'
        }
    },
    'god': {
        'name': 'God',
        'name meaning': [
            'The Lord',
            'The Creator'
        ],
        'seasons': [
            'Season 4',
            'Season 5',
            'Season 10',
            'Season 11',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Primordial Entity'
        },
        'status': 'Alive',
        'alias': {
            'general': [
                'Chuck Shurley',
                'Carver Edlund',
                'Yang',
                'Light',
                'Being',
                'Creation',
                'Yahweh',
                'Allah',
                'Christo',
                'The Creator',
                'The Lord',
                'The Almighty',
                'The Man Upstairs',
                'The Big Guy',
                'Father',
                'Dad',
                'The Old Man',
                'The Big Daddy',
                'Absentee Father',
                'Wrathful Monster',
                'Deadbeat',
            ],
            'lucifer': [
                'The Eternal One',
                'Captain G',
                'Daddy',
                'Daddy-O',
                'Pop(s)',
                'The Big Burrito'
            ],
            'metatron': [
                'Chuckles',
                'Big Man',
                'Coward',
                'Deadbeat Dad'
            ],
            'pastor joe': [
                'Jesus',
                'Buddha',
                'Krishna',
                'Gaia',
                'The Four Winds'
            ],
            'dean': 'Deadbeat Dad',
            'joshua': 'The Boss',
            'donatello': 'Celestial Magnificence',
            'rowena': 'Charles',
            'crowley': 'Rascally Deity',
            'lilith': 'Low-Rent Dean Koontz',
            'michael': 'Creator Of All Things',
            'jack kline': 'Grandfather'
        },
        'occupation': {
            'primary': 'Creator',
            'formerly': [
                'Writer',
                'Prophet',
                'Ruler of Heaven',
                'Member of Team Save the World'
            ]
        },
        'affiliation': [
            'Himself',
            'Heavem (formerly)'
        ],
        'family': {
            'twin sister': 'The Darkness',
            'grandson': 'Jack Kline',
            'children': [
                'Archangels',
                'Angels'
            ],
            'creations': [
                'Leviathans',
                'Deities',
                'Humans',
                'Hellhounds'
            ]
        },
        'portrayed by': {
            'main': 'Rob Benedict'
        }
    },
    'jack kline': {
        'name': 'Jack Kline',
        'name meaning': '"God is Gracious"',
        'seasons': [
            'Season 12',
            'Season 13',
            'Season 14',
            'Season 15'
        ],
        'species': {
            'currently': 'Nephilim'
        },
        'status': 'Alive',
        'alias': {
            'general': [
                'Spawn of Lucifer',
                'Jack Smith',
                'Agent Lovato',
                'The new God'
            ],
            'lucifer': [
                'Kiddo',
                'Jackie',
                'The Nougat-Loving Boy '
            ],
            'dean': [
                'Lucifer Jr.',
                'Antichrist',
                'Damien',
                "Rosemary's Baby",
                'Monster'
            ],
            'miriam': [
                'Lucifer 2: Electric Boogaloo',
                'Bieber'
            ],
            'angels': [
                'Abomination',
                'The Nephilim'
            ],
            'himself': [
                'The Son of Lucifer',
                'A Hunter',
                'A Winchester'
            ],
            'dagon': 'The Evil Jesus',
            'mrs. butters': 'Monster',
            'demons': 'The Jack',
            'zachariah': 'The Half-Breed',
            'michael': 'The Half-Breed',
            'kaia nieves': 'Cocaine boy'
        },
        'occupation': {
            'primary': 'The new God',
            'formerly': [
                'Hunter',
                'Member of Team Free Will',
                'Co-leader of a resistance movement'
            ]
        },
        'affiliation': [
            'Winchester Family',
            'Castiel'
        ],
        'family': {
            'biological human father': 'Jefferson Rooney',
            'biological angelic father': 'Lucifer',
            'mother': 'Kelly Kline',
            'grandfather': 'God',
            'adoptive father': 'Castiel',
            'surrogate family': 'Winchesters',
            'paternal aunts and uncles': [
                'Angels',
                'Archangels'
            ]
        },
        'portrayed by': {
            'main': 'Alexander Calvert'
        },
        'deaths': {
            'moriah': 'Smited by God'
        }
    }, 
    'amara': {
        'name': 'Amara',
        'name meaning': [
            'Bitter',
            'Deathless'
        ],
        'seasons': [
            'Season 10',
            'Season 11',
            'Season 15'
        ],
        'species': {
            'currently': 'Primordial Entity'
        },
        'status': 'Alive',
        'alias': {
            'general': [
                'The Darkness',
                'Yin',
                'Nothingness',
                'Destruction'
            ],
            'lucifer': 'Aunty Amara',
            'sydney': 'Goddess',
            'sam': 'Giant crazy fart',
            'dean': 'Giant crazy fart'
        },
        'occupation': {
            'primary': 'Personification of Darkness'
        },
        'affiliation': [
            'Dean',
            'God',
            'Jack'
        ],
        'family': {
            'twin brother': 'God',
            'biological father': 'Mike Schneider',
            'biological mother': 'Janie Schneider',
            'vessel': 'Amara Schneider ',
            'grandnephew': 'Jack Kline',
            'nieces and nephews': [
                'Angels',
                'Archangels'
            ]
        },
        'portrayed by': {
            'main': 'Emily Swallow'
        }
    },
    'gabriel': {
        'name': 'Gabriel',
        'name meaning': [
            'God is my strength',
            'Hero of God'
        ],
        'seasons': [
            'Season 2',
            'Season 3',
            'Season 5',
            'Season 9',
            'Season 13'
        ],
        'species': {
            'currently': 'Archangel'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'Loki',
                'The Trickster',
                'Ed Coleman'
            ],
            'lucifer': [
                'Little Brother',
                'Gabe',
                'G',
                'Uncle Gabe'
            ],
            'dean': [
                'Gabe',
                'Uma'
            ],
            'sam': 'Gabe'
        },
        'occupation': {
            'formerly': [
                'Messenger of God',
                'Janitor',
                'Pagan God'
            ]
        },
        'affiliation': [
            'Winchester Family',
            'God',
            'Pagan Deities'
        ],
        'family': {
            'father': 'God',
            'younger siblings': 'Angels',
            'older brothers': [
                'Michael',
                'Lucifer',
                'Raphael'
            ],
            'aunt': 'The Darkness',
            'newphew': 'Jack Kline',
            'vessel': 'Unknown Human',
            'lover': 'Rowena MacLeod'
        },
        'portrayed by': {
            'main': 'Richard Speight Jr.'
        },
        'deaths': {
            'exodus': 'Stabbed with the archangel blade by Alternate Michael'
        }
    },
    'azazel': {
        'name': 'Azazel',
        'name meaning': 'Scapegoat',
        'seasons': [
            'Season 1',
            'Season 2',
            'Season 4',
            'Season 5',
            'Season 6'
        ],
        'species': {
            'currently': 'Prince of Hell',
            'formerly': 'Human'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'The Demon',
                'Yellow Eyes',
                'Yellow Eyed Demon',
                'The Man with the Yellow Eyes'
            ],
            'sam': 'The Thing That Killed Mom and Jess',
            'casey': 'Tyrant'
        },
        'occupation': {
            'primary': [
                'Demon Army General',
                'Leader of Hell',
                'Servant of Lucifer',
                'Creator of the Special Children'
            ]
        },
        'affiliation': [
            'Lucifer',
            'Special Children',
            'Hell'
        ],
        'family': {
            'creator': 'Lucifer',
            'daughter': 'Meg',
            'son': 'Tom',
            'sister': 'Dagon',
            'brother': [
                'Ramiel',
                'Asmodeus'
            ]
        },
        'portrayed by': {
            'main': 'Fredric Lehne'
        },
        'deaths': {
            'all hell breaks loose - part 2': 'Shot in the heart with the Colt by Dean Winchester'
        }
    },
    'benny lafitte': {
        'name': 'Benny Lafitte',
        'name meaning': 'Son of the right hand',
        'seasons': [
            'Season 8',
            'Season 10'
        ],
        'species': {
            'currently': 'Vampire',
            'formerly': 'Human'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'Roy',
                'The guy who got out and then came back'
            ]
        },
        'occupation': {
            'formerly': [
                'Vampirate',
                "Employee at Guidry's Cajun Café"
            ]
        },
        'affiliation': [
            'Vampirates',
            'Winchester Family'
        ],
        'family': {
            'great-granddaughter': 'Elizabeth'
        },
        'portrayed by': {
            'main': 'Ty Olsson'
        },
        'deaths': {
            'taxi driver': 'Decapitated with a machete by Dean Winchester',
            'taxi driver': 'Killed in Purgatory by vampires'
        }
    },
    'eileen leahy': {
        'name': 'Eileen Leahy',
        'name meaning': [
            'Little Bird',
            'Strength',
            'Desired'
        ],
        'seasons': [
            'Season 11',
            'Season 12',
            'Season 15'
        ],
        'species': {
            'currently': 'Human',
            'formerly': [
                'Ghost',
                'Hell Ghost'
            ]
        },
        'status': 'Alive',
        'alias': {
            'general': 'Marlene',
            'renny rawlings': 'The Banshee girl'
        },
        'occupation': {
            'primary': 'Hunter'
        },
        'affiliation': 'Winchester Family',
        'family': {
            'grandfather': 'Edward Durbin II',
            'father': 'Padraic Leahy',
            'mother': 'Maura Leahy'
        },
        'portrayed by': {
            'main': 'Shoshannah Stern'
        },
        'deaths': {
            "there's something about mary": 'Killed by hellhounds commanded by Arthur Ketch'
        }
    },
    'metatron': {
        'name': 'Metatron',
        'name meaning': [
            'One who serves behind the throne',
            'Servant'
        ],
        'seasons': [
            'Season 8',
            'Season 9',
            'Season 10',
            'Season 11'
        ],
        'species': {
            'currently': 'Human',
            'formerly': 'Angel'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'Scribe of God',
                'Marv',
                'Nerd',
                'God'
            ],
            'dean': [
                'Douchebag',
                'Mother Teresa with neck beard'
            ],
            'himself': [
                'X',
                'Pencil Pusher'
            ],
            'amara': 'Secretary'
        },
        'occupation': {
            'primary': [
                'Scribe of God',
                'Videographer'
            ],
            'formerly': [
                'Rogue Angel',
                'Ruler of Heaven'
            ]
        },
        'affiliation': [
            'Heaven',
            'God',
            'Castiel'
        ],
        'family': {
            'father': 'God',
            'siblings': 'Angels',
            'older brothers': 'Archangels',
            'aunt': 'The Darkness',
            'nephew': 'Jack Kline',
            'vessel': 'Marv'
        },
        'portrayed by': {
            'main': 'Curtis Armstrong'
        },
        'deaths': {
            'all in the family': 'Imploded into nothingness by Amara'
        }
    },
    'becky rosen': {
        'name': 'Becky Rosen',
        'name meaning': [
            'One who serves behind the throne',
            'Servant'
        ],
        'seasons': [
            'Season 5',
            'Season 6',
            'Season 15'
        ],
        'species': {
            'currently': 'Human'
        },
        'status': 'Unknown (presumed alive)',
        'alias': {
            'general': [
                'YeckyBecky',
                'samlicker81',
                'BeckyWinchester176',
                'Superfan99',
                'Bex',
                'Becky Rosen-Winchester'
            ]
        },
        'occupation': {
            'primary': 'Fan Fiction Writer'
        },
        'affiliation': [
            'Chuck Shurley',
            'Winchester Family'
        ],
        'family': {
            'ex-husband': 'Sam Winchester',
            'husband': 'Rod',
            'son': 'Rod Jr.',
            'daughter': 'Unnamed Daughter',
        },
        'portrayed by': {
            'main': 'Emily Perkins'
        }
    },
    'kevin tran': {
        'name': 'Kevin Tran',
        'name meaning': [
            'Handsome',
            'Beautiful'
        ],
        'seasons': [
            'Season 7',
            'Season 8',
            'Season 9',
            'Season 11',
            'Season 15'
        ],
        'species': {
            'formerly': [
                'Human',
                'Prophet'
            ],
            'currently': [
                'Ghost',
                'Hell Ghost'
            ]
        },
        'status': [
            'Deceased',
            'Soul exists in the Veil'
        ],
        'alias': {
            'general': [
                'The Prophet',
                'Kev'
            ],
            'himself': 'Kevin Solo',
            'fake sam': 'special-k'
        },
        'occupation': {
            'primary': 'Prophet of the Lord',
            'formerly': 'Student'
        },
        'affiliation': [
            'God',
            'Winchester Family'
        ],
        'family': {
            'father': 'Mr. Tran',
            'mother': 'Linda Tran'
        },
        'portrayed by': {
            'main': 'Osric Chau'
        }
    },
    'harry spangler': {
        'name': 'Harry Spangler',
        'name meaning': [
            'Home',
            'Ruler'
        ],
        'seasons': [
            'Season 1',
            'Season 3',
            'Season 4',
            'Season 5',
            'Season 9'
        ],
        'species': {
            'currently': 'Human'
        },
        'status': 'Alive',
        'occupation': {
            'formerly': 'Ghostfacer'
        },
        'affiliation': 'Ghostfacers',
        'portrayed by': {
            'main': 'Travis Wester'
        }
    },
    'ed zeddmore': {
        'name': 'Ed Zeddmore',
        'name meaning': [
            'Prosperous guardian',
            'Fortune',
            'Wealth'
        ],
        'seasons': [
            'Season 1',
            'Season 3',
            'Season 4',
            'Season 5',
            'Season 9'
        ],
        'species': {
            'currently': 'Human'
        },
        'status': 'Alive',
        'occupation': {
            'formerly': 'Leader of the Ghostfacers'
        },
        'affiliation': 'Ghostfacers',
        'family': {
            'adoptive sister': 'Maggie Zeddmore'
        },
        'portrayed by': {
            'main': 'A.J. Buckley'
        }
    },
    'pamela barnes': {
        'name': 'Pamela Barnes',
        'name meaning': [
            'Honey',
            'All sweetness'
        ],
        'seasons': [
            'Season 4',
            'Season 5',
            'Season 14'
        ],
        'species': {
            'currently': [
                'Human',
                'Psychic'
            ]
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'general': 'Pam'
        },
        'occupation': {
            'primary': 'Psychic'
        },
        'affiliation': [
            'Bobby Singer',
            'Winchester Family',
            'Ash'
        ],
        'portrayed by': {
            'main': 'Traci Dinwiddie'
        }
    },
    'garth': {
        'name': 'Garth Fitzgerald IV',
        'name meaning': 'Keeper of the garden',
        'seasons': [
            'Season 4',
            'Season 5',
            'Season 14'
        ],
        'species': {
            'currently': 'Grace-Enhanced Werewolf',
            'formerly': 'Human'
        },
        'status': [
            'Deceased',
            'Soul exists in Heaven'
        ],
        'alias': {
            'general': 'New Bobby'
        },
        'occupation': {
            'primary': 'Dentist',
            'formerly': 'Hunter (semi-retired)'
        },
        'affiliation': [
            'Bobby Singer',
            'Winchester Family',
            'Kevin Tran',
            "Jim Myers' pack"
        ],
        'family': {
            'wife': 'Bess Fitzgerald',
            'daughter': 'Gertie Fitzgerald',
            'sons': [
                'Sam Fitzgerald',
                'Castiel Fitzgerald'
            ],
            'cousins': [
                'Brandon',
                'Frank'
            ],
            'father-in-law': 'Jim Myers',
            'step-mother-in-law': 'Joy Myers'
        },
        'portrayed by': {
            'main': 'DJ Qualls'
        }
    },
    'linda tran': {
        'name': 'Linda Tran',
        'name meaning': [
            'Pretty',
            'Beautiful'
        ],
        'seasons': [
            'Season 7',
            'Season 8',
            'Season 9'
        ],
        'species': {
            'currently': 'Human'
        },
        'status': 'Alive',
        'alias': {
            'general': 'Mrs. Tran'
        },
        'affiliation': 'Winchester Family',
        'family': {
            'husband': 'Mr. Tran',
            'son': 'Kevin Tran',
            'brother': 'Unnamed brother'
        },
        'portrayed by': {
            'main': 'Khaira Ledeyo'
        }
    },
    'gordon walker': {
        'name': 'Gordon Walker',
        'name meaning': [
            'Great hill',
            'Fort'
        ],
        'seasons': [
            'Season 2',
            'Season 3'
        ],
        'species': {
            'currently': 'Vampire',
            'formerly': 'Human'
        },
        'status': 'Deceased',
        'occupation': {
            'formerly': 'Hunter'
        },
        'family': {
            'sister': 'Unnamed sister'
        },
        'portrayed by': {
            'main': 'Sterling K. Brown'
        }
    },
    'tessa': {
        'name': 'Tessa',
        'name meaning': [
            'To reap',
            'To gather'
        ],
        'seasons': [
            'Season 2',
            'Season 4',
            'Season 6',
            'Season 9'
        ],
        'species': {
            'currently': 'Reaper'
        },
        'status': 'Deceased',
        'alias': {
            'general': 'Tess'
        },
        'occupation': {
            'primary': 'Reaper'
        },
        'affiliation': [
            'Death',
            'Winchester Family'
        ],
        'portrayed by': {
            'main': 'Lindsey McKeon'
        },
        'deaths': {
            'stairway to heaven': 'Died by suicide, impaling herself with the First Blade'
        }
    },
    'death': {
        'name': 'Death',
        'seasons': [
            'Season 5',
            'Season 6',
            'Season 7',
            'Season 9',
            'Seasn 10'
        ],
        'species': {
            'currently': 'Primordial Horseman'
        },
        'status': 'Deceased',
        'alias': {
            'general': 'The Pale Horseman',
            'bobby singer': [
                'Big Daddy Reaper', 
                'The Pale Rider', 
                'Your honor',
                'The Grim Reaper',
                'Angel of Death' 
            ],
            'sam': [
                'The Grim Reaper',
                'Angel of Death'
            ],
            'alastair': 'Old Friend'
        },
        'occupation': {
            'primary': [
                'The Pale Horseman',
                'Angel of Death'
            ]
        },
        'affiliation': [
            'God',
            'His brothers'
        ],
        'family': {
            'younger brothers': [
                'Famine',
                'Pestilence',
                'War'
            ],
            'subordinates': 'reapers'
        },
        'portrayed by': {
            'main': 'Julian Richings'
        },
        'deaths': {
            "brother's keeper": 'Impaled with his own scythe by Dean Winchester'
        }
    },
    'alastair': {
        'name': 'Alastair',
        'name meaning': "Man's defender",
        'seasons': 'Season 4',
        'species': {
            'currently': 'White-eyed Demon',
            'formerly': 'Human'
        },
        'status': [
            'Deceased',
            'Soul resides in The Empty'
        ],
        'alias': {
            'ruby': [
                'Picasso With A Razor',
                'The Grand Inquisitor'
            ]
        },
        'occupation': {
            'primary': [
                'Demonic Chief of Staff',
                "Hell's Grand Torturer",
                "Lilith's enforcer and servant"
            ]
        },
        'affiliation': [
            'Lucifer',
            'Death',
            'Lilith',
            'Hell'
        ],
        'family': {
            'father': 'Lucifer'
        },
        'portrayed by': {
            'main': 'Christopher Heyerdahl'
        },
        'deaths': {
            'on the head of a pin': "Killed by Sam Winchester's psychic powers"
        }
    },
    'dick roman': {
        'name': 'Dick Roman',
        'name meaning': 'Strong in Rule',
        'seasons': 'Season 7',
        'species': {
            'currently': 'Leviathan'
        },
        'status': 'Deceased',
        'alias': {
            'general': 'Mr. Roman',
            'dean': 'Big Daddy Chomper'
        },
        'occupation': {
            'primary': [
                'Businessman',
                'Leader of the Leviathans'
            ]
        },
        'affiliation': [
            'Leviathans',
            'Richard Roman Enterprises'
        ],
        'family': {
            'father': 'God',
            'identity stolen from': 'Richard Roman'
        },
        'portrayed by': {
            'main': 'James Patrick Stuart'
        },
        'deaths': {
            'survival of the fittest': 'Restrained by Castiel and stabed through the side of the neck with the Bone of Righteous Mortal Washed in the Three Bloods of Fallen by Dean Winchester'
        }
    },
    'cain': {
        'name': 'Cain',
        'name meaning': [
            'Acquired',
            'Spearer'
        ],
        'seasons': [
            'Season 9',
            'Season 10'
        ],
        'species': {
            'currently': 'Knight of Hell',
            'formerly': 'Human'
        },
        'status': 'Deceased',
        'alias': {
            'general': [
                'Father of Murder',
                'First Son'
            ]
        },
        'occupation': {
            'primary': 'Bearer of the Mark of Cain',
            'formerly': 'Trainer and Leader of the Knights of Hell'
        },
        'affiliation': {
            'formerly': [
                'Lucifer',
                'Hell',
                'Knights of Hell'
            ]
        },
        'family': {
            'father': 'Adam',
            'mother': 'Eve',
            'brother': 'Abel',
            'wife': 'Colette Mullen',
            'descendants': [
                'Dean Winchester',
                'Sam Winchester',
                'John Winchester',
                'Henry Winchester',
                'Adam Milligan ',
                'Dean Winchester II',
                'Humans'
            ]
        },
        'portrayed by': {
            'main': 'Timothy Omundson'
        },
        'deaths': {
            'first born': 'Died by suicide, impaling himself with the First Blade',
            "the executioner's song": 'Stabbed in the back with the First Blade by Dean Winchester'
        }
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/character/:name', (request, response) => {
  
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]) {
        response.json(characters[characterName])
    } else {
        response.json(characters['unknown'])
    }
})


app.use(express.static('public'))

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}.`)
})