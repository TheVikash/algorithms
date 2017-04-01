def answer(data, n):
    diction = {}
    for i in range(0, len(data)):
        if(diction.has_key(str(data[i]))) :
            diction[str(data[i])] += 1
        else:
            diction[str(data[i])] = 1
    
    ans = []
    for i in range(0, len(data)):
        if(diction[str(data[i])] <= n):
            ans.append(data[i])

    print ans
    return ans

    


answer([1,2,3,2,2,5,6,7], 6)