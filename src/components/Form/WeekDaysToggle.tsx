import * as ToggleGroup from '@radix-ui/react-toggle-group'

export interface WeekDaysToggleProps {
    values?: string[]
    onChange?: (values: string[]) => void
}
const weekdaysValues = [
    { value: '0', title: 'Domingo', label: 'D' },
    { value: '1', title: 'Segunda', label: 'S' },
    { value: '2', title: 'Terça', label: 'T' },
    { value: '3', title: 'Quarta', label: 'Q' },
    { value: '4', title: 'Quinta', label: 'Q' },
    { value: '5', title: 'Sexta', label: 'S' },
    { value: '6', title: 'Sábado', label: 'S' },
]

export function WeekDaysToggle(props: WeekDaysToggleProps) {
    return (
        <ToggleGroup.Root
            type='multiple'
            className='grid grid-cols-4 gap-2'
            value={props.values}
            onValueChange={props.onChange}
        >
            {weekdaysValues.map((weekday) => (
                <ToggleGroup.Item
                    key={`${weekday.value}-${weekday.title}`}
                    className='w-8 h-8 rounded bg-zinc-900 group radix-state-on:bg-violet-500'
                    value={weekday.value}
                    title={weekday.title}
                >
                    {weekday.label}
                </ToggleGroup.Item>
            ))}
        </ToggleGroup.Root>
    )
}
