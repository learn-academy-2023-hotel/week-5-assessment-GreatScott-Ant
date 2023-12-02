# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# -------------------1) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# INPUT: hash w/nested array
# OUTPUT: one array w/all hash values with their own index value and alphabetized
# .sort to alphabetize
# .flatten to unnest (do this first)

# def flat_and_sort(hash)
#     values_array = hash.values.flatten
#     sorted_value = values_array.sort
# return sorted_value
# end

# my_states = flat_and_sort(us_states)
# p my_states

# --------------------2a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.

# Pseudo code:

# create class called Bike; attr_accessor needs model, wheels, current speed
# class Bike
#     attr_accessor :model, :wheels, :current_speed

# # def initialize value of wheels: 2, speed: 0
# def initialize(model, wheels = 2, current_speed = 0)
#     @model = model
#     @wheels = wheels
#     @current_speed = current_speed
# end 

# # create bike_info
# def bike_info
#     "The #{model} bike has #{wheels} and is currently traveling at a speed of #{current_speed} mph."


# -------------------2b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:

class Bike
    attr_accessor :model, :wheels, :current_speed

# def initialize value of wheels: 2, speed: 0
    def initialize (model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end 

# create bike_info
    def bike_info
        "The #{model} bike has #{wheels} and is currently traveling at a speed of #{current_speed} mph."
    end

# increase speed by any given amount
    def pedal_faster(new_speed)
        @current_speed += new_speed
    end

# method to decrease speed, current speed can't go below 0
    def brake(new_speed)
        @current_speed = [@current_speed - new_speed, 0].max
    end
end
my_bike = Bike.new("Mongoose Bike") 
# had to pass in value of model in order for initialize to work

puts my_bike.pedal_faster(10)
# OUTPUT: 10
# Expected output example: my_bike.pedal_faster(10) => 10

puts my_bike.pedal_faster(18)
# OUTPUT: 28
# Expected output example: my_bike.pedal_faster(18) => 28

puts my_bike.brake(5)
# OUTPUT: 23
# Expected output example: my_bike.brake(5) => 23

puts my_bike.brake(25)
# OUTPUT: 0
# Expected output example: my_bike.brake(25) => 0