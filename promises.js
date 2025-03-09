//Question-1
//Online Food Delivery


function orderReceived(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("order received ")
        // reject("order is not received")
       },1000)
    })
}

function preparingFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("preparing food")
               // reject("food is not prepared")
        },3000)
    })
}

function packingFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("food is packed")
               // reject("food is not packed")
        },2000)
    })
}
function assigningPerson(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("Assigned a  delivery person")
        // reject("delivery person is not assigned")
        },2000)
    })
}
function deliveringFood(){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
           resolve("food is delivered")
           //reject("food is not delivered")
        } ,4000)
    })
}

orderReceived()
.then(res1=> {
    console.log(res1)
    return preparingFood();
})
 .then(res2=>{
    console.log(res2)
    return packingFood();
 })
 .then(res3=>{
    console.log(res3)
    return assigningPerson();
 })
.then(res4=>{
    console.log(res4)
    return deliveringFood();
})
.then(res5=>console.log(res5))
.catch(err=>err)




// Question-2
// Movie Ticket Booking

console.clear()

function selectingSeats(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("selected seats")
    // reject("there is no seats")
},2000)
    })
}
function processPayment(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("payment successfull")
    // reject("payment failed")
},3000)
    })
}
function generatingTicket(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("tickets are generated")
},1000)
    })
}
function sendingConfirmedEmail(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
  resolve("confirmation mail send successfully")  
},2000)
    })
}

selectingSeats()
.then((res1)=>{
    console.log(res1)
    return processPayment()
})
.then((res2)=>{
    console.log(res2)
    return generatingTicket()
})
.then((res3)=>{
    console.log(res3)
    return sendingConfirmedEmail()
})
.then(res4=> console.log(res4))
.catch(err=>err)




//Question -3
// Car Service Center


console.clear()

function carCheckIn(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("car checking completed")
            // reject("checking is not completed")
        },1000)
    })
}
function oilChange(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("oil changed")
 // reject("oil is not changed")
        },2000)
    })
}
function engineCheck(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("engine checked ")
        // reject("engine is not checked")
        },3000)
    })
}
function carWash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("car washed")
            // reject("car is not washed")
        },2000)
    })
}
function finalQualityCheck(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("quality checked")
})
    })
}

carCheckIn()
.then(res1=>{
    console.log(res1)
    return oilChange()
})
.then(res2=>{
    console.log(res2)
    return engineCheck()
})
.then(res3=>{
    console.log(res3)
    return carWash()
})
.then(res4=>{
    console.log(res4)
    return finalQualityCheck()
})
.then(res5=>{
    console.log(res5)
})

.catch(err=>err)


//Question-4
//laptop repair

console.clear()
function diagnosisIssue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("diagnosis  issue")
            //reject("there is no diagnosis issue ")
        },3000)

    })
}
function replacingFaultParts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("replacing fault parts")
            // reject("fault parts are not replaced")
        },4000)

    })
}
function updatingSoftware(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("updating software")
           // reject("software can not updated ")
        },2000)

    })
}
function finalTesting(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("final testing")
            // reject("final testing is not completed")
        },2000)

    })
}
function returningToCustomer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("laptop returning to customer")

        },1000)
    })
}
diagnosisIssue()
.then((res1)=>{
    console.log(res1)
    return replacingFaultParts()
})
.then((res2)=>{
    console.log(res2)
    return updatingSoftware()
})
.then((res3)=>{
    console.log(res3)
    return finalTesting()
})

.then(res4=> {
    console.log(res4)
    return returningToCustomer()
})
.then(res5=>console.log(res5))
.catch(err=>err)


//Question-5
//Online Course Enrollment


console.clear()
function checkingCourseAvailability(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("course is available")
           // reject("course is not available")
        },1000)
    })
}

function processPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payment successfull")
            // reject("payment failed")
        },3000)
    })
}

function generatingEnrollmentId(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("id generated")
            // reject("ID is not generated")
        },1000)
    })
}

function sendingCourseMaterials(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("course materials sended ")
            // reject("course materials not sended ")
        },2000)
    })
}

function grantingAccessToLiveClasses(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("live classes granted")
            //reject("live classes not granted")
        },2000)
    })
}

checkingCourseAvailability()
//diagnosisIssue()
.then(res1=>{
    console.log(res1)
    return processPayment()
})

.then(res2=>{
    console.log(res2)
    return generatingEnrollmentId()
})
.then(res3=>{
    console.log(res3)
    return sendingCourseMaterials()
})
.then(res4=>{
    console.log(res4)
    return grantingAccessToLiveClasses()
})
.then(res5=>console.log(res5))
.catch(err=>err)