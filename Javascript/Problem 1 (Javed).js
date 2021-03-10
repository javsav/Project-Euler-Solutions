	i = 1, sum = 0;
	while (i < 1000)
	
	{
		if (i % 5 == 0) 
		
		{
			sum += i;
		}
		else if (i % 3 == 0)
		{
			sum += i;
		}
		i++;
	}
	console.log(sum);