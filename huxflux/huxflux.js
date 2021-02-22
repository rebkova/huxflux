
const huxflux = () => {

    const arrOfNrs = []

    while (arrOfNrs.length < 7) {

        //not correct for all cases, optimise
        const randomNr = Math.floor(Math.random() * 35) + 1

        if (!arrOfNrs.includes(randomNr)) {

            arrOfNrs.push(randomNr)
        }

    }

    return arrOfNrs
}

export { huxflux };