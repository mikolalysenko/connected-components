"use strict"

module.exports = connectedComponents

function connectedComponents(adj) {
  var numVertices = adj.length
  var visited = new Array(numVertices)
  for(var i=0; i<numVertices; ++i) {
    visited[i] = false
  }
  var components = []
  for(var i=0; i<numVertices; ++i) {
    if(visited[i]) {
      continue
    }
    var toVisit = [i]
    var cc = [i]
    visited[i] = true
    while(toVisit.length > 0) {
      var v = toVisit.pop()
      var nbhd = adj[v]
      for(var j=0; j<nbhd.length; ++j) {
        var u = nbhd[j]
        if(!visited[u]) {
          visited[u] = true
          toVisit.push(u)
          cc.push(u)
        }
      }
    }
    components.push(cc)
  }
  return components
}