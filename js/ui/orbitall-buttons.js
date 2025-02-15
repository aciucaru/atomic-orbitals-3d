class OrbitalButton
{
    #buttonElement = null;
    #orbit = new Orbit(1, 0, 0, 1);

    #isEnabled = false;
    #isSelected = false;

    constructor(buttonElement, orbit, isEnabled, isSelected)
    {
        this.#buttonElement = buttonElement;
        this.#orbit = orbit;
    }

    getOrbit() { return this.#orbit; }

    setEnabled()
    {
        this.#buttonElement.classList.remove("orbital-button-disabled");
        this.#buttonElement.classList.add("orbital-button-enabled");

        this.#isEnabled = true;
    }

    setDisabled()
    {
        this.#buttonElement.classList.remove("orbital-button-enabled");
        this.#buttonElement.classList.remove("orbital-button-selected");
        this.#buttonElement.classList.add("orbital-button-disabled");

        this.#isEnabled = false;
    }

    isEnabled() { return this.#isEnabled; }

    setSelected()
    {
        if (this.#isEnabled)
        {
            this.#isSelected = true;
            this.#buttonElement.classList.remove("orbital-button-enabled");
            this.#buttonElement.classList.add("orbital-button-selected");
        }
    }

    setUnselected()
    {
        if (this.#isEnabled)
        {
            this.#isSelected = false;
            this.#buttonElement.classList.remove("orbital-button-selected");
            this.#buttonElement.classList.add("orbital-button-enabled");
        }
    }

    isSelected() { return this.#isSelected; }

    setClickListener(clickEventListener)
    {
        this.#buttonElement.addEventListener("click", (event) =>
            {
                // Defensive coding, in reality it should not be possible to click on a "disabled" button
                if (this.#isEnabled)
                {
                    // Call event listener
                    clickEventListener(event);

                    // Flip boolean state
                    this.#isSelected = !(this.#isSelected);

                    // Change visual style
                    if (this.#isSelected)
                        this.setSelected();
                    else
                        this.setUnselected();
                }
            });
    }
}

class OrbitalButtonArray
{
    #orbitalButtonArray = [];

    constructor()
    {
        this.#initOrbitalButtonArray();
    }

    #initOrbitalButtonArray()
    {
        // Get the individual orbitals buttons as JS objects
        const buttonElementsArray = document.getElementsByClassName("orbital-button");

        // Populate the array with the previously obtained buttons and their orbit
        let orbitalButton = null;
        let buttonOrbit = null; 
        for (const buttonElement of buttonElementsArray)
        {
            // Deduce the Orbit object (which contains n, l, m, e numbers) from the id of the HTML button 
            buttonOrbit = this.#computeButtonOrbit(buttonElement);

            // Create an OrbitalButton instance from the HTML button and it's orbit
            orbitalButton = new OrbitalButton(buttonElement, buttonOrbit, false, false);

            // Add the previously created OrbitalButton to the internal array
            this.#orbitalButtonArray.push(orbitalButton);
        }

        // Enable the first button
        this.#orbitalButtonArray[0].setEnabled();
    }

    #computeButtonOrbit(buttonElement)
    {
        /* All orbital buttons id names and numbers are separated by a "_" (underscoare), so
        ** we split by the underscore character in order to get individual quantum numbers
        ** asociated whith this button */
        const buttonIdWords = buttonElement.id.split("_");

        /* The id looks like this: "orbitalButton_1_0_0", so the quantum numbers asociated
        ** with this button are the elements 1, 2 and 3 of the words array. */
        const n = Number(buttonIdWords[1]);
        const l = Number(buttonIdWords[2]);
        const m = Number(buttonIdWords[3]);

        // console.log(`button numbers: n = ${n}, l = ${l}, m = ${m}`);

        return new Orbit(n, l, m, 1);
    }

    getOrbitalButton(n, l, m)
    {
        for (const orbitalButton of this.#orbitalButtonArray)
        {
            if (orbitalButton.getOrbit().getN() === n &&
                orbitalButton.getOrbit().getL() === l &&
                orbitalButton.getOrbit().getM() === m)
                return orbitalButton;
        }
        return null;
    }

    setEnabledOrbitalButtons(atom)
    {
        const electronOrbits = atom.getElectronOrbits();

        let orbitValues = {n: 1, l: 0, m: 0};
        let buttonData = null;

        // First, disable all buttons
        for (const buttonData of this.#orbitalButtonArray)
        {
            // Disable current button
            buttonData.setDisabled();
        }

        // For each orbit, enable the corresponding buttons
        for (const orbit of electronOrbits)
        {
            // Get the (n, l, m) values corresponding to the current orbit
            orbitValues = orbit.getQuantumValues();

            // Get the HTML button corresponding to the current orbit (n, l, m) values
            buttonData = this.getOrbitalButton(orbitValues.n, orbitValues.l, orbitValues.m);
            // console.log(buttonData);
            // console.log(`${orbitValues.n}, ${orbitValues.l}, ${orbitValues.m}`);

            // enable that button
            buttonData.setEnabled();
        }
    }

    getButtonsArray() { return this.#orbitalButtonArray; }
}