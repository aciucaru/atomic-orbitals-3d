const chemicalElements =
[
    {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1,
        atom: new Atom(1, [new Orbit(1, 0, 0, 1)], // array of all orbits
                            new Orbit(1, 0, 0, 1)), // preferred orbit
        weight: 1.0080,
        group: 1, 
        period: 1,
        block: SubshellType.S,
        // electronConfig: new ElectronConfiguration(shell(1, s(1))),
        electronConfig: "1s1",
        category: AtomCategory.REACTIVE_NONMETAL,
    },

    {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        atom: new Atom(2, [new Orbit(1, 0, 0, 2)], // array of all orbits
                            new Orbit(1, 0, 0, 2)), // preferred orbit
        weight: 4.0026,
        group: 18, 
        period: 1,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2))), // 1s2
        electronConfig: "1s2",
        category: AtomCategory.NOBLE_GAS,
    },

    {
        name: "Lithium",
        symbol: "Li",
        atomicNumber: 3,
        atom: new Atom(3, [
                            new Orbit(1, 0, 0, 2), // array of all orbits
                            new Orbit(2, 0, 0, 1)
                            ],
                            new Orbit(2, 0, 0, 1) // preferred orbit
                        ),
        weight: 6.94,
        group: 1, 
        period: 2 ,
        block: SubshellType.S,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(1))), // 1s2; 2s1
        electronConfig: "1s1; 2s1",
        category: AtomCategory.ALKALI_METAL,
    },

    {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        atom: new Atom(4, [
                            new Orbit(1, 0, 0, 2), // array of all orbits
                            new Orbit(2, 0, 0, 2)
                            ],
                            new Orbit(2, 0, 0, 2) // preferred orbit
                        ),
        weight: 9.0122,
        group: 2, 
        period: 2,
        block: SubshellType.S,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2))), // 1s2; 2s2
        electronConfig: "1s2; 2s2",
        category: AtomCategory.ALKALINE_EARTH_METAL,
    },

    {
        name: "Boron",
        symbol: "B",
        atomicNumber: 5,
        atom: new Atom(5, [
                            new Orbit(1, 0, 0, 2),
                            new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 1) // array of all orbits
                            ],
                            new Orbit(2, 1, 0, 1) // preferred orbit
                        ),
        weight: 10.81,
        group: 13, 
        period: 2,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(1))), // 1s2; 2s2 2p1
        electronConfig: "1s2; 2s2 2p1",
        category: AtomCategory.METALLOID,
    },

    {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6,
        atom: new Atom(6, [
                            new Orbit(1, 0, 0, 2),
                            new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2) // array of all orbits
                            ],
                            new Orbit(2, 1, 0, 2) // preferred orbit
                        ),
        weight: 12.011,
        group: 14, 
        period: 2,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(2))), // 1s2; 2s2 2p2
        electronConfig: "1s2; 2s2 2p2",
        category: AtomCategory.REACTIVE_NONMETAL,
    },

    {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7,
        atom: new Atom(7, [
                            new Orbit(1, 0, 0, 2),
                            new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 1) // array of all orbits
                            ],
                            new Orbit(2, 1, -1, 1) // preferred orbit
                        ),
        weight: 14.007,
        group: 15, 
        period: 2,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(3))), // 1s2; 2s2 2p3
        electronConfig: "1s2; 2s2 2p3",
        category: AtomCategory.REACTIVE_NONMETAL,  
    },

    {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8,
        atom: new Atom(8, [
                            new Orbit(1, 0, 0, 2),
                            new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2) // array of all orbits
                            ],
                            new Orbit(2, 1, -1, 2) // preferred orbit
                        ),
        weight: 15.999,
        group: 16, 
        period: 2,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(4))), // 1s2; 2s2 2p4
        electronConfig: " 1s2; 2s2 2p4",
        category: AtomCategory.REACTIVE_NONMETAL,
    },

    {
        name: "Fluorine",
        symbol: "F",
        atomicNumber: 9,
        atom: new Atom(9, [
                            new Orbit(1, 0, 0, 2),
                            new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1) // array of all orbits
                            ],
                            new Orbit(2, 1, 1, 1) // preferred orbit
                        ),
        weight: 18.998,
        group: 17, 
        period: 2,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(5))), // 1s2; 2s2 2p5
        electronConfig: "1s2; 2s2 2p5",
        category: AtomCategory.REACTIVE_NONMETAL,  
    },


    {
        name: "Neon",
        symbol: "Ne",
        atomicNumber: 10,
        atom: new Atom(10, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 2) // array of all orbits
                            ],
                            new Orbit(2, 1, 1, 2) // preferred orbit
                        ),
        weight: 20.180,
        group: 18, 
        period: 2,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6))), // 1s2; 2s2 2p6
        electronConfig: "1s2; 2s2 2p6",
        category: AtomCategory.NOBLE_GAS,
    },

    {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11,
        atom: new Atom(11, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 1) // array of all orbits
                            ],
                            new Orbit(3, 0, 0, 1) // preferred orbit
                        ),
        weight: 22.990,
        group: 1, 
        period: 3,
        block: SubshellType.S,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(1))), // 1s2; 2s2 2p6; 3s1
        electronConfig: "1s2; 2s2 2p6; 3s1",
        category: AtomCategory.ALKALI_METAL,
    },

    {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12,
        atom: new Atom(12, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 0, 0, 2) // preferred orbit
                        ),
        weight: 24.305,
        group: 2, 
        period: 3,
        block: SubshellType.S,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2))), // 1s2; 2s2 2p6; 3s2
        electronConfig: "1s2; 2s2 2p6; 3s2",
        category: AtomCategory.ALKALINE_EARTH_METAL,  
    },

    {
        name: "Aluminium",
        symbol: "Al",
        atomicNumber: 13,
        atom: new Atom(13, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 1) // array of all orbits
                            ],
                            new Orbit(3, 1, 0, 1) // preferred orbit
                        ),
        weight: 26.982,
        group: 13, 
        period: 3,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(1))), // 1s2; 2s2 2p6; 3s2 3p1
        electronConfig: "1s2; 2s2 2p6; 3s2 3p1",
        category: AtomCategory.POST_TRANSITION_METAL,
    },

    {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14,
        atom: new Atom(14, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 1, 0, 2) // preferred orbit
                        ),
        weight: 28.085,
        group: 14, 
        period: 3,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(2))), // 1s2; 2s2 2p6; 3s2 3p2
        electronConfig: "1s2; 2s2 2p6; 3s2 3p2",
        category: AtomCategory.METALLOID,
    },

    {
        name: "Phosphorus",
        symbol: "P",
        atomicNumber: 15,
        atom: new Atom(15, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 1) // array of all orbits
                            ],
                            new Orbit(3, 1, -1, 1) // preferred orbit
                        ),
        weight: 30.974,
        group: 15, 
        period: 3,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(3))), // 1s2; 2s2 2p6; 3s2 3p3
        electronConfig: "1s2; 2s2 2p6; 3s2 3p3",
        category: AtomCategory.REACTIVE_NONMETAL,
    },

    {
        name: "Sulfur",
        symbol: "S",
        atomicNumber: 16,
        atom: new Atom(16, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2) // array of all orbits
                            ],
                            new Orbit(3, 1, -1, 2) // preferred orbit
                        ),
        weight: 32.06,
        group: 16, 
        period: 3,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(4))), // 1s2; 2s2 2p6; 3s2 3p4
        electronConfig: "1s2; 2s2 2p6; 3s2 3p4",
        category: AtomCategory.REACTIVE_NONMETAL,
    },

    {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17,
        atom: new Atom(17, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 1) // array of all orbits
                            ],
                            new Orbit(3, 1, 1, 1) // preferred orbit
                        ),
        weight: 35.45,
        group: 17, 
        period: 3,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(5))), // 1s2; 2s2 2p6; 3s2 3p5
        electronConfig: "1s2; 2s2 2p6; 3s2 3p5",
        category: AtomCategory.REACTIVE_NONMETAL,
    },  

    {
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18,
        atom: new Atom(18, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2) // array of all orbits
                            ],
                            new Orbit(3, 1, 1, 2) // preferred orbit
                        ),
        weight: 39.95,
        group: 18, 
        period: 3,
        block: SubshellType.P,
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(5))), // 1s2; 2s2 2p6; 3s2 3p6
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6",
        category: AtomCategory.NOBLE_GAS,
    },

    // begining of n, l, m orbit exception ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19,
        atom: new Atom(19, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(4, 0, 0, 1) // array of all orbits
                            ],
                            new Orbit(4, 0, 0, 1) // preferred orbit
                        ),
        weight: 39.098,
        group: 1, 
        period: 4,
        block: SubshellType.S,
        // 1s2; 2s2 2p6; 3s2 3p6; 4s1
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6)), shell(4, s(1))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6; 4s1",
        category: AtomCategory.ALKALI_METAL, 
    },

    {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20,
        atom: new Atom(20, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(4, 0, 0, 2) // preferred orbit
                        ),
        weight: 40.078,
        group: 2, 
        period: 4,
        block: SubshellType.S,
        // 1s2; 2s2 2p6; 3s2 3p6; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6; 4s2",
        category: AtomCategory.ALKALINE_EARTH_METAL,
    },

    // group 3 *******************************************************
    {
        name: "Scandium",
        symbol: "Sc",
        atomicNumber: 21,
        atom: new Atom(21, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 1), 
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 2, 0, 1) // preferred orbit
                        ),
        weight: 44.956,
        group: 3, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d1; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(1)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6 2d1; 3s2 3p6 3d1; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Titanium",
        symbol: "Ti",
        atomicNumber: 22,
        atom: new Atom(22, [
                            new Orbit(1, 0, 0, 2),
                            new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                            new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                            new Orbit(3, 2, 0, 2), 
                            new Orbit(4, 0, 0, 2) // array of all orbits
                        ],
                        new Orbit(3, 2, 0, 2) // preferred orbit
                    ),
        weight: 47.867,
        group: 4, 
        period: 4 ,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d2; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(2)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d2; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Vanadium",
        symbol: "V",
        atomicNumber: 23,
        atom: new Atom(23,  [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 1), 
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 2, -1, 1) // preferred orbit
                        ),
        weight: 50.942,
        group: 5, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d3; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(3)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d3; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Chromium",
        symbol: "Cr",
        atomicNumber: 24,
        atom: new Atom(24, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 2), new Orbit(3, 2, 1, 1), 
                                new Orbit(4, 0, 0, 1) // array of all orbits
                            ],
                            new Orbit(3, 2, 1, 1) // preferred orbit
                        ),
        weight: 51.996,
        group: 6, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d5; 4s1
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(5)), shell(4, s(1))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d5; 4s1",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Manganese",
        symbol: "Mn",
        atomicNumber: 25,
        atom: new Atom(25, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 2), new Orbit(3, 2, 1, 1), 
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 2, -1, 2) // preferred orbit
                        ),
        weight: 54.938,
        group: 7, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d5; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(5)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d5; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26,
        atom: new Atom(26, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 2), new Orbit(3, 2, 1, 2), 
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 2, 1, 2) // preferred orbit
                        ),
        weight: 55.845,
        group: 8, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d6; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(6)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d6; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Cobalt",
        symbol: "Co",
        atomicNumber: 27,
        atom: new Atom(27, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 2), new Orbit(3, 2, 1, 2), new Orbit(3, 2, -2, 1), 
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 2, -2, 1) // preferred orbit
                        ),
        weight: 58.933,
        group: 9, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d7; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(7)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d7; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Nickel",
        symbol: "Ni",
        atomicNumber: 28,
        atom: new Atom(28, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 2), new Orbit(3, 2, 1, 2), new Orbit(3, 2, -2, 2), 
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(3, 2, -2, 2) // preferred orbit
                        ),
        weight: 58.693,
        group: 10, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d8; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(8)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d8; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29,
        atom: new Atom(29, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 2), new Orbit(3, 2, 1, 2), new Orbit(3, 2, -2, 2), new Orbit(3, 2, 2, 2), 
                                new Orbit(4, 0, 0, 1) // array of all orbits
                            ],
                            new Orbit(3, 2, 2, 2) // preferred orbit
                        ),
        weight: 63.546,
        group: 11, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s1
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(1))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d10; 4s1",
        category: AtomCategory.TRANSITION_METAL,
    },

    {
        name: "Zinc",
        symbol: "Zn",
        atomicNumber: 30,
        atom: new Atom(30, [
                                new Orbit(1, 0, 0, 2),
                                new Orbit(2, 0, 0, 2), new Orbit(2, 1, 0, 2), new Orbit(2, 1, -1, 2), new Orbit(2, 1, 1, 1),
                                new Orbit(3, 0, 0, 2), new Orbit(3, 1, 0, 2), new Orbit(3, 1, -1, 2), new Orbit(3, 1, 1, 2),
                                new Orbit(3, 2, 0, 2), new Orbit(3, 2, -1, 2), new Orbit(3, 2, 1, 2), new Orbit(3, 2, -2, 2), new Orbit(3, 2, 2, 2), 
                                new Orbit(4, 0, 0, 2) // array of all orbits
                            ],
                            new Orbit(4, 0, 0, 2) // preferred orbit
                        ),
        weight: 65.38,
        group: 12, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2
        // electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2))),
        electronConfig: "1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2",
        category: AtomCategory.TRANSITION_METAL,
    },
];