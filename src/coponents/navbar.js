import React from "react"
import { Link } from "react-router-dom"
function Navbar(){
return(
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <div class="navbar-brand text-light fw-bold" href="#">Crud App</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" style={{'marginLeft':'40rem'}}>
        <Link to="/" class="nav-link active text-light fw-bold " aria-current="page" href="#">Home</Link>
        <Link class="nav-link text-light fw-bold ms-5" to='/create'>Create user</Link>
      </div>
    </div>
  </div>
</nav>
)
}

export default Navbar