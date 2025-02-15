class Atom
{
    /* represents the number of protons, which is the defining number for any atom.
    ** In ideal conditions, the number of electrons is supposed to be equal to the number
    ** of protons, so the number of protons also counts as the number of electrons
    ** associated to this atom. */
    #protonCount = 1;

    /* For performance reasons, we compute the electron configuration once, in the constructor
    ** and the we just expose it through a "getter" method.
    ** This is why we also have this property, which is an array of electron configurations, starting
    ** from the lowest energy level (1s1) to the highest that this atom has. */
    #electronOrbits = [new Orbit(1, 0, 0, 1)];

    /* One of the orbits of this atom that should be displayed when the atom is selected because,
    ** foar performance reasons, we cannot display all orbits of the atom, so we only display a
    ** single preferred orbit, that represents that atom (usually the highest electron orbit). */
    #preferredDisplayOrbit = new Orbit(1, 0, 0, 1);

    // constructor(number electronCount)
    // constructor(protonCount)
    constructor(protonCount, electronOrbits, preferredDisplayOrbit)
    {
        this.#protonCount = protonCount;

        this.#electronOrbits = electronOrbits;

        this.#preferredDisplayOrbit = preferredDisplayOrbit;
    }

    getElectronOrbits() { return this.#electronOrbits; }

    getHighestElectronOrbit()
    {
        const arrayLength = this.#electronOrbits.length;

        return this.#electronOrbits[arrayLength - 1];
    }

    getPreferredElectronOrbit() { return this.#preferredDisplayOrbit; }

    getProtons() { return this.#protonCount; }
}