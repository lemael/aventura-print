/**
 *  Initialize form variables
 *  <br>------------------------------------------------------------------------
 */
// form rechnungsaddresse
var text_firma, text_name, text_surname, strasse, input_plz, text_city, 
    combobox_land, text_phone, text_mobile, text_fax, text_mail, text_page;
// lieferaddress
var text_lie_firma, text_lie_name, text_lie_surname, text_lie_strasse, 
    text_lie_postcode, text_lie_city, text_lie_phone, combobox_lie_land, 
    text_lie_mobile, text_lie_fax, text_lie_mail, text_lie_page;
// absender
var text_abs_land, text_abs_firma, text_abs_name, text_abs_city, 
    text_abs_surname, text_abs_strasse, text_abs_postcode;
// wrappers
var addrbook_lightbox, addrbook_ui,form_type;

/**
 *	INITIALIZE GLOBAL DATA OBJECT (JSON)
 *	IS NEEDED TO CALL A PARENT FUNCTION AND SEND THE DATA BACK TO PARENT
 *	<br>------------------------------------------------------------------------
*/
var dataObj;


/**
 * INITIALIZE TRACKING VARIABLE
 * WHICH CHECKBOX IS CHECKED
*/
var trackCheckBox = false;

/**
 * INITIALIZE TRACKING VARIABLE
 * WHICH WAS THE LAST OPENED SLIDE
*/
var trackSlide;

<!-- THIS FUNCTION CONTAINS THE ADDRESS DATA WHICH IS GAINED BY THE COLORBOX MODULE -->
function setAddrBookData( pData ) {
    if ( pData.formid == 1 ) {
        <!-- FILL IN THE BILLING-ADRESS -->
        document.getElementById('rechnungs_adresse_firma').value = pData.company;
        document.getElementById('rechnungs_adresse_vorname').value = pData.name;
        document.getElementById('rechnungs_adresse_nachname').value = pData.surname;
        document.getElementById('rechnungs_adresse_strasse').value = pData.address;
        document.getElementById('rechnungs_adresse_plz').value = pData.zip;
        document.getElementById('rechnungs_adresse_ort').value = pData.city;
        document.getElementById('rechnungs_adresse_telefon').value = pData.phone;
        document.getElementById('rechnungs_adresse_mobiltelefon').value = pData.mobile;
        document.getElementById('rechnungs_adresse_telefax').value = pData.fax;
        document.getElementById('rechnungs_adresse_email').value = pData.email;
        document.getElementById('rechnungs_adresse_homepage').value = pData.home;
    } else if ( pData.formid == 2) {
        <!-- FILL IN THE VARYING BILLING ADRESS -->
        document.getElementById('text_lie_firma').value = pData.company;
        document.getElementById('text_lie_name').value = pData.name;
        document.getElementById('text_lie_surname').value = pData.surname;
        document.getElementById('text_lie_strasse').value = pData.address;
        document.getElementById('text_lie_postcode').value = pData.zip;
        document.getElementById('text_lie_city').value = pData.city;

        if (document.getElementById('text_lie_phone')) {
            document.getElementById('text_lie_phone').value = pData.phone;
        }

        if (document.getElementById('text_lie_mobile')) {
            document.getElementById('text_lie_mobile').value = pData.mobile;
        }

        if (document.getElementById('text_lie_fax')) {
            document.getElementById('text_lie_fax').value = pData.fax;
        }

        if (document.getElementById('text_lie_mail')) {
            document.getElementById('text_lie_mail').value = pData.email;
        }

        if (document.getElementById('text_lie_page')) {
            document.getElementById('text_lie_page').value = pData.home;
        }

        if (document.getElementById('combobox_lie_land')) {
            document.getElementById('combobox_lie_land').selectedIndex = '1';
        }

    } else {
        document.getElementById('text_abs_firma').value = pData.company;
        document.getElementById('text_abs_name').value = pData.name;
        document.getElementById('text_abs_surname').value = pData.surname;
        document.getElementById('text_abs_strasse').value = pData.address;
        document.getElementById('text_abs_postcode').value = pData.zip;
        document.getElementById('text_abs_city').value = pData.city;
    }
}

/**
 * Resize function for COLORBOX
 * <br>------------------------------------------------------------------------------------
 * @return void
*/
function resizeColorbox() {
	
	// Get the height of the Addressbook Wrapper an get some extra height
	var y = jQuery(".addrbook_wrapper").height() + 80;
	
	// Resize the colorbox with the new height
	parent.jQuery.colorbox.resize({height:y});
}

/**
 * Handle display address book UI
 *  <br>------------------------------------------------------------------------
 *  @param formDestination The form in which data will be processed.
 *  @return void
 */
function displayAddressBookHandler(formDestination){
    // validate destination form.
    if( formDestination < 1 || formDestination > 3 ){
        //console.log('Invalid destination form. No action taken at addrbook.js:6.');
        return false;
    }
    
    // set to local.
    form_type = formDestination;
    
    // initialize form trackers.
    if( formDestination == 1 ){
        text_firma = document.getElementById('text_firma');
        text_name           = document.getElementById('text_name');
        text_surname        = document.getElementById('text_surname');
        strasse             = document.getElementById('strasse');
        input_plz           = document.getElementById('input_plz');
        text_city           = document.getElementById('text_city');
        combobox_land       = document.getElementById('combobox_land');
        text_phone          = document.getElementById('text_phone');
        text_mobile         = document.getElementById('text_mobile');
        text_fax            = document.getElementById('text_fax');
        text_mail           = document.getElementById('text_mail');
        text_page           = document.getElementById('text_page');
        
        if( text_firma == undefined || 
            text_name == undefined || 
            text_surname == undefined || 
            strasse == undefined || 
            input_plz == undefined || 
            text_city == undefined || 
            combobox_land == undefined || 
            text_phone == undefined || 
            text_mobile == undefined || 
            text_fax == undefined || 
            text_mail == undefined || 
            text_page == undefined ){
            //console.log('Unable to process request. Form variables not defined at addrbook.js:51.');
            return false;
        }
        
        displayAddrBookUI();
    } else if( formDestination == 2 ){
        text_lie_firma      = document.getElementById('text_lie_firma');
        text_lie_name       = document.getElementById('text_lie_name');
        text_lie_surname    = document.getElementById('text_lie_surname');
        text_lie_strasse    = document.getElementById('text_lie_strasse');
        text_lie_postcode   = document.getElementById('text_lie_postcode');
        text_lie_city       = document.getElementById('text_lie_city');
        text_lie_phone      = document.getElementById('text_lie_phone');
        combobox_lie_land   = document.getElementById('combobox_lie_land');
        text_lie_mobile     = document.getElementById('text_lie_mobile');
        text_lie_fax        = document.getElementById('text_lie_fax');
        text_lie_mail       = document.getElementById('text_lie_mail');
        text_lie_page       = document.getElementById('text_lie_page');
        
        if( text_lie_firma == undefined || 
            text_lie_name == undefined || 
            text_lie_surname == undefined || 
            text_lie_strasse == undefined || 
            text_lie_postcode == undefined || 
            text_lie_city == undefined || 
            text_lie_phone == undefined || 
            combobox_lie_land == undefined || 
            text_lie_mobile == undefined || 
            text_lie_fax == undefined || 
            text_lie_mail == undefined || 
            text_lie_page == undefined ){
            //console.log('Unable to process request. Form variables not defined at addrbook.js:80.');
            return false;
        }
        
        displayAddrBookUI();
    } else if( formDestination == 3 ){
        text_abs_land       = document.getElementById('text_abs_land');
        text_abs_firma      = document.getElementById('text_abs_firma');
        text_abs_name       = document.getElementById('text_abs_name');
        text_abs_city       = document.getElementById('text_abs_city');
        text_abs_surname    = document.getElementById('text_abs_surname');
        text_abs_strasse    = document.getElementById('text_abs_strasse');
        text_abs_postcode   = document.getElementById('text_abs_postcode');
        
        if( text_abs_land == undefined || 
            text_abs_firma == undefined || 
            text_abs_name == undefined || 
            text_abs_name == undefined || 
            text_abs_city == undefined || 
            text_abs_surname == undefined || 
            text_abs_strasse == undefined || 
            text_abs_postcode == undefined ){
            //console.log('Unable to process request. Form variables not defined at addrbook.js:100.');
            return false;
        }
        
        displayAddrBookUI();
    } else {
        //console.log('Invalid destination form. Destination ' + formDestination + ' not available.');
        return false;
    }    
}

/**
 *  Display lightbox
 * <br>-------------------------------------------------------------------------
 * @return void
 */
function displayAddrBookUI(){
    // set wrapper.
    addrbook_lightbox   = document.getElementById('addrbook_lightbox');
    addrbook_ui         = document.getElementById('addrbook_ui');
    
    if( addrbook_lightbox == undefined || addrbook_ui == undefined ){
        //console.log('Lightbox wrapper has not been defined. Error throw at addrbook.js:126.');
        return false;
    }
    
    // launch lightbox and display controls wrapper.
    $(addrbook_lightbox).fadeIn();
    $(addrbook_ui).fadeIn();
    
    // make absolute sure that lightbox fills entire height. some browsers might
    // try to screw us over on this one :(
    addrbook_lightbox.style.height = $(document).height();
}

