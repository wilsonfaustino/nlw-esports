import { FormEvent, useState } from 'react'
// import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, GameController } from 'phosphor-react'

import { Input } from './Form/Input'
import { Select } from './Form/Select'
import { WeekDaysToggle } from './Form/WeekDaysToggle'
import { Ad, Game } from '../@types'

interface CreateAdModalProps {
    games: Game[]
    onSend: (data: Ad) => void
    onClose: () => void
}

export function CreateAdModal(props: CreateAdModalProps) {
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [selectedGame, setSelectedGame] = useState<string>('')
    const [voiceChat, setVoiceChat] = useState<boolean | 'indeterminate'>(false)

    const handleCreateAd = async (event: FormEvent) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)

        const data = {
            name: formData.get('name'),
            yearsPlaying: Number(formData.get('yearsPlaying')),
            discord: formData.get('discord'),
            hourStart: formData.get('hoursStart'),
            hourEnd: formData.get('hoursEnd'),
            useVoiceChannel: voiceChat,
            weekDays: weekDays.map(Number),
        }

        try {
            props.onSend(data as Ad)
            props.onClose()
            // await axios.post(`http://localhost:3333/games/${selectedGame}/ads`, data)
            alert('Anúncio criado com sucesso!')
        } catch (error) {
            console.error(error)
            alert('Erro ao criar anúncio')
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 bg-black/60' />
            <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] bg-[#2A2634] py-8 px-10 text-white shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
                <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='game' className='font-semibold'>
                            Qual o game?
                        </label>
                        <Select options={props.games} value={selectedGame} onValueChange={setSelectedGame} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name' className='font-semibold'>
                            Nickname
                        </label>
                        <Input id='name' name='name' placeholder='Como te chamam dentro do game' />
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                            <Input
                                type='number'
                                id='yearsPlaying'
                                name='yearsPlaying'
                                placeholder='Tudo bem ser ZERO'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='discord'>Qual o seu discord?</label>
                            <Input type='text' id='discord' name='discord' placeholder='Usuario#0000' />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='weekDays'>Quando costuma jogar?</label>
                            <WeekDaysToggle values={weekDays} onChange={setWeekDays} />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor='hourStart'>Qual horário do dia?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input type='time' id='hoursStart' name='hoursStart' placeholder='De' />
                                <Input type='time' id='hoursEnd' name='hoursEnd' placeholder='Até' />
                            </div>
                        </div>
                    </div>

                    <label className='mt-2 flex items-center gap-2 text-sm'>
                        <Checkbox.Root
                            className='w-6 h-6 p-1 rounded bg-zinc-900'
                            checked={voiceChat}
                            onCheckedChange={setVoiceChat}
                        >
                            <Checkbox.Indicator>
                                <Check size={16} className='text-emerald-400' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>
                    <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close
                            type='button'
                            className='bg-zinc-500 rounded-md px-5 h-12 font-semibold hover:bg-zinc-600'
                        >
                            Cancelar
                        </Dialog.Close>
                        <button
                            type='submit'
                            className='bg-violet-500 rounded-md px-5 h-12 font-semibold flex items-center gap-3 hover:bg-violet-600'
                        >
                            <GameController size={24} />
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}
