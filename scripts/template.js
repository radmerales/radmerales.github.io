class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHtml = `
        <nav class="navbar sticky-top navbar-expand-sm navbar-light bg-light border-bottom" aria-label="Fifth navbar example">
        <div class="container">
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarsExample05">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown05">
                    <li><a class="dropdown-item" href="#">Software</a></li>
                    <li><a class="dropdown-item" href="#">Electronics</a></li>
                    <li><a class="dropdown-item" href="#">3D Models</a></li>
                    </ul>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Contact Me</button>
                </form>
            </div>
            </div>
        </div>
        </nav>
        `
    }
}

customElements.define('my-header', MyHeader);
