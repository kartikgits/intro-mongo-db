const mongoose = require('mongoose')

const connect = () => mongoose.connect('mongodb://localhost:27017/whatever')

const student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    
    info: {
        school: {
            type: String
        },

        shoeSize: {
            type: Number
        }
    },

    favoriteFoods: [{ type: String }]
})

const Student = mongoose.model('student', student)

connect()
    .then(async connection => {
        const student = await Student.create({firstName: 'Tim'})
        const found = await Student.find({ firstName: 'Tim' })
        const foundById = await Student.findById('asdfdssdf')
        const updated = await Student.findByIdAndUpdate('aslkdfjsd')
        console.log(student)
    })
    .catch(e => console.error(e))