import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const bind_data: Lineup[] = [
    {
        id: 1,
        title: 'Hookah from B short',
        difficulty: LineupDifficulty.Medium,
        side: LineupSide.Attacking,
        usecase: {
            essential: true,
            faking: false,
            retake: false,
        },
        map: 'https://i.imgur.com/BtBpdy6.jpg',
        result: "https://i.imgur.com/WOLFL7M.png",
        video: 'https://i.imgur.com/Y53nukw.mp4',
        images: [
            {
                link: 'https://i.imgur.com/MLNZqD6.jpg',
                info: 'Line up against the wall so that the white space to the left of the brick disappears behind the wall.'
            },
            {
                link: 'https://i.imgur.com/tS3QV6c.png',
                info: 'Then aim your crosshair on the left side of the crate about half way up.'
            }
        ],
        bounces: 2,
        charges: 3,
        info: "There are plenty of hookah darts out there but this one fully clears Hookah 100% of the time. If they continue to hold hookah, you can slow push and be ready to wall bang the couch. It's relatively safe since you're darting from the left hand side of B short. Careful of the red spot on the map, it's an off angle and that's the only spot that won't be scanned. I've yet to see someone hold from there, but be careful."
    }
];

export default bind_data;