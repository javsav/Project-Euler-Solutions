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
  
i = 1
  

  
while len(str(fib(i)))<1001:
  a = fib(i)
  if len(str(a)) == 1000:
	print i
	break
  i += 1
  

  
    
 
     