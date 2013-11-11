isOverview = false

Flowtime.showProgress true
Flowtime.parallaxInPx true
Flowtime.start()

Flowtime.addEventListener 'flowtimenavigation', (event) ->
  isOverview = event.isOverview
  return
, false

# press enter to next page and press shift-enter to previous page.
document.onkeypress = (event) ->
  # Enter key is 13
  if (event.keyCode or event.which) is 13 and not isOverview
    if event.shiftKey then Flowtime.prev false else Flowtime.next false
  return
