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
      <Container as="header" className=" flex justify-between items-center  h-20  mx-7">
        <>
        <Logo />
        <ul className="flex">
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
        </>
      </Container>
      
  );
}
