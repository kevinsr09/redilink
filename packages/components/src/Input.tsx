// eslint-disable-next-line import/no-unresolved

interface Props {
  children?: React.ReactNode
  className?: string
  placeholder?: string
  name?: string
  autoComplete?: string
}
export const Input = ({ className, placeholder, name, autoComplete }: Props): JSX.Element => {
  return <div className={`w-[600px] h-[60px] overflow-hidden relative ${className} `}>
  <input name={name}
   type="text"
   className="
    bg-cod-gray-800/30
    border-2
    border-cod-gray-500/50
    outline-none
    text-cod-gray-400
    text-lg
    w-full
    rounded-lg
    h-full
    transition-all
    ease-in-out
    ps-3 pr-14
    hover:text-cod-gray-300
    hover:border-cod-gray-500
    focus:text-cod-gray-300
    focus:boder-cod-gray-500
    placeholder:text-cod-gray-500/50
   " placeholder={placeholder ?? 'Search'}/>
  <button className="border-none absolute top-0 right-0 h-full rounded-lg aspect-square px-3 hover:text-primary-300">
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
