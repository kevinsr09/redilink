import type { JSX } from 'astro/jsx-runtime'

interface Props {
  className?: string
}
export const Scissors = ({ className }: Props): JSX.Element => (

  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="7" cy="18" r="3"/><path d="M15 15L7 3m2 12l3-4.5M17 3l-3 4.5"/><circle cx="17" cy="18" r="3"/></g></svg>
)
