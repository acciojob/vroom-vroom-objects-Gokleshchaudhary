// Car constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// getMakeModel method
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Inherit properties from Car
    this.topSpeed = topSpeed; // Add topSpeed property
}

// getTopSpeed method
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Set up inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
const carInfo = document.getElementById("car-info");

carInfo.innerHTML = `
    <p>Make and Model: ${car.getMakeModel()}</p>
    <p>Top Speed: ${car.getTopSpeed()} mph</p>
`;