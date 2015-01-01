
file_name = '../shared_resources/p067_triangle.txt'
fin = file(file_name, 'r')

first_hacky_array = []
for line in fin.readlines():
    first_hacky_array.append(line)
    


second_hacky_array = []

for line in first_hacky_array:
    line = line.strip('\n')
    second_hacky_array.append(line)


third_hacky_array = [x.split(' ') for x in second_hacky_array]


tri2 = [[int(x) for x in y] for y in third_hacky_array]

def max_sum(one, two, shared):
    a = one + shared
    b = two + shared
    return max([a, b])

triangle_height = len(tri2) - 1

for row in range(triangle_height, 0, -1):
    row_length = len(tri2[row]) - 1
    new_array = []
    
    for digit in range(row_length):
        
        
        current_value = tri2[row][digit]
        next_value    = tri2[row][digit+1]
        shared_value  = tri2[row-1][digit]
        
        #print 'Max of: ', current_value, '+',  shared_value, ' and ',  next_value, '+', shared_value
        max_value =  max_sum(current_value, next_value, shared_value)
        #print max_value
        
        new_array.append(max_value)
        
    tri2.pop()
    tri2.pop()
    tri2.append(new_array)
    print tri2[len(tri2) - 1]



