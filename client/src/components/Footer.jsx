export default function Footer() {
  return (
    <div>
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <p id="copyright-text">
              Copyright &copy; Data Repository - CMRIT 2021
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        class="btn btn-floating ripple"
        id="btn-back-to-top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>

      {/*Logout Modal*/}
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                class="close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <a class="btn btn-primary" href="/logout">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="overlay nav__hidden"></div>
    </div>
  );
}
