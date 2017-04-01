def answer(x,y):
    xth = (x*(x+1))/2
    yth = ((x+y-2)*(x+y-1))/2  - (x*(x-1))/2
    return xth + yth


print answer(3,2)