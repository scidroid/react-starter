import { useUser } from "@auth0/nextjs-auth0";

export default function app() {
  const { isAuthenticated, user } = useUser();

  if (!isAuthenticated) {
    return (
      <>
        <h1>Please login</h1>
      </>
    );
  }

  return (
    <>
      <h1>Hello {user.name}</h1>
    </>
  );
}
