def answer(start, length):
    inc = length
    xor = 0
    while length > 0:
        rem = (length-1)%4
        if(start%2 == 0):
            xor ^= zero_pattern(start,length - 1)
        else:
            if(rem == 0):
                xor ^= start
            elif(rem == 2):
                xor ^= start - 1
            elif(rem == 1):
                xor ^= start ^ (start + length - 1)
            elif(rem == 3):
                xor ^= (start -1) ^ (start + length - 1)

        length -= 1
        start = start + inc

    return xor
    

def zero_pattern(start, length):
    x = length % 4
    fromItem = 0
    if(x == 0):
        fromItem = start + length
    elif(x == 1):
        fromItem = 1
    elif(x == 2):
        fromItem = start + length + 1 
    else:
        fromItem = 0

    return fromItem



def answer2(start,length):
    inc = length
    xor = 0
    while length > 0:
        for i in range(0,length):
            xor ^= i + start
        length -= 1
        start = start + inc
    return xor


# print answer(18,6) , answer2(18,6)
import random
import math
for rander in range(0,100):
    start = (int)(math.floor(random.uniform(0,100)))
    length = (int)(math.floor(random.uniform(0, 10)))
    if(answer(start,length) != answer2(start,length) ) :
        print start, length
