const bohrRadius = 0.0529;

// n = 1, l = 0, ml = 0
function schrodingerProbabAmplitude100(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    result.real = 1.0 / (Math.sqrt(Math.PI) * bohrRadius**(3.0/2.0) ) * Math.exp(-radius / bohrRadius);

    return result;
}

// n = 2, l = 0, ml = 0
function schrodingerProbabAmplitude200(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    result.real = 1.0 / ( 4.0 * Math.sqrt(2 * Math.PI) * bohrRadius**(3.0/2.0)) * (2.0 - radius / bohrRadius) * Math.exp(-radius / (2 * bohrRadius));

    return result;
}

// n = 2, l = 1, ml = 0
function schrodingerProbabAmplitude210(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    result.real = 1.0 / (4 * Math.sqrt(2 * Math.PI) * Math.pow(bohrRadius, 5.0/2.0)) * radius * Math.exp(-radius / (2 * bohrRadius)) * Math.cos(theta);

    return result;
}

// n = 2, l = 1, ml = -1
function schrodingerProbabAmplitude21neg1(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = 1.0 / (8 * Math.sqrt(Math.PI) * bohrRadius**(5.0/2.0)) * radius * Math.exp(-radius / (2 * bohrRadius)) * Math.sin(theta);
    result.real = commonPart * Math.cos(phi);
    result.imag = commonPart * Math.sin(phi);

    return result;
}

// n = 2, l = 1, ml = 1
function schrodingerProbabAmplitude211(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = 1.0 / (8 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0)) * radius * Math.exp(-radius / (2 * bohrRadius)) * Math.sin(theta);
    result.real = commonPart * Math.cos(phi);
    result.imag = commonPart * Math.sin(phi);

    return result;
}

// n = 3, l = 0, ml = 0
function schrodingerProbabAmplitude300(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    result.real = 1.0 / (81 * Math.sqrt(3 * Math.PI) * bohrRadius**(3.0/2.0)) * (27.0 - 18.0 * radius / bohrRadius + 2.0 * radius**2 / bohrRadius**2) * Math.exp(-radius / (3 * bohrRadius));
    
    return result;
}

// n = 3, l = 1, ml = 0
function schrodingerProbabAmplitude310(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    result.real = Math.sqrt(2) / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0)) * (6.0 - radius / bohrRadius) * radius * Math.exp( -radius / (3 * bohrRadius)) * Math.cos(theta);

    return result;
}

// n = 3, l = 1, ml = -1
function schrodingerProbabAmplitude31neg1(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = Math.sqrt(2) / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0)) * (6.0 - radius / bohrRadius) * radius * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta);
    result.real = commonPart * Math.cos(phi);
    result.imag = commonPart * Math.sin(phi);

    return result;
}

// n = 3, l = 1, ml = 1
function schrodingerProbabAmplitude311(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = Math.sqrt(2) / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0)) * (6.0 - radius / bohrRadius) * radius * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta);
    result.real = commonPart * Math.cos(phi);
    result.imag = commonPart * Math.sin(phi);

    return result;
}

// n = 3, l = 2, ml = 0
function schrodingerProbabAmplitude320(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    result.real = 1.0 / (81 * Math.sqrt(6 * Math.PI) * Math.pow(bohrRadius, 7.0/2.0)) * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * (3 * Math.cos(theta)**2 - 1);
    
    return result;
}

// n = 3, l = 2, ml = -1
function schrodingerProbabAmplitude32neg1(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = 1.0 / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0)) * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta) * Math.cos(theta);
    result.real = commonPart * Math.cos(phi);
    result.imag = commonPart * Math.sin(phi);

    return result;
}

// n = 3, l = 2, ml = 1
function schrodingerProbabAmplitude321(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = 1.0 / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0)) * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta) * Math.cos(theta);
    result.real = commonPart * Math.cos(phi);
    result.imag = commonPart * Math.sin(phi);

    return result;
}

