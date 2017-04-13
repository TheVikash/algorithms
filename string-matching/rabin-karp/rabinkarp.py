import math



def rabinKarpAlgo(T,P,d,q):
    n = len(T) - 1
    m = len(P) - 1
    h = int(math.pow(d,m))
    print n,m,h, 'dimension'
    p = 0 
    ts = 0
    for i in range(0,m + 1):
        p = int((d*p + ord(P[i])))
        ts = int((d*ts + ord(T[i])))
    
    for s in range(0,n - m):
        print ts,p,P,T[s:s + m + 1]
        if p == ts:
            if(P == T[s:s+ m + 1]):
                print P,'found'
        if s < n  - m :
            print ts,ord(T[s])*h,(T[s + 1 + m]),'<--------<'
            ts = int(((ts - ord(T[s])*h)*d + ord(T[s + 1 + m])))


p = 'aacccbbbaaaaadcrtjsafsffsfkkjsligjldfkngldfkng'
t = 'dcrt'
rabinKarpAlgo(p,t,10,13)