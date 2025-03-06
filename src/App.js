/*

Header
    - Logo
    - Nav Items
Body
    -search
    -Restaurant Container
        *Restaurant Card
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src = ""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    {/* <li>Links</li> */}
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div class ="app">
            <Header/>
            {/* //Body  */}
            {/* Footer */}
        </div>
    )
}

// const root = React.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);