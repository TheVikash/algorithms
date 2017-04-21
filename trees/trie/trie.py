from collections import deque


class Trie(object):

    def __init__(self, key = None,pos = -1):
        self.key = key
        self.child = {}
        self.value = None
        self.pos = pos

    def getChild(self, key):
        if key not in self.child:
            return None
        return self.child[key]

    def isChild(self, key):
        if key not in self.child:
            return False
        return True

    def isLeaf(self, key):
        if(len(self.child) == 0):
            return True
        return False
    
    def insertString(self,text):
        root = self
        for i in range(0,len(text)):
            while(True):
                if not root.isChild(text[i]) and  root.pos == i - 1:
                    root.child[text[i]] = Trie(text[i],i)
                    root = root.child[text[i]]
                    break
                else:
                    root = root.child[text[i]]
                    break

        return self

    def searchString(self,text):
        root =self
        flag = True
        for i in range(0,len(text)):
            while(True):
                if not root.isChild(text[i]) and  root.pos == i - 1:
                    flag = False
                    break
                elif root.isChild(text[i]) and  root.pos == i - 1:
                    root = root.child[text[i]]
                else:
                    break
        return flag


    def bfs(self):
        queue = deque([])
        queue.append(self)
        while(len(queue) is not 0):
            root = queue.popleft()
            for c in root.child:
                queue.append(root.child[c])
                print 'parent -->', root.key,'child -->',root.child[c].key,'pos-->',root.child[c].pos


def makingTrie(substrings):
    root = Trie()
    for string in substrings:
        root = root.insertString(string)
    root.bfs()
    print root.searchString('saw')


substrings = ['he', 'she', 'his', 'hers']
makingTrie(substrings)
