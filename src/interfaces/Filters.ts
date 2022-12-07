import { LineupDifficulty, LineupSide, LineupUsecase } from './Lineup';

export interface Filters {
    difficulty: LineupDifficulty[],
    usecase: LineupUsecase[],
    side: LineupSide[]
}