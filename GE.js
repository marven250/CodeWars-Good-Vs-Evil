
function goodVsEvil(good, evil) {
    let gScore = 0
    let eScore = 0
    let gooder = [1, 2, 3, 3, 4, 10]
    let eviler = [1, 2, 2, 2, 3, 5, 10]

    let good1 = good.split(" ")
    let evil1 = evil.split(" ")

    good1.forEach(function (goods, idx) {
        gScore += goods * gooder[idx]

    })

    evil1.forEach(function (evils, idx2) {
        eScore += evils * eviler[idx2]

    })

    console.log(gScore)
    console.log(eScore)

    if (gScore > eScore) {
        return "Battle Result: Good triumphs over Evil"
    }
    if (gScore < eScore) {
        return "Battle Result: Evil eradicates all trace of Good"
    }
    if (gScore == eScore) {
        return "Battle Result: No victor on this battle field"

    }

}