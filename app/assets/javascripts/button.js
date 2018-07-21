$(document).on("turbolinks:load", function() {
$(function() {
  $('.dropdown').on("click", function(){
    $(".action").show();
    // var html = `
    //             <ul>
    //               <li>
    //                 <a href="/prototypes/#{@prototype.id}/edit">edit</a>
    //               </li>
    //               <li>
    //                 <a rel="nofollow" data-method="delete">Delete</a>
    //               </li>
    //             </ul>
    //           `
    // $('.btn.btn-default.dropdown-toggle').append(html);
  });
});
});
