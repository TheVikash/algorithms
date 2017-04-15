

def KmpMatcher(T,P):
    n = len(T)
    m = len(P)
    pi = computePrefix(P)
    q = 0
    for i in range(0,n):
        while q > 0 and P[q] != T[i]:
            q = pi[q]
        if P[q] == T[i] :
            q = q + 1

        if q == m :
            print 'patterns occur with shift', T[i - m  + 1:i + 1]
            q = pi[q - 1]



def computePrefix(P):
    m = len(P)
    pi = [0]*m
    k = 0
    for i in range(1,m):
        while k > 0 and P[k] != P[i]:
            k = pi[k]
        if P[k] == P[i]:
            k = k + 1
        pi[i] = k

    return pi



p = 'ababaca'
t = 'ababccccccababababdfksdjhfkjshdfkajdskababacahfkjsdhfkjdshfjdsh'

print KmpMatcher(t,p)