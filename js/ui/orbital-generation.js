// Create the geometry for orbital n = 1, l = 0, ml = 0
function generateOrbitalGeometry100(scene)
{
    const orbitalOptions100 = new Orbital3dGeometryOptions();
    orbitalOptions100.xAxisWidth = 2 * 6;
    orbitalOptions100.yAxisWidth = 2 * 6;
    orbitalOptions100.zAxisWidth = 2 * 6;
    orbitalOptions100.xAxisPoints = 16;
    orbitalOptions100.yAxisPoints = 16;
    orbitalOptions100.zAxisPoints = 16;

    const orbital100 = new Orbital3dGeometry(new Orbit(1, 0, 0, 1), scene, orbitalOptions100);
    orbital100.hideGeometry();

    return orbital100;
}

// Create the geometry for orbital n = 2, l = 0, ml = 0
function generateOrbitalGeometry200(scene)
{
    const orbitalOptions200 = new Orbital3dGeometryOptions();
    orbitalOptions200.xAxisWidth = 2 * 13;
    orbitalOptions200.yAxisWidth = 2 * 13;
    orbitalOptions200.zAxisWidth = 2 * 13;
    orbitalOptions200.xAxisPoints = 20;
    orbitalOptions200.yAxisPoints = 20;
    orbitalOptions200.zAxisPoints = 20;

    const orbital200 = new Orbital3dGeometry(new Orbit(2, 0, 0, 1), scene, orbitalOptions200);
    orbital200.hideGeometry();

    return orbital200;
}

// Create the geometry for orbital n = 2, l = 1, ml = 0
function generateOrbitalGeometry210(scene)
{
    const orbitalOptions210 = new Orbital3dGeometryOptions();
    orbitalOptions210.xAxisWidth = 2 * 16;
    orbitalOptions210.yAxisWidth = 2 * 16;
    orbitalOptions210.zAxisWidth = 2 * 16;
    orbitalOptions210.xAxisPoints = 20;
    orbitalOptions210.yAxisPoints = 20;
    orbitalOptions210.zAxisPoints = 20;

    const orbital210 = new Orbital3dGeometry(new Orbit(2, 1, 0, 1), scene, orbitalOptions210);
    orbital210.hideGeometry();

    return orbital210;
}


// Create the geometry for orbital n = 2, l = 1, ml = -1
function generateOrbitalGeometry21neg1(scene)
{
    const orbitalOptions21neg1 = new Orbital3dGeometryOptions();
    orbitalOptions21neg1.xAxisWidth = 2 * 16;
    orbitalOptions21neg1.yAxisWidth = 2 * 16;
    orbitalOptions21neg1.zAxisWidth = 2 * 16;
    orbitalOptions21neg1.xAxisPoints = 20;
    orbitalOptions21neg1.yAxisPoints = 20;
    orbitalOptions21neg1.zAxisPoints = 20;

    const orbital21neg1 = new Orbital3dGeometry(new Orbit(2, 1, -1, 1), scene, orbitalOptions21neg1);
    orbital21neg1.hideGeometry();

    return orbital21neg1;
}

// Create the geometry for orbital n = 2, l = 1, ml = -1
function generateOrbitalGeometry21poz1(scene)
{
    const orbitalOptions21poz1 = new Orbital3dGeometryOptions();
    orbitalOptions21poz1.xAxisWidth = 2 * 16;
    orbitalOptions21poz1.yAxisWidth = 2 * 16;
    orbitalOptions21poz1.zAxisWidth = 2 * 16;
    orbitalOptions21poz1.xAxisPoints = 20;
    orbitalOptions21poz1.yAxisPoints = 20;
    orbitalOptions21poz1.zAxisPoints = 20;

    const orbital21poz1 = new Orbital3dGeometry(new Orbit(2, 1, 1, 1), scene, orbitalOptions21poz1);
    orbital21poz1.hideGeometry();

    return orbital21poz1;
}

