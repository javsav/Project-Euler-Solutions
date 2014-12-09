tri2 = [[0 for x in range(15)]for x in range(15)]
tri2[0]=[75]
tri2[1]=[95, 64]
tri2[2]=[17, 47, 82]
tri2[3]=[18, 35, 87, 10]
tri2[4]=[20, 4, 82, 47, 65]
tri2[5]=[19, 1, 23, 75, 3, 34]
tri2[6]=[88, 2, 77, 73, 7, 63, 67]
tri2[7]=[99, 65, 4, 28, 6, 16, 70, 92]
tri2[8]=[41, 41, 26, 56, 83, 40, 80, 70, 33]
tri2[9]=[41, 48, 72, 33, 47, 32, 37, 16, 94, 29]
tri2[10]=[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14]
tri2[11]=[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57]
tri2[12]=[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 4]
tri2[13]=[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31]
tri2[14]=[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]

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