export default function Navbar() {
  return (
    <nav>
      <div className="logoIzq">
        <img src="../logo.png" alt="logo" height="40px"  />
      </div>
      <div className="logoDer">
        <img src="../logo.png" alt="logo" height="40px" />
      </div>

      {/*Scope Styles*/}
      <style jsx>{`
        nav {
          display: grid;
          padding: 1em;
        }
        .logoIzq{
          text-align: left;
          grid-column: 1/2;
        }
        .logoDer{
          text-align: right;
          grid-column: 2/2;
        }
      `}</style>
    </nav>
  );
}
