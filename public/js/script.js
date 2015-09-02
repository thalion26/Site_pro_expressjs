function open_large(div) {
  divopen = document.getElementById(div);
  divclass = divopen.className;
  console.log(divclass.indexOf("size-large"));
  if (divclass.indexOf("size-large") == -1){
    divopen.className = divopen.className + " size-large";
  }
}

function close_large(div) {
  event.stopPropagation();
  divopen = document.getElementById(div);
  divopen.className = "div";
} 