class Persona{
    #nombre = " def nombre";
    #edad = "def edad";

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }

    setEdad(edad){
        this.#edad = edad;
    }
    getEdad(){
        return this.#edad;
    }
}

const personaNueva = new Persona();
personaNueva.setNombre("Noelia");
console.table(personaNueva.getNombre());

const edadNueva = new Persona();
edadNueva.setEdad("32");
console.table(edadNueva.getEdad());


class Autos{
    #marca = "def marca";
    #modelo = "def modelo";

    setMarca(marca){
        this.#marca = marca;
    }
    getMarca(){
        return this.#marca;
    }

    setModelo(modelo){
        this.#modelo = modelo;
    }
    getModelo(){
        return this.#modelo;
    }

}

const marcaNueva= new Autos();
marcaNueva.setMarca("Toyota");
console.table(marcaNueva.getMarca());

const modeloNuevo= new Autos();
modeloNuevo.setModelo("2010");
console.table(modeloNuevo.getModelo());