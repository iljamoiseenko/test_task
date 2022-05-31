const openIcon = document.querySelectorAll('.footer__navigation--icon');
const accContent = document.querySelectorAll('.questions__accordion--content');

var accBtn = document.querySelectorAll('.acc-btn');
var accCont = document.querySelectorAll('.acc-content');
var accMinus = document.querySelectorAll('.minus');
var accBlock = document.querySelectorAll('.accordion-items');

var i;

for (i = 0; i < accBtn.length; i++) {
	accBtn[i].addEventListener("click", function() {
		this.classList.toggle("active-btn");
		var cont = this.nextElementSibling;
        cont.classList.toggle('active')

	});
    
}
for (i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener("click", function() {
        var prev = this.parentNode;
        prev.classList.toggle('active-block');
		
	});
}



var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
t = document.getElementsByClassName("test-select")

l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {

          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            this.classList.add
            
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
   
    }
  }
  for (i = 0; i < xl; i++) {
    
      
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
  
}

document.addEventListener("click", closeAllSelect);


var btns = document.getElementsByClassName('sort-dropdown');
var par = document.getElementsByClassName('sort-dropdown-items');

btns[0].onclick = function() {
  par[0].classList.toggle("open-dropdown");
}



