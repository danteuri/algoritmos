function Ejercicio9(){
// Objeto Persona
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  
  Persona.prototype.obtDetalles = function () {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
  };
  
  // Objeto Estudiante
  function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.registrar = function () {
    console.log("El estudiante " + this.nombre + " ha sido registrado en el curso " + this.curso + " - Grupo " + this.grupo);
  };
  
  // Objeto Profesor
  function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  Profesor.prototype = Object.create(Persona.prototype);
  Profesor.prototype.constructor = Profesor;
  
  Profesor.prototype.asignar = function () {
    console.log("El profesor " + this.nombre + " ha sido asignado a la asignatura " + this.asignatura + " - Nivel " + this.nivel);
  };
  
  // Casos de prueba
  var persona1 = new Persona("Juan", 25, "Masculino");
  persona1.obtDetalles();
  console.log("--------------------");
  
  var estudiante1 = new Estudiante("María", 20, "Femenino", "Matemáticas", "Grupo A");
  estudiante1.obtDetalles();
  estudiante1.registrar();
  console.log("--------------------");
  
  var profesor1 = new Profesor("Pedro", 35, "Masculino", "Historia", "Avanzado");
  profesor1.obtDetalles();
  profesor1.asignar();
}