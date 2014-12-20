
# coding: utf-8

# In[20]:

months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
firstsun = 0
day = 2
for year in range (1901,2001):
    if year % 4 != 0:
        for month in months:
            day += month
            if day % 7 == 0:
                firstsun += 1
    elif year % 4 == 0:
        for month in leap:
            day += month
            if day % 7 == 0:
                firstsun += 1
        
        
print firstsun

