$(document).ready(() => {

  $('div.content button').click(() => {
    // grab the list
    const $list = $('#main-list');
    // get the contents of the input field
    const $input = $('#new-list-item');
    const inputValue = $input.val();

    // create a new li
    const $li = $('<li>');
    $li.text(inputValue);

    // append to list
    $list.prepend($li);

    // clear input field?
    $input.val('').focus();
  });

});
