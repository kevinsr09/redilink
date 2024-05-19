// eslint-disable-next-line import/no-unresolved

import { Scissors } from '../icons/Scissors'

interface Props {
  children?: React.ReactNode
  className?: string
  placeholder?: string
}
export const Input = ({ className, placeholder }: Props): JSX.Element => {
  return <div className={`search ${className}`}>
  <input type="text" className="search__input pr-14" placeholder={placeholder ?? 'Search'}/>
  <button className="search__button">
    <Scissors className="search__icon"></Scissors>
  </button>
</div>
}
