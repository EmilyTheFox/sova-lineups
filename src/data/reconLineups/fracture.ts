import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const fracture_data: Lineup[] = [
    {
        id: 1,
        title: 'Dish to Sands & A Rope',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/8ZEUYxm.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/F0DQWam.jpg',
                info: 'Stand in this corner at the entrance to Dish'
            },
            {
                link: 'https://i.imgur.com/zd4zSOF.jpg',
                info: 'We want to aim our right bounce diamond at this point between the pipe widening and the rock'
            },
            {
                link: 'https://i.imgur.com/5VqH2Jd.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/9fe26oF.jpg',
                info: 'One charge, jump, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A simple dart to scan Sands & A Rope from Dish to support your team or clear some angles after you take Dish control"
    },
    {
        id: 2,
        title: 'A Drop to Bench',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Yf5SfWP.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/WLVq6j2.jpg',
                info: 'Stand on this slope at Dish/Drop, we want this point to be behind the wall in front of us'
            },
            {
                link: 'https://i.imgur.com/IsvXOPw.jpg',
                info: 'Just like this'
            },
            {
                link: 'https://i.imgur.com/Lhd8wYh.jpg',
                info: 'Now aim just slightly above where these rocks meet'
            },
            {
                link: 'https://i.imgur.com/Gj1XN8Z.jpg',
                info: 'Two charges, jump, shoot'
            }
        ],
        bounces: 0,
        charges: 2,
        info: "A super useful dart to scan Bench from A Drop so you can check out Dish yourself and know which side they're on"
    },
    {
        id: 3,
        title: 'A Drop to Bench & Arcade',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/wc2KVF7.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/ra6ojn6.jpg',
                info: 'Stand in this corner on drop'
            },
            {
                link: 'https://i.imgur.com/svi0fbf.jpg',
                info: 'Walk slightly left until there is this gap where you can see the white of the wall'
            },
            {
                link: 'https://i.imgur.com/D4HF1kN.jpg',
                info: 'We want to aim for this point'
            },
            {
                link: 'https://i.imgur.com/Ipl7I5C.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A nice dart to combo with your ult if the enemy is at Bench/Arcade"
    },
    {
        id: 4,
        title: 'A Hall to A Main & Orb',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/nRWuHRP.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/4qReu9l.jpg',
                info: 'Stand on the left side of the slope at the start of A Hall'
            },
            {
                link: 'https://i.imgur.com/4nBfzJm.jpg',
                info: 'Simply aim above the right end of the lamp, full charge, one bounce, shoot'
            },
        ],
        bounces: 1,
        charges: 3,
        info: "Super useful dart to consistently scan halls, main & orb"
    },
    {
        id: 5,
        title: 'A Hall to A Main Box',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/EagfXQj.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/hOhF1Pb.jpg',
                info: 'Stand against this wall'
            },
            {
                link: 'https://i.imgur.com/spy2t73.jpg',
                info: 'Aim above the brown boxes, close to the right wall'
            },
            {
                link: 'https://i.imgur.com/CNRpCkL.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A variation for A Hall to A Main that scans behind the box"
    }
];

export default fracture_data;