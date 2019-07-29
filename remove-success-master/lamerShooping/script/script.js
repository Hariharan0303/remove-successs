var src1;
var btn;
function addToCart(imageSrc)
{
	var displayImg = document.getElementById('added-Items');
	
	var newDiv = document.createElement('div');
	newDiv.setAttribute("class","cart-items");
	src1 = document.getElementById(imageSrc).getAttribute('src');
	alert(src1);
	var a = document.createElement('IMG');
	//a.setAttribute("src", src1);
	//a.setAttribute("height", "100");
	//a.setAttribute("width", "70");
	alert(a);
	//Remove
	var removeThis = document.createElement('button');
	a.setAttribute("src", src1);
	a.setAttribute("height", "100");
	a.setAttribute("width", "70");
	newDiv.appendChild(a);
	newDiv.appendChild(removeThis);
	removeThis.innerHTML = "Remove";
	removeThis.setAttribute("class","btn-style");
	removeThis.setAttribute("onClick", "removeMe(this)");
	
	displayImg.appendChild(newDiv);
	
	enableDiv();
}

function removeMe(item)
{
	item.parentElement.parentElement.removeChild(item.parentElement);
}
		
function enableDiv()
{
	let element = document.querySelector(".disble-block2,.disble-block3");
    //element.classList.remove(".disble-block2");
	if(element.classList.contains("disble-block2"))
  {
  	element.classList.remove("disble-block2");
  }else if(element.classList.contains("disble-block3"))
  {
  	element.classList.remove("disble-block3");
  }
}

	
	
var dragItem = document.getElementsByClassName("shop-item-image");
var dropLoc = document.getElementsByClassName("baggage");
	
dragItem.ondragstart = function(evt)
{
	console.log("its dragging-start");
	evt.dataTransfer.setData(evt.target.class);
	console.log("its dragging");
}

dropLoc.ondragover = function(evt)
{
	evt.preventDefault();
	console.log("its dragged");
}

dropLoc.ondrop = function(evt)
{
	var dropItem = evt.dataTransfer.getData('key');
	evt.preventDefault();
	console.log("its dropped");
	console.log(dropItem);
	var myElement = document.getElementsByClassName(dropItem);
	console.log(myElement);
	
	var displayImg = document.getElementById('added-Items');
	
	var newDiv = document.createElement('div');
	newDiv.setAttribute("class","cart-items");
	src1 = document.getElementById(imageSrc).getAttribute('src');
	alert(src1);
	var a = document.createElement('IMG');
	//a.setAttribute("src", src1);
	//a.setAttribute("height", "100");
	//a.setAttribute("width", "70");
	alert(a);
	//Remove
	var removeThis = document.createElement('button');
	a.setAttribute("src", src1);
	a.setAttribute("height", "100");
	a.setAttribute("width", "70");
	newDiv.appendChild(a);
	newDiv.appendChild(removeThis);
	removeThis.innerHTML = "Remove";
	
	removeThis.setAttribute("onClick", "removeMe(this)");
	removeThis.setAttribute("id","btn-style");
	
	displayImg.appendChild(newDiv);
	
	enableDiv();
	
}


/*function addToCartClicked(event)
{
var button = event.target;
var shopItem = button.parentElement;
var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
console.log(title,imageSrc);
addItemToCart(imageSrc);
}



function addItemToCart(imageSrc)
{
var cartRow = document.createElement('div');
var cartItems = document.getElementsByClassName('cart-items')[0];
var cartRowContents ='<div class="added-items cart-column"> <img class="cart-item-image" src="${imageSrc}" width="80" height="100"/> <button class=" btn btn-remove" type="button">REMOVE</button>     </div>'

cartRow.innerHTML = cartRowContents;
cartItems.append(cartRow);
cartRow.document.getElementsByClassName('btn-remove')[0].addEventListener('click',removeCartItem);

}*/


