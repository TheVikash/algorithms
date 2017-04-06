




















graph = []
N,M = map(int,raw_input().strip().split(' ') )
for i in range(0,N):
    graph_obj = {}
    graph_obj['link'] = []
    graph_obj['d'] =  float('inf')
for i in range(0,snake):
    a,b = raw_input().strip().split(' ')
    graph[a]['sv'] =  b
ans = calculate()
if ans == float('inf'):
    print -1,"****"
else:
    print ans,"*********"