/**
 * Hide lightbox
 *  <br>------------------------------------------------------------------------
 *  @return void
 */
function hideAddrBookLightbox(){
    $(addrbook_lightbox).fadeOut();
    $(addrbook_ui).fadeOut();
}

/**
 * Display add new address form
 * <br>-------------------------------------------------------------------------
 * @param string var type The form to be displayed.
 * @return void
 */
 
 /*
 * PARAM btn deleted
 * Niki Aljancic 07.08.2013
 * Reason: Pimped up the front end. No need for the button anymore
 */
var na,al,bt;
function displayBookTabType(type){
    
	//Call function to check if another Slide must be closed
	closeLastSlide(document.getElementById('newAddressID'));
	
	//Set as new tracked slideToggle
	trackSlide = document.getElementById('newAddressID');
    
    // handle new address form.
    if( type == 'new' ){
        na = document.getElementById('newAddressID');
        
        $('#newAddressID').slideToggle(function() {
			//Resize Colorbox
			resizeColorbox();
		});
    }
    // else, handle address list.
    else {
        
    }
}

/**
 * Submit new address form handler
 * <br>-------------------------------------------------------------------------
 * @return void.
 */
function submitNewAddress(){
    var submitbtn,company,first_name,lastname,email,address,city,zip,country,phone,
    fax,mobile,homepage,userId, shopId;
    
    // define variables.
    submitbtn   = document.getElementById('savebtn');
    company     = document.getElementById('companyNameId');
    first_name  = document.getElementById('firstNameId');
    lastname    = document.getElementById('lastNameId');
    email       = document.getElementById('emailId');
    address     = document.getElementById('addressId');
    city        = document.getElementById('cityId');
    zip         = document.getElementById('zipId');
    country     = document.getElementById('countryId');
    phone       = document.getElementById('phoneId');
    mobile      = document.getElementById('mobileId');
    fax         = document.getElementById('faxId');
    homepage    = document.getElementById('homepageId');
    userId      = document.getElementById('userIdHid');
	shopId		= document.getElementById('shopIdHid');
	formId		= document.getElementById('formIdHid');
    
    // make sure no variable is undefined.
    if( submitbtn == undefined || company == undefined || first_name == undefined ||
        lastname == undefined || email == undefined || address == undefined ||
        city == undefined || zip == undefined || country == undefined || phone == undefined ||
        phone == undefined || mobile == undefined || fax == undefined || homepage == undefined ||
        userId == undefined || shopId == undefined || formId == undefined ){
        //console.log('One or more variables are undefined. Form could not be processed at addrbook.js:212.');
        return false;
    }
    
    // reset borders.
    first_name.style.border = '1px solid #CCC';
    email.style.border = '1px solid #CCC';
    lastname.style.border = '1px solid #CCC';
    address.style.border = '1px solid #CCC';
    city.style.border = '1px solid #CCC';
    zip.style.border = '1px solid #CCC';
    phone.style.border = '1px solid #CCC';
    mobile.style.border = '1px solid #CCC';
    homepage.style.border = '1px solid #CCC';
    fax.style.border = '1px solid #CCC';
    
    // validate.
    var error = false;
    var error_message = 'Korrigieren Sie bitte folgende Fehler:' + "\r\r";
    
    if( first_name.value.length < 3 ){
        first_name.style.border = '1px solid #C00';
        error_message += 'Geben Sie bitte einen Vorname an.';
        error = true;
    }
    
    if( lastname.value.length < 3 ){
        lastname.style.border = '1px solid #C00';
        error_message += "\r" + 'Geben Sie bitte einen Nachnamen an.';
        error = true;
    }
    
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if( !regex.test(email.value) ){
        email.style.border = '1px solid #C00';
        error_message += "\r" + 'Geben Sie bitte eine gültige Email-Adresse an.';
        error = true;
    }
    
    if( address.value.length < 5 ){
        address.style.border = '1px solid #C00';
        error_message += "\r" + 'Geben Sie bitte Ihre Strasse + Hausnummer an.';
        error = true;
    }
    
    if( city.value.length < 3 ){
        city.style.border = '1px solid #C00';
        error_message += "\r" + 'Geben Sie bitte einen Ort an.';
        error = true;
    }
    
    if( zip.value.length < 4 ){
        zip.style.border = '1px solid #C00';
        error_message += "\r" + 'Geben Sie bitte eine PLZ an.';
        error = true;
    }
    
    if( error ){
        alert(error_message);
        return false;
    }
    
    // disable fields for saving process.
    company.disabled    = true;
    first_name.disabled = true;
    lastname.disabled   = true;
    email.disabled      = true;
    address.disabled    = true;
    city.disabled       = true;
    zip.disabled        = true;
    country.disabled    = true;
    phone.disabled      = true;
    mobile.disabled     = true;
    fax.disabled        = true;
    homepage.disabled   = true;
    submitbtn.disabled  = true;
    
    // send data to server side handler.
    $.post(
        '../ajax/add_address.php',
        {
            uid: userId.value,
			shopid: shopId.value,
            companyName: company.value,
            firstName: first_name.value,
            lastName: lastname.value,
            emailAddress: email.value,
            fullAddress: address.value,
            cityName: city.value,
            zipCode: zip.value,
            countryName: country.options[country.selectedIndex].value,
            phoneNr: phone.value,
            mobileNr: mobile.value,
            faxNr: fax.value,
            hp: homepage.value,
			formid: formId.value
        },
        function (data){
            //console.log(data);
            var result = data.split('[:]');
            
            if( result[0] != 'ok' ){
                console.log(result[0] + ':' + result[1] + ' Error thrown at addrbook.js:318.');
                alert('Das System konnte die Adresse auf Grund eines unerwarteten Systemfehlers nicht speichern. Kontaktieren Sie bitten den Systemadministrator.');
            } else {
                alert('Ihre Adresse wurde erfolgreich angelegt.');
                document.location.reload(true);
            }
            
            // enable fields.
            company.disabled    = false;
            first_name.disabled = false;
            lastname.disabled   = false;
            email.disabled      = false;
            address.disabled    = false;
            city.disabled       = false;
            zip.disabled        = false;
            country.disabled    = false;
            phone.disabled      = false;
            mobile.disabled     = false;
            fax.disabled        = false;
            homepage.disabled   = false;
            submitbtn.disabled  = false;
        }
    );
    
    return false;
} // end submit new address.

/**
 * Display list item button handler
 * <br>-------------------------------------------------------------------------
 * @param wrapper The id for the list wrapper.
 * @param button The id for the clicked button.
 * @return void
 */
var listwrap,listbtn;
function displayList(wrapper,button){
    listwrap = document.getElementById(wrapper);
    listbtn  = document.getElementById(button);
    
	//Check if the warning-box is displayed
	if ( document.getElementById( 'warning' ).style.display == 'block' ) {
		document.getElementById( 'warning' ).style.display = 'none';
	}
	
	//Call function to check if another Slide must be closed
	closeLastSlide(listwrap);
	
	//Track this one as last opened Slide
	trackSlide = listwrap;
	
    if( listwrap == undefined || listbtn == undefined ){
        return false;
    }
    
    // change button icon.
    if( listwrap.style.display == 'none' ){
        listbtn.className = 'arrowUp';
    } else {
        listbtn.className = 'arrowDown';
    }
    
    $(listwrap).slideToggle(function() {
		//Resize Colorbox
		resizeColorbox();
	});
}

/**
 * Set data to main form
 * <br>-------------------------------------------------------------------------
 * @param boxid The id for the div interaction.
 * @param index The form index tracker.
 * @return void
 * <br>-------------------------------------------------------------------------
 * SORRY JAY FOR JUNKING YOUR CODE :D
 * NO PARAMS ANYMORE IN NEED
 * THE VARIABLE trackCheckBox CONTAINS THE HTLM-ID
 */
