interface Props {
  className?: string
}
export const Logo = ({ className }: Props): JSX.Element => {
  return <div className={`${className} text-cod-gray-200`}>
    Redilink
  </div>
}
