"use client";
import { Container, SButton } from "./components/styled";
interface HomeProps {
  bg?: string;
}

export default function Home({}: HomeProps) {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <h1>Styled-Components</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum
          voluptatum iure fugiat rem enim eius provident at reprehenderit
          reiciendis.
        </p>
      </Container>
    </>
  );
}