var fformid, fcompany,fname,fsurname,faddress,fcity,fzip,fcountry,fphone,fmobile,ffax,femail,fhome;
function setFormData(){
    // set field vars.
	if ( trackCheckBox != false ) {
		document.getElementById('warning').style.display = 'none';
		fformid		= 'formIdHid';
		fformid		= document.getElementById(fformid);
		fcompany    = 'company' + trackCheckBox.index;
		fcompany    = document.getElementById(fcompany);
		fname       = 'name' + trackCheckBox.index;
		fname       = document.getElementById(fname);
		fsurname    = 'surname' + trackCheckBox.index;
		fsurname    = document.getElementById(fsurname);
		faddress    = 'strasse' + trackCheckBox.index;
		faddress    = document.getElementById(faddress);
		fcity       = 'city' + trackCheckBox.index;
		fcity       = document.getElementById(fcity);
		fzip        = 'zip' + trackCheckBox.index;
		fzip        = document.getElementById(fzip);
		fcountry    = 'land' + trackCheckBox.index;
		fcountry    = document.getElementById(fcountry);
		fphone      = 'phone' + trackCheckBox.index;
		fphone      = document.getElementById(fphone);
		fmobile     = 'mobile' + trackCheckBox.index;
		fmobile     = document.getElementById(fmobile);
		ffax        = 'fax' + trackCheckBox.index;
		ffax        = document.getElementById(ffax);
		femail      = 'email' + trackCheckBox.index;
		femail      = document.getElementById(femail);
		fhome       = 'page' + trackCheckBox.index;
		fhome       = document.getElementById(fhome);
    } else {
		document.getElementById('warning').innerHTML = 'Bitte wählen Sie eine Adresse';
		document.getElementById('warning').style.display = 'block';
		resizeColorbox();
		return;
	}
	// Fill the data object with the values
	dataObj = {
		"formid":	fformid.value,
		"company":	fcompany.value,
		"name":		fname.value,
		"surname":	fsurname.value,
		"address":	faddress.value,
		"city":		fcity.value,
		"zip":		fzip.value,
		"country":	fcountry.value,
		"phone":	fphone.value,
		"mobile":	fmobile.value,
		"fax":		ffax.value,
		"email":	femail.value,
		"home":		fhome.value
	}
	
	// CALL THE PARENT FUNCTION AND SEND THE OBJECT DATA
	parent.setAddrBookData( dataObj );
	
	// CLOSE COLORBOX
	parent.jQuery.colorbox.close();
	
	return;
}


/**
 * Handle update form
 * <br>-------------------------------------------------------------------------
 * @param ucompany The id for the company field.
 * @parm uname The id for the name field.
 * @param usurname The id for the lastname field.
 * @param uaddress The id for the address field.
 * @param ucity The id for the city field.
 * @param uzip The id for the zip field.
 * @param uphone The id for the phone field.
 * @param umobile The id for the mobile field.
 * @param ufax The id for the fax field.
 * @param uemail The id for the email field.
 * @param uhome The id for the Homepage field.
 */
function updateFormHandler(ucompany,uname,usurname,uaddress,ucity,uzip,uphone,umobile,ufax,uemail,uhome,rowid){
    // set attribute objects.
    ucompany    = document.getElementById(ucompany);
    uname       = document.getElementById(uname);
    usurname    = document.getElementById(usurname);
    uaddress    = document.getElementById(uaddress);
    ucity       = document.getElementById(ucity);
    uzip        = document.getElementById(uzip);
    uphone      = document.getElementById(uphone);
    umobile     = document.getElementById(umobile);
    ufax        = document.getElementById(ufax);
    uemail      = document.getElementById(uemail);
    uhome       = document.getElementById(uhome);
    
    // validate.
    if( ucompany == undefined || uname == undefined || usurname == undefined ||
        uaddress == undefined || ucity == undefined || uzip == undefined ||
        uphone == undefined || umobile == undefined || ufax == undefined ||
        uemail == undefined || uhome == undefined ){
        //console.log('Unable to update form data. One or more tag object(s) is(are) undefined.');
        return false;
    }
    
    // reset required fields border colors.
    uname.style.border = '1px solid #CCC';
    usurname.style.border = '1px solid #CCC';
    uaddress.style.border = '1px solid #CCC';
    ucity.style.border = '1px solid #CCC';
    uzip.style.border = '1px solid #CCC';
    uphone.style.border = '1px solid #CCC';
    uemail.style.border = '1px solid #CCC';
    
    // validate required fields.
    var error = false;
    var error_message = 'Korrigieren Sie bitte folgende Fehler:' + "\r\r";
    
    if( uname.value.length < 3 ){
        error = true;
        error_message += 'Geben Sie bitte einen Vornamen an.';
        uname.style.border = '1px solid #F00';
    }
    
    if( usurname.value.length < 3 ){
        error = true;
        error_message += 'Geben Sie bitte einen Nachnamen an.';
        usurname.style.border = '1px solid #F00';
    }
    
    if( uaddress.value.length < 5 ){
        error = true;
        error_message += 'Geben Sie bitte eine Strasse + Hausnummer an.';
        uaddress.style.border = '1px solid #F00';
    }
    
    if( ucity.value.length < 3 ){
        error = true;
        error_message += 'Geben Sie bitte eine Stadt an.';
        ucity.style.border = '1px solid #F00';
    }
    
    if( uzip.value.length < 4 ){
        error = true;
        error_message += 'Geben Sie bitte eine PLZ an.';
        uzip.style.border = '1px solid #F00';
    }

    // send data to server.
    $.post(
        '../ajax/update_address.php',
        {
            rowID: rowid,
            companyu: ucompany.value,
            nameu: uname.value,
            surnameu: usurname.value,
            emailu: uemail.value,
            addressu: uaddress.value,
            cityu: ucity.value,
            zipu: uzip.value,
            phoneu: uphone.value,
            mobileu: umobile.value,
            faxu: ufax.value,
            homeu: uhome.value
        },
        function(data){
            var result = data.split('[:]');
            
            if( result[0] != 'ok' ){
                //console.log('ERROR UPDATING FORM: ' + result[0] + ':' + result[1] + ' at addrbook.js:644.');
                alert('Die Änderungen konnten auf Grund eines unerwarteten Systemfehlers nicht gespeichert werden. Kontaktieren Sie bitte den Systemadministrator.');
            } else {
                alert('Ihre Änderungen wurden erfolgreich übernommen');
                document.location.reload(true);
            }
            
            return;
        }
    );
    
    
} // end update form.

/**
 * Handle remove address form
 * <br>-------------------------------------------------------------------------
 * @param rowID The id from the address list to be removed.
 * @return void
 */
function removeFormHandler(rowid){
    var confi = confirm('Sind Sie sicher, dass Sie diese Adresse löschen möchten?');
    
    if( !confi ){
        return;
    }
    
    // validate.
    if( rowid < 1 ){
        //console.log('Invalid remove request. Row ID not declared.');
        return false;
    }
    
    $.post(
        '../ajax/remove_address.php',
        {
            rid: rowid 
        },
        function(data){
            var result = data.split('[:]');
            
            if( result[0] != 'ok' ){
                //console.log('UNABLE TO REMOVE ADDRESS: ' + result[0] + ':' + result[1]);
                alert('Die Adresse konnte auf Grund eines unerwarteten Systemfehlers nicht gelöscht werden. Kontaktieren Sie bitte den Systemadministrator.');
                return;
            }
            else {
                document.location.reload(true);
                return;
            }
        }
    );
}

/**
 * Handle the checkbox-clicks
 * <br>--------------------------------------------------------------------------
 * @param pID The html-id to call the right checkbox
 * @param pCount The quantity of checkboxes agt the html-document
 * @param pBox Which ID shall be checked
*/
function checkTheCheckbox( pID, pBox ) {
	// Get the quantity of all addressbook-listings
	var pCount = document.getElementById( 'checkbox_count' ).value;
	// Uncheck all Checkboxes first
	for ( i=1; i <= pCount; i++ ) {
		if ( pBox != pID + i ) {
			document.getElementById( pID + i ).checked = false;
		} else {
			document.getElementById( pID + i ).checked = true;
			trackCheckBox = {
				"box":		pBox,
				"index":	i
			}
		}
	}
}

/**
 * Handler to close the last opened div
 * @param pLastOpen The last opened div-id
 * @return true/false
*/
function closeLastSlide( pNewSlide ) {
	if ( trackSlide != undefined ) {
		if ( trackSlide != pNewSlide ) {
			$( trackSlide ).slideUp();
			//console.log('Closed Slide: ' + trackSlide);
		}
	} else {
		//console.log('trackSlide still undefined');
	}
}


jQuery(document).ready(function() {
    resizeColorbox();
});

<!--VALIDATION: STREET, CITY, POSTCODE-->

