function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(shaderScript.type + " error during compile: " + gl.getShaderInfoLog(shader));
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

function pushAll(origin, push) {
    for (var i in push) {
        origin.push(push[i]);
    }
}

function pickMat4(origin, offset) {
    if (offset < 0 || offset > 8) return null;
    var start = offset * 16;
    return mat4.fromValues(
        origin[start],
        origin[start + 1],
        origin[start + 2],
        origin[start + 3],
        origin[start + 4],
        origin[start + 5],
        origin[start + 6],
        origin[start + 7],
        origin[start + 8],
        origin[start + 9],
        origin[start + 10],
        origin[start + 11],
        origin[start + 12],
        origin[start + 13],
        origin[start + 14],
        origin[start + 15]
    );
}

function replaceMat4(origin, offset, matrix) {
    if (offset < 0 || offset > 8 || !origin) return;
    var flatten = [];
    pushAll(flatten, matrix);
    for (var i = 0; i < 16; ++i) {
        origin[16 * offset + i] = flatten[i];
    }
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();