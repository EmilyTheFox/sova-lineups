import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const ascent_data: Lineup[] = [
    {
        id: 1,
        title: 'B lobby/b main from B site',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: true,
            retake: true,
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
        map: 'https://i.imgur.com/gM8Rm7X.jpg',
        result: "https://i.imgur.com/7nou3yY.png",
        video: 'https://vimeo.com/431576892',
        images: [
            {
                link: 'https://i.imgur.com/fqeNnRT.png'
            },
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
    }
];

export default ascent_data;