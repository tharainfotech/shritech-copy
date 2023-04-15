$(function(){
	jQuery.validator.addMethod("country_phone", function(value, element) {
  return this.optional(element) || /^\+(?:[0-9] ?){6,14}[0-9]$/.test(value);
}, "Please Enter Valid Phone Number");

	$('#request_form').validate({
		rules: {
			request_name:{
				required:true,
			},
			request_email:{
				required: true,
				email: true,
			},
			request_mobile:{
				required:true,
				number:true,
			},
			request_address:{
				required:true,
			},
			request_state:{
				required:true,
			},
			request_company:{
				required:true,
			},
			request_pin:{
				required:true,
				number:true,
			},
			request_pan:{
				required:true,
			},
			request_aadhar:{
				required:true,
				number:true,
			},
			request_role:{
				required:true,
			},
		},
		messages:{
			request_name:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter Name !!</span>',
			},
			request_email:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 15px;">Please Enter a Valid Email !!</span'
			},
			request_mobile:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter Mobile Number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 15px;">Please Enter Valid Number !!</span>',	
			},
			request_address:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter Address !!</span>',
			},
			request_state:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Choose State !!</span>',
			},
			request_company:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter Company !!</span>',
			},
			request_pin:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter Pin Number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 15px;">Please Enter Valid Number !!</span>',	
			},
			request_pan:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter PAN Number !!</span>',
			},
			request_aadhar:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Enter Aadhar Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 15px;">Please Enter Valid Number !!</span>',
			},
			request_role:{
				required:'<span style="color: #ff0000; font-size: 15px;">Please Choose Account Type !!</span>',
			},
		}

	});

	$('#forgot_form').validate({
		rules: {
			user_email:{
				required: true,
				email: true,
			},
		},
		messages:{
			user_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span'
			},
		}

	});

	$('#update_profile').validate({
		rules: {
			admin_name:{
				required: true,
			},
			admin_email:{
				required: true,
				email: true,
			},
			admin_phone:{
				required: true,
				number: true,
			},
		},
		messages:{
			admin_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			admin_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span'
			},
			admin_phone:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Contact number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter numbers only !!</span>',	
			},
		},

	});

	$('#update_profile_password').validate({
		rules: {
			password:{
				required: true,
				minlength:6,
			},
			conf_password:{
				required: true,
				equalTo:'#password',
			},
		},
		messages:{
			password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
		},

	});

	$('#add_super_distributer').validate({
		rules: {
			super_distributer_name:{
				required: true,
			},
			super_distributer_email:{
				required: true,
				email: true,
				remote: {
                    url: 'super_distributer/email_check',
                    type: 'post',
                },
			},
			super_distributer_password:{
				required: true,
				minlength:6,
			},
			super_distributer_conf_password:{
				required: true,
				equalTo:'#super_distributer_password',
			},
			super_distributer_mobile:{
				required: true,
				number: true,
			},
			super_distributer_shop:{
				required: true,
			},
			super_distributer_address:{
				required: true,
			},
			super_distributer_pan:{
				required: true,
			},
			super_distributer_aadhar:{
				required: true,
			},
			super_distributer_aadhar_file:{
				required: true,
			},
		},
		messages:{
			super_distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			super_distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
				remote:'<span style="color: #ff0000; font-size: 12px;">Email already in use !!</span>',
			},
			super_distributer_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			super_distributer_conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			super_distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			super_distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			super_distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			super_distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			super_distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
			super_distributer_aadhar_file:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Upload Aadhar Document !!</span>',
			},
		},

	});

	$('#edit_super_distributer').validate({
		rules: {
			super_distributer_name:{
				required: true,
			},
			super_distributer_email:{
				required: true,
				email: true,
			},
			super_distributer_password:{
				minlength:6,
			},
			super_distributer_conf_password:{
				equalTo:'#super_distributer_password',
			},
			super_distributer_mobile:{
				required: true,
				number: true,
			},
			super_distributer_shop:{
				required: true,
			},
			super_distributer_address:{
				required: true,
			},
			super_distributer_pan:{
				required: true,
			},
			super_distributer_aadhar:{
				required: true,
			},
		},
		messages:{
			super_distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			super_distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
			},
			super_distributer_password:{
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			super_distributer_conf_password:{
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			super_distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			super_distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			super_distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			super_distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			super_distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
		},

	});

	$('#add_distributer').validate({
		rules: {
			distributer_super_distributer:{
				required:true,
			},
			distributer_name:{
				required: true,
			},
			distributer_super_distributer:{
				required:true,
			},
			distributer_email:{
				required: true,
				email: true,
				remote: {
                    url: 'distributer/email_check',
                    type: 'post',
                },
			},
			distributer_password:{
				required: true,
				minlength:6,
			},
			distributer_conf_password:{
				required: true,
				equalTo:'#distributer_password',
			},
			distributer_mobile:{
				required: true,
				number: true,
			},
			distributer_shop:{
				required: true,
			},
			distributer_address:{
				required: true,
			},
			distributer_pan:{
				required: true,
			},
			distributer_aadhar:{
				required: true,
			},
			distributer_aadhar_file:{
				required: true,
			},
		},
		messages:{
			distributer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
				remote:'<span style="color: #ff0000; font-size: 12px;">Email already in use !!</span>',
			},
			distributer_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			distributer_conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
			distributer_aadhar_file:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Upload Aadhar Document !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "distributer_super_distributer") 
            {
                error.insertAfter("#distributer_super_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#edit_distributer').validate({
		rules: {
			distributer_super_distributer:{
				required:true,
			},
			distributer_name:{
				required: true,
			},
			distributer_email:{
				required: true,
				email: true,
			},
			distributer_password:{
				minlength:6,
			},
			distributer_conf_password:{
				equalTo:'#distributer_password',
			},
			distributer_mobile:{
				required: true,
				number: true,
			},
			distributer_shop:{
				required: true,
			},
			distributer_address:{
				required: true,
			},
			distributer_pan:{
				required: true,
			},
			distributer_aadhar:{
				required: true,
			},
		},
		messages:{
			distributer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
			},
			distributer_password:{
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			distributer_conf_password:{
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "distributer_super_distributer") 
            {
                error.insertAfter("#distributer_super_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#add_retailer').validate({
		rules: {
			retailer_super_distributer:{
				required: true,
			},
			retailer_distributer:{
				required: true,
			},
			retailer_name:{
				required: true,
			},
			retailer_email:{
				required: true,
				email: true,
				remote: {
                    url: 'retailer/email_check',
                    type: 'post',
                },
			},
			retailer_password:{
				required: true,
				minlength:6,
			},
			retailer_conf_password:{
				required: true,
				equalTo:'#retailer_password',
			},
			retailer_mobile:{
				required: true,
				number: true,
			},
			retailer_shop:{
				required: true,
			},
			retailer_address:{
				required: true,
			},
			retailer_pan:{
				required: true,
			},
			retailer_aadhar:{
				required: true,
			},
			retailer_aadhar_file:{
				required: true,
			},
		},
		messages:{
			retailer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			retailer_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Distributer !!</span>',
			},
			retailer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			retailer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
				remote:'<span style="color: #ff0000; font-size: 12px;">Email already in use !!</span>',
			},
			retailer_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			retailer_conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			retailer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			retailer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			retailer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			retailer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			retailer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
			retailer_aadhar_file:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Upload Aadhar Document !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "retailer_super_distributer") 
            {
                error.insertAfter("#retailer_super_distributer_error");
            }
            else if(element.attr("name") == "retailer_distributer") 
            {
                error.insertAfter("#retailer_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#edit_retailer').validate({
		rules: {
			retailer_super_distributer:{
				required: true,
			},
			retailer_distributer:{
				required: true,
			},
			retailer_name:{
				required: true,
			},
			retailer_email:{
				required: true,
				email: true,
			},
			retailer_password:{
				minlength:6,
			},
			retailer_conf_password:{
				equalTo:'#retailer_password',
			},
			retailer_mobile:{
				required: true,
				number: true,
			},
			retailer_shop:{
				required: true,
			},
			retailer_address:{
				required: true,
			},
			retailer_pan:{
				required: true,
			},
			retailer_aadhar:{
				required: true,
			},
		},
		messages:{
			retailer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			retailer_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Distributer !!</span>',
			},
			retailer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			retailer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
			},
			retailer_password:{
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			retailer_conf_password:{
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			retailer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			retailer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			retailer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			retailer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			retailer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "retailer_super_distributer") 
            {
                error.insertAfter("#retailer_super_distributer_error");
            }
            else if(element.attr("name") == "retailer_distributer") 
            {
                error.insertAfter("#retailer_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#add_organiser').validate({
		rules: {
			organiser_name:{
				required: true,
			},
			organiser_email:{
				required: true,
				email: true,
			},
			organiser_phone:{
				required: true,
				number: true,
			},
		},
		messages:{
			organiser_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			organiser_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span'
			},
			organiser_phone:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Contact number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter numbers only !!</span>',	
			},
		},

	});

	$('#add_category').validate({
		rules: {
			category_title:{
				required: true,
			},
		},
		messages:{
			category_title:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Category !!</span>',
			},
		},
	});

	$('#add_sub_category').validate({
		rules: {
			sub_category_category:{
				required: true,
			},
			sub_category_title:{
				required: true,
			},
		},
		messages:{
			sub_category_category:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Category !!</span>',
			},
			sub_category_title:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Sub Category !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "sub_category_category") 
            {
                error.insertAfter("#sub_category_category_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }
	});

	$('#add_keyword').validate({
		rules: {
			keyword_category:{
				required: true,
			},
			keyword_title:{
				required: true,
			},
		},
		messages:{
			keyword_category:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Category !!</span>',
			},
			keyword_title:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Keyword !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "keyword_category") 
            {
                error.insertAfter("#keyword_category_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }
	});

	$('#add_country').validate({
		rules: {
			country_name:{
				required: true,
			},
		},
		messages:{
			country_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Country Name !!</span>',
			},
		},
	});

	$('#add_state').validate({
		rules: {
			state_country:{
				required: true,
			},
			state_name:{
				required: true,
			},
		},
		messages:{
			state_country:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Country !!</span>',
			},
			state_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter State Name !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "state_country") 
            {
                error.insertAfter("#state_country_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }
	});

	$('#add_city').validate({
		rules: {
			city_country:{
				required: true,
			},
			city_state:{
				required: true,
			},
			city_name:{
				required: true,
			},
			city_image:{
				required: true,
			},
		},
		messages:{
			city_country:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Country !!</span>',
			},
			city_state:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select State !!</span>',
			},
			city_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter City Name !!</span>',
			},
			city_image:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Upload City image !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "city_country") 
            {
                error.insertAfter("#city_country_error");
            }
            else if(element.attr("name") == "city_state") 
            {
                error.insertAfter("#city_state_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }
	});

	$('#add_event').validate({
		ignore: [],
        debug: false,
		rules: {
			event_title:{
				required: true,
			},
			event_mode:{
				required: true,
			},
			event_category:{
				required: true,
			},
			event_sub_category:{
				required: true,
			},
			event_type:{
				required: true,
			},
			event_organiser:{
				required: true,
			},
			event_recc_type:{
				required: true,
			},
			event_date:{
				required: true,
			},
			event_start_date:{
				required: true,
			},
			event_end_date:{
				required: true,
			},
			event_time_from_recc:{
				required: true,
			},
			event_time_to_recc:{
				required: true,
			},
			event_time_from:{
				required: true,
			},
			event_time_to:{
				required: true,
			},
			event_location:{
				required: true,
			},
			event_country:{
				required: true,
			},
			event_state:{
				required: true,
			},
			event_city:{
				required: true,
			},
			event_address:{
				required: true,
			},
			event_email:{
				required: true,
				email: true,
			},
			event_phone:{
				required: true,
				number: true,
			},
			event_website:{
				required: true,
				url:true,
			},
			event_register:{
				required: true,
				url:true,
			},
			event_image:{
				required: true,
			},
			event_details: {
                required: function(textarea) {
                   CKEDITOR.instances[textarea.id].updateElement();
                   var editorcontent = textarea.value.replace(/<[^>]*>/gi, '');
                   return editorcontent.length === 0;
                }
            },
		},
		messages:{
			event_title:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Event Title !!</span>',
			},
			event_mode:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Mode !!</span>',
			},
			event_category:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Category !!</span>',
			},
			event_sub_category:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Sub Category !!</span>',
			},
			event_type:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Type !!</span>',
			},
			event_recc_type:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Recurring Type !!</span>',
			},
			event_organiser:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Organiser !!</span>',
			},
			event_date:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Date !!</span>',
			},
			event_start_date:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Date !!</span>',
			},
			event_end_date:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Date !!</span>',
			},
			event_time_from_recc:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select From Time !!</span>',
			},
			event_time_to_recc:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select To Time !!</span>',
			},
			event_time_from:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select From Time !!</span>',
			},
			event_time_to:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select To Time !!</span>',
			},
			event_location:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Location !!</span>',
			},
			event_country:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Country !!</span>',
			},
			event_state:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select State !!</span>',
			},
			event_city:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select City !!</span>',
			},
			event_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			event_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span>',
			},
			event_phone:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Contact number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			event_website:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Website !!</span>',
				url:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid URL !!</span>'
			},
			event_register:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Registration Link !!</span>',
				url:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid URL !!</span>'
			},
			event_image:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Image !!</span>',
			},
			event_details : {
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Event Details !!</span>',
            },
		},

		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "event_category") 
            {
                error.insertAfter("#event_category_error");
            }
            else if(element.attr("name") == "event_mode") 
            {
                error.insertAfter("#event_mode_error");
            }
            else if(element.attr("name") == "event_sub_category") 
            {
                error.insertAfter("event_sub_category_error");
            }
            else if(element.attr("name") == "event_type") 
            {
                error.insertAfter("#event_type_error");
            }
            else if(element.attr("name") == "event_recc_type") 
            {
                error.insertAfter("#event_recc_type_error");
            }
            else if(element.attr("name") == "event_country") 
            {
                error.insertAfter("#event_country_error");
            }
            else if(element.attr("name") == "event_city") 
            {
                error.insertAfter("#event_city_error");
            }
            else if(element.attr("name") == "event_state") 
            {
                error.insertAfter("#event_state_error");
            }
            else if(element.attr("name") == "event_organiser") 
            {
                error.insertAfter("#event_organiser_error");
            }
            else if(element.attr("name") == "event_details") 
			{
			  error.appendTo($('#event_details_error'));
			} 
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#edit_event').validate({
		ignore: [],
        debug: false,
		rules: {
			event_title:{
				required: true,
			},
			event_mode:{
				required: true,
			},
			event_category:{
				required: true,
			},
			event_sub_category:{
				required: true,
			},
			event_type:{
				required: true,
			},
			event_organiser:{
				required: true,
			},
			event_recc_type:{
				required: true,
			},
			event_date:{
				required: true,
			},
			event_start_date:{
				required: true,
			},
			event_end_date:{
				required: true,
			},
			event_time_from_recc:{
				required: true,
			},
			event_time_to_recc:{
				required: true,
			},
			event_time_from:{
				required: true,
			},
			event_time_to:{
				required: true,
			},
			event_location:{
				required: true,
			},
			event_country:{
				required: true,
			},
			event_state:{
				required: true,
			},
			event_city:{
				required: true,
			},
			event_address:{
				required: true,
			},
			event_email:{
				required: true,
				email: true,
			},
			event_phone:{
				required: true,
				number: true,
			},
			event_website:{
				required: true,
				url:true,
			},
			event_register:{
				required: true,
				url:true,
			},
			event_details: {
                required: function(textarea) {
                   CKEDITOR.instances[textarea.id].updateElement();
                   var editorcontent = textarea.value.replace(/<[^>]*>/gi, '');
                   return editorcontent.length === 0;
                }
            },
		},
		messages:{
			event_title:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Event Title !!</span>',
			},
			event_mode:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Mode !!</span>',
			},
			event_category:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Category !!</span>',
			},
			event_sub_category:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Sub Category !!</span>',
			},
			event_type:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Type !!</span>',
			},
			event_recc_type:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Recurring Type !!</span>',
			},
			event_organiser:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Organiser !!</span>',
			},
			event_date:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Date !!</span>',
			},
			event_start_date:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Date !!</span>',
			},
			event_end_date:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Date !!</span>',
			},
			event_time_from_recc:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select From Time !!</span>',
			},
			event_time_to_recc:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select To Time !!</span>',
			},
			event_time_from:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select From Time !!</span>',
			},
			event_time_to:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select To Time !!</span>',
			},
			event_location:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Location !!</span>',
			},
			event_country:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Country !!</span>',
			},
			event_state:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select State !!</span>',
			},
			event_city:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select City !!</span>',
			},
			event_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			event_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span>',
			},
			event_phone:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Contact number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			event_website:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Website !!</span>',
				url:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid URL !!</span>'
			},
			event_register:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Registration Link !!</span>',
				url:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid URL !!</span>'
			},
			event_details : {
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Event Details !!</span>',
            },
		},

		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "event_category") 
            {
                error.insertAfter("#event_category_error");
            }
            else if(element.attr("name") == "event_mode") 
            {
                error.insertAfter("#event_mode_error");
            }
            else if(element.attr("name") == "event_sub_category") 
            {
                error.insertAfter("event_sub_category_error");
            }
            else if(element.attr("name") == "event_type") 
            {
                error.insertAfter("#event_type_error");
            }
            else if(element.attr("name") == "event_recc_type") 
            {
                error.insertAfter("#event_recc_type_error");
            }
            else if(element.attr("name") == "event_country") 
            {
                error.insertAfter("#event_country_error");
            }
            else if(element.attr("name") == "event_city") 
            {
                error.insertAfter("#event_city_error");
            }
            else if(element.attr("name") == "event_state") 
            {
                error.insertAfter("#event_state_error");
            }
            else if(element.attr("name") == "event_organiser") 
            {
                error.insertAfter("#event_organiser_error");
            }
            else if(element.attr("name") == "event_details") 
			{
			  error.appendTo($('#event_details_error'));
			} 
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#settings').validate({
		rules: {
			sponser_currency:{
				required: true,
			},
			sponser_charge:{
				required: true,
			},
			paypal_id:{
				required: true,
			},
		},
		messages:{
			sponser_currency:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Currency !!</span>',
			},
			sponser_charge:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Charge !!</span>',
			},
			paypal_id:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Paypal ID !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "sponser_currency") 
            {
                error.insertAfter("#sponser_currency_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#website_settings').validate({
		rules: {
			website_address:{
				required: true,
			},
			website_phone:{
				required: true,
				number: true,
			},
			website_email:{
				required: true,
				email: true,
			},
		},
		messages:{
			website_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			website_phone:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Phone Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',
			},
			website_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Provide Valid Email !!</span>',
			},
		},

	});
});


