from collections import deque

def calculate(n):
    graph[0]['d'] = 0
    graph[0]['c'] = 'g'
    count = float('inf')
    queue = deque([])
    queue.append(0)
    while len(queue) > 0:
        vertex = queue.popleft()
        for adj in graph[vertex]['link']:
            v,w = [adj['v'] - 1,adj['w']]
            diff = w - graph[vertex]['d']
            dis = graph[vertex]['d'] if diff < 0 else graph[vertex]['d'] + diff
            if( graph[v]['d'] > dis):
                queue.append(v)
                graph[v]['d'] = dis
            
            
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
    graph[int(b) - 1]['link'].append({'v' : int(a), 'w' : int(r)})

calculate(N)
print graph[N-1]['d'] if(graph[N-1]['d'] != float('inf')) else 'NO PATH EXISTS'
