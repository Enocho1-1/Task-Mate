import Logo from "../assests/to-do-list.png"
import "./header.css"

export const Header = () => {
  return (
    
    <header>
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <img src={Logo} alt="Taskmate Logo"/> 
                </div>
            </div>
        </nav>
    </header>
  )
}