function testValues() {

    var checkAdressFields = 0;

    if ( document.getElementById('kundennr_anmeld') ) {
        var tmp_knr = document.getElementById('kundennr_anmeld').value;
        var tmp_pas = document.getElementById('kundenpasswort_anmeld').value;
        if ( tmp_knr == '' && tmp_pas == '' ) {
            checkAdressFields = 1;
        }
    } else {
        checkAdressFields = 1;
    }

    if ( checkAdressFields >= 1 ) {

        var strasse = document.getElementById('rechnungs_adresse_strasse');
        var plz = document.getElementById('rechnungs_adresse_plz');
        var ort= document.getElementById('rechnungs_adresse_ort');
        //Abweichende LA:
        var ab_adress = document.getElementById('lief_id');
        var vorname_abw = document.getElementById('text_lie_name');
        var strasse_abw = document.getElementById('text_lie_strasse');
        var plz_abw = document.getElementById('text_lie_postcode');
        var ort_abw= document.getElementById('text_lie_city');

        //Own LA:
        var own_adress = document.getElementById('check_own_sender');
        var own_Vorname = document.getElementById('text_abs_name');
        var own_Nachname = document.getElementById('text_abs_surname');
        var own_Strasse_Nr= document.getElementById('text_abs_strasse');
        var own_PLZ = document.getElementById('text_abs_postcode');
        var own_Ort= document.getElementById('text_abs_city');
        // make sure vars are set.

        if( strasse == undefined || plz == undefined || ort == undefined){
            // error message goes here. var. is not defined.
            //alert('Sie müssen die Felder  \'Strasse\', \'PLZ\'  und \'Ort\' ausfüllen.');
            return false;
        }
        // trim white spaces.
        strasse.value = trimWhitespace(strasse.value);
        plz.value = trimWhitespace(plz.value);
        ort.value = trimWhitespace(ort.value);

        // validate street value.
        if( strasse.value.length < 3 ){
            alert('Das Feld \'Strasse\' muss mindestens 3 Buchstaben enthalten.');
            strasse.focus();
            return false;
        }

        if( !checkInt(strasse.value) ){
            alert('Sie haben noch keine Hausummer im Feld  \'Strasse\' eingegeben. Falls Sie keine Hausnummer haben, fügen Sie  \'1\' ein.');
            strasse.focus();
            return false;
        }

        // validate PLZ.
        if( plz.value.length != 5 || !plz.value.match(/^[0-9]{5}$/) ){
            alert('Postleitzahl muss 5 Ziffern enthalten (keine Buchstaben) .');
            plz.focus();
            return false;
        }

        // validate Ort.
        if( ort.value.length < 2 || ort.value.length > 50 ){
            alert('Das Feld \'Ort\' muss mindestens 2 Buchstaben enthalten.');
            ort.focus();
            return false;
        }
        //Abweichende Adresse:
        if(ab_adress.checked ){
            if( strasse_abw == undefined || plz_abw == undefined || ort_abw == undefined || vorname_abw == undefined ){
                //alert('Sie müssen die Felder  \'Strasse\', \'PLZ\'  und \'Ort\' für die abweichende Lieferadresse eintragen.');
                return false;
            }
            // trim white spaces.
            strasse_abw.value = trimWhitespace(strasse_abw.value);
            plz_abw.value = trimWhitespace(plz_abw.value);
            ort_abw.value = trimWhitespace(ort_abw.value);
            vorname_abw.value = trimWhitespace(vorname_abw.value);
            // validate street value.
            if(  strasse_abw.value.length < 3){
                alert('Das Feld \'Strasse\' in der abweichenden Adresse muss mindestens 3 Buchstaben enthalten.');
                strasse_abw.focus();
                return false;
            }

            if( !checkInt(strasse_abw.value) ){
                alert('Sie haben noch keine Hausummer im Feld  \'Strasse\' (abweichende Adresse) eingegeben. Falls Sie keine Hausnummer haben, fügen Sie  \'1\' ein.');
                strasse_abw.focus();
                return false;
            }

            // validate PLZ.
            if( plz_abw.value.length != 5 || !plz_abw.value.match(/^[0-9]{5}$/) ){
                alert('Postleitzahl (abweichende Adresse) muss 5 Ziffern enthalten (keine Buchstaben) .');
                plz_abw.focus();
                return false;
            }

            // validate Ort.
            if( ort_abw.value.length < 2 || ort_abw.value.length > 50 ){
                alert('Das Feld \'Ort\' (abweichende Adresse) muss mindestens 2 Buchstaben enthalten.');
                ort_abw.focus();
                return false;
            }
            // validate Vormane.
            if( vorname_abw.value.length < 2 || vorname_abw.value.length > 50 ){
                alert('Das Feld \'Vorname\' (abweichende Adresse) muss mindestens 2 Buchstaben enthalten.');
                vorname_abw.focus();
                return false;
            }
        }
        //own adress checked+++++++++++++++
        // EIGENE ABSENDERADRESSE AUF LIEFERSCHEIN checken:
        if(own_adress.checked ){
            if( own_Vorname  == undefined || own_Nachname == undefined || own_Strasse_Nr == undefined || own_PLZ == undefined || own_Ort == undefined ){
                return false;
            }
            // trim white spaces.
            own_Vorname.value = trimWhitespace(own_Vorname.value);
            own_Nachname.value = trimWhitespace(own_Nachname.value);
            own_Strasse_Nr.value = trimWhitespace(own_Strasse_Nr.value);
            own_PLZ.value = trimWhitespace(own_PLZ.value);
            own_Ort.value = trimWhitespace(own_Ort.value);

            // validate firstname value.
            if(  own_Vorname.value.length < 2){
                alert('Das Feld \'Vorname\' in der eigener Absenderadresse muss mindestens 2 Buchstaben enthalten.');
                own_Vorname.focus();
                return false;
            }
            // validate secondname value.
            if(  own_Nachname.value.length < 2){
                alert('Das Feld \'Nachname\' in der eigener Absenderadresse muss mindestens 2 Buchstaben enthalten.');
                own_Nachname.focus();
                return false;
            }

            if( !checkInt(own_Strasse_Nr.value) ){
                alert('Sie haben noch keine Hausummer im Feld  \'Strasse\' (eigene Absenderadresse) eingegeben. Falls Sie keine Hausnummer haben, fügen Sie  \'1\' ein.');
                own_Strasse_Nr.focus();
                return false;
            }

            // validate PLZ.
            if( own_PLZ.value.length != 5 || !own_PLZ.value.match(/^[0-9]{5}$/) ){
                alert('Postleitzahl (in der eigener Absenderadresse) muss 5 Ziffern enthalten (keine Buchstaben) .');
                own_PLZ.focus();
                return false;
            }

            // validate Ort.
            if( own_Ort.value.length < 2 || own_Ort.value.length > 50 ){
                alert('Das Feld \'Ort\' (in der eigener Absenderadresse) muss mindestens 2 Buchstaben enthalten.');
                own_Ort.focus();
                return false;
            }
        }
        return true;
    }
}

// validate if string contains integer.
// @return b
function checkInt (eingabe) {
    var regex = /\d/g;
    return  regex.test(eingabe);
}

// trim method.
function trimWhitespace(value){
    if( value == undefined || value.length < 1 ){
        return '';
    }

    value = value.replace(/^\s+/, '');

    for (var i = value.length - 1; i >= 0; i--) {
        if (/\S/.test(value.charAt(i))) {
            value = value.substring(0, i + 1);
            break;
        }
    }

    return value;
}

<!-- ENDE: VALIDATION: STREET, CITY, POSTCODE -->

<!--VALIDATION_FOR_RS 5-->
function change_this_value(obj,value)
{
    if(obj.value == '')
    {
        obj.value = value;
    }
}

function check_values()
{
    return_value = true;
    missing_fields = '';
    if(document.getElementById('rechnungs_adresse_vorname').value ==  '' || document.getElementById('rechnungs_adresse_vorname').value == 'Vorname *')
    {
        return_value = false;
        missing_fields += '\nVorname';
    }
    if(document.getElementById('rechnungs_adresse_nachname').value ==  '' || document.getElementById('rechnungs_adresse_nachname').value == 'Nachname *')
    {
        return_value = false;
        missing_fields += '\nNachname';
    }
    if(document.getElementById('rechnungs_adresse_strasse').value ==  '' || document.getElementById('rechnungs_adresse_strasse').value == 'Strasse *')
    {
        return_value = false;
        missing_fields += '\nStrasse';
    }
    if(document.getElementById('rechnungs_adresse_plz').value ==  '' || document.getElementById('rechnungs_adresse_plz').value == 'PLZ *')
    {
        return_value = false;
        missing_fields += '\nPLZ';
    }
    if(document.getElementById('rechnungs_adresse_email').value ==  '' || document.getElementById('rechnungs_adresse_email').value == 'E-Mail *')
    {
        return_value = false;
        missing_fields += '\nE-Mail';
    }
    if(document.getElementById('rechnungs_adresse_ort').value ==  '' || document.getElementById('rechnungs_adresse_ort').value == 'Ort *')
    {
        return_value = false;
        missing_fields += '\nOrt';
    }
    if(return_value == true)
    {
        if(document.getElementById('rechnungs_adresse_firma').value ==  'Firma')
        {
            document.getElementById('rechnungs_adresse_firma').value = '';
        }
        if(document.getElementById('rechnungs_adresse_mobiltelefon').value ==  'Handy')
        {
            document.getElementById('rechnungs_adresse_mobiltelefon').value = '';
        }
        if(document.getElementById('rechnungs_adresse_telefax').value ==  'Telefax')
        {
            document.getElementById('rechnungs_adresse_telefax').value = '';
        }
        if(document.getElementById('rechnungs_adresse_homepage').value ==  'Homepage')
        {
            document.getElementById('rechnungs_adresse_homepage').value = '';
        }
        return return_value;
    }
    else
    {
        alert('Bitte füllen Sie alle benötigten Felder aus!\n'+missing_fields);
        return return_value;
    }
}
<!--END:  VALIDATION_FOR_RS 5-->

function chkAdressForm() {
    clearFails();
    var ra_plz = document.getElementById( 'rechnungs_adresse_plz' ).value;
    if ( ra_plz.match( /^[^0-9]+$/ ) ) {
        document.getElementById( 'fail_ra_plz' ).style.display = 'block';
        return false;
    }
}

function clearFails() {
    document.getElementById( 'fail_ra_plz' ).style.display = 'none';
}


