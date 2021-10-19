// Factory
angular.module('Factory', []).factory('myFact', function ($rootScope, $location, $http) {
    return {
        Signup: Signup,
        Login: Login,
        Message:Message
    }

    // Signup
    function Signup(name, email, password, confirmPassword, url, mypath) {
        // empty data
        if (name === undefined || email === undefined || password === undefined || confirmPassword === undefined) {
            Message('danger','Please fill all details')
        }
        else {
            var flag = 0;
            if (password !== confirmPassword) {
                Message('danger','Password and confirm Password must be same')
                flag = 1;
            }
            if (flag == 0) {
                $http.post(url, {
                    name: name,
                    email:email,
                    password: password
                }).then(function (response) {
                    
                    if (response.status == 201) {
                        $location.path(mypath);
                        Message('success','Account Created')
                    }
                    else{
                        Message('danger','Email already Exist')
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }
    }

    function Login(email,password ,url,mypath,val) {
        if(email===undefined || password===undefined){
            Message('danger','Please fill all details')
        }
        else{
        $http.post(url, {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response)
            if(response.status===200){
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('role',val);
                console.log("print");
                $location.path(mypath);
                Message('success','Login Successfully..')
            }
            else{
                Message('danger','Unauthorised..')
            }
            
        }).catch(function (error) {
            console.log(error);
        })
    }
    }



  
    
    function Message(type,msg){
        $.bootstrapGrowl(msg, {
            ele: 'body',
            type: type, 
            offset: { from: 'top', amount: 20 }, 
            align: 'right',
            width: 250, 
            delay: 4000,
            allow_dismiss: true,
            stackup_spacing: 10 
        });
    }
})