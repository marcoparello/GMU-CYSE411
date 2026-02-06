// 1. Returns true if the number is even
function isEven(n) {
    if (n%2 == 0 && typeof n == "number")
        return true;
    else
        return false;
}

// 2. Returns the sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i =0; i<arr.length; i++)
        if (typeof arr[i] == "number")
            sum += arr[i];
        else
            return NaN
    return sum;
        
}

// 3. Receives a user object and returns the email
// Example: {name:"ana", email:"a@gmu.edu"}
function getEmail(user) {
    if (typeof user == "object" && user.name!= undefined && user.email!= undefined )
        return user.email;
    else
        return false
}

// 4. Returns true if user.role === "admin"
function isAdmin(user) {
    if (typeof user == "object" && user.role == "admin")
        return true;
    else
        return false;
}

console.log(isEven(4));
console.log(sumArray([1,2,34,"a"]));
console.log(getEmail({email:"a"}));