class PersonajeNombreComparable {
    constructor() {
    }

    compare(a, b) {
        return a.getNombre().localeCompare(b.getNombre());
    }
}