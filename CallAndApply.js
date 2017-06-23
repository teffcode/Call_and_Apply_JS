/*

	MÉTODOS CALL Y APPLY:
	Sirven para invocar funciones pasándole
	un contexto y un parámetro que requiera

*/

const persona = {
	nombre: 'Tefa',
	apellido: 'Aguilar'
}

  function saludar(veces, uppercase){
  	let str = `Hola ${this.nombre} ${this.apellido}`
  	str = uppercase ? str.toUpperCase() : str

	for(let i=0; i<veces; i++){
		console.log(str)
	}  	
  }

  saludar.call(persona, 3, true) 
  // .call(contexto, parámetros)

  saludar.apply(persona, [3, true]) 
  // apply = call pero los parámetros se pasan como si fueran un array