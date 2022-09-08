function show_hide_div(id_str) {
    var x = document.getElementById(id_str);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }