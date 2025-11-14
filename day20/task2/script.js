"use strict";
// import { objDeepCheck } from '../../utils/array.js'
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeHeatmap = analyzeHeatmap;
function analyzeHeatmap(heatmap) {
    if (!Array.isArray(heatmap) || heatmap.length === 0)
        return 'invalid input';
    var min = { temp: Infinity, point: [-1, -1] };
    var max = { temp: -Infinity, point: [-1, -1] };
    var sum = 0;
    var n = 0;
    for (var i = 0; i < heatmap.length; i++) {
        if (!Array.isArray(heatmap[i]))
            return 'invalid input';
        for (var j = 0; j < heatmap[i].length; j++) {
            if (typeof heatmap[i][j] !== 'number' || isNaN(heatmap[i][j]))
                return 'invalid input';
            n++;
            if (heatmap[i][j] < min.temp) {
                min.temp = heatmap[i][j];
                min.point = [i, j];
            }
            if (heatmap[i][j] > max.temp) {
                max.temp = heatmap[i][j];
                max.point = [i, j];
            }
            sum += heatmap[i][j];
        }
    }
    return {
        maxTemp: max.temp,
        minTemp: min.temp,
        averageTemp: Number((sum / n).toFixed(1)),
        hottestPoint: max.point,
        coldestPoint: min.point
    };
}
// console.log(analyzeHeatmap([[30,32,35], [28,40,33], [31,36,38]]))
// console.log(analyzeHeatmap([[-30,-32,-35], [-28,-40,-33], [-31,-36,-38]]))
/*
function testCase(){
    let testCases = [
        {
            id: 1,
            input: [[30,32,35], [28,40,33], [31,36,38]],
            output: {maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0]}
        },
        {
            id: 2,
            input: [[30,-32,35], [28,40,33], [31,36,38]],
            output: {maxTemp: 40, minTemp: -32, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [0,1]}
        },
        {
            id: 3,
            input: [[30,30], [30,30], [30,30]],
            output: {maxTemp: 30, minTemp: 30, averageTemp: 30, hottestPoint: [0,0], coldestPoint: [0,0]}
        },
        {
            id: 4,
            input: [[30]],
            output: {maxTemp: 30, minTemp: 30, averageTemp: 30, hottestPoint: [0,0], coldestPoint: [0,0]}
        },
        {
            id: 5,
            input: [[-30,-32,-35], [-28,-40,-33], [-31,-36,-38]],
            output: {maxTemp: -28, minTemp: -40, averageTemp: 33.7, hottestPoint: [1,0], coldestPoint: [1,1]}
        },
        {
            id: 6,
            input: [1,2,3,4],
            output: 'invalid input'
        },
        {
            id: 7,
            input: 40,
            output: 'invalid input'
        },
        {
            id: 8,
            input: {},
            output: 'invalid input'
        },
        {
            id: 9,
            input: '50',
            output: 'invalid input'
        },
        {
            id: 10,
            input: null,
            output: 'invalid input'
        },
        {
            id: 11,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 12,
            input: [[30.5,30], [40.9,33], [34, 20]],
            output: {maxTemp: 40.9, minTemp: 20, averageTemp: 31.4, hottestPoint: [1,0], coldestPoint: [2,1]}
        },
        {
            id: 13,
            input: [['30',32,'35'], [28,40,33], [31,36,38]],
            output: 'invalid input'
        },
        {
            id: 14,
            input: [[35], [0,33], [39,31]],
            output: {maxTemp: 39, minTemp: 0, averageTemp: 27.6, hottestPoint: [2,0], coldestPoint: [1,0]}
        },
        {
            id: 15,
            input: [[], [28,40,33], []],
            output: {maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0]}
        }
    ]

    testCases.forEach(test => {
        let originalOutput = analyzeHeatmap(test.input)
        let status = objDeepCheck(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    })
}
testCase();
*/ 
