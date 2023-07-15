import { Button, Text } from '@chakra-ui/react';
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const session = useSession();

  if (session.status === 'authenticated') {
    return <Text fontSize='5xl'>Welcome! {session.data.user?.name}</Text>
  }

  return (
      <Button onClick={() => signIn()}>Login with dream account</Button>
  );
}
