import { useEffect, useRef, useState } from 'react'
import { FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi'
import { IconType } from 'react-icons'
import './styles.scss'

export interface SelectOption {
  label: string
  value: string
  icon: IconType
  iconColor?: string
}

export interface SelectProps {
  label: string
  emptyValueLabel: string
  name: string
  options: SelectOption[]
  onChangeOption?: (option: SelectOption) => void
}

export function Select({
  label,
  emptyValueLabel,
  name,
  options,
  onChangeOption,
}: SelectProps) {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null,
  )

  const optionsButton = useRef<HTMLInputElement>(null)

  function handleChangeOption(option: SelectOption) {
    return () => {
      setSelectedOption(option)
      onChangeOption?.(option)
      optionsButton.current?.click()
    }
  }

  function handleCloseWhenEsc(event: globalThis.KeyboardEvent) {
    const isEsc = event.key === 'Escape'

    if (isEsc) {
      const isOpened = optionsButton.current?.checked

      if (isOpened) {
        optionsButton.current?.click()
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleCloseWhenEsc)

    return () => {
      window.removeEventListener('keydown', handleCloseWhenEsc)
    }
  }, [])

  return (
    <div className="select-container">
      <div id="select">
        <label htmlFor="options-view-button">{label}</label>
        <input type="checkbox" id="options-view-button" ref={optionsButton} />

        <div id="select-button">
          <div id="selected-value">
            {selectedOption ? selectedOption.label : emptyValueLabel}
          </div>

          <div id="chevrons">
            <FiChevronDown id="chevron-down" size={20} />
            <FiChevronUp id="chevron-up" size={20} />
          </div>
        </div>
      </div>

      <ul id="options">
        {options.map((option, index) => (
          <li className="option" key={String(index)}>
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={handleChangeOption(option)}
            />

            <option.icon color={option.iconColor ?? '#FFF'} />
            <span className="label">{option.label}</span>
            <FiCheck />
          </li>
        ))}
      </ul>
    </div>
  )
}
