function countCars() {
    let carCounter = 18;
    const maxCars = 25;

    while (carCounter < maxCars) {
        window.alert("Car number " + carCounter + " is entering the garage.");
        carCounter += 1;
    }   

    if (carCounter === maxCars) {
        window.alert("The garage is full. No more cars can enter.");
    }

}
