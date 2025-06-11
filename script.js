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
    Car.call(this, make, model); // Call the Car constructor to inherit properties
    this.topSpeed = topSpeed; // Add topSpeed property
}

// Set up inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// getTopSpeed method
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Displaying the information
const carInfo = document.getElementById("car-info");
carInfo.innerHTML = `
    <p>Make and Model: ${car.getMakeModel()}</p>
    <p>Top Speed: ${car.getTopSpeed()} mph</p>
`;