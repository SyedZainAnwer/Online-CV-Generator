import { useEffect, useState } from 'react'
import arrow from '@/assets/icons/arrow-down.svg'

interface propsType {
  title?: string
  defaultValue?: { value: string; label: string }
  options: { value: string; label: string }[]
  className?: string
  placeholder?: string
  onChange?: (value: any) => void
}

const DropDown = ({
  options,
  title,
  className,
  onChange,
  defaultValue,
  placeholder,
}: propsType) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<
    (typeof options)[0] | null
  >(null)

  useEffect(() => {
    if (defaultValue) setSelectedOption(defaultValue)
  }, [defaultValue])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: (typeof options)[0]) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange && onChange(option)
  }
  return (
    <div className={`${className ? className : ''} w-full`}>
      {title && (
        <h4 className="font-medium text-sm text-black mb-2">{title}</h4>
      )}
      <div
        className="border border-1 rounded border-light_gray px-4 py-5 flex justify-between"
        onClick={toggleDropdown}
      >
        <span className="block font-medium text-sm text-black">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <img src={arrow} alt="icon" className="m-[4px]" />
      </div>
      {isOpen && (
        <ul className="w-full">
          {options.map((option) => (
            <li
              key={option.value}
              className="w-full cursor-pointer py-4 text-xs font-bold px-4 bg-white shadow-md"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDown
