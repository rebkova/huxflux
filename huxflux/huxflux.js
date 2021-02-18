/**
 * @returns {Number[]} Lista med sju nummer
 */
const huxflux = () => {

    var arrOfNrs = []

    // const randomNr = Math.floor(Math.random() * 35) + 1



    while (arrOfNrs.length < 7) {

        const randomNr = Math.floor(Math.random() * 35) + 1

        console.log(randomNr)

        if (!arrOfNrs.includes(randomNr)) {

            // console.log(randomNr)


            arrOfNrs.push(randomNr)

            console.log(arrOfNrs)

        }
        console.log(arrOfNrs)

    }

    console.log(arrOfNrs)
    // return arrOfNums


    return arrOfNrs; // Returnera din lista med nummer här
}

export {
    huxflux
};