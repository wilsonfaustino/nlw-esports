import { useEffect, useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useKeenSlider } from 'keen-slider/react'

import './styles/main.css'
import 'keen-slider/keen-slider.min.css'
import logoNlw from './assets/logo-nlw-esports.svg'

import { GameBanner } from './components/GameBanner'
import { CreateAdbanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'

import { Ad, Game } from './@types'
import { gamesMock } from './mocks/games'

function App() {
    const [games, setGames] = useState<Game[]>([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const parallaxRef = useRef<HTMLDivElement>(null)
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 24,
        },
        breakpoints: {
            '(max-width: 768px)': {
                slides: {
                    perView: 3,
                    spacing: 12,
                },
            },
            '(max-width: 500px)': {
                slides: {
                    perView: 2,
                    spacing: 12,
                },
            },
        },
    })

    useEffect(() => {
        setGames(gamesMock)
    }, [])

    useEffect(() => {
        // prettier-ignore
        (function () {
            // Add event listener
            document.addEventListener('mousemove', parallax)
            const elem = parallaxRef.current
            // Motion happens here
            function parallax(e: MouseEvent) {
                let _w = window.innerWidth / 2
                let _h = 0
                let _mouseX = e.clientX
                let _mouseY = e.clientY
                let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${-10 - (_mouseY - _h) * 0.01}%`
                let _depth2 = `${50 - (_mouseX - _w) * 0.015}% ${0 - (_mouseY - _h) * 0.015}%`
                let x = `${_depth2}, ${_depth1}`
                if (elem) {
                    elem.style.backgroundPosition = x
                }
            }
        })();
    }, [])

    const handleCreateAd = (data: Ad) => {
        console.log(data)
    }

    const closeCreateAdModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div ref={parallaxRef} className='w-full h-[100vh] fixed top-0 bg-parallax bg-no-repeat'>
            <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 px-5 md:px-5'>
                <img src={logoNlw} alt='Logo NLW E Sports' className='animate-bounce' />
                <h1 className='md:text-6xl text-white font-black mt-20 text-4xl'>
                    Seu{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-400 via-purple-500 animate-gradient-x'>
                        duo
                    </span>{' '}
                    est?? aqui
                </h1>
                {games.length > 0 && (
                    <div ref={sliderRef} className='max-w-[1200px] mt-16 mx-auto overflow-hidden flex keen-slider'>
                        {games.map((game) => (
                            <GameBanner
                                key={game.id}
                                title={game.title}
                                id={game.id}
                                imgUrl={game.bannerUrl}
                                ads={game._count.ads}
                                addClass='keen-slider__slide'
                            />
                        ))}
                    </div>
                )}
                <Dialog.Root open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
                    <CreateAdbanner />

                    <CreateAdModal games={games} onSend={handleCreateAd} onClose={closeCreateAdModal} />
                </Dialog.Root>
            </div>
        </div>
    )
}

export default App
