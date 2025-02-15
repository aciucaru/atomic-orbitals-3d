// Get the array of buttons for selecting an orbital
const orbitalButtonArray = appData.getOrbitalButtonArray().getButtonsArray();

for (const button of orbitalButtonArray)
{
    const buttonOrbit = button.getOrbit();

    console.log(button);

    // Add event handler
    button.setClickListener((event) =>
        {
            console.log(`orbital button (${buttonOrbit.getN()}, ${buttonOrbit.getL()}, ${buttonOrbit.getM()}): clicked`);

            // If the button is already enabled
            if (button.isSelected())
                // Then, hide the corresponding orbital
                appData.getScene().hideOrbitalGeom(buttonOrbit.getN(), buttonOrbit.getL(), buttonOrbit.getM());
            else
                // Then, display the corresponding orbital
                appData.getScene().showOrbitalGeom(buttonOrbit.getN(), buttonOrbit.getL(), buttonOrbit.getM());
        });
}

