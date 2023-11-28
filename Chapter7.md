# CHAPTER 7 PROJECT: A ROBOT
````javascript
// Define the roads in the village
var roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

// Function to build a graph from the given edges
function buildGraph(edges) {
  let graph = Object.create(null);

  // Helper function to add an edge to the graph
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  // Create edges for each road and add them to the graph
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

// Build the road graph using the provided roads
var roadGraph = buildGraph(roads);

// Define the VillageState class to represent the state of the village
var VillageState = class VillageState {
  constructor(place, parcels) {
    this.place = place;       // Current location of the robot
    this.parcels = parcels;   // Parcels that need to be delivered
  }

  // Method to move to a destination and update the state
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      // If the destination is not reachable, return the current state
      return this;
    } else {
      // Update the parcels and create a new state with the updated information
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);

      return new VillageState(destination, parcels);
    }
  }
};

// Function to run the robot simulation
function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      // If all parcels are delivered, print the number of turns and exit the loop
      console.log(`Done in ${turn} turns`);
      break;
    }

    // Get the action from the robot and update the state and memory
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;

    console.log(`Moved to ${action.direction}`);
  }
}

// Function to randomly pick an element from an array
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

// Function representing a random robot's behavior
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

// Static method to generate a random initial state for the village
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    // Generate random addresses and places for parcels
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

// A predefined mail route for the routeRobot
var mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

// Function for the route-following robot
function routeRobot(state, memory) {
  if (memory.length == 0) {
    // If memory is empty, use the predefined mail route
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

// Function to find the shortest route between two places in the graph
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];

  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];

    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

// Function for the goal-oriented robot
function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    // If no route is provided, calculate a new route based on parcel locations
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

```