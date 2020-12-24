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
          padding-left: 2em;
        }
        .logoDer{
          text-align: right;
          grid-column: 2/2;
          padding-right: 2em;

        }
      `}</style>
    </nav>
  );
}
