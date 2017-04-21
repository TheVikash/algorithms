def answer(xs):
    xs.sort()
    ans = 1
    i = 0
    while i < len(xs):
        if(xs[i]>0):
            ans *= xs[i]
        elif(i + 1 < len(xs)):
            if(xs[i] < 0 and xs[i + 1] < 0):
                ans *= xs[i] * xs[i+1]
                i = i + 1
        i = i + 1
    
    if ans == 1 and xs[0] == 0:
        ans = 0
    elif ans == 1 and xs[0] < 0:
        ans = xs[0]
    return ans
    
    


print answer([-1])
print(answer([2,0,2,2,0]))
print(answer([0,-1,-2,-3]))
print(answer([0,-1,-2]))
print(answer([0,-1,-2,-3]))
print answer([0,-1,-2,-3,5,8,6,7,-5,1,2,3,4,-2,-4,-4])