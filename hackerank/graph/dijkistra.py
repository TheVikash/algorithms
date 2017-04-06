#!/bin/python

import sys
import psyco
psyco.full()
import math
from collections import deque
graph = []
vertex = deque([])


def calculate():
    global vertex
    buildMinHeapify()
    while(len(vertex) is not 0):
        u = vertex.popleft()
        for adj in graph[u - 1]['link']:
            relax(adj,u)
        if(len(graph[u - 1]['link']) is not 0):
            buildMinHeapify()


def relax(adj,u):
    v = adj['v']
    w = adj['w']
    if(graph[v - 1]['d'] > graph[u - 1]['d'] + w):
        graph[v - 1]['d'] = graph[u - 1]['d'] + w
    
def returnAns(s,n):
    for i in range(0,n):
        if i + 1 != s and graph[ i ]['d'] != 0:
            print graph[ i ]['d'] if graph[i]['d'] != float('inf') else -1,
    print 

def minHeapify(i):
    heapSize = len(vertex)
    left = 2*i + 1
    right = 2*i + 2
    lowest = i
    if(left < heapSize):
        if(graph[vertex[i]  - 1]['d'] > graph[vertex[left] - 1]['d']):
            lowest = left
        else:
            lowest = i
    
    if(right < heapSize):
        if graph[vertex[lowest] - 1]['d'] > graph[vertex[right] - 1]['d']:
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
    graph = []
    vertex = deque([])
    n,m = raw_input().strip().split(' ')
    n,m = [int(n),int(m)]
    for i in range(0,n):
        graph_obj = {}
        graph_obj['d'] = float('inf')
        graph_obj['link'] = []
        graph.append(graph_obj)
        vertex.append(i+1)
    for a1 in xrange(m):
        x,y,r = map(int,raw_input().strip().split(' '))
        graph[x - 1]['link'].append({'v' : y,'w' : r})
        graph[y - 1]['link'].append({'v' : x,'w' : r})
    s = int(raw_input().strip())
    graph[s- 1]['d'] = 0
    calculate()
    returnAns(s,n)

