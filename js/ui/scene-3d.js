class Scene3D
{
    #canvas = null;

    #scene = null;

    /* The array of orbitals geometry. Each element of the array contains the babylon.js geometry
    ** for a single orbital. */
    #orbital3dGeometryArray = [];

    constructor()
    {
        this.#initScene();

        this.#initOrbital3dGeometryArray();

        // Show first orbital (1, 0, 0)
        this.#orbital3dGeometryArray[1].showGeometry();
    }

    getScene() { return this.#scene; }

    #initScene()
    {
        this.#canvas = document.getElementById("canvas-3d");

        const engine = new BABYLON.Engine(this.#canvas, true, {preserveDrawingBuffer: true, stencil: true});
    
        const scene3D = new BABYLON.Scene(engine);
        this.#scene = scene3D;
        this.#scene.clearColor = new BABYLON.Color3(0.015, 0.015, 0.050);
        this.#scene.ambientColor = new BABYLON.Color3(0.7, 0.7, 0.7);

        const camera = new BABYLON.ArcRotateCamera('camera1', -Math.PI/2, Math.PI/2, 5, new BABYLON.Vector3(0, 5, -10), this.#scene);

        camera.wheelPrecision = 10; // Mouse wheel speed, the higher the value, the slower is the zoom

        // Target the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // Attach the camera to the canvas
        camera.attachControl(this.#canvas, true);

        // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
        const light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.#scene);
        // const light2 = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(1, 0, 1), this.#scene);

        // Default intensity is 1. Let's dim the light a small amount
        light1.intensity = 0.7;
        // light2.intensity = 0.7;

        this.#scene.registerBeforeRender(function ()
        {
            // light1.position = camera.position;
        });

        // run the render loop
        engine.runRenderLoop(function()
        {
            scene3D.render();
        });

        // the canvas/window resize event handler
        window.addEventListener("resize", function()
        {
            engine.resize();
        });
    }

    #initOrbital3dGeometryArray()
    {
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry100(this.#scene) );

        this.#orbital3dGeometryArray.push( generateOrbitalGeometry200(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry210(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry21neg1(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry21poz1(this.#scene) );

        this.#orbital3dGeometryArray.push( generateOrbitalGeometry300(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry310(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry31neg1(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry31poz1(this.#scene) );

        this.#orbital3dGeometryArray.push( generateOrbitalGeometry320(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry32neg1(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry32poz1(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry32neg2(this.#scene) );
        this.#orbital3dGeometryArray.push( generateOrbitalGeometry32poz2(this.#scene) );

        this.#orbital3dGeometryArray.push( generateOrbitalGeometry400(this.#scene) );
    }

    findOrbitalGeom(n, l, m)
    {
        /* Find if there is an 'Orbital3dGeometry' object that corresponds to the
        ** n, l, m quantum numbers */
        let orbital3dGeom = null;

        for (const orbitalGeom of this.#orbital3dGeometryArray)
        {
            if (orbitalGeom.getOrbit().getN() === n &&
                orbitalGeom.getOrbit().getL() === l &&
                orbitalGeom.getOrbit().getM() === m)
            {
                orbital3dGeom = orbitalGeom;
                break;
            }
        }

        return orbital3dGeom;
    }

    showOrbitalGeom(n, l, m)
    {
        /* Find if there is an 'Orbital3dGeometry' object that corresponds to the
        ** n, l, m quantum numbers */
        const orbitalGeom = this.findOrbitalGeom(n, l, m);
        console.log(orbitalGeom);

        if (orbitalGeom != null)
            orbitalGeom.showGeometry();
    }

    showOrbitalsGeomFromArray(orbitArray)
    {
        /* For each orbit, redisplay the corresponding orbit geometry from the 3D scene */
        let quantumNumbers = {n: 1, l: 0, m: 0};
        for (const orbit of orbitArray)
        {
            quantumNumbers = orbit.getQuantumValues();
            
            this.showOrbitalGeom(quantumNumbers.n, quantumNumbers.l, quantumNumbers.m);
        }
    }

    hideOrbitalGeom(n, l, m)
    {
        /* Find if there is an 'Orbital3dGeometry' object that corresponds to the
        ** n, l, m quantum numbers */
        const orbitalGeom = this.findOrbitalGeom(n, l, m);

        if (orbitalGeom != null)
            orbitalGeom.hideGeometry();
    }

    hideOrbitalsGeom()
    {
        for (const orbitalGeom of this.#orbital3dGeometryArray)
        {
            orbitalGeom.hideGeometry();
        }
    }

    toggleOrbitalGeom(n, l, m)
    {
        /* Find if there is an 'Orbital3dGeometry' object that corresponds to the
        ** n, l, m quantum numbers */
        const orbitalGeom = this.findOrbitalGeom(n, l, m);

        if (orbitalGeom != null)
            orbitalGeom.toggleGeometry();
    }
}
