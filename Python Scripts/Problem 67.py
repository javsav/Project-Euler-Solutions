file_name = '../shared_resources/p067_triangle.txt' # Declaring var file_name to be the text file of the triangle. In this case the folder containing the file ("shared_resources") is in the folder above the folder within which this .py script resides, hence two 'dots'/periods. 
fin = file(file_name, 'r') # Code declares var fin as the file from which we will be 'reading'

first_array = []
for line in fin.readlines(): 
    first_array.append(line) # Appends each line in the .txt file to the "first_array" - creating a one dimensional array with each line of the triangle as elements followed by \n
    


second_array = []

for line in first_array:
    line = line.strip('\n')
    second_array.append(line) # Removes the \n from the end of each of the line and appends each line of the triangle to the "second_array", now with each line as separate elements in a one dimensional array, but as strings of integers


	

third_array = [x.split(' ') for x in second_array] # List comprehension to create a 2-Dimensional array/matrix of the triangle as "third_array", but still as strings


tri = [[int(x) for x in y] for y in third_array] # List comprehension to convert the third_array matrix into the triangle as a matrix with integers

triangle_height = len(tri) - 1 # Declaring height for range of recursive algorithm to one less than the height of the triangle to avoid exceeding range due to 2D array starting at 0 rather than 1

for a in xrange(triangle_height, 0, -1): # Declaring var a for algorithm. Range will start the height of the algorithm at tri[99], with a step of negative 1 in order to move from the bottom to the top of the triangle
    row_length = len(tri[a]) - 1 # Each row has the same length as its height, however we only want the range to extend to the second to last number in that row (because the algorithm uses the number to the right of "current_value" aka "next_value")
    new_array = [] # Declaration of an array within which to place the larger sums of each set of three numbers for each two rows (e.g the first sum will be 33 (next_value) + 30 (shared_value). Must be inside this for loop so a new array is created each time two rows are 'popped'. 
    # This array will eventually end up replacing two rows of the tri array with one row of the max sums of current, next and shared values from those two rows. 
    for b in xrange(row_length): # Declaring var b for algorithm, range is row_length as discussed above.
        
        
		current_value = tri[a][b] # First example would be tri[99][0] - which is 23
		next_value    = tri[a][b+1]# First example would be tri[99[1] - 33
		shared_value  = tri[a-1][b]# First example - tri[98][0] - 30
        
        
		if current_value > next_value: # Whichever of "current_value" and "next_value" is larger will always create the biggest sum because the "shared_value" is constant for each triplet.
			new_array.append(current_value + shared_value)
		else:
			new_array.append(next_value + shared_value) # Largest of each triplet in the two rows is appended to temporary new array. First example - 33 + 30 = 63
			
               
    tri.pop() #Removes one row of the triangle - first e.g. tri[99]
	
    tri.pop() #Removes the next row of the triangle - first e.g tri[98]
	
    tri.append(new_array) #Appends the new array of max sums of the triplets to the triangle. This process of removing 2 and adding 1 continues until only one value is left.
    
print tri # Max possible sum of the routes through the triangle.
