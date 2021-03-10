
all=[]
one2nine = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
ten2nineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
twenty2ninety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]



for i in one2nine:
    all.append(i)



for i in ten2nineteen:
    all.append(i)




for i in twenty2ninety:
    all.append(i)
    for j in one2nine:
        all.append(i+j)




one2ninetynine = []
for i in all:
    one2ninetynine.append(i)
    







for i in one2nine:
    hundredz = i + "hundred"
    all.append(hundredz)
    for k in one2ninetynine:
        num = hundredz + "and" + k
        all.append(num)




all.append("onethousand")




for i in all:
    if type(i) is not str:
        print i



print len(''.join(all))






