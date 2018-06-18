"use strict";

var Utils = require("./../utils");

function Dijkstra(graph, startNode, endNode) {
    var testParams = testGraph();

    return shortestPath(testParams.graphTest, testParams.startNode, testParams.endNode);
    // return shortestPath(graphTest, startNode, endNode);
}

function shortestPath(graph) {
    return graph;
}

function testGraph() {
    // below graph pic is 'src/algorithms/various/dijkstra.jpg'

    var nodeA = new Utils.Node("A");
    var nodeB = new Utils.Node("B");
    var nodeC = new Utils.Node("C");
    var nodeD = new Utils.Node("D");
    var nodeE = new Utils.Node("E");

    var graph = new Utils.Graph();

    graph.addSide(nodeA, nodeB, 6);
    graph.addSide(nodeA, nodeD, 1);
    graph.addSide(nodeB, nodeD, 2);
    graph.addSide(nodeB, nodeE, 2);
    graph.addSide(nodeD, nodeE, 1);
    graph.addSide(nodeE, nodeC, 5);
    graph.addSide(nodeB, nodeC, 5);

    return {
        graphTest: graph,
        startNode: nodeA,
        endNode: nodeC
    };
}

exports.Dijkstra = Dijkstra;
