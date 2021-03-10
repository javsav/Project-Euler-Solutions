puts "Hello Ruby!";

i=1

mul = []

while i < 1000
  if i % 3 ==0
    mul.push(i)

  else if i % 5 ==0
    mul.push(i)
  end
  end
  i+=1
end
puts mul.inject{|sum,x| sum + x }