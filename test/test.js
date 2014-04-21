"use strict"

var tape = require("tape")
var findCC = require("../cc.js")

tape("connected-components", function(t) {

  var adjList = [
    [],
    [2],
    [1],
    [4, 5],
    [3],
    [3]
  ]

  t.same(findCC(adjList), 
    [ [0], [1, 2], [3, 4, 5] ])

  t.end()
})