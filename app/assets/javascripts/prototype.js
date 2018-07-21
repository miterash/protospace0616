$(document).on 'turbolinks:load', ->
  $('#prototype_categories').tagit
    fieldName:   'category_list'
    singleField: true
  $('#prototype_categories').tagit()
  category_string = $("#category_hidden").val()
  try
    category_list = category_string.split(',')
    for tag in category_list
      $('#prototype_categories').tagit 'createTag', tag
  catch error
