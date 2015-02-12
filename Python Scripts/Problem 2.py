def fib(n):
    nums = [1, 2]
    i = 0
    while i<n-2:
        a = nums[i]
        b = nums[i + 1]
        c = a + b
        nums.append(c)
        
        i += 1
    return max(nums)
	
for n in xrange (1,4000001):
    if fib(n)>4000000:
        print n
        break

nums2 = []
for n in xrange (1,34):
    if fib(n) % 2 == 0:
        nums2.append(fib(n))
print sum(nums2)