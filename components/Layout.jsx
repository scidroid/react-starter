import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useUser } from '@auth0/nextjs-auth0'

export const Layout = ({ children }) => {
  const { isLoading } = useUser();
  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}