/*jslint browser:true, plusplus:true*/
/*global jQuery*/
window.WirMachenDruck = window.WirMachenDruck || {};
(function ($, WMD) {
    'use strict';
    $(document).ready(function () {
        $('.lieferadresse_jn').click(function () {
            document.formular.submit();
        })
    });
}(jQuery, window.WirMachenDruck));

/**
 * Angebote form submission
 */
window.WirMachenDruck = window.WirMachenDruck || {};
(function ($, WMD) {
    'use strict';
    $(document).ready(function () {
        function reloadCaptcha() {
            $('#captcha_image').prop('src', 'securimage/securimage_show.php?sid=' + Math.random());
        }

        $("#reset_form").click(function (e) {
            e.preventDefault();
            $('#angebote_formular')[0].reset();
            $("html, body").animate({ scrollTop: 0 });
        });

        $(document).on("submit", '#angebote_formular', function (e) {
            e.preventDefault();
            $('#submit_response').hide();
            var formData = new FormData($(this)[0]);

            $.ajax({
                url: 'wmdrest/reseller-offer/submit',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                enctype: 'multipart/form-data',
                dataType: 'json',
                success: function (response) {
                    $('#submit_response').show();

                    var failStatusCodes = [400, 401];
                    var successStatusCodes = [200, 201];

                    if (successStatusCodes.indexOf(response.code) !== -1) {
                        $('#submit_response').html('<span class="msg-success">' + response.data.emailMessage + '</span>');
                        $('#angebote_formular')[0].reset();
                        $("html, body").animate({scrollTop: 0});
                        reloadCaptcha();
                        setTimeout("$('#submit_response').fadeOut()", 5000);
                        return;
                    }

                    if (failStatusCodes.indexOf(response.code) !== -1) {
                        var error_msg = '';

                        if (response.data.errorFields.length != 0) {
                            error_msg = 'Folgende Fehler sind aufgetreten <br><br>';
                        }

                        for (var i in response.data.errorFields) {
                            if (i === 'captcha_error') {
                                $('#captcha_code').val('');
                            }
                            error_msg += ' -' + response.data.errorFields[i] + '<br>';
                        }

                        $('#submit_response').html("<span class='msg-error'>" + response.data.emailMessage + "<br>" + error_msg + "</span>");
                        $("html, body").animate({scrollTop: 0});
                        reloadCaptcha();

                        return;
                    }
                },
                error: function (response) {
                    $('#submit_response').show();
                    if(response.status == 413) {
                        $('#submit_response').html('<span class="msg-error"> Dateigr&ouml;&szlig;e zu gro&szlig; </span>');
                    }
                    else {
                        $('#submit_response').html('<span class="msg-error"> Etwas ist schief gelaufen </span>');
                    }

                    $("html, body").animate({scrollTop: 0});
                    reloadCaptcha();
                }
            });
        });
    });
}(jQuery, window.WirMachenDruck));

/*jslint browser:true, plusplus:true*/
/*global jQuery*/
window.WirMachenDruck = window.WirMachenDruck || {};
(function ($, WMD) {
    'use strict';

    $(document).ready(function () {
        $('.collapse.in').prev('.panel-heading').addClass('active');
        $('#accordion').on('hidden.bs.collapse', function () {
            $('.collapse').prev('.panel-heading').removeClass('active');
        });
        $('#accordion').on('shown.bs.collapse', function () {
            $('.collapse.in').prev('.panel-heading').addClass('active');
        });
    });
}(jQuery, window.WirMachenDruck));
/*jslint browser:true, plusplus:true*/
/*global jQuery*/
window.WirMachenDruck = window.WirMachenDruck || {};
(function ($, WMD) {
    'use strict';
    WMD.Lightbox = {
        Lightbox: function ($container) {
            var self = this,
                $lightboxes = $container;

            /**
             * init function
             *
             * @return {void}
             */
            this.init = function () {
                self.callLightbox($lightboxes);
            };

            /**
             * initialize slider and add settings
             *
             * @return {void}
             */
            this.callLightbox = function ($lightboxes) {
                $.each($lightboxes, function () {
                    var $lightbox = $(this);
                    $lightbox.colorbox({
                        maxWidth: '80%'
                    });
                });
            };

        }
    };

    $(document).ready(function () {
        var $container = $('.lightbox'),
            lightbox;
        if ($container) {
            lightbox = new WMD.Lightbox.Lightbox($container);
            lightbox.init();
        }
    });
}(jQuery, window.WirMachenDruck));
function checkFormular() {
    if (document.druckmuster.vorname.value == "") {
        $('.form-messege').html("Bitte Ihren Vornamen eingeben!");
        document.druckmuster.vorname.focus();
        return false;
    }
    if (document.druckmuster.nachname.value == "") {
        $('.form-messege').html("Bitte Ihren Nachnamen eingeben!");
        document.druckmuster.nachname.focus();
        return false;
    }
    if (document.druckmuster.strasse.value == "") {
        $('.form-messege').html("Bitte Ihre Strasse eingeben!");
        document.druckmuster.strasse.focus();
        return false;
    }
    if (document.druckmuster.plz.value == "") {
        $('.form-messege').html("Bitte Ihre Postleitzahl eingeben!");
        document.druckmuster.plz.focus();
        return false;
    }
    if (document.druckmuster.ort.value == "") {
        $('.form-messege').html("Bitte Ihren Ort eingeben!");
        document.druckmuster.ort.focus();
        return false;
    }
    if (document.druckmuster.land.value == "") {
        $('.form-messege').html("Bitte Ihr Land eingeben!");
        document.druckmuster.land.focus();
        return false;
    }
    if (document.druckmuster.email.value == "") {
        $('.form-messege').html("Bitte Ihre Email-Adresse  eingeben!");
        document.druckmuster.email.focus();
        return false;
    }
    if (document.druckmuster.email.value.indexOf('@') == -1) {
        $('.form-messege').html("Keine gültige E-Mail-Adresse!");
        document.druckmuster.email.focus();
        return false;
    }
}

