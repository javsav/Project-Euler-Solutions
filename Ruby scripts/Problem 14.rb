

def collatz(n)
    col=[n]
    while n>1
        
        if n % 2 == 0
            n = n/2
            col.push(n)
        else if n % 2 != 0
            n = 3*n + 1
            col.push(n)
			end
			end
		end
	
    return col.length
end

a = 0
b = 0
for y in 1..1000000
    z=collatz(y)
    if z>a
        a = z
        b = y
		end
	end
puts b
