import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const icebox_data: Lineup[] = [
    {
        id: 1,
        title: 'Belt to Nest',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/7UlDQtl.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/ujQtCpJ.jpg',
                info: 'Look straight down and stand on this very edge of belt'
            },
            {
                link: 'https://i.imgur.com/YAPbFi7.png',
                info: 'We are going to line up the bottom left of our charge bar with this corner'
            },
            {
                link: 'https://i.imgur.com/vAxDgIk.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A dart for catching weird plays where defenders sneak up into nest, you can wallbang nest with any weapon including low penetration"
    },
    {
        id: 2,
        title: 'Belt to A site',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/cR4OZR9.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/UVOx4AH.jpg',
                info: 'Walk into this part of the wall where I\'m looking right now'
            },
            {
                link: 'https://i.imgur.com/miMMWnL.png',
                info: 'We want to aim our crosshair at this bottom left corner below the light'
            },
            {
                link: 'https://i.imgur.com/578fU8g.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Good dart for getting a lot of info early into the round"
    },
    {
        id: 3,
        title: 'Belt to A Site Nest',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/XQsnJ6f.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/NdDk88E.jpg',
                info: 'Stand so the left side of this right wall is just barely visible'
            },
            {
                link: 'https://i.imgur.com/3vT9IIB.jpg',
                info: 'We aim our crosshair onto that part of the wall and line up the top of the darker inside of our charge bar along this line for the perfect height'
            },
            {
                link: 'https://i.imgur.com/jO4UTRq.jpg',
                info: 'See where we aim the crosshair and our chargebar is lined up, full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Great dart for spotting people in A site nest, dont hold the gap from the first how to picture too tight else you might hit the outside of A site nest rather than inside"
    },
    {
        id: 4,
        title: 'A Entrance to A Maze',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/qNY2kMC.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/Ddthq4P.jpg',
                info: 'Stand in this corner'
            },
            {
                link: 'https://i.imgur.com/DFoxDEc.jpg',
                info: 'We want to aim for this corner above A nest'
            },
            {
                link: 'https://i.imgur.com/KMSH2Te.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Simple dart for clearing A Maze"
    },
    {
        id: 5,
        title: 'A Entrance to A Orb',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/qNY2kMC.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/isHtO6C.jpg',
                info: 'Stand anywhere outside of A Entrance as long as the left side of this wall I\'m looking at is visible'
            },
            {
                link: 'https://i.imgur.com/Z1mXV7q.jpg',
                info: 'Simply aim at it, full charge and shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "A dart that scans a lot but is easily shot down as it lands, you shouldn't be predictable with darts anyway but definitely don't use this one two rounds in a row"
    },
    {
        id: 6,
        title: 'A Entrance to A Backsite/Screen',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/UQOhcSl.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/WaSWZ2W.jpg',
                info: 'Stand on these small barrels at the start of belt'
            },
            {
                link: 'https://i.imgur.com/8VE1nqx.jpg',
                info: 'Aim for this corner above A Nest'
            },
            {
                link: 'https://i.imgur.com/7kjQtRr.jpg',
                info: 'Charge just one bar and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A simple dart to scan backsite and behind screen"
    },
    {
        id: 7,
        title: 'A Lobby to A Site Back',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/W4pFQxO.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/9yvbUI7.jpg',
                info: 'Stand in A lobby so you can see this bent bar'
            },
            {
                link: 'https://i.imgur.com/PvlXmtP.jpg',
                info: 'Simply aim for the bar, full charge and shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "A nice dart to scan backsite from lobby, make sure to clear pipes first before shooting this"
    },
    {
        id: 8,
        title: 'A Lobby to A Site Back Alternative',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/X7syNrO.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/vWEn39U.jpg',
                info: 'Stand on this cross in A lobby'
            },
            {
                link: 'https://i.imgur.com/2ufODN4.jpg',
                info: 'Line up the tip of the shock dart icon with this line on the wall'
            },
            {
                link: 'https://i.imgur.com/qqOxOYS.jpg',
                info: 'Now crouch, full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "An alternative to the A Lobby to A Site Back dart that doesn't expose you to pipes so you can throw it early into the round without being worried"
    },
    {
        id: 9,
        title: 'A Rafters to Belt/A Main',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/F8iqZFM.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/MSQrJVW.jpg',
                info: 'Stand in this corner of rafters'
            },
            {
                link: 'https://i.imgur.com/sVRNHTn.jpg',
                info: 'We are going to use this mark on generator for our height, and we use the line between our drone and shock dart to line up'
            },
            {
                link: 'https://i.imgur.com/4t73Odn.jpg',
                info: 'See how we are lined up here'
            },
            {
                link: 'https://i.imgur.com/K1TRGhy.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A great dart for scanning Belt and A Main from A Rafters"
    }
];

export default icebox_data;