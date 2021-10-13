import "tailwindcss/tailwind.css";
import { Layout } from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
