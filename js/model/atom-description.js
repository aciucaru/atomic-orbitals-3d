/* This class is basically an enum, and in JS we can simulate a enum with a class that contains
** static properties. The properties are the options of the simulated enum. */
class AtomCategory
{
    // the only property of this "enum"
    #category = "";

    // the options of this "enum"
    static ALKALI_METAL = new AtomCategory('ALKALI_METAL');
    static ALKALINE_EARTH_METAL = new AtomCategory('ALKALINE_EARTH_METAL');
    static TRANSITION_METAL = new AtomCategory('TRANSITION_METAL');
    static POST_TRANSITION_METAL = new AtomCategory('POST_TRANSITION_METAL');
    static METALLOID = new AtomCategory('METALLOID');
    static REACTIVE_NONMETAL = new AtomCategory('REACTIVE_NONMETAL');
    static NOBLE_GAS = new AtomCategory('NOBLE_GAS');
    static LATHANIDE = new AtomCategory('LANTHANIDE');
    static ACTINIDE = new AtomCategory('ACTINIDE');
    static OTHER = new AtomCategory('OTHER');

    constructor(category)
    {
        this.#category = category;
    }

    toString() { return `${this.#category}`; }
}

/* This class is also like an enum, and in JS we can simulate a enum with a class that contains
** static properties. The properties are the options of the simulated enum. */
class SubshellType
{
    // Azimutal Quantum Number, known as 'l', it specifies the subshell (s = 0, p = 1, d = 2, f = 3, g = 4)
    #azhimutalQuantumNumber = 0;

    // the options of this "enum"
    static S = new SubshellType(0); // S - sharp, max 2 electrons, for groups 1...2
    static P = new SubshellType(1); // P - principal, max 6 electrons, for group 13...18
    static D = new SubshellType(2); // D - diffuse, max 10 electrons, for groups 3...12
    static F = new SubshellType(3); // F - fundamental, max 14 electrons, for lanthanides & actinides
    static G = new SubshellType(4); // F - fundamental, max 14 electrons, for lanthanides & actinides

    constructor(azimutalQuantumNumber)
    {
        if (azimutalQuantumNumber >= 0)
            this.#azhimutalQuantumNumber = azimutalQuantumNumber;
        else
            console.log("ERROR: SubshellType::constructor(): azimutalQuantumNumber is negative");

        // the azimutalQuantumNumber is usually noted with 'l'
        // tha max. number of electrons of a subshell is: 2*(2*l + 1)
        this.MAX_ELECTRONS = 2 * (2 * azimutalQuantumNumber + 1);
    }

    compareTo(subshellType)
    {
        if (this.#azhimutalQuantumNumber == subshellType.AZIMUTHAL_QUANTUM_NUMBER)
            return 0;
        else if (this.#azhimutalQuantumNumber < subshellType.AZIMUTHAL_QUANTUM_NUMBER)
            return -1;
        else
            return 1;
    }

    // function that return the 'l' quantum number, that is associated with this subshell
    l() { return this.#azhimutalQuantumNumber; }

    maxElectrons() { return 2 * (2 * this.#azhimutalQuantumNumber + 1); }

    // this class works like an enum, so we override toString() to print the class static instance
    toString()
    {
        if (this === SubshellType.S)
            return "S";
        if (this === SubshellType.P)
            return "P";
        if (this === SubshellType.D)
            return "D";
        if (this === SubshellType.F)
            return "F";
        if (this === SubshellType.G)
            return "G";
        return "none";
    }
}