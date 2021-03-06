
from collections import deque


# here we will have trie data structure which will be implemented as array of dictionary objects
# each dictionary will have the information about its childs, key associated to it , its parent 
# the index of the dictionary object in array will represent it's state

class AhoCorasick(object):

    # initializing string set 
    def __init__(self,stringSet):
        self.trie = []
        self.set = stringSet
        
    # building a Trie from string set
    def __makeTrie(self):
        self.trie.append({'key' : 'root', 'link' : {}, 'f' : 0, 'word' : None})
        for string in self.set:
            string_length = len(string)
            pos = 0
            for i in range(0,string_length):
                charecter = string[i]
                if charecter not in self.trie[pos]['link']:
                    self.trie.append({'key' : charecter, 'link' : {}, 'word' : None, 'f' : 0, 'p': pos})
                    self.trie[pos]['link'][charecter] = len(self.trie) - 1

                pos = self.trie[pos]['link'][charecter]
            self.trie[pos]['word'] = string   # assigning True if the words match 
                
    # building a fall function and making finite automata
    def __makeFall(self):
        queue = deque([])
        # enqueing the elements of depth 2
        for i in self.trie[0]['link']:
            pos = self.trie[0]['link'][i]
            for j in self.trie[pos]['link']:
                childPos = self.trie[pos]['link'][j]
                queue.append(childPos)
        
        # bfs on elements for depth greater than 1
        while len(queue) != 0:
            pos = queue.popleft()
            for i in self.trie[pos]['link']:
                 queue.append(self.trie[pos]['link'][i])
            # calculating the fall function from its parent fall function
            parentPos = self.trie[pos]['p']
            parentFall = self.trie[parentPos]['f']
            key = self.trie[pos]['key']
            if key in self.trie[parentFall]['link']:
                self.trie[pos]['f'] = self.trie[parentFall]['link'][key]

    
            
    def search(self,string):
        self.__makeTrie()
        self.__makeFall()
        countRep = {}       # for counting string match
        for word in self.set:
            countRep[word] = 0
        state = 0
        for charecter in string:
            
            # if the charecter present in the child then go to that child
            if charecter in self.trie[state]['link']:
                state = self.trie[state]['link'][charecter]
            else :
                state = self.trie[state]['f']
                # if it fails match and after returning to fail state again checking if that element is present in child or not
                if charecter in self.trie[state]['link']:
                    state = self.trie[state]['link'][charecter]
            
            # if the word is present in the state then incrementing count for that word 
            if self.trie[state]['word'] != None:
                    countRep[self.trie[state]['word']] += 1
            
            # matching overlapping case
            if len(self.trie[state]['link']) == 0:
                state = self.trie[state]['f']
                if self.trie[state]['word'] != None:
                    countRep[self.trie[state]['word']] += 1


            

        return countRep


    def printData(self): 
        print 'trie ---->',self.trie


substrings = ['he','she','his','hers']
algo = AhoCorasick(substrings)
sample_string = """ shershishethealkjddsiowebsheheh"""
sample_string = sample_string.lower()
print algo.search(sample_string)

