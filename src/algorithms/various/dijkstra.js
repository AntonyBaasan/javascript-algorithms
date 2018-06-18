"use strict";

var Utils = require("./../utils");

function Dijkstra(graph, startNode, endNode) {
    var testParams = testGraph();

    return shortestPath(
        testParams.graphTest,
        testParams.startNode,
        testParams.endNode
    );
    // return shortestPath(graphTest, startNode, endNode);
}

function shortestPath(graph, start, end) {
    var result = [];
    var visitedNodes = [];

    var sides = graph.sides;

    var currentNode = start;
    currentNode.addDestination(start, 0);
    traverse(currentNode, sides, visitedNodes);

    var n = end;
    while (n) {
        console.log(n.name);
        
        if (n.adjacentNode === n) {
            break;
        }

        n = n.adjacentNode;
    }

    return result;
}

function traverse(currentNode, sides, visitedNodes) {
    var list = [currentNode];
    while (list.length > 0) {
        var curr = list.shift();

        for (var i = 0; i < sides.length; i++) {
            var side = sides[i];
            // if (side.node2.name === "D") {
            //     console.log("test");
            // }
            if (side.node1 === curr && !contains(visitedNodes, curr)) {
                list.push(side.node2);
                if (side.node2.distance > curr.distance + side.distance) {
                    side.node2.addDestination(
                        curr,
                        curr.distance + side.distance
                    );
                }
            }
        }
        visitedNodes.push(curr);
    }
}

function contains(nodes, node) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] === node) {
            return true;
        }
    }
    return false;
}

function testGraph() {
    // below graph pic is 'src/algorithms/various/dijkstra.jpg'

    var nodeA = new Utils.Node("A");
    var nodeB = new Utils.Node("B");
    var nodeC = new Utils.Node("C");
    var nodeD = new Utils.Node("D");
    var nodeE = new Utils.Node("E");

    var graph = new Utils.Graph();

    graph.nodes = [nodeA, nodeB, nodeC, nodeD, nodeE];

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
