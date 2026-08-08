function Header(props) {

    return (
        <header className="header" style={{ backgroundColor: props.themeColor || "#1e88e5" }}>

            <h1>Student Portfolio</h1>

            <h2>{props.name}</h2>

        </header>
    );
}

export default Header;