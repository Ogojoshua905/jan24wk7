const efosa = document.querySelectorAll('ul li')
const aramide = document.getElementsByTagName('p')[0]

const letters = aramide.textContent

//  alert(letters)
// length property

efosa[0].innerHTML = '<strong> Length property: </strong> '+ letters.length
efosa[1].innerHTML = '<strong> Length property: </strong> '+ letters[0]
efosa[2].innerHTML = '<strong> Length property: </strong> '+ letters[letters.length - 1]
efosa[3].innerHTML = '<strong> Index Of A Particular str : </strong>' + letters.indexOf('x')
efosa[4].innerHTML = '<strong> Index Of A Particular str : </strong>' + letters.indexOf('o', letters.indexOf('dog'))
efosa[5].innerHTML = '<strong> Index Of a Particular str :</strong>' + letters.lastIndexOf('o', letters.indexOf('jump'))
efosa[6].innerHTML = '<strong> Index Of a str that does not exist : </strong>' + letters.lastIndexOf('O')
efosa[7].innerHTML = '<strong> uppercase: </strong>' + letters.toUpperCase()
efosa[8].innerHTML = '<strong> lowercase: </strong>' + letters.toLowerCase()
efosa[9].innerHTML = '<strong> Find character at a particular index : </strong>' + letters.charAt(10)
efosa[10].innerHTML = '<strong> Replace \'jump\' with \'walk\': </strong>' + letters.replace('jump', 'walk')
efosa[11].innerHTML = '<strong> Replace \'o\' with \'0\': </strong>' + letters.replaceAll('o', '0')
efosa[12].innerHTML = '<strong> Coverts a str to an array : </strong>' + letters.split(' ')
efosa[13].innerHTML = '<strong> Cut a Part of a str </strong>' +letters.slice (letters.lastIndexOf('the'))
efosa[14].innerHTML = '<strong> Cut all str </strong>' +letters.slice()
efosa[15].innerHTML = '<strong> Add array Names </strong>' + ' '.concat('franc')
efosa[16].innerHTML = '<strong> add a name </strong>' + names.filter(name => name.endswith('p'))
efosa[18].innerHTML = '<strong> names that ends </strong>' + names.filter(name => name.endswit ('e') )
efosa[19].innerHTML = '<strong> names that includes with \'r\':</strong>' +names.filter(name => name.includes ('r'))



console.log(aramide.textContent)


