/* eslint-disable import/no-unresolved */
import type { MetaFunction } from "@remix-run/cloudflare";
import { Logo } from "~/components/logo/Logo";
import { Container } from "~/components/ui/Container";

export const meta: MetaFunction = () => {
  return [
    { title: "RediLink" },
    {
      name: "description",
      content: "Shorten yours urls",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Container as="header" className=" flex justify-between items-center h-20 px-4  w-full md:w-4/5 md:mx-auto">
        <Logo />
        
        <ul className="flex md:gap-8">
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </Container>

      <Container as="main" className="mt-20 w-full px-4 md:w-4/5 md:mx-auto">
        <>

          <div className="text-center">

          <h1 className="text-5xl text-center font-bold inline-block bg-gradient-to-r from-text via-text to-primary  text-transparent bg-clip-text">
            Shorten yours urls
          </h1>
          </div>
        </>
      </Container>

      <Container as="main" className="mt-20 w-full px-4 md:w-4/5 md:mx-auto">
        <>
          <form action="">
          <label className="search-label">
    <input type="text" name="text" className="input" required placeholder="Type here..."/>
    <kbd className="slash-icon">/</kbd>
    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 56.966 56.966"  xmlSpace="preserve">
      <g>
        <path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="currentColor" data-original="#000000" className=""></path>
      </g>
    </svg>
  </label>
          </form>  

        </>
        </Container>
      </>
      
  );
}
