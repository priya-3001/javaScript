const promiseOne = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise one executed");
        resolve();
    }, 1000)
});

promiseOne.then(()=>{
    console.log("Promise one resolved");
})

new Promise (function(resolve, reject)  {
    setTimeout(() => {
        console.log("Promise two executed");
        resolve({username: "JohnDoe", email: "johndoe@example.com"});
    }, 1000);
}).then((userData) => {
    console.log("Promise two resolved with user data:", userData);
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise three executed");
        resolve({username: "JohnDoe", email: "johndoe@example.com"});
    }, 1000);
})

promiseThree.then((userData) => {
    console.log("Promise three resolved with user data:", userData);
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(()=> {
        const error = false
        if(!error){
            resolve("Promise four resolved successfully");
        } else {
            reject("Error: Promise four rejected");
        }
    }, 1000)
})

promiseFour.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Promise four execution completed");
})

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(()=> {
        const error = true
        if(!error){
            resolve("Promise five resolved successfully");
        } else {
            reject("Error: Promise five rejected");
        }
    }, 1000)
})

async function consumepromise5() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.error('Error :', error);
    }
}

consumepromise5()

async function fetchUserDetail() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData =  await response.json();
        console.log('User Details:', userData);
    }
    catch (error) {
        console.error('Error fetching user details:', error);
    }
}

//fetchUserDetail()

fetch('https://jsonplaceholder.typicode.com/users/2')
.then(response => {return response.json()})
.then((userData) => {
    console.log('calling fetch api for user 2', userData.name);
})
.catch((error) => {
    console.error('Error fetching user details:', error);
})
