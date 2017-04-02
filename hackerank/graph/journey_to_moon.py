#!/bin/python

import sys

adjacentList = {}
graph = {}
def calculate(N,nodes):
    count_list = dfs(graph)
    length = len(count_list)
    sum = 0
    for i in range(0,length):
        sum = sum + count_list[i]
    
    sum = sum * (N - nodes)
    

    for i in range(0,length):
        for j in range(0,length): 
                sum = sum + count_list[j]*count_list

    return sum

    
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

nodes = 0
for i in xrange(l):
    a,b = raw_input().split()
    if(a not in graph):
        nodes += 1 
        graph[a] = {}
        graph[a]['c'] = 'w'
        adjacentList[a] = []
    if(b not in graph):
        nodes += 1 
        graph[b] = {}
        graph[b]['c'] = 'w'
        adjacentList[b] = []
    adjacentList[a].append(b)
    adjacentList[b].append(a)

print calculate(N,nodes)
