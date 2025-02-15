class Orbital3dGeometryOptions
{
    pointSizeRatio = 1.0;

    // multiple of Bohr radius, default values is 40 Bohr radiuses (from -20 to 20)
    xAxisWidth = 40; // 40 Bohr radiuses
    yAxisWidth = 40;
    zAxisWidth = 40;

    // how many points to generate per axis width
    xAxisPoints = 20;
    yAxisPoints = 20;
    zAxisPoints = 20;

    negativePhaseColorHue = 0;
    positivePhaseColorHue = 120;

    constructor() { }
}

/* This class represents the babylon.js geometry associated with a single orbital.
**    The geoemtry of an orbital is made of "points" represented as boxes, one box
** per each point.
**    This class only holds the geometry but it does not actually draw it.
**    This class generates the geometry eagerly (imediately), when the constructor is
** called.
**    For generating the geometry of one orbital, the class constructor requires the
** n, l, ml quantum numbers, an babylon.js scene object and an (optional) options object. */
class Orbital3dGeometry
{
    #orbit = new Orbit(1, 0, 0, 1);

    #scene = null;

    /* The array of geometrical babylon.js objects that this function will generate and return.
    ** It represents the points for a single orbital.
    ** For representing the points of the orbital, this function uses a babylon.js Box mesh for each point. */ 
    #geometryArray = [];

    #options = new Orbital3dGeometryOptions();

    constructor(orbit, scene, options = new Orbital3dGeometryOptions())
    {
        this.#orbit = orbit;

        this.#scene = scene;

        this.#options = options;

        this.#generateGeometry();
    }

