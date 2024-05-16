/* eslint-disable import/no-unresolved */
import type { MetaFunction } from "@remix-run/cloudflare";
import { Logo } from "~/components/logo/Logo";
import { Container } from "~/components/ui/Container";
import { Input } from "~/components/ui/Input";

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
            <Input className="w-2/4 mx-auto"
              placeholder="https://rumos.xyz"
            ></Input>
          </form>  

        </>
        </Container>
      </>
      
  );
}
