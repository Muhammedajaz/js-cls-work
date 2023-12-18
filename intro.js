document.write("external js")
a = 10
b = "20"
name = "ajas   muhammed"
marks = [50,60,100,90]
student = {
    name:"ajas",
    age: 19,
    isactive:true,
    place: "malappuram",
    address: {
        street_name: "ozhukoor",
        city: "kondotty",
        pincode: 673642
    }
}

console.log(a)
console.log(b)
console.log(name)
console.log(marks)
console.log(student)

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(name))
console.log(typeof(marks))
console.log(typeof(student))
console.log(typeof(student.isactive))

console.log(marks[1])
console.log(student.address)
console.log(student.address.city)
console.log(student["name"])
console.log(student["age"])