// Create the geometry for orbital n = 3, l = 0, ml = 0
function generateOrbitalGeometry300(scene)
{
    const orbitalOptions300 = new Orbital3dGeometryOptions();
    orbitalOptions300.xAxisWidth = 2 * 24;
    orbitalOptions300.yAxisWidth = 2 * 24;
    orbitalOptions300.zAxisWidth = 2 * 24;
    orbitalOptions300.xAxisPoints = 24; // 30
    orbitalOptions300.yAxisPoints = 24;
    orbitalOptions300.zAxisPoints = 24;

    const orbital300 = new Orbital3dGeometry(new Orbit(3, 0, 0, 1), scene, orbitalOptions300);
    orbital300.hideGeometry();

    return orbital300;
}

// Create the geometry for orbital n = 3, l = 1, ml = 0
function generateOrbitalGeometry310(scene)
{
    const orbitalOptions310 = new Orbital3dGeometryOptions();
    orbitalOptions310.xAxisWidth = 2 * 23;
    orbitalOptions310.yAxisWidth = 2 * 23;
    orbitalOptions310.zAxisWidth = 2 * 23;
    orbitalOptions310.xAxisPoints = 24;
    orbitalOptions310.yAxisPoints = 24;
    orbitalOptions310.zAxisPoints = 24;

    const orbital310 = new Orbital3dGeometry(new Orbit(3, 1, 0, 1), scene, orbitalOptions310);
    orbital310.hideGeometry();

    return orbital310;
}

// Create the geometry for orbital n = 3, l = 1, ml = -1
function generateOrbitalGeometry31neg1(scene)
{
    const orbitalOptions31neg1 = new Orbital3dGeometryOptions();
    orbitalOptions31neg1.xAxisWidth = 2 * 23;
    orbitalOptions31neg1.yAxisWidth = 2 * 23;
    orbitalOptions31neg1.zAxisWidth = 2 * 23;
    orbitalOptions31neg1.xAxisPoints = 24;
    orbitalOptions31neg1.yAxisPoints = 24;
    orbitalOptions31neg1.zAxisPoints = 24;

    const orbital31neg1 = new Orbital3dGeometry(new Orbit(3, 1, -1, 1), scene, orbitalOptions31neg1);
    orbital31neg1.hideGeometry();

    return orbital31neg1;
}

// Create the geometry for orbital n = 3, l = 1, ml = 1
function generateOrbitalGeometry31poz1(scene)
{
    const orbitalOptions31poz1 = new Orbital3dGeometryOptions();
    orbitalOptions31poz1.xAxisWidth = 2 * 23;
    orbitalOptions31poz1.yAxisWidth = 2 * 23;
    orbitalOptions31poz1.zAxisWidth = 2 * 23;
    orbitalOptions31poz1.xAxisPoints = 24;
    orbitalOptions31poz1.yAxisPoints = 24;
    orbitalOptions31poz1.zAxisPoints = 24;

    const orbital31poz1 = new Orbital3dGeometry(new Orbit(3, 1, 1, 1), scene, orbitalOptions31poz1);
    orbital31poz1.hideGeometry();

    return orbital31poz1;
}



// Create the geometry for orbital n = 3, l = 2, ml = 0
function generateOrbitalGeometry320(scene)
{
    const orbitalOptions320 = new Orbital3dGeometryOptions();
    orbitalOptions320.xAxisWidth = 2 * 23;
    orbitalOptions320.yAxisWidth = 2 * 23;
    orbitalOptions320.zAxisWidth = 2 * 23;
    orbitalOptions320.xAxisPoints = 30;
    orbitalOptions320.yAxisPoints = 30;
    orbitalOptions320.zAxisPoints = 30;

    const orbital320 = new Orbital3dGeometry(new Orbit(3, 2, 0, 1), scene, orbitalOptions320);
    orbital320.hideGeometry();

    return orbital320;
}

