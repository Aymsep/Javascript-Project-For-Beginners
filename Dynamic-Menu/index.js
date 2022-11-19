//local data
menu_items_data = [
{
    src:'./images/borito.jpg',
    title:'burrito',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'lunch'
},
{
    src:'./images/burger.jpg',
    title:'burger',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'lunch'
},
{
    src:'./images/pizza.jpg',
    title:'pizza',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'lunch'
},
{
    src:'./images/breakfast1.jpg',
    title:'breakfast-1',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'breakfast'
},
{
    src:'./images/breakfast2.jpg',
    title:'breakfast-2',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'breakfast'
},
{
    src:'./images/breakfast3.jpg',
    title:'breakfast-3',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'breakfast'
},
{
    src:'./images/chicken.jpg',
    title:'chicken',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'dinner'
},
{
    src:'./images/soup.jpg',
    title:'soup',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'dinner'
},
{
    src:'./images/spaghetti.jpg',
    title:'spaghetti',
    description:'½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat',
    price:'15.89',
    category:'dinner'
},
]

// declaring variable
const image = document.querySelector('#item-image')//get item-image
const title = document.querySelector('#item-title')//get item-title
const description = document.querySelector('#item-description')//get item-description
const price = document.querySelector('#item-price')//get item-price
const section = document.querySelector('.menu-listing')//get item-section to add items dynamiclly
//button variable
const btn = document.querySelector('.btn')// get button section to add button category dynamiclly
window.addEventListener("DOMContentLoaded", function () {
    // function to get data from menu_items_data and display it
    display_menu(menu_items_data)
    //function to get category in unique way , inlcuding 'all'
    const loop_category = menu_items_data.reduce((val,items) =>{
        if(!val.includes(items.category)){
            val.push(items.category)
        }
        return val
        
    },['all'])
    
    //function to iterate in loop_catergory and based on category inside , it create button category dynamiclly
    const add_btn = loop_category.map(item =>{
        return `<button type="submit" class="btn-catego" data-id="${item}">${item}</button>`
    }).join("")
    btn.innerHTML = add_btn //add button to html
    const filter_btn = document.querySelectorAll('.btn-catego')

    //function to display only menu items based on button category clicked 
    filter_btn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            console.log(e.currentTarget.dataset.id)
            const current_click = e.currentTarget.dataset.id
            const menu_cate = menu_items_data.filter(function(item){
                if (current_click === item.category){
                    return item
                }
                
            })
            if(current_click ==='all'){
                display_menu(menu_items_data)
            }else{
                display_menu(menu_cate)
            }
            
        })
    })
})


function display_menu(menuitems){
    let menu_items = menuitems.map(function (item){
        return `<div class="col1">
        <article class="menu-items">
        
        <img src="${item.src}" alt=""  id="item-image" loading="lazy">
        <div class="item-info">
        
        <h2 id="item-title">${item.title}</h2>
        <h4 id="item-price">${item.price}$</h4>
        </div>
        <div class="line-2"></div>
        <p id="item-description">${item.description}</p>
        <button type="submit" class="tocart">add to cart</button>
        
        </article>
        </div>`    
    })
    menu_items = menu_items.join("")//remove kama between tags
    section.innerHTML = menu_items 
}





