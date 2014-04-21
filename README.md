connected-components
====================
Enumerate all connected components in an undirected graph.

# Example

```javascript
var cc = require("connected-components")

var adjList = [
  [],
  [2],
  [1],
  [4, 5],
  [3],
  [3]
]

console.log(cc(adjList))
```

Output:

```javascript
[ [0], [1, 2], [3, 4, 5] ]
```

# Install

```
npm install connected-components
```

# API

#### `require("connected-components")(adjacencyList)`
Returns a list of connected components for the given graph.

* `adjacencyList` is an adjacency list representation of a graph

**Returns** A list of connected components in the graph

# Credits
(c) 2014 Mikola Lysenko. MIT License