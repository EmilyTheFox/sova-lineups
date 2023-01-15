import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const fracture_data: Lineup[] = [

    {
        id: 1,
        title: 'Attacker Spawn to A Rope',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Xm0rHYe.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/kXvyV3v.jpg',
                info: 'Stand in this back corner of Attacker Spawn'
            },
            {
                link: 'https://i.imgur.com/89Q9juA.jpg',
                info: 'The bottom of our right bounce diamond should rest on this top left tip of this omega sign'
            },
            {
                link: 'https://i.imgur.com/zpYlBhI.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/kOJ0aBx.jpg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A lovely support arrow for your team, just be careful you don't fall too far behind your team"
    },
    {
        id: 2,
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
        id: 3,
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
    },
    {
        id: 4,
        title: 'A Hall to A Rope & Sands',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/3M5NdQp.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/Eg2JQXS.jpg',
                info: 'Stand against the corner of this wall'
            },
            {
                link: 'https://i.imgur.com/LEfG3Ef.jpg',
                info: 'We want the top of our charge bar to be between these two crates'
            },
            {
                link: 'https://i.imgur.com/014xpo9.jpg',
                info: 'Like this, make sure our crosshair is roughly in the middle of the box as well'
            },
            {
                link: 'https://i.imgur.com/wkRJn03.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "Great dart to scan sands & rope after taking control of A main"
    },
    {
        id: 5,
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
        id: 6,
        title: 'A Rope to A Hall',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/KfDMGtN.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/de6Ov5y.jpg',
                info: 'Stand against this wall'
            },
            {
                link: 'https://i.imgur.com/W3Gn25w.jpg',
                info: 'We want to line up the rope with this corner by walking right slightly'
            },
            {
                link: 'https://i.imgur.com/9WG8tQW.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/IKOIU90.jpg',
                info: 'Now aim for this corner of this dark triangle on the left side of the door'
            },
            {
                link: 'https://i.imgur.com/2RmMzsa.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A usefull dart for checking if the attackers are inside or near A hall"
    },
    {
        id: 7,
        title: 'A Rope to Dish',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/ZoRAR6F.jpeg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/nNFFmth.jpeg',
                info: 'Stand opposite to the left part of this wall (if pre-round, you can just hug the border)'
            },
            {
                link: 'https://i.imgur.com/uQ6DLRK.jpeg',
                info: 'We want the tip of our left bounce diamond to line up with the tip of this gray line'
            },
            {
                link: 'https://i.imgur.com/BcAqzsL.jpeg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/c2c8LsS.jpeg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A nice dart to scan Dish from A Rope"
    },
    {
        id: 8,
        title: 'B Tower to Dish',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/vJSrELe.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/O0qwVIe.jpg',
                info: 'Just hug this side of the rope entrance to tower'
            },
            {
                link: 'https://i.imgur.com/YIWwhvh.jpg',
                info: 'Aim to the right of this dish on Arcade'
            },
            {
                link: 'https://i.imgur.com/zluPPih.jpg',
                info: 'Two charges, shoot'
            }
        ],
        bounces: 0,
        charges: 2,
        info: "Lovely dart to scan everything outside and inside A Dish except if they're already at Drop. Great for the start of the round."
    },
    {
        id: 9,
        title: 'A Link to A Site',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: true,
        },
        map: '',
        result: 'https://i.imgur.com/fa92bMo.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/LoMylUx.jpg',
                info: 'Stand against this wall'
            },
            {
                link: 'https://i.imgur.com/4UwbyD3.jpg',
                info: 'Aim for the tip of this symbol'
            },
            {
                link: 'https://i.imgur.com/c0AbqVN.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A super simple recon for A site that clears lots of angles"
    },
    {
        id: 10,
        title: 'Defender Spawn to A Site slow',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: true,
        },
        map: '',
        result: 'https://i.imgur.com/Dngu584.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/W4lsYoI.jpg',
                info: 'Find these papers on the B side of Defender Spawn'
            },
            {
                link: 'https://i.imgur.com/EXUWHS6.jpg',
                info: 'Stand at the bottom of this misaligned diamond'
            },
            {
                link: 'https://i.imgur.com/hoIFMm4.jpg',
                info: 'Simply aim a little bit above the center of this gray bar'
            },
            {
                link: 'https://i.imgur.com/g03PVM4.jpg',
                info: 'Full charge, shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "A slow arrow to scan A site so it can be timed with you rotating over to A Link to A Rope"
    },

    {
        id: 11,
        title: 'Attacker Spawn to B Main & B Site off angles',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/p9R4Gpq.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/Wi1W3Cy.jpg',
                info: 'Stand against this line on the wall, if it\'s pre round you can simply hug the border'
            },
            {
                link: 'https://i.imgur.com/5yA4zku.jpg',
                info: 'We want the tip of our drone symbol\'s left wing to be where these stairs end next to the smooth part'
            },
            {
                link: 'https://i.imgur.com/LiRWRhR.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/XY7ZQPG.jpg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "An amazing and essential dart when playing against a team that likes getting into B main with an opperator. Also just great at clearing most off angles around B main"
    },
    {
        id: 12,
        title: 'B Tree to B Site V1',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Qz4t5WB.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/50BR0yy.jpg',
                info: 'Stand in this upper corner at Tree'
            },
            {
                link: 'https://i.imgur.com/WVyAb6M.jpg',
                info: 'We want the top right of our charge bar to touch this leaf'
            },
            {
                link: 'https://i.imgur.com/NPilJHk.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/iPyeH8T.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Great lineup to scan most off angles on B-Site"
    },
    {
        id: 13,
        title: 'B Tree to B Site V2',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/zPCvC8I.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/VL8msvd.jpg',
                info: 'Stand in this corner at the T side of Tree'
            },
            {
                link: 'https://i.imgur.com/BPin1Ky.jpg',
                info: 'We want our first charge bar line to be in line with this wall below where it thickens'
            },
            {
                link: 'https://i.imgur.com/g03PVM4.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Alternative way of doing this great lineup to scan most off angles on B-Site"
    },
    {
        id: 14,
        title: 'B Tree to B Link',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/fOV6h42.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/1A24gOb.jpg',
                info: 'Stand in this corner at Tree'
            },
            {
                link: 'https://i.imgur.com/WxV3jBo.jpg',
                info: 'We want the left of our left bounce diamond to touch this bottom right leaf'
            },
            {
                link: 'https://i.imgur.com/fmFTNUS.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/NQBK2mf.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A lovely lineup to scan inside B Link, Behind & On top of Generator and many other angles"
    },
    {
        id: 15,
        title: 'B Tree to B Tower & Arcade',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/4OsCEEe.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/YxSd2Fq.jpg',
                info: 'Stand in this corner at Tree'
            },
            {
                link: 'https://i.imgur.com/gKY4Sf1.jpg',
                info: 'We want to line up the right tip of the ability charge bar of our ultimate to be below this thicker spot of this bar'
            },
            {
                link: 'https://i.imgur.com/vyPaQQW.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/Gpo0tkT.jpg',
                info: 'Two charges, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 2,
        info: "Quite precise but easy to lineup dart to scan B Tower & Arcade"
    },

    {
        id: 16,
        title: 'B Bench to Arcade',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/AKhSbli.jpeg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/fdUHqwv.jpeg',
                info: 'Hug the border and make this wide part of the pipe touch the corner of arcade'
            },
            {
                link: 'https://i.imgur.com/nt1iOXj.jpeg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/Nibl3Uf.jpeg',
                info: 'Now we want the bottom of our right bounce diamond to rest on this mossy spot'
            },
            {
                link: 'https://i.imgur.com/r5T6YCr.jpeg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/PYMtMZu.jpeg',
                info: 'Full charge, shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "A pre round dart to scan common Arcade angles (except tower given the people in tower just hide inside)"
    },
    {
        id: 17,
        title: 'B Bench to B Site',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/m6Ssx8u.jpeg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/1ACRPXv.jpeg',
                info: 'Stand on this line, just look at the minimap where I am'
            },
            {
                link: 'https://i.imgur.com/b2WLG5b.jpeg',
                info: 'Look towards generator, we are going to line up the tip of the shock dart icon with this moss'
            },
            {
                link: 'https://i.imgur.com/tcVheVY.jpeg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/wBb6qHb.jpeg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A lovely dart to clear the majority of B Site"
    },

    {
        id: 18,
        title: 'B Canteen to B Main',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/WFECxPI.jpeg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/0gBFXY9.jpeg',
                info: 'Stand against this part of this poster in canteen'
            },
            {
                link: 'https://i.imgur.com/JjkAxgW.jpeg',
                info: 'We simply want to aim for this gap in the roof'
            },
            {
                link: 'https://i.imgur.com/zZzFxHZ.jpeg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A simple dart to clear B main from canteen"
    },
    {
        id: 19,
        title: 'B Link to B Tree',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/ILufZqG.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/5X8FSfY.jpg',
                info: 'Yeah ehh... "stand here" is the best I can tell you'
            },
            {
                link: 'https://i.imgur.com/RiacVLM.jpg',
                info: 'We want the bottom of our left bounce diamond to be on these leaves, and this is precise so try this lineup a lot'
            },
            {
                link: 'https://i.imgur.com/aHJBTUt.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/xuve9N2.jpg',
                info: 'No charge or bounce, just shoot'
            }
        ],
        bounces: 0,
        charges: 0,
        info: "Very good but precise dart to scan B Tree from B Link"
    },
    {
        id: 20,
        title: 'B Main to B Tunnel',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/IR5J0W6.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/l5nY5TU.jpg',
                info: 'Stand on these small stairs and hug the right wall'
            },
            {
                link: 'https://i.imgur.com/iSsYowb.jpg',
                info: 'Just aim for below the middle of the top of this Z like symbol'
            },
            {
                link: 'https://i.imgur.com/TKyodT2.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "Super easy dart to scan B Tunnel"
    },
    {
        id: 21,
        title: 'B Tower to B Bench',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/DFw7ebW.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/G5Fy2A0.jpg',
                info: 'Just hug this side of the rope entrance to tower'
            },
            {
                link: 'https://i.imgur.com/Ai5ylUx.jpg',
                info: 'Aim for this animated wall, at the height where the angle changes'
            },
            {
                link: 'https://i.imgur.com/XJ0oAeX.jpeg',
                info: 'Two charges, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 2,
        info: "A dart to reliably scan outside of B Bench"
    },
    {
        id: 22,
        title: 'B Canteen to B Site',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: true,
        },
        map: '',
        result: 'https://i.imgur.com/R9CIoYM.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/kg9UUqK.jpg',
                info: 'Stand on this dark part at the start of canteen'
            },
            {
                link: 'https://i.imgur.com/67gPQdj.jpg',
                info: 'Aim for the moss patch behind the vine'
            },
            {
                link: 'https://i.imgur.com/29ToBIF.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Great simple dart to retake B site"
    },


    {
        id: 23,
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
        id: 24,
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
];

export default fracture_data;