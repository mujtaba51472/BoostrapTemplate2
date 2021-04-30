
       var form = document.querySelector('form');
       var username = document.querySelector('#username');
       var useremail = document.querySelector('#email');
       var password = document.querySelector('#password')
       var password2 = document.querySelector('#password2')

       var small = document.querySelector('small');

       form.addEventListener('submit', (e) => {
              e.preventDefault();
              checkInputs();

       })

       function checkInputs() {
              var usernameValue = username.value.trim();
              var emailValue = useremail.value.trim();
              var passwordValue = password.value.trim();
              var password2Value = password2.value.trim();


              //       user name
              if (usernameValue === "" || null) {
                     setErrorFor(username, 'username cannot be blank')
              }
              else {
                     setSuccessFor(username, 'valid');
              }

              // email
              if (emailValue === '' || null) {
                     setErrorFor(useremail, 'email cannot be blank');
              }
              else if (!isEmail(emailValue)) {
                     setErrorFor(useremail, "not a valid email")
              }
              else {
                     setSuccessFor(useremail, "Valid")
              }

              // password 
              if (passwordValue === '' || passwordValue === null) {
                     setErrorFor(password, 'enter password');
              }
              else if (passwordValue.length < 5) {
                     setErrorFor(password, " Password Should be greater than 5 charachters")
              }
              else {
                     setSuccessFor(password, "Valid");
              }


              // confirm password 
              if (password2Value === '' || password2Value == null) {
                     setErrorFor(password2, "confirm password");

              }
              else if (password2Value != passwordValue) {
                     setErrorFor(password2, "password not matched");
              }
              else if (password2Value.length < 5) {
                     setErrorFor(password2, " Password Should be greater than 5 charachters")
              }

              else {
                     setSuccessFor(password2, " Pssword  Matched");
              }

       }

       function setErrorFor(input, message) {
              const formControl = input.parentElement;
              const small = formControl.querySelector('small');
              formControl.className = "formControl error";
              small.innerText = message;

       }

       function setSuccessFor(input, validVal) {
              const formControl = input.parentElement;
              const small = formControl.querySelector('small');
              formControl.className = "formControl success";
              small.innerText = validVal;


       }

       function isEmail(useremail) {
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(useremail);
       }

       function showPass() {
              if (password.type === "password") {
                     password.type = "text";


              }
              else {

                     password.type = "password";
              }

       }


       function showPass2() {
              if (password2.type === "password") {
                     password2.type = "text";


              }
              else {

                     password2.type = "password";
              }

       }
