import * as SelectRadix from '@radix-ui/react-select'
import { CaretDown, CaretUp, Check } from 'phosphor-react'

export interface SelectProps {
    options?: { id: string; title: string }[]
    value?: string
    onValueChange?: (value: string) => void
}

export function Select({ options, value, onValueChange }: SelectProps) {
    return (
        <SelectRadix.Root onValueChange={onValueChange}>
            <SelectRadix.Trigger className='bg-zinc-900 py-3 px-4 rounded text-sm radix-placeholder:text-zinc-500 flex items-center justify-between'>
                <SelectRadix.Value placeholder='Selecione o Game que deseja jogar' />
                <SelectRadix.Icon>
                    <CaretDown size={24} />
                </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
                <SelectRadix.Content>
                    <SelectRadix.ScrollUpButton>
                        <CaretUp size={16} />
                    </SelectRadix.ScrollUpButton>
                    <SelectRadix.Viewport className='p-2 bg-slate-200 rounded-lg shadow-lg'>
                        <SelectRadix.Group>
                            {options?.map((option) => (
                                <SelectRadix.Item
                                    key={option.id}
                                    value={option.id}
                                    className='flex gap-2 items-center text-violet-500 px-6 relative user-select-none rounded focus:bg-violet-500 focus:text-white'
                                >
                                    <SelectRadix.ItemText>{option.title}</SelectRadix.ItemText>
                                    <SelectRadix.ItemIndicator className='absolute left-0 inline-flex items-center justify-center'>
                                        <Check size={16} />
                                    </SelectRadix.ItemIndicator>
                                </SelectRadix.Item>
                            ))}
                        </SelectRadix.Group>
                    </SelectRadix.Viewport>
                    <SelectRadix.ScrollDownButton>
                        <CaretDown size={16} />
                    </SelectRadix.ScrollDownButton>
                </SelectRadix.Content>
            </SelectRadix.Portal>
        </SelectRadix.Root>
    )
}
