var machine = {
  parts: [],
  capabilities : {}
}
var vehicle = {}
var robot = {}

robot.__proto__ = machine;
vehicle.__proto__ = machine;

robot.parts.push('core');

vehicle.parts.push('vehicle');
console.log(robot.parts);
console.log(robot);
console.log(vehicle);
console.log(machine);

module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
