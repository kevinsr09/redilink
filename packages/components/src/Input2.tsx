interface Props {
  children?: React.ReactNode
  className?: string
  placeholder?: string,
  name?: string
  autoComplete?: string
}
export const Input2 = ({ className, placeholder, name, autoComplete }: Props) => {
  return (
    <div className={className + " max-w-sm space-y-3"}>
    <input type="text" name={name} className="py-2 px-4 block w-full
    border-2
    border-cod-gray-900/50
    rounded-lg text-lg  disabled:opacity-50 disabled:pointer-events-none bg-cod-gray-800/20 
    hover:border-cod-gray-700 
    focus:border-cod-gray-300
    focus:shadow-cod-gray-700
    placeholder:text-cod-gray-500
    transition-colors ease-in-out
    " placeholder={placeholder} />
  </div>
  )
}