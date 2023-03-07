const askMEanything = ()=>{

const yourQuestion = confirm('You are nothing')
console.log(yourQuestion)


if (yourQuestion=== true){

    console.log('you are here')
}
else{

    console.log("you are about to die")

}

}

// use of promte
const promptBhai=()=>{

const data =prompt('Put your Informations')
console.log(data)

if(!!data){console.log('logged out' , data)
}

else {

    console.log('i am in')
}
}