
# coding: utf-8

# In[2]:




# In[1]:

import math
def propdiv(n):
    results = []
    for i in xrange(1,int(math.sqrt(n))+1):
        if n%i == 0:
            x = n/i
            results.append(i)
            results.append(x)
    return sum(set(results))-n

# In[2]:

def perfect(n):
    if propdiv(n) == n:
        return True


# In[4]:

def deficient(n):
    if propdiv(n) < n:
        return True


# In[5]:

def abundant(n):
    if propdiv(n) > n:
        return True


# In[6]:

limit = 28123


# In[6]:

abundan = []
for a in xrange(0,limit+1,1):
    if abundant(a) == True:
        abundan.append(a)


# In[7]:

# In[10]:

bad = []
x1 = abundan
x2 = []
for a in abundan:
    x2.append(a)


# In[8]:

# In[11]:

len(x2)


# In[9]:

# In[14]:

for a in x1:
    for b in x2:
        bad.append(a+b)


# In[10]:


w = list(set(bad))


# In[11]:

len(w)


# In[ ]:

# In[15]:

good = []
for a in xrange(0,limit+1):
    if a not in bad:
        good.append(a)
        




# In[ ]:

print sum(good)

