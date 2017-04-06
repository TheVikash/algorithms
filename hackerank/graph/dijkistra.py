#!/bin/python

import sys
import math
from collections import deque
graph = {}
vertex = deque([])


def calculate():
    global vertex
    buildMinHeapify()
    while(len(vertex) is not 0):
        u = vertex.popleft()
        for adj in graph[u]['link']:
            relax(adj,u)
        if(len(graph[u]['link']) is not 0):
            buildMinHeapify()


def relax(adj,u):
    v = str(adj['v'])
    w = adj['w']
    if(graph[v]['d'] > graph[u]['d'] + w):
        graph[v]['d'] = graph[u]['d'] + w
    
def returnAns(s,n):
    for i in range(0,n):
        if(i + 1 is not int(s)):
            print graph[str(i + 1)]['d'] if graph[str(i + 1)]['d'] != float('inf') else -1,
    print 

def minHeapify(i):
    heapSize = len(vertex)
    left = 2*i + 1
    right = 2*i + 2
    lowest = i
    if(left < heapSize):
        if(graph[vertex[i]]['d'] > graph[vertex[left]]['d']):
            lowest = left
        else:
            lowest = i
    
    if(right < heapSize):
        if graph[vertex[lowest]]['d'] > graph[vertex[right]]['d']:
            lowest = right

    if(lowest != i):
        tmp = vertex[lowest]
        vertex[lowest] = vertex[i]
        vertex[i] = tmp
        minHeapify(lowest)



def buildMinHeapify():
    size = int(math.floor(len(vertex)/2))
    for i in range(size,-1,-1):
        minHeapify(i)


t = int(raw_input().strip())
for a0 in xrange(t):
    graph = {}
    vertex = deque([])
    n,m = raw_input().strip().split(' ')
    n,m = [int(n),int(m)]
    for i in range(0,n):
        graph[str(i + 1)] = {}
        graph[str(i + 1)]['d'] = float('inf')
        graph[str(i + 1)]['link'] = []
        vertex.append(str(i + 1))
    for a1 in xrange(m):
        x,y,r = raw_input().strip().split(' ')
        graph[x]['link'].append({'v' : int(y),'w' : int(r)})
        graph[y]['link'].append({'v' : int(x),'w' : int(r)})
    s = raw_input().strip()
    graph[str(s)]['d'] = 0
    calculate()
    returnAns(s,n)

