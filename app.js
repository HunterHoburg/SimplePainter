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

var no4 = document.getElementsByClassName('3 cell')[0];
no4.style.backgroundColor='#f99227';
no4.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#f99227';
  })
})

var no5 = document.getElementsByClassName('4 cell')[0];
no5.style.backgroundColor='#fcd325';
no5.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#fcd325';
  })
})

var no6 = document.getElementsByClassName('5 cell')[0];
no6.style.backgroundColor='#faf82c';
no6.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#faf82c';
  })
})

var no7 = document.getElementsByClassName('6 cell')[0];
no7.style.backgroundColor='#c6fe26';
no7.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#c6fe26';
  })
})

var no8 = document.getElementsByClassName('7 cell')[0];
no8.style.backgroundColor='#a0fb39';
no8.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#a0fb39';
  })
})

var no9 = document.getElementsByClassName('8 cell')[0];
no9.style.backgroundColor='#7af935';
no9.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#7af935';
  })
})
var no10 = document.getElementsByClassName('9 cell')[0];
no10.style.backgroundColor='#3cfa4f';
no10.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#3cfa4f';
  })
})
var no11 = document.getElementsByClassName('10 cell')[0];
no11.style.backgroundColor='#2dfc93';
no11.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#2dfc93';
  })
})
var no12 = document.getElementsByClassName('11 cell')[0];
no12.style.backgroundColor='#3bfac1';
no12.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#3bfac1';
  })
})
var no13 = document.getElementsByClassName('12 cell')[0];
no13.style.backgroundColor='#2ff9f9';
no13.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#2ff9f9';
  })
})
var no14 = document.getElementsByClassName('13 cell')[0];
no14.style.backgroundColor='#2eb5f7';
no14.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#2eb5f7';
  })
})
var no15 = document.getElementsByClassName('14 cell')[0];
no15.style.backgroundColor='#3595f9';
no15.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#3595f9';
  })
})
var no16 = document.getElementsByClassName('15 cell')[0];
no16.style.backgroundColor='#3269f9';
no16.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#3269f9';
  })
})
var no17 = document.getElementsByClassName('16 cell')[0];
no17.style.backgroundColor='#3139f6';
no17.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#3139f6';
  })
})
var no18 = document.getElementsByClassName('17 cell')[0];
no18.style.backgroundColor='#5e30f7';
no18.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#5e30f7';
  })
})
var no19 = document.getElementsByClassName('18 cell')[0];
no19.style.backgroundColor='#852af9';
no19.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#852af9';
  })
})

var no20 = document.getElementsByClassName('19 cell')[0];
no20.style.backgroundColor='#ab39fa';
no20.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#ab39fa';
  })
})

var no21 = document.getElementsByClassName('20 cell')[0];
no21.style.backgroundColor='#cf2ef7';
no21.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#cf2ef7';
  })
})

var no22 = document.getElementsByClassName('21 cell')[0];
no22.style.backgroundColor='#ed2efe';
no22.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#ed2efe';
  })
})

var no23 = document.getElementsByClassName('22 cell')[0];
no23.style.backgroundColor='#fc27d4';
no23.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#fc27d4';
  })
})

var no24 = document.getElementsByClassName('23 cell')[0];
no24.style.backgroundColor='#fa409f';
no24.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#fa409f';
  })
})

var no25 = document.getElementsByClassName('24 cell')[0];
no25.style.backgroundColor='#fc3269';
no25.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#fc3269';
  })
})

var no26 = document.getElementsByClassName('25 cell')[0];
no26.style.backgroundColor='#f53345';
no26.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#f53345';
  })
})

var eraser = document.getElementsByClassName('26 cell')[0];
eraser.style.backgroundColor='#ffffff';
eraser.addEventListener('click', function() {
  var red = document.addEventListener('click', function() {
    event.target.style.backgroundColor='#ffffff';
  })
})
//Possibly add undo history?
