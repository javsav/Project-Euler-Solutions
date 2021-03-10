file_lines = File.readlines("./shared_resources/p067_triangle.txt")


tri = []


for line in file_lines
    line = line.split(' ')
	new_line = []
	for item in line
		new_line.push(item.to_i)
	end
		tri.push(new_line)   
end


triangle_height = tri.length - 1 #Declaring height for range of recursive algorithm to one less than the height of the triangle to avoid exceeding range due to 2D array starting at 0 rather than 1


for a in (triangle_height).downto(1) # Declaring var a for algorithm. Range will start the height of the algorithm at tri[99], with a step of negative 1 in order to move from the bottom to the top of the triangle
    row_length = tri[a].length - 1 # Each row has the same length as its height, however we only want the range to extend to the second to last number in that row (because the algorithm uses the number to the right of "current_value" aka "next_value")
    new_array = [] # Declaration of an array within which to place the larger sums of each set of three numbers for each two rows (e.g the first sum will be 30 (next_value) + 33 (shared_value). Must be inside this for loop so a new array is created each time two rows are shifted/popped. 
    # This array will eventually end up replacing two rows of the tri array with one row of the max sums of current, next and shared values from those two rows. 
    for b in 0...row_length # Declaring var b for algorithm, range is row_length as discussed above.
        
        
		current_value = tri[a][b] # First example would be tri[99][0] - which is 23
		next_value    = tri[a][b+1]# First example would be tri[99[1] - 33
		shared_value  = tri[a-1][b]# First example - tri[98][0] - 30

        
        
		if current_value > next_value # Whichever of "current_value" and "next_value" is larger will always create the biggest sum because the "shared_value" is constant for each triplet.
			new_array.push(current_value + shared_value)
			
        else
		
			new_array.push(next_value + shared_value) # Largest of each triplet in the two rows is appended to temporary new array. First example - 33 + 30 = 63
		end
	end
	tri.pop #Removes one row of the triangle - first e.g. tri[99]
	tri.pop #Removes one row of the triangle - first e.g. tri[98]
	tri.push(new_array) #Appends the new array of max sums of the triplets to the triangle. This process of removing 2 and adding 1 continues until only one value is left.

	
end
puts tri # Max possible sum of the routes through the triangle.
