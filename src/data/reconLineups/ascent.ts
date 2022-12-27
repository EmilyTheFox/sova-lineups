import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const ascent_data: Lineup[] = [
    {
        id: 1,
        title: 'B lobby/b main from B site',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        landsAt: {
            x: 47.93,
            y: 19.60
        },
        shotFrom: {
            x: 65.35,
            y: 18.05
        },
        map: 'https://i.imgur.com/L8bSkrL.jpg',
        result: "https://i.imgur.com/b7rNGTg.png",
        video: '431576728',
        images: [
            {
                link: 'https://i.imgur.com/E4NbMfQ.png',

            }
        ],
        bounces: 1,
        charges: 1,
        info: "Can cover mid/B lobby, as well as parts of B main, but doesn't fully cover either of them. Aim at top corner of the roof. "
    },
    {
        id: 2,
        title: 'Mid courtyard from mid cubby',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        landsAt: {
            x: 47.52,
            y: 48.32
        },
        shotFrom: {
            x: 50.39,
            y: 65.63
        },
        map: 'https://i.imgur.com/gM8Rm7X.jpg',
        result: "https://i.imgur.com/7nou3yY.png",
        video: 'https://vimeo.com/431576892',
        images: [
            {
                link: 'https://i.imgur.com/fqeNnRT.png'
            }
        ],
        bounces: 1,
        charges: 1,
        info: 'Darts on A site should land here, it scans all the angles around the black box, as well as back of site. Align the bottom left of the charge meter with the stone as shown in the picture. '
    },
    {
        id: 3,
        title: 'Mid link from market',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/sranZUu.jpg',
        result: 'https://i.imgur.com/2q1Ff50.png',
        video: 'https://vimeo.com/431576817',
        images: [
            {
                link: 'https://i.imgur.com/1MmBX0u.png'
            }
        ],
        bounces: 1,
        charges: 1,
        info: "Lineup is for full scanning Mid link, but careful since it won't scan B lobby if you're against a team that slow pushes. Aim in the center right below the red cloth."
    },
    {
        id: 4,
        title: 'Top mid from market',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/H8KL2X9.jpg',
        result: 'https://i.imgur.com/9RrxFRD.png',
        video: 'https://vimeo.com/431576644',
        images: [
            {
                link: 'https://i.imgur.com/oKUZGU7.png'
            }
        ],
        bounces: 1,
        charges: 3,
        info: 'This should be your staple dart for top of mid, but should be mixed up with a mid link lineup to avoid prefire. If they fast peek you, you can perform this same dart from the back of mid.'
    },
    {
        id: 5,
        title: 'Pizza/Mid bottom from mid top',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false
        },
        landsAt: {
            x: 61.4,
            y: 46.2
        },
        shotFrom: {
            x: 34.37,
            y: 59.76
        },
        map: 'https://i.imgur.com/Ytvx1X7.jpg',
        result: 'https://i.imgur.com/TE4eThr.png',
        video: 'https://vimeo.com/432419685',
        images: [
            {
                link: 'https://i.imgur.com/UssEkeE.jpg'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "Scans both mid bottom and pizza area, but it's difficult to pull off. Please practice it before hand, so you can position yourself anywhere against the wall, as long as you aim above the corner where it's going to land. Imagine a horizontal line that's slightly below the roof, and a veritcal line that's always above the corner. I think this is a vital dart for mid, but there's another mid that covers nearly the same area that's a lot easier."
    },
    {
        id: 6,
        title: 'A site from A lobby',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/ebxttbg.jpg',
        result: 'https://i.imgur.com/XrDq3aU.png',
        video: 'https://vimeo.com/432603212',
        images: [
            {
                link: 'https://i.imgur.com/cxVPe6k.png'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Scans back of site, all round the metal box, close left and close right, as well as behind the wooden box. The only spots it does not scan is hell and heaven. Aim right where the pointy white thing is as shown in the picture."
    },
    {
        id: 7,
        title: 'A site from A main',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/NHJFiZU.png',
        result: 'https://i.imgur.com/CgiNGYy.png',
        video: '432419840',
        images: [
            {
                link: 'https://i.imgur.com/uC5cJYL.png'
            }
        ],
        bounces: 1,
        charges: 2,
        info: "Similar to the previous one, but it sacrifices the metal box for right side of heaven. Position yourself so that pipe on the wall is inbetween the door, then aim right at the bottom of the pipe. Careful since it leaves the left site unchecked."
    },
    {
        id: 9,
        title: 'A lobby/top mid from A site',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/Oft1ut7.jpg',
        result: 'https://i.imgur.com/OrQeo7G.png',
        video: '432604158',
        images: [
            {
                link: 'https://i.imgur.com/mdkYGf4.jpg'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "This lineup will reach back of mid, as well as A lobby. Line up the bottom of your hud so that it's touching the top left hand side of the stone above the entrance."
    },
    {
        id: 10,
        title: 'Pizza/mid bottom from mid top',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/Ytvx1X7.jpg',
        result: 'https://i.imgur.com/aGEmbKy.png',
        video: '432603297',
        images: [
            {
                link: 'https://i.imgur.com/Bz0yqHR.png'
            },
            {
                link: 'https://i.imgur.com/OtRkGGn.png'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "An easier version of the lineup mentioned earlier, but it's easier for it to be shot down by someone defending. Mix it up with the previous mid dart. Align yourself against the back wall so that a slanted black line is showing. Then aim at the bottom part of that slant."
    },
    {
        id: 11,
        title: 'Hell from Rafters',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/rwvtuFa.jpg',
        result: 'https://i.imgur.com/Mq4GLEz.png',
        video: '432604345',
        images: [
            {
                link: ''
            },
            {
                link: ''
            }
        ],
        bounces: 2,
        charges: 3,
        info: "This is a retake dart for when you know someone's in hell. You can wallbang them once it scans. Aiming aimwhere on the green box should bounce it into hell, but make sure your position is align the the box."
    },
    {
        id: 12,
        title: 'Shed from B main',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/ZUG4kbD.jpg',
        result: 'https://i.imgur.com/915GyJx.png',
        video: '432604471',
        images: [
            {
                link: 'https://i.imgur.com/BjuiCGx.jpg'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "This is one of the few hard, yet essential darts here. It's a very powerful dart that scans shed, the alley on close left, as well as right below market. Make sure you're crouching, and positioning the top left of your charge bar with the horizontal wood on the box, but make sure you're not flush next to it. put a tiny gap in between."
    },
    {
        id: 13,
        title: 'Market from B main',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/oq080aB.jpg',
        result: 'https://i.imgur.com/PjcVzaN.png',
        video: '432604384',
        images: [
            {
                link: 'https://i.imgur.com/qFKV4VZ.jpg'
            }
        ],
        bounces: 2,
        charges: 1,
        info: "This lineup will clear the awper that's rotating from mid, they won't expect it since it's coming from behind them. Aim right in between the 2 yellow lines at the top of the window."
    },
    {
        id: 14,
        title: 'A site from A main',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false
        },
        map: 'https://i.imgur.com/ebxttbg.jpg',
        result: 'https://i.imgur.com/zXvYGnN.png',
        video: '432604257',
        images: [
            {
                link: 'https://i.imgur.com/fIPZZSS.jpg'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Darts on A site should land here, it scans all the angles around the black box, as well as back of site. Align the bottom left of the charge meter with the stone as shown in the picture."
    }
];

export default ascent_data;