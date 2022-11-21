export interface ReconLineup {
    id: number,
    title: string,
    difficulty: ReconLineupDifficulty,
    side?: ReconLineupSide,
    usefulness?: ReconLineupUsefulness,
    map: string,
    result: string,
    video: string,
    images: ReconLineupImage[],
    bounces: 0 | 1 | 2,
    charges: 0 | 1 | 2 | 3,
    info: string

}

export enum ReconLineupDifficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
}

export enum ReconLineupSide {
    Attacking = 'attacking',
    Defending = 'defending',
}

export enum ReconLineupUsefulness {
    Essential = 'essential',
}

export interface ReconLineupImage {
    link: string,
    info?: string
}