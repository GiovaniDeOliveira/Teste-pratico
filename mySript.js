let numero = 0
	
function aumentar() {
		numero = numero + 1
        mostrarTela()
}
function mostrarTela () {
    const p = document.querySelector(".contador")
    p.innerText = numero
}