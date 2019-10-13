class PersonajeFechaComparable {
    constructor() {
    }

    compare(a, b) {
        let dateA = new Date(a.getFecha()), dateB = new Date(b.getFecha());
        return dateA - dateB;
    }
}