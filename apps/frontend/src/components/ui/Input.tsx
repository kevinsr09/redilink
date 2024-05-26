// eslint-disable-next-line import/no-unresolved

import { Scissors } from '../icons/Scissors'

interface Props {
  children?: React.ReactNode
  className?: string
  placeholder?: string
}
export const Input = ({ className, placeholder }: Props): JSX.Element => {
  return <div className={`w-[600px] h-[60px] overflow-hidden relative ${className} `}>
  <input type="text" className="bg-bg-200 outline-none border-none text-text-400 text-lg w-full rounded-lg h-full transition-all ease-in-out ps-3 pr-14 
  hover:text-text-300 
  focus:text-text-300
  focus:bg-bg-200
   " placeholder={placeholder ?? 'Search'}/>
  <button className="border-none absolute top-0 right-0 h-full rounded-lg aspect-square px-3 hover:text-primary-300">
    <Scissors className="h-6 w-6 "></Scissors>
  </button>
</div>
}

/*

.search__input {
  background-color: var(--background);
  border: none;
  color: #646464;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: all ease-in-out .5s;
  padding-left: .8rem;
}
.search {
  width: 600px;
  height: 60px;
  overflow: hidden;
  position: relative;
}
.search__input:hover, .search__input:focus {
  box-shadow: 0 0 1em #00000013;
}

.search__input:focus {
  outline: none;
  background-color: #f0eeee;
}

.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: #928e8e;
}

.search__input:focus + .search__button  + .search__icon{
  fill: hsl(var(--accent));
}

.search__button {
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  height: 100%;
  aspect-ratio: 1/1;
}

.search__button:hover {
}

.search__icon {
  height: 1.3em;
  width: 1.3em;
  color: hsl(var(--primary));
}

*/