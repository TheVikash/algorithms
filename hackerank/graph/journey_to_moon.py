#!/bin/python

import sys

adjacentList = {}
graph = {}
def calculate():
    count_list = dfs(graph)
    return count_list
    
def dfs(graph):
    count = []
    for vertex in graph:
        if(graph[vertex]['c'] == 'w'):
            count.append(dfsvisit(graph,vertex,0) )
    return count

def dfsvisit(graph,vertex,count):
    graph[vertex]['c'] = 'g'
    for adj in adjacentList[vertex]:
        if(graph[adj]['c'] == 'w'):
           count = dfsvisit(graph,adj,count)
    graph[vertex]['c'] = 'b'
    return count + 1



N,l = map(int,raw_input().split())
for i in range(0,N):
    graph[str(i)] = {}
    graph[str(i)]['c'] = 'w'
    adjacentList[str(i)] = []
 
for i in xrange(l):
    a,b = raw_input().split()
    adjacentList[a].append(b)
    adjacentList[b].append(a)

    print calculate()
