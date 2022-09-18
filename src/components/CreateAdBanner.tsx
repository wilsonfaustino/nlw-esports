import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdbanner() {
    return (
        <div className='pt-1 self-stretch rounded-lg overflow-hidden mt-8 bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x'>
            <div className='bg-[#2A2634] px-8 py-6 rounded-t-lg flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl text-white font-black'>Não encontrou o seu duo</h2>
                    <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
                </div>
                <Dialog.Trigger className='py-3 px-4 bg-violet-500 hover:bg-violet-700 hover:translate-y-[-5px] transition-all duration-300 ease-in-out rounded text-white flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}
