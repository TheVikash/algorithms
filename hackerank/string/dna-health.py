import sys

def calculation(genes,health,d):
    sum = 0
    print len(genes), len(health),'<----Length'
    for i in range(0,len(genes)):
        count_substring = KmpMatcher(d,genes[i])
        sum = sum + health[i] * count_substring
    return sum
        
def KmpMatcher(T,P):
    n = len(T)
    m = len(P)
    pi = computePrefix(P)
    q = 0
    count = 0
    for i in range(0,n):
        while q > 0 and P[q] != T[i]:
            q = pi[q - 1]
        if P[q] == T[i] :
            q = q + 1

        if q == m :
            q = pi[q - 1]
            count += 1
    return count

def computePrefix(P):
    m = len(P)
    pi = [0]*m
    k = 0
    for i in range(1,m):
        while k > 0 and P[k] != P[i]:
            k = pi[k - 1]
        if P[k] == P[i]:
            k = k + 1
        pi[i] = k

    return pi



n = int(raw_input().strip())
genes = sys.stdin.readline().strip().split(' ')
health = map(int,sys.stdin.readline().strip().split(' '))
print 'main lenght ----->',len(genes),len(health)
print 'main lenght ----->',genes,health
# s = int(raw_input().strip())
# mini = float('inf')
# maxi = 0
# for a0 in xrange(s):
#     first,last,d = raw_input().strip().split(' ')
#     first,last,d = [int(first),int(last),str(d)]
#     trim_genes = genes[first : last + 1]    # triming genes 
#     trim_health = health[first : last + 1]   # trimimg health 
#     ans =  calculation(trim_genes,trim_health,d)
#     if(ans > maxi):
#         maxi = ans
#     if(ans < mini):
#         mini = ans

# print mini,maxi