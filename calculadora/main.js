
function calculadora() {

// div #4682B4 
var criaDiv = document.createElement('div')
criaDiv.setAttribute('id', 'divPrincipal')
criaDiv.style.width = "145px"
criaDiv.style.height = "220px"
criaDiv.style.background = "#ADD8E6"
criaDiv.style.borderRadius = "5px" 
criaDiv.style.border = "2px solid #4169E1"
criaDiv.style.position = "absolute"
criaDiv.style.left = "50%"
criaDiv.style.marginLeft = "-100px"
principal.appendChild(criaDiv)

// display 
var criaDisplay = document.createElement('input')
criaDiv.appendChild(criaDisplay)
criaDisplay.style.width = "131px"
criaDisplay.style.height = "30px"
criaDisplay.style.borderRadius = "5px"
criaDisplay.style.border = "none"
criaDisplay.style.position = "absolute"
criaDisplay.style.margin = "5px"
criaDisplay.style.border = "2px solid #87CEEB"
criaDisplay.setAttribute("id","display")

//botao0
var botao0 = document.createElement('button')
var text0 = document.createTextNode('0')
botao0.appendChild(text0)
botao0.style.fontSize = "20px"
botao0.style.textAlign = "center"
botao0.style.color = "white"
criaDiv.appendChild(botao0)
botao0.style.width = "65px"
botao0.style.height = "30px" 
botao0.style.background = "#20B2AA"
botao0.style.position = "absolute"
botao0.style.borderRadius = "5px"
botao0.style.marginTop =  "185px"
botao0.style.marginLeft = "5px"
botao0.onclick = function(){
   document.querySelector('#display').value += '0'
}

//botaoPonto
var botaoPonto = document.createElement('button')
var textPonto = document.createTextNode('.')
botaoPonto.appendChild(textPonto)
botaoPonto.style.fontSize = "20px"
botaoPonto.style.textAlign = "center"
botaoPonto.style.color = "white"
criaDiv.appendChild(botaoPonto)
botaoPonto.style.width = "30px"
botaoPonto.style.height = "30px" 
botaoPonto.style.background = "#20B2AA"
botaoPonto.style.position = "absolute"
botaoPonto.style.borderRadius = "5px"
botaoPonto.style.marginTop =  "185px"
botaoPonto.style.marginLeft = "75px"
botaoPonto.onclick = function(){
   document.querySelector('#display').value += '.'
}

//botaoIgual
var botaoIgual = document.createElement('button')
var textIgual = document.createTextNode('=')
botaoIgual.appendChild(textIgual)
botaoIgual.style.fontSize = "20px"
botaoIgual.style.textAlign = "center"
botaoIgual.style.color = "white"
criaDiv.appendChild(botaoIgual )
botaoIgual.style.width = "30px"
botaoIgual.style.height = "65px" 
botaoIgual.style.background = "#FF6347"
botaoIgual.style.position = "absolute"
botaoIgual.style.borderRadius = "5px"
botaoIgual.style.marginTop =  "150px"
botaoIgual.style.marginLeft = "110px"
botaoIgual.onclick = function(){
   var resultado = document.querySelector('#display').value
   document.querySelector('#display').value = ""
   document.querySelector('#display').value = eval(resultado)
}

//botao1
var botao1 = document.createElement('button')
var text1 = document.createTextNode('1')
botao1.appendChild(text1)
botao1.style.fontSize = "20px"
botao1.style.textAlign = "center"
botao1.style.color = "white"
criaDiv.appendChild(botao1)
botao1.style.width = "30px"
botao1.style.height = "30px" 
botao1.style.background = "#20B2AA"
botao1.style.position = "absolute"
botao1.style.borderRadius = "5px"
botao1.style.marginTop =  "150px"
botao1.style.marginLeft = "5px"
botao1.onclick = function(){
   document.querySelector('#display').value += '1'
}

//botao2
var botao2 = document.createElement('button')
var text2 = document.createTextNode('2')
botao2.appendChild(text2)
botao2.style.fontSize = "20px"
botao2.style.textAlign = "center"
botao2.style.color = "white"
criaDiv.appendChild(botao2)
botao2.style.width = "30px"
botao2.style.height = "30px" 
botao2.style.background = "#20B2AA"
botao2.style.position = "absolute"
botao2.style.borderRadius = "5px"
botao2.style.marginTop =  "150px"
botao2.style.marginLeft = "40px"
botao2.onclick = function(){
   document.querySelector('#display').value += '2'
}

//botao3
var botao3 = document.createElement('button')
var text3 = document.createTextNode('3')
botao3.appendChild(text3)
botao3.style.fontSize = "20px"
botao3.style.textAlign = "center"
botao3.style.color = "white"
criaDiv.appendChild(botao3)
botao3.style.width = "30px"
botao3.style.height = "30px" 
botao3.style.background = "#20B2AA"
botao3.style.position = "absolute"
botao3.style.borderRadius = "5px"
botao3.style.marginTop =  "150px"
botao3.style.marginLeft = "75px"
botao3.onclick = function(){
   document.querySelector('#display').value += '3'
}

//botao4
var botao4 = document.createElement('button')
var text4 = document.createTextNode('4')
botao4.appendChild(text4)
botao4.style.fontSize = "20px"
botao4.style.textAlign = "center"
botao4.style.color = "white"
criaDiv.appendChild(botao4)
botao4.style.width = "30px"
botao4.style.height = "30px" 
botao4.style.background = "#20B2AA"
botao4.style.position = "absolute"
botao4.style.borderRadius = "5px"
botao4.style.marginTop =  "115px"
botao4.style.marginLeft = "5px"
botao4.onclick = function(){
   document.querySelector('#display').value += '4'
}

//botao5
var botao5 = document.createElement('button')
var text5 = document.createTextNode('5')
botao5.appendChild(text5)
botao5.style.fontSize = "20px"
botao5.style.textAlign = "center"
botao5.style.color = "white"
criaDiv.appendChild(botao5)
botao5.style.width = "30px"
botao5.style.height = "30px" 
botao5.style.background = "#20B2AA"
botao5.style.position = "absolute"
botao5.style.borderRadius = "5px"
botao5.style.marginTop =  "115px"
botao5.style.marginLeft = "40px"
botao5.onclick = function(){
   document.querySelector('#display').value += '5'
}

//botao6
var botao6 = document.createElement('button')
var text6 = document.createTextNode('6')
botao6.appendChild(text6)
botao6.style.fontSize = "20px"
botao6.style.textAlign = "center"
botao6.style.color = "white"
criaDiv.appendChild(botao6)
botao6.style.width = "30px"
botao6.style.height = "30px" 
botao6.style.background = "#20B2AA"
botao6.style.position = "absolute"
botao6.style.borderRadius = "5px"
botao6.style.marginTop =  "115px"
botao6.style.marginLeft = "75px"
botao6.onclick = function(){
   document.querySelector('#display').value += '6'
}

//botaoX
var botaoX = document.createElement('button')
var textX = document.createTextNode('×')
botaoX.appendChild(textX)
botaoX.style.fontSize = "20px"
botaoX.style.textAlign = "center"
botaoX.style.color = "white"
criaDiv.appendChild(botaoX)
botaoX.style.width = "30px"
botaoX.style.height = "30px" 
botaoX.style.background = "#20B2AA"
botaoX.style.position = "absolute"
botaoX.style.borderRadius = "5px"
botaoX.style.marginTop =  "115px"
botaoX.style.marginLeft = "110px"
botaoX.onclick = function(){
   document.querySelector('#display').value += '*'
}

//botao7
var botao7 = document.createElement('button')
var text7 = document.createTextNode('7')
botao7.appendChild(text7)
botao7.style.fontSize = "20px"
botao7.style.textAlign = "center"
botao7.style.color = "white"
criaDiv.appendChild(botao7)
botao7.style.width = "30px"
botao7.style.height = "30px" 
botao7.style.background = "#20B2AA"
botao7.style.position = "absolute"
botao7.style.borderRadius = "5px"
botao7.style.marginTop =  "80px"
botao7.style.marginLeft = "5px"
botao7.onclick = function(){
   document.querySelector('#display').value += '7'
}

//botao8
var botao8 = document.createElement('button')
var text8 = document.createTextNode('8')
botao8.appendChild(text8)
botao8.style.fontSize = "20px"
botao8.style.textAlign = "center"
botao8.style.color = "white"
criaDiv.appendChild(botao8)
botao8.style.width = "30px"
botao8.style.height = "30px" 
botao8.style.background = "#20B2AA"
botao8.style.position = "absolute"
botao8.style.borderRadius = "5px"
botao8.style.marginTop =  "80px"
botao8.style.marginLeft = "40px"
botao8.onclick = function(){
   document.querySelector('#display').value += '8'
}

//botao9
var botao9 = document.createElement('button')
var text9 = document.createTextNode('9')
botao9.appendChild(text9)
botao9.style.fontSize = "20px"
botao9.style.textAlign = "center"
botao9.style.color = "white"
criaDiv.appendChild(botao9)
botao9.style.width = "30px"
botao9.style.height = "30px" 
botao9.style.background = "#20B2AA"
botao9.style.position = "absolute"
botao9.style.borderRadius = "5px"
botao9.style.marginTop =  "80px"
botao9.style.marginLeft = "75px"
botao9.onclick = function(){
   document.querySelector('#display').value += '9'
}

//botaoDividir
var botaoDividir = document.createElement('button')
var textDividir = document.createTextNode('÷')
botaoDividir.appendChild(textDividir)
botaoDividir.style.fontSize = "20px"
botaoDividir.style.textAlign = "center"
botaoDividir.style.color = "white"
criaDiv.appendChild(botaoDividir)
botaoDividir.style.width = "30px"
botaoDividir.style.height = "30px" 
botaoDividir.style.background = "#20B2AA"
botaoDividir.style.position = "absolute"
botaoDividir.style.borderRadius = "5px"
botaoDividir.style.marginTop =  "80px"
botaoDividir.style.marginLeft = "110px"
botaoDividir.onclick = function(){
   document.querySelector('#display').value += '/'
}

//botaoCE
var botaoCE = document.createElement('button')
var textCE = document.createTextNode('CE')
botaoCE.appendChild(textCE)
botaoCE.style.fontSize = "18px"
botaoCE.style.textAlign = "center"
botaoCE.style.color = "white"
criaDiv.appendChild(botaoCE)
botaoCE.style.width = "30px"
botaoCE.style.height = "30px" 
botaoCE.style.background = "#ADFF2F"
botaoCE.style.position = "absolute"
botaoCE.style.borderRadius = "5px"
botaoCE.style.marginTop =  "45px"
botaoCE.style.marginLeft = "5px"
botaoCE.onclick = function(){
   document.querySelector('#display').value = ''
}
//botaoPorcento
var botaoPorcento = document.createElement('button')
var textPorcento = document.createTextNode('%')
botaoPorcento.appendChild(textPorcento)
botaoPorcento.style.fontSize = "15px"
botaoPorcento.style.textAlign = "center"
botaoPorcento.style.color = "white"
criaDiv.appendChild(botaoPorcento)
botaoPorcento.style.width = "30px"
botaoPorcento.style.height = "30px" 
botaoPorcento.style.background = "#20B2AA"
botaoPorcento.style.position = "absolute"
botaoPorcento.style.borderRadius = "5px"
botaoPorcento.style.marginTop =  "45px"
botaoPorcento.style.marginLeft = "40px"
botaoPorcento.onclick = function(){
   document.querySelector('#display').value += '%'
}

//botaoMais
var botaoMais = document.createElement('button')
var textMais = document.createTextNode('+')
botaoMais.appendChild(textMais)
botaoMais.style.fontSize = "20px"
botaoMais.style.textAlign = "center"
botaoMais.style.color = "white"
criaDiv.appendChild(botaoMais)
botaoMais.style.width = "30px"
botaoMais.style.height = "30px" 
botaoMais.style.background = "#20B2AA"
botaoMais.style.position = "absolute"
botaoMais.style.borderRadius = "5px"
botaoMais.style.marginTop =  "45px"
botaoMais.style.marginLeft = "75px"
botaoMais.onclick = function(){
   document.querySelector('#display').value += '+'
}

//botaoMenos
var botaoMenos = document.createElement('button')
var textMenos = document.createTextNode('-')
botaoMenos.appendChild(textMenos)
botaoMenos.style.fontSize = "20px"
botaoMenos.style.textAlign = "center"
botaoMenos.style.color = "white"
criaDiv.appendChild(botaoMenos)
botaoMenos.style.width = "30px"
botaoMenos.style.height = "30px" 
botaoMenos.style.background = "#20B2AA"
botaoMenos.style.position = "absolute"
botaoMenos.style.borderRadius = "5px"
botaoMenos.style.marginTop =  "45px"
botaoMenos.style.marginLeft = "110px"
botaoMenos.onclick = function(){
   document.querySelector('#display').value += '-'
}
}