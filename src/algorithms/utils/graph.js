"use strict";

function Graph() {
    this.nodes = [];
    this.sides = [];

    this.addNode = function(node) {
        this.nodes.push(node);
    };

    this.addSide = function(side) {
        this.sides.push(side);
    };
}

function Node(name) {
    this.name = name;
    this.shortestPath = []; //nodes
    this.distance = Number.MAX_SAFE_INTEGER;
    this.adjacentNodes = []; //nodes

    this.addDestination = function(destiantionNode, distance) {
        this.adjacentNodes.push({
            distination: destiantionNode,
            distance: distance
        });
    };
}

function Side(node1, node2, dist){
    this.node1 = node1;
    this.node2 = node2;
    this.distance = dist;
}

exports.Graph = Graph;
exports.Node = Node;
exports.Side = Side;
