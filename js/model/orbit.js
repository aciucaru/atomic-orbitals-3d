/* This class describes a single electron orbit.
** An electron orbit can be uniquely described by a combination of n, l, m numbers. */
class Orbit
{
    /* The 'n' quantum number, it represents the electron main shells of an atom (n = 1, n = 2, n = 3, n = 4, ...).
    ** It is also called 'principal quantum number' */ 
    #n = 0;

    /* The 'l' quantum number, it specifies the electron subshells of an atom (s = 0, p = 1, d = 2, f = 3, g = 4)
    ** It is also called 'azimutal quantum number' and the max. number of electrons of a subshell L is: 2*(2*L + 1) */
    #l = 0;

    /* The 'm' quantum number, related to the spin of an electron.
    ** The max. number of 'm' states of a subshell L is: 2*L + 1. Examples:
    ** L = 0 => m = {0} (1 possible value)
    ** L = 1 => m = {-1, 0, 1} (3 possible values)
    ** L = 2 => m = {-2, -1, 0, 1, 2} (5 possible values) */
    #m = 0;

    /* How many electrons does the electron configuration (orbit) have.
    ** An electron configuration can have 1 or 2 electrons. */
    #electronCount = 1;

    constructor(n, l, m, e)
    {
        this.#n = n;
        this.#l = l;
        this.#m = m;
        this.#electronCount = e;
    }

    // returns all numbers that define this electron configuration
    getValues() { return {n: this.#n, l: this.#l, m: this.#m, e: this.#electronCount}; }

    getQuantumValues() { return {n: this.#n, l: this.#l, m: this.#m}; }

    // returns 'n' quantum number
    getN() { return this.#n; }

    // returns 'l' quantun number
    getL() { return this.#l; }

    // returns 'm' quantum number
    getM() { return this.#m; }
}