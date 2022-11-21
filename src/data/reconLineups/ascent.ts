import { ReconLineup, ReconLineupDifficulty, ReconLineupSide, ReconLineupUsefulness } from "../../interfaces/ReconLineup";

const ascent_data: ReconLineup[] = [
    {
        id: 1,
        title: 'B lobby/b main from B site',
        difficulty: ReconLineupDifficulty.Easy,
        side: ReconLineupSide.Defending,
        usefulness: ReconLineupUsefulness.Essential,
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
        difficulty: ReconLineupDifficulty.Easy,
        side: ReconLineupSide.Defending,
        usefulness: ReconLineupUsefulness.Essential,
        map: 'https://i.imgur.com/gM8Rm7X.jpg',
        result: "https://i.imgur.com/7nou3yY.png",
        video: '431576892',
        images: [
            {
                link: 'https://i.imgur.com/fqeNnRT.png'
            }
        ],
        bounces: 1,
        charges: 1,
        info: 'Darts on A site should land here, it scans all the angles around the black box, as well as back of site. Align the bottom left of the charge meter with the stone as shown in the picture. '
    }
];

export default ascent_data;