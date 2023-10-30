export default function Navigation(){
    return(
        <div>
        <header className="container-fluid bg-success">
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <a className="navbar-brand text-white" href="index.html">Pipedrive</a>
    
            <div className="" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-nav">
                  <a className="nav-link text-white" href="tribes">Tribes</a>
                </li>
                <li className="nav-item active">
                        <a className="nav-link text-white" href="employees">Employees</a>
                </li>
              </ul>
            </div>
          </nav>
    
        </header>
      </div>
    )
}