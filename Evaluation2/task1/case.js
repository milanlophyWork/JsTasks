import { analyzeHeatmap } from './script.ts'

function testCases(){
    let testCase = [
        {
            id: 1,
            input: [[30,32,35],[28,40,33],[31,36,38]],
            output: {
                minTemp: 28,
                maxTemp: 40,
                averageTemp: 33.7,
                hottestPoint: [1,1],
                coldestPoint: [1,0]
            }
        },
        {
            id: 2,
            input: [['30',32,35],[28,40,33],[31,36,38]],
            output: 'invalid input'
        },
        {
            id: 3,
            input: [[],[28,40,33],[31,36,38]],
            output: {
                minTemp: 28,
                maxTemp: 40,
                averageTemp: 34.3,
                hottestPoint: [1,1],
                coldestPoint: [1,0]
            }
        },
        {
            id: 4,
            input: [null, [1,2,3]],
            output: 'invalid input'
        },
        {
            id: 5,
            input: [[30,32],[28,33],[31,36,30]],
            output: {
                minTemp: 28,
                maxTemp: 36,
                averageTemp: 31.4,
                hottestPoint: [2,1],
                coldestPoint: [1,0]
            }
        },
        {
            id: 6,
            input: '34',
            output: 'invalid input'
        },
        {
            id: 7,
            input: null,
            output: 'invalid input'
        },
        {
            id: 8,
            input: [[30,28,30],[28,40,40],[31,36,38]],
            output: {
                minTemp: 28,
                maxTemp: 40,
                averageTemp: 33.4,
                hottestPoint: [1,1],
                coldestPoint: [0,1]
            }
        },
        {
            id: 9,
            input: [[30,28,30],[28,null, 40,40],[31,36,38]],
            output: 'invalid input'
        },
        {
            id: 10,
            input: [],
            output: 'invalid input'
        },
        {
            id: 11,
            input: [[30,-32],[28,33],[31,-36,30]],
            output: {
                minTemp: -36,
                maxTemp: 33,
                averageTemp: 12,
                hottestPoint: [1,1],
                coldestPoint: [2,1]
            }
        },
    ]
    testCase.forEach(test => {
        const originalOutput = analyzeHeatmap(test.input)
        let status = 'passed'
        if(JSON.stringify(test.output) !== JSON.stringify(originalOutput)) status = 'failed'


        let display = `
        test ${test.id} ${status}
        output got: ${originalOutput}
        output expected: ${test.output}
        `

        console.log(display)
    })
}

testCases()