function checkFormShort() {

    if (document.contactFormShort.vorname.value === "") {
        $(".vorname-error").html("Bitte geben Sie einen Namen an");
        document.contactFormShort.vorname.focus();
        $("#contactVorname").addClass("border-error");
        return false;
    } else {
        $(".vorname-error").hide();
        $("#contactVorname").removeClass("border-error");
    }

    if (document.contactFormShort.ort.value === "") {
        $(".ort-error").html("Bitte Ihren Ort eingeben");
        document.contactFormShort.ort.focus();
        $("#contactOrt").addClass("border-error");
        return false;
    } else {
        $(".ort-error").hide();
        $("#contactOrt").removeClass("border-error");
    }

    if (document.contactFormShort.email.value === "") {
        $(".email-error").html("Bitte Ihre Email-Adresse eingeben");
        document.contactFormShort.email.focus();
        $("#contactEmail").addClass("border-error");
        return false;
    } else {
        $(".email-error").hide();
        $("#contactEmail").removeClass("border-error");
    }

    if (document.contactFormShort.email.value.indexOf("@") === -1) {
        $(".email-error").html("Keine gültige E-Mail-Adresse");
        document.contactFormShort.email.focus();
        $("#contactEmail").addClass("border-error");
        return false;
    } else {
        $(".email-error").hide();
        $("#contactEmail").removeClass("border-error");
    }

    if(document.contactFormShort.mitteilung.value === "") {
        $(".mitteilung-error").html("Bitte Ihren Mitteilung eingeben");
        document.contactFormShort.mitteilung.focus();
        $("#contactMitteilung").addClass("border-error");
        return false
    } else {
        $(".mitteilung-error").hide();
        $("#contactMitteilung").removeClass("border-error");
    }
}
/*jslint browser:true, plusplus:true*/
/*global jQuery*/
window.WirMachenDruck = window.WirMachenDruck || {};
(function ($, WMD) {
    'use strict';

    function wmd_$(id) {
        return document.getElementById(id);
    }

    function wmd_autocheck() {
        try {
            if(wmd_$('feld_19').value != 0)
            {
                if(wmd_$('feld_20').checked == true || wmd_$('feld_25').checked == true || wmd_$('feld_27').checked == true)
                {
                    if(wmd_$('feld_19').checked != false)
                    {
                        //wmd_$('feld_19').checked = false;
                        //document.formular.submit();
                    }
                }
                else
                {
                    if(wmd_$('feld_19').checked != true)
                    {
                        wmd_$('feld_19').checked = true;
                        document.formular.submit();
                    }
                }
            }
        } catch (e) {
        }

        try {
            if (wmd_$('option[8]').checked == false) {
                wmd_$('option[8]').checked = true;
                document.formular.submit();
            }
            if (wmd_$('option[6]').checked == false) {
                wmd_$('option[6]').checked = true;
                document.formular.submit();
            }
        } catch (e) {
        }
    }

    function bebeyond_color_change(obj, pviiColor) { //v1.1 by Project VII
        obj.style.backgroundColor = pviiColor;
    }

    function MM_openBrWindow(theURL, winName, features, myWidth, myHeight, isCenter) { //v3.0
        if (window.screen) if (isCenter) if (isCenter == "true") {
            var myLeft = (screen.width - myWidth) / 2;
            var myTop = (screen.height - myHeight) / 2;
            features += (features != '') ? ',' : '';
            features += ',left=' + myLeft + ',top=' + myTop;
        }
        var myWindow = window.open(theURL, winName, features + ((features != '') ? ',' : '') + 'width=' + myWidth + ',height=' + myHeight);
        myWindow.focus();
    }


    function bb_chang_cat_row(obj) { //v1.1 by Project VII
        obj.style.backgroundColor = "#E8E7E0"
    }

    function doit(id) {
        if (document.getElementById(id).style.display == 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }

    function zusatz_check(zid) {
        var arr_zid = [
            '1',
            '2',
            '3',
            '5',
            '8',
            '9',
            '10',
            '11',
            '13',
            '16',
            '17',
            '25',
            '28',
            '30',
            '35',
            '43',
            '21',
            '23',
            '25',
            '27',
            '44',
            'STANDARD_PRODUCTION'
        ];

        function in_array(item, arr) {
            for (var p = 0; p < arr.length; p++) {
                if (item == arr[p])
                    return true;
            }
            return false;
        }

        try {
            for (var i = 0; i < arr_zid.length; i++) {
                if (arr_zid[i] != zid && in_array(zid, arr_zid)) {
                    if (document.getElementById("feld_" + arr_zid[i]) != null) {
                        if ((zid  == 1 &&  arr_zid[i] != 20) || (zid  == 20 &&  arr_zid[i] != 1) || (zid != 1 && zid != 20) ) {
                            document.getElementById("feld_"+arr_zid[i]).checked=false;
                        }
                    }
                }
            }
        }

        catch (errCheck) {
            console.error("Incorrect ID", errCheck.message);
        }
        finally {
            document.formular.submit();
        }
    }

    function checkShirtPrice(pCat, pPrice) {
        var price = "{$aArtikel.preis}";
        if (( pCat == 15876 || pCat == 16668 ) && price == '0,00') {
            document.formular.submit();
        }
    }

    function MM_jumpMenu(targ, selObj, restore) { //v3.0
        eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
        if (restore) selObj.selectedIndex = 0;
    }


    $(window).on('load', function () {
        checkShirtPrice("{$nCategory}", "{$aArtikel.preis}");
        wmd_autocheck();
    });

    $(document).ready(function () {
        $('#menge_input').on('focusout', function () {
            const max = parseInt($(this).attr('max'));
            const min = parseInt($(this).attr('min'));
            let value = parseInt($(this).val());

            if (isNaN(value)) {
                $(this).val('');
                return;
            }

            if (value > max) {
                value = max;
            } else if (value < min) {
                value = min;
            }

            $(this).val(value);
            document.formular.submit();
        });

        $('.zusatz_check_radio').click(function () {
            document.formular.submit();
        });

        $('.zusatz_check_checkbox').click(function () {
            zusatz_check($(this).attr('data-check-id'));
        });

        $('.option_check').click(function () {
            document.formular.submit();
        });
    });
}(jQuery, window.WirMachenDruck));






function MM_goToURL() { //v3.0
    var i, args = MM_goToURL.arguments;
    document.MM_returnValue = false;
    for (i = 0; i < (args.length - 1); i += 2) eval(args[i] + ".location='" + args[i + 1] + "'");
}
/*Pagination and Sorting JS*/
window.WirMachenDruck = window.WirMachenDruck || {};
    (function ($, WMD) {
        'use strict';
    $(document).ready(function () {
        var formular = $("#auftrag-formular");

        formular.find(".auftrag-sort").click(function (e) {
            e.preventDefault();
            $("#auftrag_sort").val($(this).val());
            $("#auftrag_page").val(1);

            if ($("#auftrag_order").val() == "ASC") {
                $("#auftrag_order").val("DESC");
            }
            else {
                $("#auftrag_order").val("ASC");
            }
            formular.submit();
        });

        formular.find(".pagination button").click(function (e) {
            e.preventDefault();
            $("#auftrag_page").val($(this).val());

            formular.submit();
        });

        formular.find("[name='sStatus']").change(function(){
            $("#auftrag_page").val(1);
            formular.submit();
        });
    });
}(jQuery, window.WirMachenDruck));
/*End*/
/*jslint browser:true, plusplus:true*/
/*global jQuery*/
window.WirMachenDruck = window.WirMachenDruck || {};
(function ($, WMD) {
    'use strict';

    WMD.Scroll = {
        Scroll: function () {
            var self = this;

            /**
             * init function
             *
             * @return {void}
             */
            this.init = function () {
                addclass();
            };

            /**
             * add Class while scrolling
             *
             * @return {void}
             */
            function addclass () {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 40){
                        $('#sticky-header').addClass("sticky");
                    }
                    else{
                        $('#sticky-header').removeClass("sticky");
                    }
                });
            }
        }
    };

    $(document).ready(function ($) {
        var scroll = new WMD.Scroll.Scroll();
        scroll.init();

    });

}(jQuery, window.WirMachenDruck));

$(function () {
    $('.enableOnInput').click(function (e) {
        if ($('.searchInput').val() == '') {
            $('.searchInput').focus();
            return false;
        }
    });
});

/*jslint browser:true, plusplus:true*/
/*global jQuery*/
window.WirMachenDruck = window.WirMachenDruck || {};
(function ($, WMD) {
    'use strict';
    WMD.Slider = {
        Slider: function ($container) {
            var self = this;

            /**
             * init function
             *
             * @return {void}
             */
            this.init = function () {
                self.callSlider();
            };

            /**
             * initialize slider and add settings
             *
             * @return {void}
             */
            this.callSlider = function () {
                var $owlCarousels = $('.owl-carousel');
                $.each($owlCarousels, function () {
                    var $owlCarousel = $(this);
                    $owlCarousel.owlCarousel({
                        autoplay: true,
                        autoplayTimeout: 6000,
                        autoplayHoverPause: true,
                        animateOut: "slideOutDown",
                        animateIn: "flipInX",
                        items: 1,
                        loop: true,
                        center: true,
                        nav: false,
                        dots: true
                    });
                });
            };

        }
    };

    $(document).ready(function () {
        var $container = $('.slider'),
            slider;
        if ($container) {
            slider = new WMD.Slider.Slider($container);
            slider.init();
        }
    });
}(jQuery, window.WirMachenDruck));
'use strict';

/*jslint browser:true, plusplus:true*/
/*global jQuery*/
/*global ko*/
window.WirMachenDruck = window.WirMachenDruck || {};

