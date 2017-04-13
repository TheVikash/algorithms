from collections import deque

def calculate(start,end):
    graph[start]['d'] = 0
    for adj in graph[start]['link'] :
        v,w = [adj['v'],adj['w']]
        print dfsvisit(0,v,w)
    
    
    print graph[end]['d'] if graph[end]['d'] != float('inf') else -1


def dfsvisit(xor,vertex,weight):
    print 'current vertex -->',vertex,'current weight-->', weight
    xor = xor | weight 
    graph[vertex]['d'] = xor
    cur_xor = float('inf')
    for adj in graph[vertex]['link'] :
        v,w = [adj['v'],adj['w']]
        if(graph[v]['d'] > xor):
            xor = dfsvisit(xor,v,w)
    return xor
            
graph = []
N,M = map(int,raw_input().strip().split(' ') )
for i in range(0,N):
    graph_obj = {}
    graph_obj['link'] = []
    graph_obj['d'] =  float('inf')
    graph_obj['c'] =  'w'
    graph.append(graph_obj)
for i in range(0,M):
    a,b,r = raw_input().strip().split(' ')
    a,b,r = [int(a), int(b), int(r)]
    graph[int(a) - 1]['link'].append({'v' : int(b) - 1, 'w' : int(r)})
    graph[int(b) - 1]['link'].append({'v' : int(a) - 1, 'w' : int(r)})

start,end = map(int,raw_input().strip().split(' '))
calculate(start - 1,end - 1)

for i in range(0,N):
    print i + 1,'-->',graph[i]['d']