# ASSESSMENT 5: Coding Critique with AI

# Use AI to learn about the following code.

# Based on your learning, reverse engineer a prompt that this code would satisfy.

# Add comments to each line to explain the code.

taco_votes = ['fish taco', 'california burrito', 'Tacos Al Pastor', 'Carnitas tacos', 'California burrito', 'Fish taco', 'California Burrito', 'Fish Taco', 'Tacos de Barbacoa', 'tacos Al Pastor', 'fish taco', 'California burrito', 'fish taco', 'tacos al pastor', 'Carnitas tacos', 'Fish taco', 'tacos de barbacoa', 'fish taco', 'Carnitas Tacos', 'carnitas tacos', 'Fish Taco', 'fish taco']

# create a new has named 'totals'; use method 'reduce' to count how many times a taco type appears in 'taco_votes' array. Give 'totals' has default value of 0
totals = taco_votes.reduce(Hash.new(0)) do |result, vote|
# convert vote to lowercase; increment new hash by 1
  result[vote.downcase] += 1
  result
end
# print newly created hash, containing count of each taco type
p totals

# Create a code that creates a new hash with a default value of 0, takes in an array, iterates through each element in said array, and reduces the array to a single value. The code will then need to account for case-sensitivity for each element, increment the correspodning valaue in the hash, and print the count for each taco type.