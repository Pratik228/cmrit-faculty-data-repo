const form = document.getElementById("search-form");
const searchContainer = document.getElementById("container");
import fetchResult from "./apis/fetchResult";
import { startCase } from "lodash-es";

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(form).entries());
  fetchResult(formData);
  searchContainer.innerHTML = "";

  const headerMarkup = `
  <div class="container-fluid px-5 pt-2">
        <div class="row report-header">
            <div class="col-md-8 mb-3">
                <h4 class="mb-3 title">
                    Faculty Report
                </h4>
            </div>
            <div class="col-md-4 mb-3 report">
                <button onclick="window.print();" class="btn btn-sm btn-danger shadow-sm"><i
                        class="fas fa-download fa-sm text-white-50"></i>
                    Export as PDF</button>
            </div>

        </div>
    </div>
    `;
  searchContainer.insertAdjacentHTML("beforeend", headerMarkup);
});

export default function renderHeader(column) {
  let columnHeader = `<table class="table">
  <thead>
    <tr>`;

  column.forEach((col) => {
    let className = "";
    if (col === "description" || col === "id") {
      className = "d-none";
    }

    columnHeader += `<th class="${className}"scope="col">${startCase(
      col
    ).toUpperCase()}</th>`;
  });

  columnHeader += `   </tr>
                    </thead>
                  <tbody>`;

  searchContainer.insertAdjacentHTML("beforeend", columnHeader);
}
