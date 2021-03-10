seq_len = 0

for i in range (1001, 1, -1):
    if seq_len >= i:
        break
    remainders = [0 for x in range(i)]
    val = 1
    pos = 0
    
    while remainders[val] == 0 and val != 0:
        remainders[val] = pos
        
        val *= 10
        
        val %= i
        
        pos += 1
    
    if pos - remainders[val] > seq_len:
        seq_len = pos - remainders[val]

print "The value of d<1000 in which 1/d has the greatest recurring cycle is: " + str(pos)
print "The length of the sequence is " + str(seq_len) + " digits"