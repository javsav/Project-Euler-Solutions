
# coding: utf-8

# In[17]:

all=[]
one2nine = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
ten2nineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
twenty2ninety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
hundreds = ["hundred"]
thousand = ["onethousand"]


# In[21]:

for i in one2nine:
    all.append(len(i))


# In[22]:

for i in ten2nineteen:
    all.append(len(i))


# In[23]:

for i in twenty2ninety:
    all.append(len(i))
    for j in one2nine:
        all.append(len(i)+len(j))


# In[24]:

one2ninetynine = []
for i in all:
    one2ninetynine.append(i)
    


# In[25]:

for i in one2nine:
    hundredz = i + "hundred"
    all.append(len(hundredz))
    for k in one2ninetynine:
        num = len(hundredz + "and") + k
        all.append(num)


# In[26]:

all.append(len("onethousand"))


# In[27]:

sum(all)

