def fib(n):
    nums = [1, 1]
    i = 0
    while i<n-2:
        a = nums[i]
        b = nums[i + 1]
        c = a + b
        nums.append(c)
        
        i += 1
    return max(nums)

sum = 0	
n = 1
while fib(n)<4000000:
	if fib(n) % 2 == 0:
		sum = sum + fib(n)
	n += 1
print sum
