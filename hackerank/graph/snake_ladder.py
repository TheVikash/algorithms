from collections import deque

graph = {}


def calculate():
    vertex = '1'
    graph[vertex]['d'] = 0
    count = 0
    queue = deque([vertex])
    while len(queue) is not 0:
        vertex = queue.popleft()
        for adj in graph[vertex]['link']:
            snake = graph[adj]['sv']
            ladder = graph[adj]['lv']
            if(graph[adj]['d'] > graph[vertex]['d'] + 1 and snake == None and ladder == None):
                queue.append(adj)
                graph[adj]['d'] = graph[vertex]['d'] + 1
            elif snake != None:
                if(graph[snake]['d'] > graph[vertex]['d'] + 1):
                    queue.append(snake)
                    graph[snake]['d'] = graph[vertex]['d'] + 1
            elif ladder != None:
                if(graph[ladder]['d'] > graph[vertex]['d'] + 1):
                    queue.append(ladder)
                    graph[ladder]['d'] = graph[vertex]['d'] + 1
    
    # showGraph()
    return graph['100']['d']




def showGraph():
    for i in range(0,100):
        print str(i + 1) , '-->',graph[str(i+1)]['d'],graph[str(i+1)]['link']








t = int(raw_input().strip())
for i in xrange(t):
    graph = {}
    for i in range(0,100):
        graph[str(i + 1)] = {}
        rangehigh = 0
        if(i + 1 <= 94 ):
            rangehigh = 6
        else:
            rangehigh = 101 - (i + 2)
        graph[str(i + 1)]['link'] = map(str,range(i+2,i + 2 + rangehigh))
        graph[str(i + 1)]['sv'] = None
        graph[str(i + 1)]['lv'] = None
        graph[str(i + 1)]['d'] =  float('inf')
    ladder = int(raw_input())
    for i in range(0,ladder):
        a,b = raw_input().strip().split(' ')
        graph[a]['lv'] =  b
    snake = int(raw_input())
    for i in range(0,snake):
        a,b = raw_input().strip().split(' ')
        graph[a]['sv'] =  b
    ans = calculate()
    if ans == float('inf'):
        print -1,"****"
    else:
        print ans,"*********"

