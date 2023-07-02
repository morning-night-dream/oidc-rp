import { Button } from '@chakra-ui/react';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
      <Button onClick={() => signIn()}>Login with dream account</Button>
  );
}