(function ($, WMD, ko) {
    var Address = function () {
        var self = this;

        this.key = ko.observable('');
        this.company = ko.observable('');
        this.firstname = ko.observable('');
        this.lastname = ko.observable('');
        this.city = ko.observable('');
        this.countryCode = ko.observable('');
        this.email = ko.observable('');
        this.fax = ko.observable('');
        this.mobilePhone = ko.observable('');
        this.phone = ko.observable('');
        this.street = ko.observable('');
        this.web = ko.observable('');
        this.zip = ko.observable('');

        this.visibleContent = ko.observable(false);

        this.linkColleciton = {
            self: ko.observable('')
        };

        this.isValid = function () {
            var errorMessage = '';
            if(self.firstname().length < 3){
                errorMessage += '\n\nGeben Sie bitte einen Vornamen an.';
            }

            if(self.lastname().length < 3){
                errorMessage += '\n\nGeben Sie bitte einen Nachnamen an.';
            }

            if(self.street().length < 5){
                errorMessage += '\n\nGeben Sie bitte eine Strasse + Hausnummer an.';
            }

            if(self.city().length < 3){
                errorMessage += '\n\nGeben Sie bitte eine Stadt an.';
            }

            if(self.zip().length < 4){
                errorMessage += '\n\nGeben Sie bitte eine PLZ an.';
            }

            if (errorMessage) {
                alert('Korrigieren Sie bitte folgende Fehler:' + errorMessage);
                return false;
            }

            return true;
        };
    };

    WMD.AddressBookViewModel = function () {
        var self = this;
        this.countryList = ko.observableArray([]);

        this.requestData = {
            abp: ko.observable(''),
            formType: ko.observable(4)
        };

        this.addresses = ko.observableArray([]);
        this.visibleCandidate = ko.observable(false);
        this.candidate = ko.observable(new Address());

        this.getCountryList = function () {

            $.ajax({
                url: '/wmdrest/shop-country-list',
                dataType: 'json',
                method: 'get',
                success: function (response, statusText, xhr) {
                    if (xhr.status !== 200) {
                        console.log('Something went wrong while retrieving the data');
                        return false;
                    }

                    //if a hardcoded country is set for this shop
                    if ($('#countryId option').length > 0) {
                        return;
                    }

                    //if no country set, fallback to DE
                    if (response.data.length <= 0 && $('#countryId option').length === 0) {
                        self.countryList.push('DE');
                        return;
                    }

                    //show list of available countries
                    self.countryList.removeAll();
                    response.data.forEach(function (list) {
                        self.countryList.push(list.code);
                    });
                },
                error: function (response) {
                    console.log(response.data);
                }
            });
        };

        this.initializeResponseAddress = function (respAddress) {
            var address = new Address();
            address
                .key(respAddress.key || '')
                .company(respAddress.company || '')
                .firstname(respAddress.first_name || '')
                .lastname(respAddress.last_name || '')
                .city(respAddress.city || '')
                .countryCode(respAddress.country || '')
                .email(respAddress.email || '')
                .fax(respAddress.fax || '')
                .mobilePhone(respAddress.mobile_phone || '')
                .phone(respAddress.phone || '')
                .street(respAddress.street || '')
                .web(respAddress.web || '')
                .zip(respAddress.zip || '');

            address.linkColleciton.self(respAddress._links.self || '');
            return address;
        };

        this.loadAddresses = function () {

            $.ajax({
                url: '/wmdrest/addresses',
                data: {
                    abp: self.requestData.abp()
                },
                dataType: 'json',
                method: 'get',
                success: function (response, statusText, xhr) {
                    if (xhr.status !== 200) {
                        return false;
                    }

                    response.data.forEach(function (addressResp) {
                        self.addresses.push(self.initializeResponseAddress(addressResp));
                    });
                }
            });
        };

        this.showAddressContent = function (address) {
            address.visibleContent(!address.visibleContent());

            if (address.visibleContent()) {
                self.visibleCandidate(false);
            }
        };

        this.updateAddress = function (address) {
            if (!address.isValid() && address.linkColleciton.self()) {
                return false;
            }

            $.ajax({
                url: address.linkColleciton.self(),
                data: {
                    company: address.company(),
                    first_name: address.firstname(),
                    last_name: address.lastname(),
                    street: address.street(),
                    city: address.city(),
                    zip: address.zip(),
                    country: address.countryCode(),
                    phone: address.phone(),
                    mobile_phone: address.mobilePhone(),
                    fax: address.fax(),
                    email: address.email(),
                    web: address.web(),
                    abp: self.requestData.abp()
                },
                dataType: 'json',
                method: 'post',
                success: function (response, statusText, xhr) {
                    if (xhr.status !== 200) {
                        return false;
                    }

                    self.showAddressContent(address);
                    self.addresses.replace(address, self.initializeResponseAddress(response.data));
                }
            });
        };

        this.removeAddress = function (address) {
            if (!address.linkColleciton.self()) {
                return false;
            }

            $.ajax({
                url: address.linkColleciton.self(),
                data: {
                    abp: self.requestData.abp()
                },
                method: 'delete',
                dataType: 'json',
                success: function (response, statusText, xhr) {
                    if (xhr.status !== 200) {
                        return false;
                    }

                    self.addresses.remove(address);
                }
            });
        };

        this.showCandidate = function () {
            self.visibleCandidate(true);

            self.addresses().forEach(function (address) {
                address.visibleContent(false);
            });
        };

        this.addCandidate = function () {
            if (!self.candidate().isValid()) {
                return false;
            }

            $.ajax({
                url: '/wmdrest/addresses',
                data: {
                    company: self.candidate().company(),
                    first_name: self.candidate().firstname(),
                    last_name: self.candidate().lastname(),
                    street: self.candidate().street(),
                    city: self.candidate().city(),
                    zip: self.candidate().zip(),
                    country: self.candidate().countryCode(),
                    phone: self.candidate().phone(),
                    mobile_phone: self.candidate().mobilePhone(),
                    fax: self.candidate().fax(),
                    email: self.candidate().email(),
                    web: self.candidate().web(),
                    abp: self.requestData.abp()
                },
                dataType: 'json',
                method: 'post',
                success: function (response, statusText, xhr) {
                    if (xhr.status !== 201) {
                        return false;
                    }

                    self.addresses.push(self.initializeResponseAddress(response.data));
                    self.resetCandidate();
                }
            });
        };

        this.resetCandidate = function () {
            self.candidate(new Address());
            self.visibleCandidate(false);
        };

        this.selectedAddressForOrder = ko.observable();

        this.useAddressForOrder = function () {
            var selectedAddress;
            self.addresses().forEach(function (address) {
                if (address.key() == self.selectedAddressForOrder()) {
                    selectedAddress = address;
                }
            });

            if (!selectedAddress) {
                return false;
            }

            if (self.requestData.formType() === 1) {
                <!-- FILL IN THE BILLING-ADRESS -->
                $(parent.jQuery.find('#rechnungs_adresse_firma')).val(selectedAddress.company());
                $(parent.jQuery.find('#rechnungs_adresse_vorname')).val(selectedAddress.firstname());
                $(parent.jQuery.find('#rechnungs_adresse_nachname')).val(selectedAddress.lastname());
                $(parent.jQuery.find('#rechnungs_adresse_strasse')).val(selectedAddress.street());
                $(parent.jQuery.find('#rechnungs_adresse_plz')).val(selectedAddress.zip());
                $(parent.jQuery.find('#rechnungs_adresse_ort')).val(selectedAddress.city());
                $(parent.jQuery.find('#rechnungs_adresse_telefon')).val(selectedAddress.phone());
                $(parent.jQuery.find('#rechnungs_adresse_mobiltelefon')).val(selectedAddress.mobilePhone());
                $(parent.jQuery.find('#rechnungs_adresse_telefax')).val(selectedAddress.fax());
                $(parent.jQuery.find('#rechnungs_adresse_email')).val(selectedAddress.email());
                $(parent.jQuery.find('#rechnungs_adresse_homepage')).val(selectedAddress.web());

                // CLOSE COLORBOX
                parent.jQuery.colorbox.close();
                return true;
            }

            if (self.requestData.formType() === 2) {
                <!-- FILL IN THE VARYING BILLING ADRESS -->
                $(parent.jQuery.find('#text_lie_firma')).val(selectedAddress.company());
                $(parent.jQuery.find('#text_lie_name')).val(selectedAddress.firstname());
                $(parent.jQuery.find('#text_lie_surname')).val(selectedAddress.lastname());
                $(parent.jQuery.find('#text_lie_strasse')).val(selectedAddress.street());
                $(parent.jQuery.find('#text_lie_postcode')).val(selectedAddress.zip());
                $(parent.jQuery.find('#text_lie_city')).val(selectedAddress.city());

                $(parent.jQuery.find('#text_lie_phone')).val(selectedAddress.phone());
                $(parent.jQuery.find('#text_lie_mobile')).val(selectedAddress.mobilePhone());
                $(parent.jQuery.find('#text_lie_fax')).val(selectedAddress.fax());
                $(parent.jQuery.find('#text_lie_mail')).val(selectedAddress.email());
                $(parent.jQuery.find('#text_lie_page')).val(selectedAddress.web());

                if (document.getElementById('combobox_lie_land')) {
                    document.getElementById('combobox_lie_land').selectedIndex = '1';
                }

                // CLOSE COLORBOX
                parent.jQuery.colorbox.close();
                return true;
            }

            if (self.requestData.formType() === 3) {
                <!-- FILL IN THE VARYING BILLING ADRESS -->
                $(parent.jQuery.find('#text_abs_firma')).val(selectedAddress.company());
                $(parent.jQuery.find('#text_abs_name')).val(selectedAddress.firstname());
                $(parent.jQuery.find('#text_abs_surname')).val(selectedAddress.lastname());
                $(parent.jQuery.find('#text_abs_strasse')).val(selectedAddress.street());
                $(parent.jQuery.find('#text_abs_postcode')).val(selectedAddress.zip());
                $(parent.jQuery.find('#text_abs_city')).val(selectedAddress.city());

                if (document.getElementById('combobox_abs_land')) {
                    document.getElementById('combobox_abs_land').selectedIndex = '1';
                }

                // CLOSE COLORBOX
                parent.jQuery.colorbox.close();
                return true;
            }
        };

        // Sorting function
        this.compareValues = function(key, order) {
            if (typeof order === 'undefined') {
                order = 'asc';
            }
            return function(a, b) {
                if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }

                const varA = (typeof a[key] === 'string') ?
                    a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ?
                    b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order == 'desc') ? (comparison * -1) : comparison
                );
            };
        };

        this.loadSortedAddresses = function (order) {
            $.ajax({
                url: '/wmdrest/addresses',
                data: {
                    abp: self.requestData.abp()
                },
                dataType: 'json',
                method: 'get',
                success: function (response, statusText, xhr) {
                    if (xhr.status !== 200) {
                        return false;
                    }

                    let addresses = response.data;

                    //Sorting parameter - company
                    addresses.sort(self.compareValues('company', order));

                    //Remove old address forms
                    $('#main-vm .edit-address-form').remove();

                    //Append sorted address forms
                    addresses.forEach(function (addressResp) {
                        self.addresses.push(self.initializeResponseAddress(addressResp));
                    });
                }
            });
        };

        this.sortAddresses = function () {

            var sorting_order = $('#sort-by-company').attr('data-order');

            if (sorting_order == '') {
                sorting_order = 'asc';
            }

            if(sorting_order == 'asc'){
                $('#sort-arrow').css('transform', 'rotate(180deg)');
                $('#sort-by-company').attr('data-order', 'desc');
            }
            else {
                $('#sort-arrow').css('transform', 'rotate(0deg)');
                $('#sort-by-company').attr('data-order', 'asc');
            }

            self.loadSortedAddresses(sorting_order);
        };

        this.initializeView = function (DOM) {
            ko.applyBindings(self, DOM);

            self.getCountryList();
            self.loadAddresses();
        };
    };
}(jQuery, window.WirMachenDruck, ko));
/**
 * 	
 * JQUERY EU COOKIE LAW POPUPS
 * version 1.0.1
 * 
 * Code on Github:
 * https://github.com/wimagguc/jquery-eu-cookie-law-popup
 * 
 * To see a live demo, go to:
 * http://www.wimagguc.com/2015/03/jquery-eu-cookie-law-popup/
 * 
 * by Richard Dancsi
 * http://www.wimagguc.com/
 * 
 */

