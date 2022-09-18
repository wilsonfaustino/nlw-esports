export type Game = {
    id: string
    title: string
    bannerUrl: string
    _count: {
        ads: number
    }
}

export type Ad = {
    name: string
    yearsPlaying: number
    discord: string
    hourStart: string
    hourEnd: string
    useVoiceChannel: boolean | 'indeterminate'
    weekDays: number[]
}
