// Array for rows
var row = new Array();
// Array for naming rows/cells?
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array for numbering cells
var hundred = new Array;
for (var i = 0; i<100;i++) {
  hundred[i] = i;
}
// Assigning rows classes
var bod = document.getElementsByTagName('body')[0];
for (var i =0; i<50; i++) {
  row[i] = document.createElement('div');
  bod.appendChild(row[i])
  row[i].className=alphabet[i]+' row';
}
// Assigning cells classes
for (var k = 0; k < row.length; k++) {
  for (var j = 0; j < 100; j++) {
    var cells = new Array();
    cells[j] = document.createElement('div');
    cells[j].className=hundred[j]+' cell';
    row[k].appendChild(cells[j]);
  }
};
// Placing color palette and making it do things
var no1 = document.getElementsByClassName('0 cell')[0];
no1.style.backgroundColor='red';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='red';
  })
})

var no2 = document.getElementsByClassName('1 cell')[0];
no2.style.backgroundColor='#f44618';
no2.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#f44618';
  })
})

var no3 = document.getElementsByClassName('2 cell')[0];
no3.style.backgroundColor='#f96c11';
no3.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#f96c11';
  })
})

var no1 = document.getElementsByClassName('3 cell')[0];
no1.style.backgroundColor='#f99227';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#f99227';
  })
})

var no1 = document.getElementsByClassName('4 cell')[0];
no1.style.backgroundColor='#fcd325';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#fcd325';
  })
})

var no1 = document.getElementsByClassName('5 cell')[0];
no1.style.backgroundColor='#faf82c';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#faf82c';
  })
})

var no1 = document.getElementsByClassName('6 cell')[0];
no1.style.backgroundColor='#c6fe26';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#c6fe26';
  })
})

var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})

var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#7af935';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#7af935';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#3cfa4f';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#3cfa4f';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#2dfc93';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#2dfc93';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})
var no1 = document.getElementsByClassName('7 cell')[0];
no1.style.backgroundColor='#a0fb39';
no1.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})


//Possibly add undo history?
