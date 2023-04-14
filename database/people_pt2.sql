db.people.insertOne({first_name : "Harry" , 
                     last_name : "Potter", 
                     email : null, 
                     gender : "Male",
                     age: 15,
                     state: "Mars",
                     children: []})

db.people.insertOne({first_name : "Peter" , 
                     last_name : "Pan", 
                     email : "peterpan@mars.com", 
                     gender : "Male",
                     age: 30,
                     state: "Mars",
                     children: [ { name: "Jupiter", age: 5}, { name: "Repeater", age: 3 }]})

db.people.updateOne({ first_name : "Clarence"}, {$set : { state : "South Dakota"}});

db.people.updateOne({ first_name : "Rebecca", last_name: "Hayes"}, {$set : { email : null}});

db.people.update( { state : "Missouri" }, { $inc : { age : 1} })

db.people.update( {first_name : "Jerry", last_name : "Baker"}, 
                  { $set: { last_name: "Baker-Mendez", email: "jerry@classic.ly", age : 28,
                            state : "Vermont" , 
                            children : [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }} )

db.people.deleteOne( { first_name: "Wanda", last_name : "Bowman" })

db.people.deleteMany({email: null})

db.submissions.insertMany([ { title: "The River Bend", upvotes: 10, downvotes: 2, 
                                artist: db.people.findOne({first_name : "Anna", last_name: "Howard"})._id},
                            { title: "Nine Lives", upvotes: 7, downvotes: 0, 
                                artist: db.people.findOne({first_name : "Scott", last_name: "Henderson"})._id},
                            { title: "Star Bright", upvotes: 19, downvotes: 3, 
                                artist: db.people.findOne({first_name : "Andrea", last_name: "Burke"})._id},
                            { title: "Why Like This?", upvotes: 1, downvotes: 5, 
                                artist: db.people.findOne({first_name : "Steven", last_name: "Marshall"})._id},
                            { title: "Non Sequitur", upvotes: 11, downvotes: 1, 
                                artist: db.people.findOne({first_name : "Gerald", last_name: "Bailey"})._id}             
                          ])

db.submissions.updateOne( { title: "The River Bend"}, { $inc : { upvotes : 2}})

db.submissions.update( { upvotes : { $gt: 10} }, { $set : {round2: true}})

