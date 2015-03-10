tri = [[]]
tri[0]=[75]
tri[1]=[95, 64]
tri[2]=[17, 47, 82]
tri[3]=[18, 35, 87, 10]
tri[4]=[20, 4, 82, 47, 65]
tri[5]=[19, 1, 23, 75, 3, 34]
tri[6]=[88, 2, 77, 73, 7, 63, 67]
tri[7]=[99, 65, 4, 28, 6, 16, 70, 92]
tri[8]=[41, 41, 26, 56, 83, 40, 80, 70, 33]
tri[9]=[41, 48, 72, 33, 47, 32, 37, 16, 94, 29]
tri[10]=[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14]
tri[11]=[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57]
tri[12]=[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 4]
tri[13]=[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31]
tri[14]=[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]



triangle_height = tri.length - 1 #Declaring height for range of recursive algorithm to one less than the height of the triangle to avoid exceeding range due to 2D array starting at 0 rather than 1


for a in (triangle_height).downto(1) # Declaring var a for algorithm. Range will start the height of the algorithm at tri[14], with a step of negative 1 in order to move from the bottom to the top of the triangle
    row_length = tri[a].length - 1 # Each row has the same length as its height, however we only want the range to extend to the second to last number in that row (because the algorithm uses the number to the right of "current_value" aka "next_value")
    new_array = [] # Declaration of an array within which to place the larger sums of each set of three numbers for each two rows (e.g the first sum will be 62 (next_value) + 63 (shared_value). Must be inside this for loop so a new array is created each time two rows are shifted/popped. 
    # This array will eventually end up replacing two rows of the tri array with one row of the max sums of current, next and shared values from those two rows. 
    for b in 0...row_length # Declaring var b for algorithm, range is row_length as discussed above.
        
        
current_value = tri[a][b] # First example would be tri[14][0] - which is 4
next_value    = tri[a][b+1]# First example would be tri[14[1] - 62
shared_value  = tri[a-1][b]# First example - tri[13][0] - 63

        
        
		if current_value > next_value # Whichever of "current_value" and "next_value" is larger will always create the biggest sum because the "shared_value" is constant for each triplet.
			new_array.push(current_value + shared_value)
			
        else
		
			new_array.push(next_value + shared_value) # Largest of each triplet in the two rows is appended to temporary new array. First example - 62+63 = 125
		end
	end
	tri.pop #Removes one row of the triangle - first e.g. tri[14]
	tri.pop #Removes one row of the triangle - first e.g. tri[13]
	tri.push(new_array) #Appends the new array of max sums of the triplets to the triangle. This process of removing 2 and adding 1 continues until only one value is left.
	
end
puts tri