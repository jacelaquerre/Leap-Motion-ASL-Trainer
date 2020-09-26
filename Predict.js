var oneFrameOfData = nj.array([[[  694.56482,  646.73065,    151.746,  694.56482,  646.73065,    151.746],
    [  694.56482,  646.73065,    151.746,  498.20395,  465.13695,    119.606],
    [  498.20395,  465.13695,    119.606,  418.94097,  372.05463,    91.7985],
    [  418.94097,  372.05463,    91.7985,   403.0523,  332.63079,    70.6445]],
    [[  797.12888,  505.24427,    152.205,  666.44157,  230.61062,    95.4631],
        [  666.44157,  230.61062,    95.4631,  571.79418,  128.48059,    59.4421],
        [  571.79418,  128.48059,    59.4421,  503.10788,  173.18553,    39.3787],
        [  503.10788,  173.18553,    39.3787,  457.20798,  253.00625,     28.525]],
    [[   884.0961,  505.19326,    148.428,  827.12888,  257.78513,    91.9345],
        [  827.12888,  257.78513,    91.9345,  775.85367,  150.86053,    49.5638],
        [  775.85367,  150.86053,    49.5638,  700.57828,  195.08679,    25.4021],
        [  700.57828,  195.08679,    25.4021,  638.33195,  272.74956,    13.1922]],
    [[  967.27533,  528.57291,    144.578,  982.89704,  325.41146,    92.2275],
        [  982.89704,  325.41146,    92.2275,  959.12375,  231.18346,    52.4244],
        [  959.12375,  231.18346,    52.4244,  890.94813,  268.61413,    28.4919],
        [  890.94813,  268.61413,    28.4919,  826.26867,  338.50042,     15.867]],
    [[ 1033.23588,  601.99903,    139.992, 1110.54274,   420.0475,    92.0811],
        [ 1110.54274,   420.0475,    92.0811, 1141.44785,  339.95213,    60.9523],
        [ 1141.44785,  339.95213,    60.9523, 1109.02755,  348.76443,    43.1955],
        [ 1109.02755,  348.76443,    43.1955, 1051.44224,   391.6096,    29.8857]]]);

var anotherFrameOfData = nj.array([[[ 1025.56179,  693.69264,    118.745, 1025.56179,  693.69264,    118.745],
    [ 1025.56179,  693.69264,    118.745,  649.71767,  647.70134,    84.7616],
    [  649.71767,  647.70134,    84.7616,  365.33001,  588.86473,    64.3984],
    [  365.33001,  588.86473,    64.3984,  136.66112,  503.30406,    56.5382]],
    [[ 1114.18141,   423.6334,    109.071,  886.46407,  489.64499,    42.5746],
        [  886.46407,  489.64499,    42.5746,  763.09593,  340.43596,    4.79992],
        [  763.09593,  340.43596,    4.79992,  691.48405,  282.17173,   -16.8055],
        [  691.48405,  282.17173,   -16.8055,  639.75184,  257.28188,    -32.218]],
    [[ 1240.23002,  408.70238,    105.181, 1126.15194,  478.09621,    40.1857],
        [ 1126.15194,  478.09621,    40.1857, 1096.64133,  293.64823,   -3.45481],
        [ 1096.64133,  293.64823,   -3.45481, 1073.17141,  216.56485,   -29.7085],
        [ 1073.17141,  216.56485,   -29.7085, 1054.16936,  184.76597,   -47.2494]],
    [[ 1370.10676,  431.95892,    102.804, 1370.42433,  502.39345,    43.8231],
        [ 1370.42433,  502.39345,    43.8231, 1428.37277,  365.73052,    2.98941],
        [ 1428.37277,  365.73052,    2.98941, 1458.95387,  306.75805,   -22.7274],
        [ 1458.95387,  306.75805,   -22.7274,  1476.2884,  282.56199,   -40.2363]],
    [[ 1495.98678,  545.59657,    103.218, 1586.18268,  585.08356,     49.062],
        [ 1586.18268,  585.08356,     49.062, 1734.69655,  499.90736,    18.7978],
        [ 1734.69655,  499.90736,    18.7978, 1811.53386,  471.37509,    1.67138],
        [ 1811.53386,  471.37509,    1.67138, 1874.78393,  460.82364,   -13.6479]]]);

var frameIndex = 0;
var frameFlag = 0;
function draw() {
    var xStart, xStart2;
    var yStart, yStart2;
    var zStart, zStart2;
    var xEnd, xEnd2;
    var yEnd, yEnd2;
    var zEnd, zEnd2;

    if(frameIndex === 100) {
        frameIndex = 0;
        if (frameFlag === 0) {
            frameFlag = 1;
        } else if (frameFlag === 1) {
            frameFlag = 0;
        }
    }

    clear();
    for (var i = 0; i < 5; ++i) {
        for(var j = 0; j < 4; ++j) {
            xStart = oneFrameOfData.get(i, j, 0)
            yStart = oneFrameOfData.get(i, j, 1)
            zStart = oneFrameOfData.get(i, j, 2)
            xEnd = oneFrameOfData.get(i, j, 3)
            yEnd = oneFrameOfData.get(i, j, 4)
            zEnd = oneFrameOfData.get(i,j,5)

            console.log(xStart);
            console.log(yStart);
            console.log(zStart);
            console.log(xEnd);
            console.log(yEnd);
            console.log(zEnd);
            console.log(xStart, yStart, zStart, xEnd, yEnd, zEnd);

            xStart2 = anotherFrameOfData.get(i, j, 0)
            yStart2 = anotherFrameOfData.get(i, j, 1)
            zStart2 = anotherFrameOfData.get(i, j, 2)
            xEnd2 = anotherFrameOfData.get(i, j, 3)
            yEnd2 = anotherFrameOfData.get(i, j, 4)
            zEnd2 = anotherFrameOfData.get(i, j, 5)

            console.log(xStart2, yStart2, zStart2, xEnd2, yEnd2, zEnd2);
            if(frameFlag % 2 === 0) {
                line(xStart, yStart, xEnd, yEnd);
            } else {
                line(xStart2, yStart2, xEnd2, yEnd2);
            }
        }
    }
    ++frameIndex;
}