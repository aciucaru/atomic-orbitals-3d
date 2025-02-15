// Get the container of the periodic table SVG
const periodicTable = document.getElementById("periodic-table-svg");

// Add the event listener to the SVG periodic table
periodicTable.addEventListener("click", (event) =>
    {
        /* Get the symbol sorresponding to the clicked-on element from
        ** the id of the clicked-on element.
        ** The symbol is the word before the first "-" character in the id. */
        const selectedAtomSymbol = event.target.id.split("-")[0];
        // console.log(`onAtomSelect(): selected atom: ${selectedAtomSymbol}`);

        /* Search if teh selected element is in the array of plotable elements
        ** For this, we search by atomic symbol name */
        const selectedElement = chemicalElements.find( element => {return element.symbol.toLowerCase() === selectedAtomSymbol} );

        // If that element was found, then update the AppData value
        if (selectedElement != null)
        {
            console.log(`onAtomSelect(): found atom: ${selectedAtomSymbol}`);

            appData.setCurrentAtom(selectedElement.atom);

            // First, hide all orbital of teh 3D scene
            appData.getScene().hideOrbitalsGeom();

            /* Then, redisplay again only the preferred orbital corrsponding to the orbitals of
            ** the current atom */
            const atomPreferredOrbit = selectedElement.atom.getPreferredElectronOrbit();
            console.log(atomPreferredOrbit);
            appData.getScene().showOrbitalGeom(atomPreferredOrbit.getN(), atomPreferredOrbit.getL(), atomPreferredOrbit.getM());

            appData.getOrbitalButtonArray().setEnabledOrbitalButtons(selectedElement.atom);
        }
    });