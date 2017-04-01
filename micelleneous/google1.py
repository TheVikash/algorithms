'''Google Test'''
from fractions import Fraction, gcd
import pprint

def main():
    '''Main'''
    print(answer(#[[0, 1, 4, 0, 0, 1], [4, 0, 2, 3, 2, 0], [3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]))
        [[0,5,2,0,1,3,0,0,6,9],
        [2,8,1,0,0,5,0,0,6,3],
        [1,2,8,9,0,0,0,0,9,0],
        [2,0,0,0,5,6,0,0,8,9],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]]
    ))

memory = {}
prob_matrix = []
def answer(m):
    # your code here
    global prob_matrix
    prob_matrix, terminal_states = get_prob_matrix_and_terminals(m)
    
    probs = []
    for terminal_state in terminal_states:
        probs.append(trace_probability(0, terminal_state))
        pprint.pprint(memory)
    return convert_to_result(probs)

def convert_to_result(probs):
    result = []
    denoms = list(map(lambda x: x.denominator, probs))

    lcm = denoms[0]
    for i in denoms:
      lcm = lcm * i / gcd(lcm, i)

    nums = list(map(lambda x: x.numerator*lcm, probs))

    for i in range(0, len(probs)):
        result.append(Fraction(nums[i] / denoms[i]).limit_denominator().numerator)

    result.append(int(lcm))

    return result

def trace_probability(initial, final):
    n = 1
    result = None
    
    while n <= 15:
        result = r(initial, final, n)
        n = n + 1

    return Fraction(result).limit_denominator()

def r(i, j, n):
    global memory
    paths = prob_matrix[i]
    if n == 0:
        return 0
    if str(i)+str(j)+str(n) in memory:
        return memory.get(str(i)+str(j)+str(n))
    elif((i+1) < len(paths) and (i-1) < 0):
        prob = Fraction(paths[j] + Fraction(paths[i+1] * r(i+1,j,n-1)).limit_denominator() ).limit_denominator()
    elif((i+1) >= len(paths) and (i-1) >=0):
        prob = Fraction(paths[j] + Fraction(paths[i-1] * r(i-1,j,n-1) ).limit_denominator() ).limit_denominator()
    elif((i+1 < len(paths) and (i-1) >=0 )):
        prob = Fraction(paths[j] + Fraction(paths[i-1] * r(i-1,j,n-1) ).limit_denominator() + Fraction(paths[i+1] * r(i+1,j,n-1) ).limit_denominator()).limit_denominator()
    
    memory[str(i)+str(j)+str(n)] = prob
    #print(prob)
    return prob

#make and return a matrix filled with probabilities
def get_prob_matrix_and_terminals(m):
    prob_matrix = []
    terminal_states = []
    index = 0
    for state_matrix in m:
        total = sum(state_matrix)
        if total > 0:
            prob_matrix.append([i/total for i in state_matrix])
        else:
            terminal_states.append(index)
            prob_matrix.append(state_matrix)
        index = index + 1
    return prob_matrix, terminal_states

if __name__ == "__main__":
    main()