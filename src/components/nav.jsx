const Nav = () => {
    return (
        <nav className={"container"}>
            <img src="/images/brand_logo.png" alt="logo"/>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    );
}

export default Nav;