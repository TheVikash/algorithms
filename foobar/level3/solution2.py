
memoize = {}
def answer(n):
    ans = 0
    memoize['1'] = {}
    memoize['2'] = {}
    memoize['1']['count'] = 0
    memoize['2']['count'] = 0
    i = 3
    while i <= n:
        ans = compute(i)
        i = i + 1
    #print memoize 
    return ans

def compute(n):
    sum = 0
    i = n - 1
    memoize[str(n)] = {}
    while ( i >= n-i ):
        if i > n-i:
            sum += 1
            sum += memoize[str(n-i)]['count']
            memoize[str(n)][str(i)] = sum
        elif i == n-i:
            sum += memoize[str(i)]['count']
            memoize[str(n)][str(i)] = sum
        i = i - 1
    while i < n-i:
        if str(i-1) in memoize[str(n-i)]:
            x = memoize[str(n-i)]['count'] - memoize[str(n-i)][str(i)]
            memoize[str(n)][str(i)] = sum + x
            sum += x
            i = i- 1
        else:
            break
  
    
    memoize[str(n)]['count'] = sum
    return sum
    
print answer(10000)