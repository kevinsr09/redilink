import { Logo } from "../logo/Logo"
import { Container } from "../ui/Container"

export const Header = (): JSX.Element => {
  return (
    
    <header className="w-full border-b border-cod-gray-900/30 ">

    <Container as="div" className="flex justify-between items-center h-20 px-4  w-full md:w-4/5 md:mx-auto ">
    <Logo  className="text-2xl"/>
    
    
    <ul className="flex md:gap-8 text-cod-gray-400">
      <li className="hover:text-cod-gray-300">Sign in</li>
      <li className="hover:text-cod-gray-300">Sign up</li>
    </ul>
  </Container>
    </header>
  )
}