// n = 3, l = 2, ml = -2
function schrodingerProbabAmplitude32neg2(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = 1.0 / (162 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0)) * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta)**2;
    result.real = commonPart * Math.cos(2 * phi);
    result.imag = commonPart * Math.sin(2 * phi);

    return result;
}

// n = 3, l = 2, ml = 2
function schrodingerProbabAmplitude322(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const commonPart = 1.0 / (162 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0)) * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta)**2;
    result.real = commonPart * Math.cos(2 * phi);
    result.imag = commonPart * Math.sin(2 * phi);

    return result;
}

// n = 4, l = 0, ml = 0
function schrodingerProbabAmplitude400(radius, theta, phi)
{
    const result = new Complex(0.0, 0.0);

    const sigma = (2.0 * radius) / bohrRadius;
    result.real = 1.0 / (16 * Math.sqrt(3.0)) * Math.pow( (1.0 / bohrRadius), 3.0 / 2.0 ) * ( (sigma - 1) * (sigma*sigma - 8*sigma + 12 )) * Math.exp(-sigma / 2.0);

    return result;
}

/*    This is the main function that computes the probability.
**    For any electron located on an orbit defined by (n, l, ml), this function computes the probability that
** the electron could be located at (radius, theta, phi) polar 3D coordinates inside that orbit.
**    The Shcrodinger functions return a complex number, but that is not usefull as a physical measure or as a
** probability. But the square modulus of that complex number is cosidered to be the probability we are looking after
** and this is why we should use the complex number afterwards and compute it's square modulus.
**    But this function still returns a complext number because we also need the phase of that complex number. */
function schrodingerProbabAmplitude(n, l, ml, x, y, z)
{
    // Use JS destructuring to get individual radius, theta, phi variables from the cartezian to polar conversion
    const {radius, theta, phi} = cartezianToPolar(x, y, z);

    /* The result of the Schrodinger functions is a complex number, so we create a Complex number.
    ** Here we use the "Complex" class, found in "math/math-utils.js" */
    let complexResult = new Complex(0.0, 0.0);

    if (n == 1 && l == 0 && ml == 0)
        complexResult = schrodingerProbabAmplitude100(radius, theta, phi);

    if (n == 2 && l == 0 && ml == 0)
        complexResult = schrodingerProbabAmplitude200(radius, theta, phi);

    if (n == 2 && l == 1 && ml == 0)
        complexResult = schrodingerProbabAmplitude210(radius, theta, phi);

    if (n == 2 && l == 1 && ml == -1)
        complexResult = schrodingerProbabAmplitude21neg1(radius, theta, phi);

    if (n == 2 && l == 1 && ml == 1)
        complexResult = schrodingerProbabAmplitude211(radius, theta, phi);

    if (n == 3 && l == 0 && ml == 0)
        complexResult = schrodingerProbabAmplitude300(radius, theta, phi);

    if (n == 3 && l == 1 && ml == 0)
        complexResult = schrodingerProbabAmplitude310(radius, theta, phi);

    if (n == 3 && l == 1 && ml == -1)
        complexResult = schrodingerProbabAmplitude31neg1(radius, theta, phi);

    if (n == 3 && l == 1 && ml == 1)
        complexResult = schrodingerProbabAmplitude311(radius, theta, phi);

    if (n == 3 && l == 2 && ml == 0)
        complexResult = schrodingerProbabAmplitude320(radius, theta, phi);

    if (n == 3 && l == 2 && ml == -1)
        complexResult = schrodingerProbabAmplitude32neg1(radius, theta, phi);

    if (n == 3 && l == 2 && ml == 1)
        complexResult = schrodingerProbabAmplitude321(radius, theta, phi);

    if (n == 3 && l == 2 && ml == -2)
        complexResult = schrodingerProbabAmplitude32neg2(radius, theta, phi);

    if (n == 3 && l == 2 && ml == 2)
        complexResult = schrodingerProbabAmplitude322(radius, theta, phi);

    if (n == 4 && l == 0 && ml == 0)
        complexResult = schrodingerProbabAmplitude400(radius, theta, phi);

    /* The complex number computed by any of the Shrodinger functions does not have any
    ** physical meaning but we still return a complex number because we also need the phase
    ** of that complex number. */
    return complexResult;
}

