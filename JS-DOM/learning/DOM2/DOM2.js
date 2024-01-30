console.log('helo');

console.log(document.URL);
console.log(document.domain);
console.log(document.body);
console.log(document.all);
console.log(document.all[6]);

document.title = 'kutta'

const body = document.body

//adding text
//1st type
body.append('hey ,sexy');
// body.appendChild('hehe');


//adding element like (div , p , etc...)
const div = document.createElement('div')
body.append(div)
console.log(document.body);

//adding text to thee elements
div.innerText = 'lado'
div.textContent = 'lado' //this is  for hide content 

const divitem = document.getElementById('d');
div.textContent = divitem //this is for test (see the wewb page)
console.log(divitem.innerText);
console.log(divitem.textContent);


//adding strog (bold) element to div 
const strog = document.createElement('strong')
strog.innerText = 'this is a bold text'
const strongdiv = document.createElement('div')
strongdiv.appendChild(strog);
body.append(strongdiv)

// strongdiv.innerHTML = '<p>bccc</p>'  //2nd way and easy way to add anything


//removing element
//getting element
const newdiv = document.getElementById('newdiv')
const onediv = document.getElementById('one')
const twodiv = document.getElementById('two')
//code for removing
// onediv.remove();
// newdiv.removeChild(onediv)   //second way or method

//removing by attrbute
console.log(twodiv.getAttribute('name'));

//adding or changing attribute value
twodiv.setAttribut('name', 'abab')
twodiv.id = 'hdhdhd'
//removing attribute
twodiv.removeAttribute('name')

            //class methods and properties 


