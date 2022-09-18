export interface GameBannerProps {
    id: string
    title: string
    imgUrl: string
    ads: number
    addClass?: string
}

export function GameBanner(props: GameBannerProps) {
    const adsText = props.ads === 0 ? `Sem anúncios` : `${props.ads} anúncio${props.ads > 1 ? 's' : ''}`

    // const gameUrl = `/games/${props.id}`
    const gameUrl = `#`

    return (
        <a href={gameUrl} className={`relative rounded-lg overflow-hidden ${props.addClass}`}>
            <img src={props.imgUrl} alt={props.title} className='w-full object-fill' />
            <div className='w-full pt-16 pb-4 px-4 bg-game-box-gradient hover:pt-24 transition-all duration-700 ease-in-out absolute bottom-0 left-0 right-0'>
                <strong className='font-bold text-white block'>{props.title}</strong>
                <span className='text-zinc-300 text-sm block'>{adsText}</span>
            </div>
        </a>
    )
}
