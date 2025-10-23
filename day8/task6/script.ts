//Task 6 : enum directions
enum directions{ // enum used to define a set of named constants. enums can be numeric or strings in typeScript
    Up, // Up has value 0, Down => 1 , Left => 2, Right => 4 ie this is numeric enum
    Down,
    Left, // To make string : Left = 'Left'
    Right
}

function movement(direction: number):string // direction of type number as numeric enum
{
    return `You moved ${directions[direction]}` // accessing value of directions enum , at specified direction
}
console.log(movement(directions.Up))