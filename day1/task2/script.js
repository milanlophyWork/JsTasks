// PATTERN
function word(text){
    if(typeof text !== 'string' || !text.trim()){
        console.log('invalid input')
        return 'invalid input'
    }

    let pattern = ''
    let str = ''
    for(let i = 0; i< text.length; i++){
        pattern = pattern + text[i]
        console.log(pattern)
        str += pattern
    }
    let pattern2 = ''
    for(let i=1; i<text.length;i++){
        pattern2 = text.slice(i) // slice(1) : AT because slicing starts at 1, C =>0 A => 1 goes till end as no end index specified
        console.log(pattern2)
        str += pattern2
    }
    return str
}
// word('CAT')

const testCases = [
    {
        id: 1,
        input: 'jesus',
        output: 'jjejesjesujesusesussususs'
    },
    {
        id: 2,
        input: '',
        output: 'invalid input'
    },
    {
        id: 3,
        input: 'c',
        output: 'c'
    },
    {
        id: 4,
        input: 'ca',
        output: 'ccaa'
    },
    {
        id: 5,
        input: 20,
        output: 'invalid input'
    },
    {
        id: 6,
        input: 'CAT',
        output: 'CCACATATT'
        
    },
    {
        id: 7,
        input: {},
        output: 'invalid input'
    },
    {
        id: 8,
        input: [],
        output: 'invalid input'
    },
    {
        id: 9,
        input: true,
        output: 'invalid input'
    },
    {
        id: 10,
        input: false,
        output: 'invalid input'
    },
    {
        id: 11,
        input: 'hi hi',
        output: 'hhihi hi hhi hii hi hihii'
        
    },
    {
        id: 12,
        input: 'cat',
        output: 'ccacatatt'
    },
    {
        id:13,
        input: null,
        output: 'invalid input'
    },
    {
        id: 14,
        input: undefined,
        output: 'invalid input',
    },
    {
        id: 15,
        input: ' ',
        output: 'invalid input'
    }
]

for(let i=0; i<testCases.length; i++) {
    let originalOutput = word(testCases[i].input)
    if(testCases[i].output === originalOutput){
        console.log(`Testcase ${testCases[i].id} Passed \n\n`)
    }else{
        console.log(`Testcase ${testCases[i].id} Failed \n\n`)
    }
}