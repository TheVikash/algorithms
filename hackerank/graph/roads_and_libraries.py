#!/bin/python

import sys

adjacentList = {}
graph = {}
def calculate(n,m,x,y):
    count_list = dfs(graph)
    sum = 0
    for c in count_list:
        sum = sum + (c - 1)*y + x
    if(sum > n*x):
        return n*x
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

q = int(raw_input().strip())
for a0 in xrange(q):
    adjacentList = {}
    graph = {}
    n,m,x,y = raw_input().strip().split(' ')
    n,m,x,y = [int(n),int(m),int(x),int(y)]
    for i in range(0,n):
        graph[str(i + 1)] = {}
        graph[str(i + 1)]['c'] = 'w'
        adjacentList[str(i + 1)] = []
        
    for a1 in xrange(m):
        city_1,city_2 = raw_input().strip().split(' ')
        adjacentList[city_1].append(city_2)
        adjacentList[city_2].append(city_1)

    print calculate(n,m,x,y)







