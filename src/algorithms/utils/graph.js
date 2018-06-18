"use strict";

function Graph() {
    this.nodes = [];
    this.sides = [];

    this.addNode = function(node) {
        this.nodes.push(node);
    };

    this.addSide = function(node1, node2, dist) {
        this.sides.push(new Side(node1, node2, dist));
    };
}

function Node(name) {
    this.name = name;
    this.distance = Number.MAX_SAFE_INTEGER;
    this.adjacentNode = null; //node

    this.addDestination = function(destiantionNode, distance) {
        this.adjacentNode = destiantionNode;
        this.distance = distance;
    };
}

function Side(node1, node2, dist) {
    this.node1 = node1;
    this.node2 = node2;
    this.distance = dist;
}

exports.Graph = Graph;
exports.Node = Node;
exports.Side = Side;
