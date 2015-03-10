#Defining function for returning the Nth fibronacci number
def fib(n)
	nums = [1, 2]
	i = 0
	while i < n-2
		a = nums[i]
		b = nums[i + 1]
		c = a + b
		nums.push(c)
		i += 1
		end
	return nums.max
	end
#Determining first fib number with value higher than 4,000,000 - 33	
for n in 1..1000
     if fib(n)>4000000
         puts n
         break
     end
end
#Summing the even fibronacci values from 1 to 32 
x = 2
nums2 = []
while x < 33
	if fib(x) % 2 == 0
		nums2.push(fib(x))
		end
	x += 1
	end
puts nums2.inject{|sum,x| sum + x }