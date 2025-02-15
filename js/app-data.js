class AppData
{
    /* This is the main variable that stores the atom for which the animation is being made.
    **    Initially, we give it the simplest atom, Hydrogen, which has 1 proton.
    **    We don't instatiate the value, but we get it from the array of chemical elements,
    ** which has the first 30 elements. */
    #currentAtom = chemicalElements[0]; // Hydrogen

    #scene3D = new Scene3D();

    #orbitalButtonArray = new OrbitalButtonArray();

    constructor() { }

    getCurrentAtom() { return this.#currentAtom; }

    setCurrentAtom(atom)
    {
        this.#currentAtom = atom;
    }

    getScene() { return this.#scene3D; }

    getOrbitalButtonArray() { return this.#orbitalButtonArray; }
}

const appData = new AppData();
