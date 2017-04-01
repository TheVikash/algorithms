def answer(s):
    ds = []
    k = 0
    for i in s:
        if( ord(i) in range(97,123)):
            temp = ord(i) - ord('a') + 1
            temp2 = 26 - temp + 1
            temp2 = temp2 + ord('a') - 1
            ds.append(chr(temp2))
        else:
            ds.append(i)
    return ''.join(ds)

print answer("wrw blf hvv ozhg mrtsg'h vkrhlwv?")