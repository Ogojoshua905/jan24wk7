const para = document.querySelectorAll('p')

let num1 = 20
let num2 = 5
let num3 = 14
let num4 = 28

para[0].innerHTML = '<em> Add num1 and num2 </em>: ' + (num1 + num2)

para[1].innerHTML = '<em> Substract num2 from num4 </em>: ' + (num4 - num2)

para[2].innerHTML = '<em> Divide numm4 by num3 </em>: ' + (num4 / num3)

para[3].innerHTML = '<em> Multiply numm3 by 10 </em>: ' + ( num3 * 10)

para[4].innerHTML = '<em> Divide num2 by num3 </em>: ' + (num2 / num3)

para[5].innerHTML = '<em> num1 to the power of 4 </em>: ' + (num1 ** 4)

para[6].innerHTML = '<em> Remainder to the num1 divided by num3 </em>: ' + (num1 % num3)