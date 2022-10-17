class Vehicle { // можно использовать также интерфейсы
    run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T) : T { 
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

class LCV extends Vehicle {
    capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());

kmToMiles({run: 1})//работает как интерфейс

function logId <T extends string | number, Y>(id: T, additionalData: Y): {id: T, data: Y}{
    console.log(id);
    console.log(additionalData)
    return {id, data: additionalData};
}