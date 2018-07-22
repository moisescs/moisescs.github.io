//Tabs

function clickExperiencia() {
    document.getElementById("tabExperiencia").click();
}

function openTabFunction(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}

//Collapse fomation

function collapseFunction(id) {
    var x = document.getElementById(id);
    var collapseItem = document.getElementsByClassName('collapse');

    for (var i = 0; i < collapseItem.length; i++) {
        collapseItem[i].className = x.className.replace("w3-show", "w3-hide");
    }
    
    
    if (x.className.indexOf("w3-show") == -1) {
        //x.className += " w3-show";
        x.className = x.className.replace("w3-hide", "w3-show");
        
    } else { 
        x.className = x.className.replace("w3-show", "w3-hide");
    }
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Ajustar altura das colunas do layout da pagina
function heightColsFunction(col1Id, col2Id){
    var heighCol1 = document.getElementById(col1Id).offsetHeight;
    var heighCol2 = document.getElementById(col2Id).offsetHeight;
    
    if(heighCol1 < heighCol2)
    {
        document.getElementById(col1Id).style.height = heighCol2 + "px";
    } 
    else if (heighCol2 < heighCol1)
    {
        document.getElementById(col2Id).style.height = heighCol1 + "px";
    }
}
