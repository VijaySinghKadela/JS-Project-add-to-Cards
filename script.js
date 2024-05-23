let Products = [
   {name:'nike Shoes',headline:'red color shoes',price:'2,999',Image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'Android Smartwatch',headline:'Smartwatch',price:'1,999',Image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'skin oil',headline:'Health & Wellness',price:'3,999',Image:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'Apple Iphone Products',headline:'Editorial Technology',price:'56,999',Image:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'Shaker',headline:'blue color Shaker',price:'599',Image:'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'camera Lens',headline:'Editorial, Product ',price:'34,999',Image:'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'coca cola',headline:'Drink',price:'49',Image:'https://images.unsplash.com/photo-1591254674198-a316f1aa8301?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'sunglasses',headline:'Accessory',price:'299',Image:'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

]

let popular = [
   {name:'sunglasses',headline:'Accessory',price:'299',Image:'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'Smartwatch',headline:'Smartwatch',price:'1,999',Image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'skin oil',headline:'Health & Wellness',price:'3,999',Image:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'Apple Iphone',headline:'Editorial Technology',price:'56,999',Image:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'Shaker',headline:'blue color Shaker',price:'599',Image:'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'camera Lens',headline:'Editorial, Product ',price:'34,999',Image:'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'coca cola',headline:'Drink',price:'49',Image:'https://images.unsplash.com/photo-1591254674198-a316f1aa8301?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   {name:'nike Shoes',headline:'red color shoes',price:'2,999',Image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
]

let cart = [];



function addProduct(){
   
   let clutter  = '';

   Products.forEach(function(Product , index){
      clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflew-hidden">
      <img class="w-full h-full object-cover rounded-xl " src="${Product.Image}"/></div>
      <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">${Product.name}</h1>
          <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                  <h3 class="font-semibold opacity-20">${Product.headline}</h3>
                  <h4 class="font-semibold mt-2">&#8377; ${Product.price}</h4>
              </div>
              <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
          </div>
      </div>
   </div>`
   
   document.querySelector('.products').innerHTML = clutter;
   
   })
}
addProduct()
function addPopulerProduct(){
   let clutter  = '';
   popular.forEach(function(product){
      clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
      <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
          <img class="w-full h-full object-cover"
              src="${product.Image}"
              alt="Image">
      </div>
      <div class="data py-2 w-full">
          <h1 class="leading-none font-semibold">${product.name}</h1>
          <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
          <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
      </div>
  </div>`;

  document.querySelector('.populars').innerHTML = clutter;

   })
}
addPopulerProduct()

function addtoCart(){
   document.querySelector('.products')
   .addEventListener("click",function (details){
      if(details.target.classList.contains('add')){
            cart.push(Products[details.target.dataset.index])

      }

});
}
addtoCart();

function showcart(){
 document.querySelector('.carticon')
 .addEventListener('click',function(){
   document.querySelector('.cartexpnd').style.display = "block";

   let clutter = '';
   cart.forEach(function(product , index){
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
      <img class="h-full w-full object-cover" src="${product.Image}"/></div>
      <div>
          <h3 class="font-semibold">${product.name}</h3>
          <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
      </div>
  </div>
`;
   })

   document.querySelector('.cartexpnd').innerHTML = clutter;

 })
}
showcart()