/*    The Schrodinger probabilities have very diferent range for diferent n, l, ml quantum numbers.
**    These probabilities are used for the opacity of each orbital color, and the opacity can only
** be between 0 and 1, so we need to convert the number so that it's range is between 0 and 1.
**    This is what this function does, it normalizes the Scrodinger probability. */
function normalizeSchrodingerProbability(n, l, ml, schrodingerProbability)
{
    /*    We use the following constants, in order to normalize according to the (n, l, ml) orbit.
    **    Each (n, l, ml) orbit has it's own maximum probability, but the minimum probability is always
    ** the same, 0.
    **    These constants were determined experimentally for each (n, l, ml) orbit, by simply generating
    ** x, y, z coordinates for each orbit and determining the maximum values. */
    const MAX_PROBAILITY_100 = 2150.221;

    const MAX_PROBAILITY_200 = 268.777;

    const MAX_PROBAILITY_210 = 36.364;

    const MAX_PROBAILITY_211 = 18.179;

    const MAX_PROBAILITY_300 = 79.637;

    const MAX_PROBAILITY_310 = 11.273;

    const MAX_PROBAILITY_311 = 11.271;

    const MAX_PROBAILITY_320 = 5.183;

    const MAX_PROBAILITY_321 = 1.943

    const MAX_PROBAILITY_322 = 1.943;

    const MAX_PROBAILITY_400 = 1266.584;

    /* The actual maximum probability, which depends on the (n, l, ml) combination.
    ** We determine it's value based on the (n, l, ml) orbit and the experimental constants above. */
    let maxProbability = 1.0;

    // energy level n = 1
    if (n == 1 && l == 0 && ml == 0)
        maxProbability = MAX_PROBAILITY_100;

    // energy level n = 2
    if (n == 2 && l == 0 && ml == 0)
        maxProbability = MAX_PROBAILITY_200;

    if (n == 2 && l == 1 && ml == 0)
        maxProbability = MAX_PROBAILITY_210;

    if (n == 2 && l == 1 && ml == 1)
        maxProbability = MAX_PROBAILITY_211;

    if (n == 2 && l == 1 && ml == -1)
        maxProbability = MAX_PROBAILITY_211;

    // energy level n = 3
    if (n == 3 && l == 0 && ml == 0)
        maxProbability = MAX_PROBAILITY_300;

    if (n == 3 && l == 1 && ml == 0)
        maxProbability = MAX_PROBAILITY_310;

    if (n == 3 && l == 1 && ml == 1)
        maxProbability = MAX_PROBAILITY_311;

    if (n == 3 && l == 1 && ml == -1)
        maxProbability = MAX_PROBAILITY_311;

    if (n == 3 && l == 2 && ml == 0)
        maxProbability = MAX_PROBAILITY_320;

    if (n == 3 && l == 2 && ml == 1)
        maxProbability = MAX_PROBAILITY_321;

    if (n == 3 && l == 2 && ml == -1)
        maxProbability = MAX_PROBAILITY_321;

    if (n == 3 && l == 2 && ml == 2)
        maxProbability = MAX_PROBAILITY_322;

    if (n == 3 && l == 2 && ml == -2)
        maxProbability = MAX_PROBAILITY_322;

    if (n == 4 && l == 0 && ml == 0)
        maxProbability = MAX_PROBAILITY_400;

    const normalizedProbability = schrodingerProbability / maxProbability;

    return normalizedProbability;
}

// let radius = 0.0;
// for (let i = 0; i < 30; i++)
// {
//     radius = i * bohrRadius;

//     console.log(`probability ${schrodingerProbabAmplitude400(radius, 0, 0).squareModulus()}`);
// }