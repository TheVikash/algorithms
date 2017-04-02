#!/bin/python

import sys

graph = {}

totalCount = 0
def calculate():
    global totalCount
    dfs(graph)
    return totalCount
    
def dfs(graph):
    root = '1'
    for vertex in graph[root]['link']:
        dfsvisit(graph,vertex)
    return 0

def dfsvisit(graph,vertex):
    global totalCount
    for adj in graph[vertex]['link']:
        dfsvisit(graph,adj)
    # print vertex
    if(graph[vertex]['c'] % 2 == 0):
        totalCount = totalCount + 1
    else:
        parent = graph[vertex]['p']
        graph[parent]['c'] += graph[vertex]['c']

    

def showGraph():
    length = len(graph)
    for i in range(0,length):
        print str(i+1),'-->',graph[str(i + 1)]

N,l = map(int,raw_input().split())

for i in range(0,N):
    graph[str(i + 1)] = {}
    graph[str(i + 1)]['c'] = 1
    graph[str(i + 1)]['link'] = []
    graph[str(i + 1)]['p'] = None
for i in xrange(l):
    a,b = raw_input().split()
    graph[b]['link'].append(a)
    graph[a]['p'] = b

# showGraph()
print calculate()
