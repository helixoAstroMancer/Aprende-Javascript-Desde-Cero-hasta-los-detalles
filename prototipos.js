function Personas () {
    this.nombre = "jose";
    this.apellido = "lopez";
    this.edad = 20;
    this.pais = "colombia";
}

Personas.prototype.mostrarInfo = function() {
    return  "${this.nombre} ${thi.apellido} tiene ${this.edad} y vive en ${this.pais}";$

}
