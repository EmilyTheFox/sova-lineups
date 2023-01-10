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
        shotFrom: {
            x: 17.702,
            y: 36.761
        },
        landsAt: {
            x: 12.488,
            y: 50.370
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
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/5Um6Ljk.jpg',
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
            essential: true,
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
        side: LineupSide.Defending,
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
    },
    {
        id: 10,
        title: 'A Rafters to A Entrance',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/cw5cEaT.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/2DUIPBE.jpg',
                info: 'Stand in this corner of rafters'
            },
            {
                link: 'https://i.imgur.com/DRcVgKw.jpg',
                info: 'We want to aim for about 1/4th-1/3rd up this line behind pipes so we barely clear it'
            },
            {
                link: 'https://i.imgur.com/zzkgNx0.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A great dart for scanning A Entrance from Rafters"
    },
    {
        id: 11,
        title: 'A Rafters to A Orb / Maze',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/507lUB1.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/ltRQuRV.jpg',
                info: 'Stand in this corner of rafters stairs'
            },
            {
                link: 'https://i.imgur.com/KPBqncy.jpg',
                info: 'We want to aim on this line in between these two vertical lines below the vent'
            },
            {
                link: 'https://i.imgur.com/AnwXnaK.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A simple dart for scanning A Orb & A Maze"
    },
    {
        id: 12,
        title: 'A Screen to A Site',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/aAcyn0q.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/qpvAmdL.jpg',
                info: 'Stand in this corner at the entrance to A from Defender Spawn'
            },
            {
                link: 'https://i.imgur.com/vwEOLGt.jpg',
                info: 'We want to aim for this spot on screens with the left side of our left bounce diamond'
            },
            {
                link: 'https://i.imgur.com/IzO39Wt.jpg',
                info: 'Remember to line up the diamond with the bow charged, the animation slightly moves your cursor! Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A precise dart to flex on A site, or just to scan people for a retake"
    },
    {
        id: 13,
        title: 'A Site to Belt Wallbang',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/xwzFbx0.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/QBqDYS2.jpg',
                info: 'Stand on this small box on site'
            },
            {
                link: 'https://i.imgur.com/PyFg9go.jpg',
                info: 'We want to aim for this flat part above A Nest, though hitting the corner is a viable alternative arrow. It just lands somewhere more predictable when you hit the slanted corner'
            },
            {
                link: 'https://i.imgur.com/3ZECWTX.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A dart that's insanely hard to predict given it comes from above them. You can wallbang through A Nest if you shoot at the open area at the zipline, you can't wallbang two layers"
    },
    {
        id: 14,
        title: 'A Screen to A Entrance',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/jfjFKWl.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/pIF6bxd.jpg',
                info: 'Stand anywhere in the back of A site, but for this lineup next to screen and aim for this line above A Nest'
            },
            {
                link: 'https://i.imgur.com/13mvpFa.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A simple way to shoot from the back of A through the top of A Nest, you can just wing this without specific positioning"
    },
    {
        id: 15,
        title: 'A Generator to A Entrance',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/VbWNGu5.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/g6ZzrC8.jpg',
                info: 'Stand in this corner in front of generator'
            },
            {
                link: 'https://i.imgur.com/H33sJ40.jpg',
                info: 'Aim for the right side of this gray bar'
            },
            {
                link: 'https://i.imgur.com/ginROet.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "Very simple dart for early info if you want to hold orb"
    },
    {
        id: 16,
        title: 'A Stairs to A Hell Anti Smoke',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/GJR4E0D.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/OEPKhn4.jpg',
                info: 'Stand on the 3rd step with snow, hugging the railing and looking at the gold part of the step when looking straight now'
            },
            {
                link: 'https://i.imgur.com/d6UVbQF.jpg',
                info: 'Line up the A with the enemy team comp like shown here. Full charge, shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "An arrow for A hell to wall-bang it while a smoke is down. If no smoke is down you can simply shoot the arrow without needing this lineup"
    },
    {
        id: 17,
        title: 'B Default from B Back',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/2qvrjyT.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/xorVFjI.jpg',
                info: 'Stand in this corner'
            },
            {
                link: 'https://i.imgur.com/Se81V4u.jpg',
                info: 'We want to aim a tiny bit left of the bottom left of this dark octogon'
            },
            {
                link: 'https://i.imgur.com/7MO0R9G.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "An arrow to scan around default plant on B"
    },
    {
        id: 18,
        title: 'B Back to Crane',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: true,
        },
        map: '',
        result: 'https://i.imgur.com/zrkU4TA.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/UlJPS1I.jpg',
                info: 'Stand in this corner'
            },
            {
                link: 'https://i.imgur.com/ZzYhfXK.jpg',
                info: 'We want our ] from the [ bounces: 0 ] text to line up with this corner'
            },
            {
                link: 'https://i.imgur.com/6K3Z6qB.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/3dAFziY.jpg',
                info: 'For the perfect height, we need our left click symbol box to be 1 pixel above this line on the wall'
            },
            {
                link: 'https://i.imgur.com/3uV9eoV.jpg',
                info: 'Two charge bars, shoot, pray to the pixel gods'
            }
        ],
        bounces: 0,
        charges: 2,
        info: "One of the most precise lineups on this site but an amazing one at that for retaking B as it scans the usual areas attackers fall off to except Yellow"
    },
    {
        id: 19,
        title: 'B Elbow to Crane Round Start',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/LaVEHka.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/yt839Jl.jpg',
                info: 'Stand in this corner pre round'
            },
            {
                link: 'https://i.imgur.com/Wz5nJZS.jpg',
                info: 'Aim slightly left of this tiny little dark spot on the container'
            },
            {
                link: 'https://i.imgur.com/tE6Hnkg.jpg',
                info: 'Here\'s a picture of it with an op to show you what I mean'
            },
            {
                link: 'https://i.imgur.com/fZ9y0U2.jpg',
                info: 'Full charge, double bounce'
            },
            {
                link: 'https://i.imgur.com/Tmu6gpa.jpg',
                info: 'Jump and shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A very nice dart for clearing cubbies at the start of round, the lineup point is really hard to see but it's very easy once you see it"
    },
    {
        id: 20,
        title: 'B Elbow to Crane Perfect',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/AKg37qa.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/9wpBCiS.jpg',
                info: 'Stand so this black/yellow sticker is slightly exposed'
            },
            {
                link: 'https://i.imgur.com/eEqucdm.jpg',
                info: 'Aim as close to the left wall, pay attention that your right bounce diamond is slightly below the white crate'
            },
            {
                link: 'https://i.imgur.com/zmVcUsw.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "This dart is the proper perfected way of clearing all cubbies up to yellow as attackers. Most people do this dart too high which doesn't scan the area where I'm standing for the result screenshot. Not scanning that area might make your opponents hide from the arrow there with a shotgun on eco rounds"
    },
    {
        id: 21,
        title: 'Green to B Default',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/LedwySc.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/ZMNRwhs.jpg',
                info: 'Stand in this corner in front of the barrels'
            },
            {
                link: 'https://i.imgur.com/x8lYi4o.jpg',
                info: 'We want the top right of our charge bar to be slightly above the orange top left corner'
            },
            {
                link: 'https://i.imgur.com/vn4I4lr.jpg',
                info: 'No charge, just shoot'
            }
        ],
        bounces: 0,
        charges: 0,
        info: "This dart is a quick one to scan if they're sticking the defuse or where they're going for clutch 1v1s, warning: they will stick half of it before you can swing them if you wait till the tap to shoot it"
    },
    {
        id: 22,
        title: 'Green to B Site & Nest',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Wr4nqSw.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/Hi482Wh.jpg',
                info: 'Stand on top of these barrels'
            },
            {
                link: 'https://i.imgur.com/MiU0TFv.jpg',
                info: 'Aim where the green and white barrel meet at the middel width of the green container'
            },
            {
                link: 'https://i.imgur.com/Q7EydEz.jpg',
                info: 'Crouch, full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A better dart to for Green to B Site/Nest. Most other darts for this land further behind the rails and therefor don't fully clear nest if they hug the wall"
    },
    {
        id: 23,
        title: 'Garage to B Site',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/sxQ42Kx.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/922wjRg.jpg',
                info: 'Stand right outside the exit of garage between this white and black wall'
            },
            {
                link: 'https://i.imgur.com/pw5VlSk.jpg',
                info: 'We want to aim in between this white part of the crane and the arm of the crane'
            },
            {
                link: 'https://i.imgur.com/HANMdKM.jpg',
                info: 'One charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "An okey dart for B site from garage, doesn't scan nest or snowman though"
    },
    {
        id: 24,
        title: 'Green to Orange',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/1u5C07n.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/ML20yt2.jpg',
                info: 'Stand in this corner in front of these barrels'
            },
            {
                link: 'https://i.imgur.com/ardQqMv.jpg',
                info: 'We want to aim a little bit to the right of this star'
            },
            {
                link: 'https://i.imgur.com/em6OXS8.jpg',
                info: 'One charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A great dart to clear orange from green"
    },
    {
        id: 25,
        title: 'Green to B Back Site & Snowman',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Yuq8OQu.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/WklHjH5.jpg',
                info: 'Stand in this corner in front of these barrels'
            },
            {
                link: 'https://i.imgur.com/4VZKTwq.jpg',
                info: 'Aim for this sharp orange tip of the crane'
            },
            {
                link: 'https://i.imgur.com/9XCzPr5.jpg',
                info: 'One charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Lovely dart for clearing B back site and snowman"
    },
    {
        id: 26,
        title: 'Hut to B Elbow Rotation',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/jnBuzNT.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/AUfHCF3.jpg',
                info: 'Stand in this corner on top of hut'
            },
            {
                link: 'https://i.imgur.com/GvkD1SG.jpg',
                info: 'We want the bottom of our left bounce diamond slightly right of this corner'
            },
            {
                link: 'https://i.imgur.com/uLaWvBo.jpg',
                info: 'One charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Dart to check if they're rotating of B if you were kitchen or weren't sure if they were committing to B. Don't use this dart at the start of round, they might get a timing on it"
    },
    {
        id: 27,
        title: 'Hut to Crane',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: true,
        },
        map: '',
        result: 'https://i.imgur.com/IkGKwGG.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/xcIed6j.jpg',
                info: 'Stand in this corner on top of hut'
            },
            {
                link: 'https://i.imgur.com/8kFfxez.jpg',
                info: 'We want the tip of our right bounce diamond to be on this line'
            },
            {
                link: 'https://i.imgur.com/IRVjq54.jpg',
                info: 'One charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Amazing retake dart as it scans all the spots where attackers usually back off to after planting default"
    },
    {
        id: 28,
        title: 'Hut to B Elbow',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/wHiULjU.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/dnpBl24.jpg',
                info: 'Stand in this corner on top of hut'
            },
            {
                link: 'https://i.imgur.com/Hi4FQHk.jpg',
                info: 'We want to lineup the C of the word Charge with this corner. the left of the C should be on the left side of this right box and the bottom should be barely on the snow'
            },
            {
                link: 'https://i.imgur.com/b2BeXlA.jpg',
                info: 'One charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Simple dart for scanning B elbow from near boiler/kitchen"
    },
    {
        id: 29,
        title: 'Hut to Mid Blue',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/mJXbHIC.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/6NVqQ9P.jpg',
                info: 'Stand in this corner on top of hut'
            },
            {
                link: 'https://i.imgur.com/mcQijSG.jpg',
                info: 'We want the top of our first charge bar to be at this corner'
            },
            {
                link: 'https://i.imgur.com/twatVjj.jpg',
                info: 'One charge and shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Super easy dart to scan mid blue from right outside kitchen"
    },
    {
        id: 30,
        title: 'Kitchen to Mid Blue',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/tKjT4Ic.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/wMCVQWA.jpg',
                info: 'Stand in this corner in kitchen, might take some effort to get into the corner nicely'
            },
            {
                link: 'https://i.imgur.com/lgH7Pue.jpg',
                info: 'We want the top of our first charge bar to be at this corner of the indent'
            },
            {
                link: 'https://i.imgur.com/qXZfurK.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "Nice dart to scan mid from kitchen so you can wallbang from inside tube"
    },
    {
        id: 31,
        title: 'Fast Kitchen to Mid Blue',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Ix7OjCu.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/B3tZED8.jpg',
                info: 'Simply stand somewhere in kitchen where you can aim for this gap and shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "Nice faster dart to scan mid from kitchen so you can wallbang from inside tube. Not as big of a flex though"
    },
    {
        id: 32,
        title: 'Snow Pile to Crane',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/RGLHo8a.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/QPmEFg9.jpg',
                info: 'Stand here at snow pile'
            },
            {
                link: 'https://i.imgur.com/IL9VONH.jpg',
                info: 'We want to line up the tip of the line left of our drone symbol to be right inside of this 0'
            },
            {
                link: 'https://i.imgur.com/343Rcnl.jpg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Nice faster dart to scan mid from kitchen so you can wallbang from inside tube. Not as big of a flex though"
    },
    {
        id: 33,
        title: 'Yellow to B Elbow / Mid',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/QATuAs5.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/JA62R9e.jpg',
                info: 'Stand in this corner at yellow'
            },
            {
                link: 'https://i.imgur.com/DGu5vcj.jpg',
                info: 'Aim for this corner of the slanted part of the roof. THEN walk forward until the 01 on the wall is hidden.'
            },
            {
                link: 'https://i.imgur.com/rkkmvq8.jpg',
                info: 'Aim for the same spot again while crouching, full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Great dart for scanning both B and Mid early into the round. This dart can also be done without the walking step but it'd scan mid a little bit less if you do so. If you miss this dart bounce a lot aim a bit more right and lower"
    },
    {
        id: 34,
        title: 'Yellow to B Elbow / Green',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/kUFYt4x.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/kgAKRgf.jpg',
                info: 'Stand in this corner at yellow'
            },
            {
                link: 'https://i.imgur.com/7y6Fi6B.jpg',
                info: 'We want the tip of our right bounce diamond to line up with this corner of the container clamp'
            },
            {
                link: 'https://i.imgur.com/mwg6cNL.jpg',
                info: 'Two charge, shoot'
            }
        ],
        bounces: 0,
        charges: 2,
        info: "Amazing dart for scanning B Elbow & Green from yellow"
    },
    {
        id: 35,
        title: 'Yellow to B Elbow / Green',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/RmNoptp.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/IcWQ8jo.jpg',
                info: 'Stand against yellow and keep walking left until this white container overlaps with the back of this container clamp'
            },
            {
                link: 'https://i.imgur.com/AkZ9Thj.jpg',
                info: 'We want the top of our 2nd charge bar to be at this spot where the grey and dark grey meet'
            },
            {
                link: 'https://i.imgur.com/BXHDja1.jpg',
                info: 'Two charges, shoot'
            }
        ],
        bounces: 0,
        charges: 2,
        info: "Pretty hard but useful dart to skin mid from yellow"
    },
    {
        id: 36,
        title: 'Mid to Screens',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/S4ntmUa.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/hbDvlgf.jpg',
                info: 'Stand on this big box before the blue container'
            },
            {
                link: 'https://i.imgur.com/moParbG.jpg',
                info: 'Aim with the tip of the line left of the drone icon at this point, slightly below the container rim'
            },
            {
                link: 'https://i.imgur.com/GBwmY9s.jpg',
                info: 'Two charges, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 2,
        info: "Hard lineup for scanning screens and behind 410 from mid, mostly for flexing purposes but actually useful"
    },
    {
        id: 37,
        title: 'Mid Blue to Boiler',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/BYvGaCH.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/FMpWNeN.jpg',
                info: 'Stand in front of these boxes'
            },
            {
                link: 'https://i.imgur.com/9N6jDYz.jpg',
                info: 'We want to aim right above the corner of this black & yellow sticker'
            },
            {
                link: 'https://i.imgur.com/IWflA70.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Simple lineup for scanning boiler and CT"
    },
    {
        id: 38,
        title: 'Fast Mid to Boiler',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/AvxXc3R.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/uIeh1zm.jpg',
                info: 'Stand near blue so you can see the white wall of tube here'
            },
            {
                link: 'https://i.imgur.com/gmFIR2k.jpg',
                info: 'Simply aim at it at a normal height, full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "Simple super fast to execute lineup for scanning boiler"
    },
    {
        id: 39,
        title: 'Mid to Boiler Alternative',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/XVuIlDl.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/E88Luo8.jpg',
                info: 'Stand against the wall at this N'
            },
            {
                link: 'https://i.imgur.com/Wpzbl8J.jpg',
                info: 'We want the top left corner of our left click symbol to line up with the top right of this paper on the wall'
            },
            {
                link: 'https://i.imgur.com/1HFZKVf.jpg',
                info: 'Once charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "An alternative arrow for mid to boiler"
    },
    {
        id: 40,
        title: 'Mid Blue to Orange & Mid',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/H7kmnmH.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/l4qE6dc.jpg',
                info: 'Stand in this corner'
            },
            {
                link: 'https://i.imgur.com/tW7tE7J.jpg',
                info: 'We want the left of our drone charge on this piece of crane sticking out, which will just look like a black dot'
            },
            {
                link: 'https://i.imgur.com/Y4tu2Gw.jpg',
                info: 'Once charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A really good arrow from mid blue to scan orange, snow pile & mid"
    },
    {
        id: 41,
        title: 'Mid Blue to Mid Pallet',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/qyk6DAf.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/VbhXywM.jpg',
                info: 'Stand in this corner'
            },
            {
                link: 'https://i.imgur.com/2gPrMZt.jpg',
                info: 'We want to make a mental line this part of tube up, and then aim right below the top'
            },
            {
                link: 'https://i.imgur.com/EuK9XFa.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A quick arrow to scan for weird plays at mid pallet"
    },
    {
        id: 42,
        title: 'Boiler to Green',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/SzknYby.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/PmtwcKE.jpg',
                info: 'Stand in this corner at boiler ramp'
            },
            {
                link: 'https://i.imgur.com/h7SccvG.jpg',
                info: 'We and the line left of our drone to end at this spot'
            },
            {
                link: 'https://i.imgur.com/fF8yVUD.jpg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "A simple arrow to scan B from boiler"
    },
    {
        id: 43,
        title: 'Boiler to Green & Garage',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/XOBumL4.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/wAh1RpC.jpg',
                info: 'Stand in this corner on boiler'
            },
            {
                link: 'https://i.imgur.com/REbYyPo.jpg',
                info: 'Walk slightly right until you can\'t see the white wall from boiler'
            },
            {
                link: 'https://i.imgur.com/DKRSf6q.jpg',
                info: 'We want to aim the top of our first charge bar between these antenna like things'
            },
            {
                link: 'https://i.imgur.com/TS2w37X.jpg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "An easy to pull off arrow to scan for B pushes/retreats from boiler"
    },
    {
        id: 44,
        title: 'Boiler to Kitchen & Hall',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/Gyggv7h.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/0z8EmzU.jpg',
                info: 'Stand at the front left of boiler'
            },
            {
                link: 'https://i.imgur.com/YqdrWSN.jpg',
                info: 'Walk slightly right until you can fully see this K'
            },
            {
                link: 'https://i.imgur.com/QTIprbd.jpg',
                info: 'Make this mental line and aim at the tip of it'
            },
            {
                link: 'https://i.imgur.com/xzpUeF7.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A lovely arrow to scan kitchen & hall from boiler to spot lurkers, you can wallbang kitchen from boiler with a heavy penetration weapon"
    },
    {
        id: 45,
        title: 'Boiler to Mid & B Green',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/DQXBMkO.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/SYwxIfk.jpg',
                info: 'Stand anywhere on or behind boiler'
            },
            {
                link: 'https://i.imgur.com/NJQl2UJ.jpg',
                info: 'Simply aim slightly above the top left corner of this white container'
            },
            {
                link: 'https://i.imgur.com/VpS9f28.jpg',
                info: 'Full charge, shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "A vital arrow for Sova given he usually plays mid to scan for info on lurks against mid orbs, this arrow is an easy way to spot both mid and B pushes"
    },
    {
        id: 46,
        title: 'Boiler Ramp to Mid',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/YqNWHyn.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/HI7YG1j.jpg',
                info: 'Stand in this corner behind boiler'
            },
            {
                link: 'https://i.imgur.com/2wXEHax.jpg',
                info: 'We want to line up the left of the line between our drone and shock dart with the yellow corner here'
            },
            {
                link: 'https://i.imgur.com/k4QwBWJ.jpg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "Simple dart to mid from behind boiler"
    },
    {
        id: 47,
        title: 'Common Fast Boiler to Mid Blue',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/SP2AH8J.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/O3uQEgp.jpg',
                info: 'Stand in this corner left of boiler'
            },
            {
                link: 'https://i.imgur.com/LgVe09j.jpg',
                info: 'We simply want to aim slightly left of this light'
            },
            {
                link: 'https://i.imgur.com/zZ7uSQL.jpg',
                info: 'Full charge, one bounce, shoot'
            }
        ],
        bounces: 1,
        charges: 3,
        info: "A super well known dart for back boiler to mid blue, this dart is often misused and makes you take time to get back on boiler. Try not to use this dart often, it's best use is for helping an opperator scale up mid if it's clear"
    },
    {
        id: 48,
        title: 'Boiler to Tube Wallbang',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/ioPnrDa.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/595tRQr.jpg',
                info: 'Stand pretty much anywhere on the ramp or even on top boiler (if it\'s not too far left)'
            },
            {
                link: 'https://i.imgur.com/2lU4jlI.jpg',
                info: 'We want to aim for around here on this white bar'
            },
            {
                link: 'https://i.imgur.com/0sVRw34.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A super easy dart to scan inside of tube, you can wallbang tube with anything including low penetration if you are a good angle like < 75 degrees"
    },
    {
        id: 49,
        title: 'Mid Pallet to A Belt Wallbang',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Defending,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/wGIElEx.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/BpEKIhX.jpg',
                info: 'Stand along this wall at A entrance but walk left until you cant see the wall'
            },
            {
                link: 'https://i.imgur.com/bKXHAnO.jpg',
                info: 'We want to aim the top right of the INSIDE of our chargebar at this cross section'
            },
            {
                link: 'https://i.imgur.com/DayqFnJ.jpg',
                info: 'Like this'
            },
            {
                link: 'https://i.imgur.com/JKH36GM.jpg',
                info: 'Full charge, one bounce, shoot'
            },
            {
                link: 'https://i.imgur.com/Np8SEuH.jpg',
                info: 'Run to mid pallet and you can wallbang belt with heavy penetration from there'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A super easy dart to scan inside of tube, you can wallbang tube with anything including low penetration if you are a good angle like < 75 degrees"
    },
    {
        id: 50,
        title: 'T Spawn to A Site Flex',
        difficulty: LineupDifficulty.Hard,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/h7h9iwq.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/99JmsgL.jpg',
                info: 'Stand on exactly this corner in the floor pattern'
            },
            {
                link: 'https://i.imgur.com/DpsbYEh.jpg',
                info: 'Aim for where my purple dot is'
            },
            {
                link: 'https://i.imgur.com/RgadZfA.jpg',
                info: 'Full charge, double bounce, shoot'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "A pretty hard dart but an absolute flex (and some small use case for faking though they can hear the arrow coming from behind and know you're not at A)"
    },
    {
        id: 51,
        title: 'T Spawn to B Crane',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/2hy5jXK.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/zzEaUMa.jpg',
                info: 'Stand against this bar in T spawn'
            },
            {
                link: 'https://i.imgur.com/QHvycBd.jpg',
                info: 'Align the bottom of your second charge bar with this spot'
            },
            {
                link: 'https://i.imgur.com/NbDVhxT.jpg',
                info: 'One charge, shoot'
            }
        ],
        bounces: 0,
        charges: 1,
        info: "An easy dart to scan some off angles at B when rotating to B"
    },
    {
        id: 52,
        title: 'T Spawn to Snowman',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/9qyH5cP.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/w5OE8fS.jpg',
                info: 'Stand in this corner outside B garage'
            },
            {
                link: 'https://i.imgur.com/8eJds1h.jpg',
                info: 'Look for this triangle'
            },
            {
                link: 'https://i.imgur.com/SSbKB7J.jpg',
                info: 'We want the dot below our drone bar to be on this triangle'
            },
            {
                link: 'https://i.imgur.com/5bb9ti9.jpg',
                info: 'Full charge, shoot'
            }
        ],
        bounces: 0,
        charges: 3,
        info: "A very slow dart for snowman so you can drone green and by the time you control site it scans for rotating enemies"
    },
    {
        id: 53,
        title: 'T Spawn to Boiler',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: 'https://i.imgur.com/DzKSoV6.jpg',
        video: '',
        images: [
            {
                link: 'https://i.imgur.com/ct0ylMF.jpg',
                info: 'Stand in this corner of T spawn'
            },
            {
                link: 'https://i.imgur.com/qEcXJ8S.jpg',
                info: 'Aim where the roof meets this railing'
            },
            {
                link: 'https://i.imgur.com/yyJuHRK.jpg',
                info: 'Two charges, shoot'
            }
        ],
        bounces: 0,
        charges: 2,
        info: "A simple dart from attacker spawn to boiler"
    },

];

export default icebox_data;