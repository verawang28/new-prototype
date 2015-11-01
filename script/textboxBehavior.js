// JavaScript Document

var initVal;

function onFocus(txtObj, v) {
	if (txtObj.value == v) {
		initVal = v;
		txtObj.className = "";
		txtObj.value = "";
	}
}

function onBlur(txtObj) {
	if (txtObj.value == "") {
		txtObj.className = "initValStyle";
		txtObj.value = initVal;
	}
}
function goBack() {
    window.history.back();
}

function multiply() {
	
	var objtxtNumber1 = document.getElementById("quantiBox1");
	
	var objtxtNumber2 = document.getElementById("quantiBox2");
	var a = objtxtNumber1.value;
	if(a == '') {
		a = 1;
	}
	if(parseInt(a)!=a) {
		alert("Please enter a valid number a");
		objtxtNumber1.value = 1;
		return;
	}
	
	var b = objtxtNumber2.value;
	if (b == '') {
		b = 1;
	}
	if(parseInt(b)!=b) {
		alert("Please enter a valid number b");
		objtxtNumber2.value = 1;
		return;
	}
	
	var priceObj1 = document.getElementById("price1");
	var priceNum1 = a * 12.5;
	var priceNum2 = b * 35;
	
	priceObj1.innerHTML = "$ "+priceNum1;
	var priceObj2 = document.getElementById("price2");
	priceObj2.innerHTML = "$ "+priceNum2;
	var tot1 = a * 12.5 + b * 35;
	
	var add = tot1 * 0.07;
	var tot2 = tot1 + add;
	
	var subtotalObj = document.getElementById("subtotal");	
	subtotalObj.innerHTML = "$ "+tot1;
	
	var taxObj = document.getElementById("tax");
	var add2 = add.toFixed(2);
	taxObj.innerHTML = "$ "+add2;
	
	var totalObj = document.getElementById("total");
	totalObj.style.color = 'black';
	var tot22 = tot2.toFixed(2);
	totalObj.innerHTML = "$ "+tot22;
	
	
	totalObj.style.display = 'block';
}

function subscribe() {
	var selectObj1 = document.getElementById("ar_frequency");
	var strSelect1 = selectObj1.options[selectObj1.selectedIndex].text;
	
	if (strSelect1 != "One time purchase") {
		document.getElementById("subscribe_btn1").style.visibility = "visible";
		document.getElementById("subscribe_btn1").style.display = "block";
	} else {
		document.getElementById("subscribe_btn1").style.visibility = "hidden";
		document.getElementById("subscribe_btn1").style.display = "none";
	}
	var selectObj2 = document.getElementById("ar_frequency2");
	var strSelect2 = selectObj1.options[selectObj2.selectedIndex].text;
	
	if (strSelect2 != "One time purchase") {
		document.getElementById("subscribe_btn2").style.visibility = "visible";
		document.getElementById("subscribe_btn2").style.display = "block";
	} else {
		document.getElementById("subscribe_btn2").style.visibility = "hidden";
		document.getElementById("subscribe_btn2").style.display = "none";
	}
}
function copy() {
  var tempFirstName1 = document.getElementById("first_name");
  var tempFirstName2 = document.getElementById("first_name1");
  tempFirstName2.value = tempFirstName1.value;

  var tempLastName1 = document.getElementById("last_name");
  var tempLastName2 = document.getElementById("last_name1");
  tempLastName2.value = tempLastName1.value;

  var tempTel1 = document.getElementById("telephone");
  var tempTel2 = document.getElementById("telephone1");
  tempTel2.value = tempTel1.value;

  var tempCompany1 = document.getElementById("company");
  var tempCompany2 = document.getElementById("company1");
  tempCompany2.value = tempCompany1.value;

  var tempAddress1 = document.getElementById("addressShipping");
  var tempAddress2 = document.getElementById("addressBilling");
  tempAddress2.value = tempAddress1.value;

  var tempCity1 = document.getElementById("city");
  var tempCity2 = document.getElementById("city1");
  tempCity2.value = tempCity1.value;

  var tempState1 = document.getElementById("state");
  var tempState2 = document.getElementById("state1");
  tempState2.value = tempState1.value;

  var tempZip1 = document.getElementById("zip");
  var tempZip2 = document.getElementById("zip1");
  tempZip2.value = tempZip1.value;

  var tempCountry1 = document.getElementById("country");
  var tempCountry2 = document.getElementById("country1");
  tempCountry2.value = tempCountry1.value;
}
