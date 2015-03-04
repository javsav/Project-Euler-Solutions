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

nums2 = []	
for n in xrange (1,4000001):
    if fib(n)>4000000:
        max = n

for n in xrange (1,max):
    if fib(n) % 2 == 0:
        nums2.append(fib(n))
        break



print sum(nums2)