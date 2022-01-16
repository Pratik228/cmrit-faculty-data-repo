export default function Header() {
  return (
    <div
      className="modal fade"
      id="confirmationModal"
      tabindex="-1"
      aria-labelledby="confirmationModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="confirmationModal">
              Confirm Submission
            </h5>
            <button
              type="button"
              className="btn-close btn__close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to submit the form ? This action will insert
            the following data in the database, once inserted you will not be
            able to delete the data.The data can be updated from the report
            page.
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light-primary font-weight-bold btn__close"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary font-weight-bold submit__data--btn"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
