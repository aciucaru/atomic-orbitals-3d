class Complex
{
    real = 0.0;
    imag = 0.0;

    constructor(real, imag)
    {
        this.real = real;
        this.imag = imag;
    }

    modulus() { return Math.sqrt(this.real * this.real + this.imag * this.imag); }

    phase() { return Math.atan2(this.imag, this.real); }

    squareModulus() { return this.real * this.real + this.imag * this.imag; }
}

/* This function converts from cartezian coordinates (x, y, z) to polar
** coordinates (r, theta, phi). */
function cartezianToPolar(x, y, z)
{
    const radius = Math.sqrt(x**2 + y**2 + z**2);
    const theta = Math.sign(y) * Math.acos(x / Math.sqrt(x**2 + y**2)); 
    const phi = Math.acos(z / Math.sqrt(x**2 + y**2 + z**2));

    return {radius: radius, theta: theta, phi: phi};
}

/* This function takes a number and scales it, for a better drawing.
** It is only for graphical purposes.
** It works by greatly enlarging small numbers, while it barely enlarges large numbers.
** In order to increase small number (and barely increase large numbers) we use the following formula:
**       (N + 1) * x
   y = ---------------
          N * x + 1
** where:
   'x' is the number to be converted
   'N' is a constant
   'y' is the converted number (the result) */
function scaleLowerValues(valueToBeScaled)
{
    const N = 20;
    
    return (N + 1) * valueToBeScaled / (N * valueToBeScaled + 1);
}