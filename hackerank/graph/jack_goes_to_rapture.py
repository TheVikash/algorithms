from collections import deque

def calculate(n):
    graph[0]['d'] = 0
    count = float('inf')
    for adj in graph[0]['link']:
        ans = dfs_visit(adj,0,n)
        if(count > ans):
            count = ans
    print count
    
def dfs_visit(child,sum,n):
    v,w = [child['v'],child['w']]
    if(sum < w):
        sum = w
    
    if(v == n):
        return sum
    
    for adj in graph[v - 1]['link']:
            sum = dfs_visit(adj,sum,n)
    
    return sum




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
    graph[int(a) - 1]['link'].append({'v' : int(b), 'w' : int(r)})
    # graph[int(b) - 1]['link'].append({'v' : int(a), 'w' : int(r)})

calculate(N)