    /* General function for generating the orbitals 3D geometry.
    **    This function only generates the 3D geometry that represents the orbitals, but does not actually draw anything.
    **    To draw something, we need to pass a function to babylon.js engine.runRenderLoop(), function that will internally
    ** call scene.render(), which is the render method of the scene.
    **    The geometry generated by this function will be given to a babylon.js KeepAsset.meshes array and the moved from the
    ** KeepAsset (and the scene) to an babylon.js AssetContainer.
    **    The babylon.js AssetContainer allows to toggle it's conaining geometry on/off (basically adding it or removing it from
    ** scene). */
    #generateGeometry()
    {
        const ATOM_BOHR_RADIUS = 0.0529;

        const ATOM_X_MIN_VALUE = (this.#options.xAxisWidth * ATOM_BOHR_RADIUS) / (-2.0);
        const ATOM_Y_MIN_VALUE = (this.#options.yAxisWidth * ATOM_BOHR_RADIUS) / (-2.0);
        const ATOM_Z_MIN_VALUE = (this.#options.zAxisWidth * ATOM_BOHR_RADIUS) / (-2.0);
    
        const ATOM_X_DELTA = (this.#options.xAxisWidth * ATOM_BOHR_RADIUS) / (this.#options.xAxisPoints - 1);
        const ATOM_Y_DELTA = (this.#options.yAxisWidth * ATOM_BOHR_RADIUS) / (this.#options.yAxisPoints - 1);
        const ATOM_Z_DELTA = (this.#options.zAxisWidth * ATOM_BOHR_RADIUS) / (this.#options.zAxisPoints - 1);
    
        let x = 0.0;
        let y = 0.0;
        let z = 0.0;
        let complexResult = new Complex(0.0, 0.0);
        let probability = 0.0;
        let phase = 0.0;
    
        let plotX = 0;
        let plotY = 0;
        let plotZ = 0;
        let pointWidth = this.#options.pointSizeRatio * ATOM_X_DELTA;
    
        let pointObject = BABYLON.MeshBuilder.CreateBox('box1', 
                            {size: 0.0000001, sideOrientation: BABYLON.Mesh.FRONTSIDE},
                            this.#scene);
    
        let material1 = new BABYLON.StandardMaterial(`mat1${this.#orbit.getN()}${this.#orbit.getL()}${this.#orbit.getM()}`, this.#scene);
        material1.specularColor = new BABYLON.Color3(0.1 * this.#orbit.getM(), 0.15 * this.#orbit.getL(), 0.2 * this.#orbit.getN() );
    
        let material2 = new BABYLON.StandardMaterial(`mat2${this.#orbit.getN()}${this.#orbit.getL()}${this.#orbit.getM()}`, this.#scene);
        material2.specularColor = new BABYLON.Color3(0.2 * this.#orbit.getN(), 0.1 * this.#orbit.getM(), 0.15 * this.#orbit.getL() );
    
        /* We draw the orbital by drawing a small sphere for each (x, y, z) 3D point, where the radius of
        ** the sphere is the probability given by the Schrodinger functions (multiplied by a factor).
        **    In order to draw these spheres, we generate (x, y, z) 3D points that cover a cube of width 1.
        ** Then, we compute the probability for each of the 3D points. */
        for (let i = 0; i < this.#options.xAxisPoints; i++)
        {
            x = ATOM_X_MIN_VALUE + i * ATOM_X_DELTA;
    
            for (let j = 0; j < this.#options.yAxisPoints; j++)
            {
                y = ATOM_Y_MIN_VALUE + j * ATOM_Y_DELTA;
    
                for (let k = 0; k < this.#options.zAxisPoints; k++)
                {
                    z = ATOM_Z_MIN_VALUE + k * ATOM_Z_DELTA;
    
                    // from the Schrodinger function, get the complex number for the current (x, y, z) 3D point
                    complexResult = schrodingerProbabAmplitude(this.#orbit.getN(), this.#orbit.getL(), this.#orbit.getM(), x, y, z);
    
                    // Compute the probability associated with that complex number.
                    // The probability is considered to be the squared modulus of that complex number.
                    probability = complexResult.squareModulus();
    
                    // normalize the probability (scale so that it's range is betwen 0...1)
                    probability = normalizeSchrodingerProbability(this.#orbit.getN(), this.#orbit.getL(), this.#orbit.getM(), probability);
    
                    /* Normalizing the probability is not enough, because some useful values are very small
                    ** and barely visible.
                    **    So we scale the probability again, in a way that increases small numbers but barely
                    ** increases large numbers, so we can also see the fine details. */
                    probability = scaleLowerValues(probability);
    
                    /* Compute the actual centers of teh spheres */
                    plotX = x; // / (this.xAxisWidth * ATOM_BOHR_RADIUS);
                    plotY = y; // / (this.yAxisWidth * ATOM_BOHR_RADIUS);
                    plotZ = z; // / (this.zAxisWidth * ATOM_BOHR_RADIUS);
                    pointWidth = this.#options.pointSizeRatio * ATOM_X_DELTA * probability;
    
                    /* we also get the phase of the complex number, in order to have two different colors:
                    ** one color for negative phase and another color for positive phase. */
                    phase = complexResult.phase();
    
                    if (probability > 0.01)
                    {
                        pointObject = BABYLON.MeshBuilder.CreateBox('box1', 
                            {size: pointWidth, sideOrientation: BABYLON.Mesh.FRONTSIDE},
                            this.#scene);
    
                        // Set the (x, y, z) coordinates of the object
                        pointObject.position.x = plotX;
                        pointObject.position.y = plotY;
                        pointObject.position.z = plotZ;
    
                        if (phase > 0)
                            pointObject.material = material1;
                        else
                            pointObject.material = material2;
    
                        // add geometry to the array to be returned by this function
                        this.#geometryArray.push(pointObject);
                    }
                }
            }
        }
    }

    getOrbit() { return this.#orbit; }

    hideGeometry()
    {
        for (const geom of this.#geometryArray)
        {
            geom.setEnabled(false);
        }
    }

    showGeometry()
    {
        for (const geom of this.#geometryArray)
        {
            geom.setEnabled(true);
        }
    }

    toggleGeometry()
    {
        for (const geom of this.#geometryArray)
        {
            if (geom.isEnabled())
                geom.setEnabled(false);
            else
                geom.setEnabled(true);
        }
    }
}