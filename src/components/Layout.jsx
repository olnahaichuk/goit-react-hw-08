import { Suspense } from "react"
import AppBar from "./AppBar/AppBar"


const Layout = ({children}) => {
  return (
    <div>
          <AppBar />
         <Suspense fallback="Loading ..."> {children}</Suspense>
    </div>
  )
}

export default Layout
