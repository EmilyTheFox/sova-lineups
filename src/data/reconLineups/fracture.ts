import { Lineup, LineupDifficulty, LineupSide } from "../../interfaces/Lineup";

const fracture_data: Lineup[] = [
    {
        id: 1,
        title: '',
        difficulty: LineupDifficulty.Easy,
        side: LineupSide.Attacking,
        usecase: {
            essential: false,
            faking: false,
            retake: false,
        },
        map: '',
        result: '',
        video: '',
        images: [
            {
                link: '',
                info: ''
            }
        ],
        bounces: 0,
        charges: 0,
        info: ""
    }
];

export default fracture_data;