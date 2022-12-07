export interface Lineup {
    id: number,
    title: string,
    difficulty: LineupDifficulty,
    side: LineupSide,
    usecase: {
        essential: Boolean,
        roundStart: Boolean,
        retake: Boolean
    }
    map: string,
    result: string,
    video: string,
    images: LineupImage[],
    bounces: 0 | 1 | 2,
    charges: 0 | 1 | 2 | 3,
    info: string

}

export enum LineupDifficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
}

export enum LineupSide {
    Attacking = 'attacking',
    Defending = 'defending',
}

export enum LineupUsecase {
    Essential = 'essential',
    Retake = 'retake',
    RoundStart = 'round start'
}

export interface LineupImage {
    link: string,
    info?: string
}