(function($) {

// for ie9 doesn't support debug console >>>
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };
// ^^^

$.fn.euCookieLawPopup = (function() {

	var _self = this;

	///////////////////////////////////////////////////////////////////////////////////////////////
	// PARAMETERS (MODIFY THIS PART) //////////////////////////////////////////////////////////////
	_self.params = {
		cookiePolicyUrl : 'http://www.wimagguc.com/?cookie-policy',
		popupPosition : 'top',
		colorStyle : 'default',
		compactStyle : false,
		popupTitle : 'This website is using cookies',
		popupText : 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on this website.',
		buttonContinueTitle : 'Continue',
		buttonLearnmoreTitle : 'Learn&nbsp;more',
		buttonLearnmoreOpenInNewWindow : true,
		agreementExpiresInDays : 30,
		autoAcceptCookiePolicy : false,
		htmlMarkup : null
	};

	///////////////////////////////////////////////////////////////////////////////////////////////
	// VARIABLES USED BY THE FUNCTION (DON'T MODIFY THIS PART) ////////////////////////////////////
	_self.vars = {
		INITIALISED : false,
		HTML_MARKUP : null,
		COOKIE_NAME : 'EU_COOKIE_LAW_CONSENT'
	};

	///////////////////////////////////////////////////////////////////////////////////////////////
	// PRIVATE FUNCTIONS FOR MANIPULATING DATA ////////////////////////////////////////////////////

	// Overwrite default parameters if any of those is present
	var parseParameters = function(object, markup, settings) {

		if (object) {
			var className = $(object).attr('class') ? $(object).attr('class') : '';
			if (className.indexOf('eupopup-top') > -1) {
				_self.params.popupPosition = 'top';
			}
			else if (className.indexOf('eupopup-fixedtop') > -1) {
				_self.params.popupPosition = 'fixedtop';
			}
			else if (className.indexOf('eupopup-bottomright') > -1) {
				_self.params.popupPosition = 'bottomright';
			}
			else if (className.indexOf('eupopup-bottomleft') > -1) {
				_self.params.popupPosition = 'bottomleft';
			}
			else if (className.indexOf('eupopup-bottom') > -1) {
				_self.params.popupPosition = 'bottom';
			}
			else if (className.indexOf('eupopup-block') > -1) {
				_self.params.popupPosition = 'block';
			}
			if (className.indexOf('eupopup-color-default') > -1) {
				_self.params.colorStyle = 'default';
			}
			else if (className.indexOf('eupopup-color-inverse') > -1) {
				_self.params.colorStyle = 'inverse';
			}
			if (className.indexOf('eupopup-style-compact') > -1) {
				_self.params.compactStyle = true;
			}
		}

		if (markup) {
			_self.params.htmlMarkup = markup;
		}

		if (settings) {
			if (typeof settings.cookiePolicyUrl !== 'undefined') {
				_self.params.cookiePolicyUrl = settings.cookiePolicyUrl;
			}
			if (typeof settings.popupPosition !== 'undefined') {
				_self.params.popupPosition = settings.popupPosition;
			}
			if (typeof settings.colorStyle !== 'undefined') {
				_self.params.colorStyle = settings.colorStyle;
			}
			if (typeof settings.popupTitle !== 'undefined') {
				_self.params.popupTitle = settings.popupTitle;
			}
			if (typeof settings.popupText !== 'undefined') {
				_self.params.popupText = settings.popupText;
			}
			if (typeof settings.buttonContinueTitle !== 'undefined') {
				_self.params.buttonContinueTitle = settings.buttonContinueTitle;
			}
			if (typeof settings.buttonLearnmoreTitle !== 'undefined') {
				_self.params.buttonLearnmoreTitle = settings.buttonLearnmoreTitle;
			}
			if (typeof settings.buttonLearnmoreOpenInNewWindow !== 'undefined') {
				_self.params.buttonLearnmoreOpenInNewWindow = settings.buttonLearnmoreOpenInNewWindow;
			}
			if (typeof settings.agreementExpiresInDays !== 'undefined') {
				_self.params.agreementExpiresInDays = settings.agreementExpiresInDays;
			}
			if (typeof settings.autoAcceptCookiePolicy !== 'undefined') {
				_self.params.autoAcceptCookiePolicy = settings.autoAcceptCookiePolicy;
			}
			if (typeof settings.htmlMarkup !== 'undefined') {
				_self.params.htmlMarkup = settings.htmlMarkup;
			}
		}

	};

	var createHtmlMarkup = function() {

		if (_self.params.htmlMarkup) {
			return _self.params.htmlMarkup;
		}

		var html = 
			'<div class="eupopup-container' + 
			    ' eupopup-container-' + _self.params.popupPosition + 
			    (_self.params.compactStyle ? ' eupopup-style-compact' : '') + 
				' eupopup-color-' + _self.params.colorStyle + '">' +
				'<div class="eupopup-head">' + _self.params.popupTitle + '</div>' +
				'<div class="eupopup-body">' + _self.params.popupText + '</div>' +
				'<div class="eupopup-buttons">' +
				  '<a href="#" class="eupopup-button eupopup-button_1">' + _self.params.buttonContinueTitle + '</a>' +
				  '<a href="' + _self.params.cookiePolicyUrl + '"' +
				 	(_self.params.buttonLearnmoreOpenInNewWindow ? ' target=_blank ' : '') +
					' class="eupopup-button eupopup-button_2">' + _self.params.buttonLearnmoreTitle + '</a>' +
				  '<div class="clearfix"></div>' +
				'</div>' +
				'<a href="#" class="eupopup-closebutton">x</a>' +
			'</div>';

		return html;
	};

	// Storing the consent in a cookie
	var setUserAcceptsCookies = function(consent) {
		var d = new Date();
		var expiresInDays = _self.params.agreementExpiresInDays * 24 * 60 * 60 * 1000;
		d.setTime( d.getTime() + expiresInDays );
		var expires = "expires=" + d.toGMTString();
		document.cookie = _self.vars.COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";

		$(document).trigger("user_cookie_consent_changed", {'consent' : consent});
	};

	// Let's see if we have a consent cookie already
	var userAlreadyAcceptedCookies = function() {
		var userAcceptedCookies = false;
		var cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			var c = cookies[i].trim();
			if (c.indexOf(_self.vars.COOKIE_NAME) == 0) {
				userAcceptedCookies = c.substring(_self.vars.COOKIE_NAME.length + 1, c.length);
			}
		}

		return userAcceptedCookies;
	};
	
	var hideContainer = function() {
		// $('.eupopup-container').slideUp(200);
		$('.eupopup-container').animate({
			opacity: 0,
			height: 0
		}, 200, function() {
			$('.eupopup-container').hide(0);
		});
	};

	///////////////////////////////////////////////////////////////////////////////////////////////
	// PUBLIC FUNCTIONS  //////////////////////////////////////////////////////////////////////////
	var publicfunc = {

		// INITIALIZE EU COOKIE LAW POPUP /////////////////////////////////////////////////////////
		init : function(settings) {

			parseParameters(
				$(".eupopup").first(),
				$(".eupopup-markup").html(),
				settings);

			// No need to display this if user already accepted the policy
			if (userAlreadyAcceptedCookies()) {
				return;
			}

			// We should initialise only once
			if (_self.vars.INITIALISED) {
				return;
			}
			_self.vars.INITIALISED = true;

			// Markup and event listeners >>>
			_self.vars.HTML_MARKUP = createHtmlMarkup();

			if ($('.eupopup-block').length > 0) {
				$('.eupopup-block').append(_self.vars.HTML_MARKUP);
			} else {
				$('BODY').append(_self.vars.HTML_MARKUP);
			}

			$('.eupopup-button_1').click(function() {
				setUserAcceptsCookies(true);
				hideContainer();
				return false;
			});
			$('.eupopup-closebutton').click(function() {
				setUserAcceptsCookies(true);
				hideContainer();
				return false;
			});
			// ^^^ Markup and event listeners

			// Ready to start!
			$('.eupopup-container').show();

			// In case it's alright to just display the message once 
			if (_self.params.autoAcceptCookiePolicy) {
				setUserAcceptsCookies(true);
			}

		}

	};

	return publicfunc;
});
$(document).ready(function() {
    var data = $('#versand option:selected').text();
    var spaceChar = data.trim().slice(-5);
    $(".countryCode").text(spaceChar);
});
}(jQuery));