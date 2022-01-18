document$.subscribe(function() {
    var tables = document.querySelectorAll(".md-typeset table:not([class])")
    tables.forEach(function(table) {
      new Tablesort(table)
    })
  })
