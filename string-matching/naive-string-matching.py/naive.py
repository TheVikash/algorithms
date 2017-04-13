import math


def naiveStringMatcher(p,t):
    n = len(p) - 1
    m = len(t) - 1
    for s in range(0,n-m):
        if(t == p[s:s+ m + 1]):
            print t 


p = 'aacccbbbaaaaadcrtjsafsffsfkkjsligjldfkngldfkng'
t = 'a'

naiveStringMatcher(p,t)