
# coding: utf-8

# In[71]:

all=[]
one2nine = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
ten2nineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
twenty2ninety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]


# In[72]:

for i in one2nine:
    all.append(i)


# In[73]:

for i in ten2nineteen:
    all.append(i)


# In[74]:

for i in twenty2ninety:
    all.append(i)
    for j in one2nine:
        all.append(i+j)


# In[75]:

one2ninetynine = []
for i in all:
    one2ninetynine.append(i)
    


# In[ ]:

one2ninetynine = all


# In[76]:

for i in one2nine:
    hundredz = i + "hundred"
    all.append(hundredz)
    for k in one2ninetynine:
        num = hundredz + "and" + k
        all.append(num)


# In[77]:

all.append("onethousand")


# In[78]:

for i in all:
    if type(i) is not str:
        print i


# In[79]:

len(''.join(all))


# In[ ]:



