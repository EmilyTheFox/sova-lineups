import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const icebox_data: Lineup[] = [
    {
        id: 1,
        title: 'Left of Boiler to Mid',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Xw0uz7W.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/Px5cgUR.jpg',
                info: 'Simply hug this right wall outside of A site and aim for this lamp'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Very simple dart that scans mid, including on top of the container. Very useful for giving your opperator agent space to walk up mid."
    },
    {
        id: 2,
        title: 'Early A push info',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/HkhTqCY.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/tnWbPMY.jpg',
                info: 'Just aim for the middle of this gray bar'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Very simple dart that scans mid, including on top of the container. Very useful for giving your opperator agent space to walk up mid."
    },
    {
        id: 3,
        title: 'A Belt / Lower from A Site',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Z0iwJS9.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/j3Jq738.jpg',
                info: 'Stand in this corner on site'
            },
            {
                link: 'https://i.imgur.com/weFs5Bg.jpg',
                info: 'Aim for this gray bar above the gap above nest. And then be a little to the left of the box with your crosshair, you can also line up the 2nd charge bar with the darker diagonal line on the box if you need a guidepoint'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Simple but effective dart that sometimes gets called a God dart because it scans nearly everything for early info on the attacker side of A"
    },
    {
        id: 4,
        title: 'Boiler to B push info',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/qkDnuQS.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/pCIYrXE.jpg',
                info: 'Stand in this lower corner'
            },
            {
                link: 'https://i.imgur.com/xq24PkG.jpg',
                info: 'Line your left bounce icon up with the top right corner of whatever this thing is, and simply give it 1 charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Great dart to scan for people pushing B, including pushing through garage"
    },
    {
        id: 5,
        title: 'Boiler to B retake',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: true,
        },
        map: '',
        result: 'https://i.imgur.com/QUOSV3N.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/PvKgkKO.jpg',
                info: 'Stand in this upper corner'
            },
            {
                link: 'https://i.imgur.com/6ZmCfya.jpg',
                info: 'Line the bottom right corner of your charge bar up with this part of the Kingdom logo, then move it a couple pixels to the right, you dont want to be perfectly lined up or it will land too far left, give it 1 charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A variation of getting this popular dart without having to go on top of hut. Great for running from A to B or if you want to go through mid, be mindful that your head is exposed to mid!"
    },
    {
        id: 6,
        title: 'Behind Belt to A site',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/xm5RDOH.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/PttIqYo.jpg',
                info: 'Simply stand anywhere around this right door. Aim for above the right most part of A site nest and shoot. You want the arrow to land in front of site not on the right of the wall else it wont scan behind 410 or on top of screens'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "Barely a lineup, just a straight shot, but a straight shot worth documenting anyway."
    },
    {
        id: 7,
        title: 'Mid to Boiler/Ramp',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/OIbp7H1.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/ocXK7oK.jpg',
                info: 'Stand on this small box'
            },
            {
                link: 'https://i.imgur.com/wTGSKpb.jpg',
                info: 'Aim top left of this top black and yellow sticker, full charge, 1 bounce and shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Dart for scanning on top of boiler and the ramp as well as behind there a bit"
    },
    {
        id: 8,
        title: 'Early Mid/Snowpile',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/sywcN4l.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/lUItx6b.jpg',
                info: 'Stand roughly around this spot in front of the yellow arrow on the ground. The positioning doesn\'t have to be precise so just stand anywhere around this intersection'
            },
            {
                link: 'https://i.imgur.com/GV11d7J.jpg',
                info: 'Aim on the dark side next to the triangle at the height of the top of this triangle. Full charge, 1 bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Simple dart for scanning orange and snowpile before pushing mid"
    },
    {
        id: 9,
        title: 'Green to B site',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/B9gxSar.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/bTskX2y.jpg',
                info: 'Stand on these barrels'
            },
            {
                link: 'https://i.imgur.com/GgiCNvd.jpg',
                info: 'Aim where the green and white container meet, along the middle line of the green container'
            },
            {
                link: 'https://i.imgur.com/1d0zlTe.jpg',
                info: 'Now crouch, full charge, 1 bounce and shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A precise dart to clear top of B site, back yellow and some more. This dart is precise and needs practice, an easier variation is to just not crouch and right away aim for where it ends up when crouching. The easier version will clear almost just as much but wont reliably get top site"
    }
];

export default icebox_data;