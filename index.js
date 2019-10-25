// Code your solution in this file!
 distanceFromHqInBlocks = (pickupLocation) => {
    return(pickupLocation > 42 ? pickupLocation - 42 : 42 - pickupLocation)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    let distanceBetween = 0
    startingBlock > endingBlock ? distanceBetween = startingBlock - endingBlock : distanceBetween = endingBlock - startingBlock
    return distanceBetween * 264
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance > 2500) {
        return 'cannot travel that far'
    } else if (distance < 400) {
        return 0
    } else {
        return (distance > 2000 ? 25 : (distance - 400) * 0.02)
    }
}