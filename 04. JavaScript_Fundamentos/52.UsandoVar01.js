// var fica visível dentro ou fora do bloco
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

// se var for criada dentro de uma function, ela só será visivel dentro da function
function teste() {
    var local = 123
    console.log(local)
}

/* teste()
console.log(local); */
