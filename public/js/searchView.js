const form = document.getElementById("search-form");
const searchContainer = document.getElementById("container");
import fetchResult from "./apis/fetchResult";

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(form).entries());
  fetchResult(formData);
  //Clear pages

  // const headerMarkup = `
  // <div class="container-fluid px-5 pt-2">
  //       <div class="row report-header">
  //           <div class="col-md-8 mb-3">
  //               <h4 class="mb-3 title">
  //                   ${report} REPORT
  //               </h4>
  //           </div>
  //           <div class="col-md-4 mb-3 report">
  //               <button onclick="window.print();" class="btn btn-sm btn-danger shadow-sm"><i
  //                       class="fas fa-download fa-sm text-white-50"></i>
  //                   Export as PDF</button>
  //           </div>

  //       </div>
  //   </div>
  //   `;
  // // searchContainer.insertAdjacentHTML("beforeend", headerMarkup);
  // console.log("FORM SUBMITTED");
});

export default function renderHeader(data) {
  searchContainer.innerHTML = "";
  let headerMarkup = `<table class="table">
  <thead>
    <tr>`;

  Object.entries(data).forEach(([key, value]) => {
    headerMarkup += `<th>${key}</th>`;
  });

  headerMarkup += `   </tr>
                    </thead>
                  <tbody>`;

  searchContainer.insertAdjacentHTML("beforeend", headerMarkup);
}
