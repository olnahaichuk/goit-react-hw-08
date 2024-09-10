import AppBar from "./AppBar"


const Layout = ({children}) => {
  return (
    <div>
          <AppBar />
          {children}
    </div>
  )
}

export default Layout
