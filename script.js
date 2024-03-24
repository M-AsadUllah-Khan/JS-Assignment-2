// Ask User Name
document.getElementById("btn-2").onclick = function(){
    let fullName = prompt("Please Enter Your Full Name.")
    document.getElementById("output").innerHTML = fullName
    document.getElementById("statement").innerHTML = ""
}
// Concatenate Some Strings
document.getElementById("btn-1").onclick = function(){
    let firstName = prompt("Please enter your first name")
    let lastName = prompt("Please enter your last name")
    let fullName = firstName + " " + lastName
    document.getElementById("statement").innerHTML = "Your first name is  " + firstName + "<br>" + "Your Last name is  " + lastName
    document.getElementById("output").innerHTML = fullName 
}
// Comparasion Operators
document.getElementById("btn-3").onclick = function(){
    let age = +prompt("Please enter your age to check the vote.")
    document.getElementById("statement").innerHTML = "Your age is " + age 
    if(age >= 18){
        document.getElementById("output").innerHTML = "<p style='color: green;'>You are able to cast the vote.</p>"
    }
    else{
        document.getElementById("output").innerHTML = "<p style='color: red;'> You are unable to cast the vote.</p>"
    }
}
// if else if 
document.getElementById("btn-4").onclick = function(){
    let marks = +prompt("Please enter your marks!")
    let totalMarks = +prompt("Please enter total marks!") 
    let percentage = (marks/totalMarks)*100
    document.getElementById("statement").innerHTML = "Your marks is " + marks + "<br>" +"Your marks percentage is " + percentage +"%."
    if(percentage>=100){
        document.getElementById("statement").innerHTML = "<p style='color:red'>You have entered incorrect values.<br>Please Enter correct values.</p>"
        document.getElementById("output").innerHTML = ""
    }
else if(percentage>=90 || percentage==100){
    document.getElementById("output").innerHTML = "<p style='color: green;'>You have got <b>A+</b> grade.</p>"
    }
else if(percentage>=80){
    document.getElementById("output").innerHTML = "<p style='color: green;'>You have gotten <b>A</b> grade.</p>"
}
else if(percentage>=70){
    document.getElementById("output").innerHTML = "<p style='color: green;'>You have gotten <b>B</b> grade.</p>"
}
else if(percentage>=60){
    document.getElementById("output").innerHTML = "<p>You have gotten <b>C</b> grade.</p>"
}
else if(percentage>=50){
    document.getElementById("output").innerHTML = "<p>You have gotten <b>D</b> grade.</p>"
}
else{
    document.getElementById("output").innerHTML = "<p style='color: red;'>You are <b>failed</b>. Please try next time.</p>"
}
}
// Testing Set of Conditions
document.getElementById("btn-5").onclick = function(){
 let age = +prompt("Please enter your age!")   
 if(age>=18){
    let name = prompt("Please Enter your name!")
    let province = prompt("Please enter your province name")
    if(province === "Punjab" || province === "punjab"){
        alert(name + "! you are able to cast the vote in Punjab.")
        document.getElementById("statement").innerHTML = name + " your age is "  + age  + "<br>" + "Your province is " + province
        document.getElementById("output").innerHTML = name +"! <p style'color:green'>You are able to cast the vote in Punjab</p>"
    }
    else{
        alert("You are unable to cast the vote in Punjab.")
        document.getElementById("statement").innerHTML = name + "your age is "  + age  + " years." + "<br>" + "Your province is " + province
        document.getElementById("output").innerHTML = name +"! <p style'color:green'>You are unable to cast the vote in Punjab</p>"
    }
 }
 else{
    alert("You are under-age.")
    document.getElementById("statement").innerHTML = "Your age is "  + age + " years."
    document.getElementById("output").innerHTML = "<p style='color:red'>You are unable to cast the vote in punajb.</p>"
 }
}
// if statement Nested
document.getElementById("btn-6").onclick = function(){
    let province = prompt("Please enter your province name!")
    if(province==="punjab" || province==="Punjab"){
        let gender = prompt("Please enter your gender")
        if(gender==="male" || gender==="Male"){
            let age = +prompt("Please enter your age")
            if(age>=18){
                let height = +prompt("Please enter your height in cm.")
                if(height>=163){
                    let weight = +prompt("Please enter your Weight")
                    let bmi = weight/height
                    let name = prompt("Please enter your name")
                    let statement = "<div style='text-align:left'><p style='font-weight:bold'>" + name + "! your details are given as under:</p> <ul><li>Your province is <b>" + province + "</b>.</li><li>Your gender is <b>" + gender + " </b>. </li><li>Your age is <b>" + age + " years</b>.</li><li>Your body mass index is <b> " + bmi + "</b>.<dl>Body Mass Index is Calculated as:<dt>height = " + height + "cm.</dt><dt>Weight = " + weight + "kg</dt><dd> BMI = kg/m<sup>2</sup><br><b>where;<br></b>m<sup>2</sup> = height is meter squares.</dd></dl></li></ul>"
                    if(bmi=1/3){
                        document.getElementById("statement").innerHTML = "<div style='color:green'>" + statement + "</div>"
                        document.getElementById("output").innerHTML = "<div style='color:green'>" + name + "! you can apply for this post.</div>"
            }
            else{
                alert("You can not apply for this post.")
                document.getElementById("statement").innerHTML = "<div style='color:red'>" + statement + "</div>"
                document.getElementById("output").innerHTML = "<div style='color:red'>Your mass to body index is not good.</div>"
            }
        }else{
            let message = ""
            message = "Your height is " + height  + ", So we will not proceed further."
            alert(message)
            document.getElementById("statement").innerHTML =  "<div style='text-align:left'><p style='font-weight:bold'>Your details are given as under:</p> <ul><li>Your province is <b>" + province + "</b>.</li><li>Your gender is <b>" + gender + " </b>. </li><li>Your age is <b>" + age + " years</b>.</li><li style='color:red'>Your height is <b>" + height + "cm</b>, that is not meeting the criteria.</li></ul>"
            document.getElementById("output").innerHTML = "<div style='color:red'>Your height is not meeting the criteria. <br> OR <br> Please enter the height in centimeters.</div>"
        }
            }else{
                let message = ""
            message = "Your age is " + age  + ", So we will not proceed further."
            alert(message)
            document.getElementById("statement").innerHTML =   "<div style='text-align:left'><p style='font-weight:bold'>Your details are given as under:</p> <ul><li>Your province is <b>" + province + "</b>.</li><li>Your gender is <b>" + gender + " </b>. </li><li style='color:red'>Your age is <b>" + age + " years</b>, that is not meeting the criteria.</li></ul>"
            document.getElementById("output").innerHTML = "<p style='color:red'</p>You are under-age, So you cannot apply for this post.</p>"
            }
        }
        else{
            let message = ""
            message = "You are " + gender  + ", So we will not proceed further."
            alert(message)
            document.getElementById("statement").innerHTML = "<div style='text-align:left'><p style='font-weight:bold'>Your details are given as under:</p> <ul><li>Your province is <b>" + province + "</b>.</li><li style='color:red'>Your gender is <b>" + gender + " </b>, that is not meeting the criteria. </li></ul>"
            document.getElementById("output").innerHTML = "<p style='color:red'</p>You are not male, So you cannot apply for this post.</p>"
        }
    }
    else{
        alert("You are not from Punjab, So we will not proced further.")
        document.getElementById("statement").innerHTML = "Your province is <b>" + province + "</b>, that is not meeting the criteria"
        document.getElementById("output").innerHTML = "<p style='color:red'</p>You are not from punjab, So you cannot apply for this post.</p>"
    }
}
// Login
document.getElementById("btn-7").onclick = function(){
    let userName = prompt("Please User Name!")
    let statement = "User Name is <b>admin</b>.<br>Password is <b>admin</b>."
    if(userName ==="admin" ){
    let pass = prompt("Please enter your pass!")
    if( pass==="admin"){
        alert("Your logged in!")
        document.getElementById("statement").innerHTML = statement
        document.getElementById("output").innerHTML = "You are logged in!"
    }else{
        alert("Incorrect password!")
        document.getElementById("statement").innerHTML = statement
        document.getElementById("output").innerHTML = "Your password is wrong!"
    }
}else{
    alert("Incorrect User Name!")
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = "Your User Name is wrong!"
}
}
// Check
document.getElementById("btn-8").onclick = function(){
    let fullName = prompt("Please enter your name!")
    let dailyLife = prompt(fullName + "! please tell me that are you studying, doing job or jobless?")
    if(dailyLife == "studying"){
        let maxStudyComplete = prompt("Which Study level did you have completed after matric?  (1)Intermediate  (2) Bachelor")
        if(maxStudyComplete=="intermediate" || maxStudyComplete=="Intermediate" || maxStudyComplete==12){
                let selectedField = prompt("Which field do you select for further study? (1)Computer Science  (2)Any other field")
                if(selectedField=="CS" || selectedField=="Computer Science" || selectedField=="computer science"){
                    alert("Congratulation " + fullName + "! you have selected good field.")
                    let selectedFieldDetails = "<div style='text-align:left'><b>" + fullName + "!</b> your given details are:<ul><li>Studying</li><li>You have completed <b>" + maxStudyComplete + "</b>.</li> <li> You have selected <b>" + selectedField + "</b>.</li></ul>"
                    document.getElementById("statement").innerHTML = selectedFieldDetails
                    document.getElementById("output").innerHTML = fullName + "! you have selected good field.<br> This field have high demand in future. <br>Thanks for your response."
                }else{
                    let yourField = prompt("Please tell us which field do you select?")
                    let yourFieldDetails = "<div style='text-align:left'><b>" + fullName + "!</b> your given details are:<ul><li>Studying</li><li>You have completed <b>" + maxStudyComplete + "</b>.</li> <li> You have selected <b>" + yourField + "</b>.</li></ul>"
                    alert("Good Luck " + fullName + "! for your future study.")
                    document.getElementById("statement").innerHTML = yourFieldDetails
                    document.getElementById("output").innerHTML = fullName + "! you may not have interest in Computer Science.<br>You have interest in " + yourField + ". I hope for your good career. <br>Thanks for your response."
                }
        }else if(maxStudyComplete == "Bachelor" || maxStudyComplete=="bachelor" || maxStudyComplete==16){
                    let selectedField = prompt("Which field do you select for further study? (1)Computer Science  (2)Any other field")
                    if(selectedField=="CS" || selectedField=="Computer Science" || selectedField=="computer science"){
                        alert("Congratulation " + fullName + "! you have done your bachelor in good field.")
                        document.getElementById("statement").innerHTML = selectedFieldDetails
                    document.getElementById("output").innerHTML = fullName + "! you have completed your bachelor in good field.<br> This field have high demand in future.<br>And offcourse your doing freelancing.<br>Thanks for your response." 
                    }else{
                        let yourField = prompt("Please tell us which field do you select?")
                    alert("Good Luck " + fullName + "! for your future career.")
                    document.getElementById("statement").innerHTML = yourFieldDetails
                    document.getElementById("output").innerHTML = fullName + "! you may not have interest in Computer Science.<br>You have interest in " + yourField + ". I hope for your good career. <br>Thanks for your response."
                    }            
                }else{
                    alert("You have selected lower/higher study level than inter/bachelor.")
                    let field = prompt("Plese select Your field")
                    document.getElementById("statement").innerHTML = fullName + "! your maximum study level is <b>" + maxStudyComplete + ".</b><br>Your field is <b>" + field + "</b>."
                    document.getElementById("output").innerHTML = fullName + "You have selected lower/higher study level than inter/bachelor that is " + maxStudyComplete + ". So, we will not further inquire." 
                }
        }else if(dailyLife == "doing job"){
        let job = prompt("In which sector  are you doing your job these days? (1) Govt Sector (2) Private Sector.")
        let jobDetails = "<div style='text-align:left'><b>" + fullName + "!</b> your details are given as:<ul><li>Doing job.</li><li>You are doing job in <b>" + job + "</b>.</li></ul>"
            if(job=="Govt Sector"){
                alert("You are a govt employee.")
                document.getElementById("statement").innerHTML = jobDetails
                document.getElementById("output").innerHTML = fullName + "! Best of luck. You are a govt employee. Your job is permanent.<br>Thanks for your response."
            }else if(job=="Private Sector"){
                alert("You are a private employee.")
                document.getElementById("statement").innerHTML = jobDetails
                document.getElementById("output").innerHTML = fullName + "! Best of luck. You are a private employee. Your job is temporary.<br>Thanks for your response."
            }else{
                alert("You are doing your job in." + job + ".")
                document.getElementById("statement").innerHTML = jobDetails
                document.getElementById("output").innerHTML = fullName + "! Best of luck. You are doing your job in." + job + " Your job is temporary.<br>Thanks for your response."
            }
        }else if(dailyLife=="jobless"){
            let futurePlanning = prompt("What is your future planning?  (1)Go Abroad  (2)Stay in your country")
            let joblessDetails = "<div style='text-align:left'><b>" + fullName + "!</b> your details are given as:<ul><li>Jobless.</li><li>Your future planning is  <b>" + futurePlanning + "</b>.</li></ul>"
            if(futurePlanning =="Go Abroad"){
                alert(fullName + " best of luck! you will become overseas")
                document.getElementById("statement").innerHTML = joblessDetails 
                document.getElementById("output").innerHTML = fullName + "! I hope you will find good careeer in foreign country .<br>Thanks for your response."
            }else if(futurePlanning =="Stay in your country"){
                alert(fullName + " best of luck! you will live in your country.")
                document.getElementById("statement").innerHTML = joblessDetails
                document.getElementById("output").innerHTML = fullName + "! I hope you will find good careeer in your country .<br>Thanks for your response."
            }else{
                alert("Your future planning is/are" + futurePlanning + ".")
                document.getElementById("statement").innerHTML = joblessDetails
                document.getElementById("output").innerHTML = fullName + "! Best of luck. You have siad that your future futur planning is/are." + futurePlanning + " May Allah bless you with happiness.<br>Thanks for your response."
            }
        }else{
            let othersDetails = fullName + " you are (doing) " + dailyLife
          alert(othersDetails)
          document.getElementById("statement").innerHTML = othersDetails + " that are not according to our choice."
          document.getElementById("output").innerHTML = fullName + "! you said that you are " + dailyLife + ". So, best of luck.<br>Thanks for your response."  
        }
    }
// Clear Statement
document.getElementById("clr-statement").onclick = function(){
    document.getElementById("statement").innerHTML = ""
}
// Clear Output
document.getElementById("clr-output").onclick = function(){
    document.getElementById("output").innerHTML = ""
}