// Create the geometry for orbital n = 3, l = 2, ml = -1
function generateOrbitalGeometry32neg1(scene)
{
    const orbitalOptions32neg1 = new Orbital3dGeometryOptions();
    orbitalOptions32neg1.xAxisWidth = 2 * 23;
    orbitalOptions32neg1.yAxisWidth = 2 * 23;
    orbitalOptions32neg1.zAxisWidth = 2 * 23;
    orbitalOptions32neg1.xAxisPoints = 24;
    orbitalOptions32neg1.yAxisPoints = 24;
    orbitalOptions32neg1.zAxisPoints = 24;

    const orbital32neg1 = new Orbital3dGeometry(new Orbit(3, 2, -1, 1), scene, orbitalOptions32neg1);
    orbital32neg1.hideGeometry();

    return orbital32neg1;
}

// Create the geometry for orbital n = 3, l = 2, ml = 1
function generateOrbitalGeometry32poz1(scene)
{
    const orbitalOptions32poz1 = new Orbital3dGeometryOptions();
    orbitalOptions32poz1.xAxisWidth = 2 * 23;
    orbitalOptions32poz1.yAxisWidth = 2 * 23;
    orbitalOptions32poz1.zAxisWidth = 2 * 23;
    orbitalOptions32poz1.xAxisPoints = 24;
    orbitalOptions32poz1.yAxisPoints = 24;
    orbitalOptions32poz1.zAxisPoints = 24;

    const orbital32poz1 = new Orbital3dGeometry(new Orbit(3, 2, 1, 1), scene, orbitalOptions32poz1);
    orbital32poz1.hideGeometry();

    return orbital32poz1;
}

// Create the geometry for orbital n = 3, l = 2, ml = -2
function generateOrbitalGeometry32neg2(scene)
{
    const orbitalOptions32neg2 = new Orbital3dGeometryOptions();
    orbitalOptions32neg2.xAxisWidth = 2 * 23;
    orbitalOptions32neg2.yAxisWidth = 2 * 23;
    orbitalOptions32neg2.zAxisWidth = 2 * 23;
    orbitalOptions32neg2.xAxisPoints = 30;
    orbitalOptions32neg2.yAxisPoints = 30;
    orbitalOptions32neg2.zAxisPoints = 30;

    const orbital32neg2 = new Orbital3dGeometry(new Orbit(3, 2, -2, 1), scene, orbitalOptions32neg2);
    orbital32neg2.hideGeometry();

    return orbital32neg2;
}

// Create the geometry for orbital n = 3, l = 2, ml = 2
function generateOrbitalGeometry32poz2(scene)
{
    const orbitalOptions32poz2 = new Orbital3dGeometryOptions();
    orbitalOptions32poz2.xAxisWidth = 2 * 23;
    orbitalOptions32poz2.yAxisWidth = 2 * 23;
    orbitalOptions32poz2.zAxisWidth = 2 * 23;
    orbitalOptions32poz2.xAxisPoints = 30;
    orbitalOptions32poz2.yAxisPoints = 30;
    orbitalOptions32poz2.zAxisPoints = 30;

    const orbital32poz2 = new Orbital3dGeometry(new Orbit(3, 2, 2, 1), scene, orbitalOptions32poz2);
    orbital32poz2.hideGeometry();

    return orbital32poz2;
}

// Create the geometry for orbital n = 3, l = 2, ml = 2
function generateOrbitalGeometry400(scene)
{
    const orbitalOptions400 = new Orbital3dGeometryOptions();
    orbitalOptions400.xAxisWidth = 2 * 23;
    orbitalOptions400.yAxisWidth = 2 * 23;
    orbitalOptions400.zAxisWidth = 2 * 23;
    orbitalOptions400.xAxisPoints = 30;
    orbitalOptions400.yAxisPoints = 30;
    orbitalOptions400.zAxisPoints = 30;

    const orbital400 = new Orbital3dGeometry(new Orbit(4, 0, 0, 1), scene, orbitalOptions400);
    orbital400.hideGeometry();

    return orbital400;
}