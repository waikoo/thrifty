import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 100;
  padding: 0 20px;
  margin: 0 auto;
`;
export default function Home() {
  const router = useRouter();

  // Redirect to '/?b=true' on the client side
  useEffect(() => {
    router.push("/?b=true");
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Redirector />
    </div>
  );
}
