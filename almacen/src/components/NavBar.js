import React from 'react'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <b>Home</b>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/login">
              Login
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/search">
              Search
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/material-info">
              Material
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/material-reservation">
              Reservation
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/add-material">
              Add Material
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/request-material">
              Request
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-collapse collapse" id="navbarColor01">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item  ">
            <a className="nav-link " >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar