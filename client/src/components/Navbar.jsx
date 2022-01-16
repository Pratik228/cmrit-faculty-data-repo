import logo from "../assets/img/college-logo.png";
import usericon from "../assets/img/undraw_profile.svg";

export default function NavBar() {
  return (
    <nav
      class="
navbar navbar-expand navbar-light
bg-white
topbar
sticky-top
shadow
"
    >
      <div id="img-logo" class="nav-item">
        <img class="img-profile img-logo" src={logo} />
      </div>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item home no-arrow">
          <a class="nav-link" href="/">
            <i class="fas fa-home home-icon"></i>
            <span id="home-text">Home</span>
          </a>
        </li>

        <li class="nav-item dropdown no-arrow">
          <a
            class="nav-link dropdown-toggle"
            id="userDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span id="home-text">Test</span>
            <img class="img-profile rounded-circle" src={usericon} />
          </a>
          <div
            class="
      dropdown-menu dropdown-menu-left
      shadow
      animated--grow-in
    "
            aria-labelledby="userDropdown"
          >
            <a class="dropdown-item" href="#">
              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <div class="dropdown-divider"></div>
            <a
              class="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#logoutModal"
            >
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
