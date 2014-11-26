
all=[]
one2nine = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
ten2nineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
twenty2ninety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
hundreds = ["hundred"]
thousand = ["onethousand"]




for i in one2nine:
    all.append(len(i))




for i in ten2nineteen:
    all.append(len(i))




for i in twenty2ninety:
    all.append(len(i))
    for j in one2nine:
        all.append(len(i)+len(j))




one2ninetynine = []
for i in all:
    one2ninetynine.append(i)
    




for i in one2nine:
    hundredz = i + "hundred"
    all.append(len(hundredz))
    for k in one2ninetynine:
        num = len(hundredz + "and") + k
        all.append(num)




all.append(len("onethousand"))




sum(all)

