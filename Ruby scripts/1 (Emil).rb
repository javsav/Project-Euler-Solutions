#!/usr/bin/env ruby

puts *(1..999).find_all { |i| i % 3 == 0 || i % 5 == 0 }.inject(0) { |total, item| total += item}

