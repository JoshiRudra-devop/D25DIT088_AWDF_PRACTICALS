function Header(props) {

    return (
        <header className="header">

            <h1>Student Portfolio</h1>

            <h2>{props.name}</h2>

        </header>
    );
}

export default Header;