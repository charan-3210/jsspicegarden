/* J-S Spice Garden — full menu + cart + WhatsApp ordering */
const nav=document.querySelector('.nav'),toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const FULL_MENU = [{"cat": "Veg Starters", "name": "Paneer Hariyali Tikka", "price": 280}, {"cat": "Veg Starters", "name": "Paneer Malai Tikka", "price": 280}, {"cat": "Veg Starters", "name": "Paneer Tikka", "price": 290}, {"cat": "Veg Starters", "name": "Baby Corn 65", "price": 260}, {"cat": "Veg Starters", "name": "Baby Corn Chilli", "price": 260}, {"cat": "Veg Starters", "name": "Baby Corn Manchurian", "price": 260}, {"cat": "Veg Starters", "name": "Crispy Baby Corn", "price": 290}, {"cat": "Veg Starters", "name": "Crispy Corn", "price": 230}, {"cat": "Veg Starters", "name": "Crispy Veg", "price": 260}, {"cat": "Veg Starters", "name": "Dragon Paneer", "price": 270}, {"cat": "Veg Starters", "name": "Gobi 65", "price": 270}, {"cat": "Veg Starters", "name": "Gobi Chilli", "price": 270}, {"cat": "Veg Starters", "name": "Gobi Manchurian", "price": 280}, {"cat": "Veg Starters", "name": "Hong Kong Paneer", "price": 290}, {"cat": "Veg Starters", "name": "Mushroom 65", "price": 270}, {"cat": "Veg Starters", "name": "Mushroom Chilli", "price": 270}, {"cat": "Veg Starters", "name": "Mushroom Manchurian", "price": 280}, {"cat": "Veg Starters", "name": "Paneer 65", "price": 290}, {"cat": "Veg Starters", "name": "Paneer Chilli", "price": 290}, {"cat": "Veg Starters", "name": "Paneer Manchurian", "price": 300}, {"cat": "Veg Starters", "name": "Pepper Gobi", "price": 270}, {"cat": "Veg Starters", "name": "Pepper Mushroom", "price": 270}, {"cat": "Veg Starters", "name": "Pepper Paneer", "price": 290}, {"cat": "Veg Starters", "name": "Special Royal Mushroom", "price": 290}, {"cat": "Veg Starters", "name": "French Fries", "price": 120}, {"cat": "Veg Starters", "name": "Peri Peri French Fries", "price": 130}, {"cat": "Veg Starters", "name": "Tandoori Bread Basket", "price": 350}, {"cat": "Egg Starters", "name": "Egg 65", "price": 200}, {"cat": "Egg Starters", "name": "Egg Chilli", "price": 200}, {"cat": "Egg Starters", "name": "Egg Manchurian", "price": 230}, {"cat": "Egg Starters", "name": "Boiled Egg [Single]", "price": 10}, {"cat": "Egg Starters", "name": "Plain Egg Omelette", "price": 60}, {"cat": "Egg Starters", "name": "Masala Egg Omelette", "price": 90}, {"cat": "Chicken Starters", "name": "Chicken 555", "price": 280}, {"cat": "Chicken Starters", "name": "Chicken 65", "price": 290}, {"cat": "Chicken Starters", "name": "Chicken Chilli", "price": 280}, {"cat": "Chicken Starters", "name": "Chicken Fry", "price": 320}, {"cat": "Chicken Starters", "name": "Chicken Hong Kong", "price": 280}, {"cat": "Chicken Starters", "name": "Chicken Lollipop", "price": 300}, {"cat": "Chicken Starters", "name": "Chicken Majestic", "price": 300}, {"cat": "Chicken Starters", "name": "Chicken Manchurian", "price": 300}, {"cat": "Chicken Starters", "name": "Dragon Chicken", "price": 300}, {"cat": "Chicken Starters", "name": "Schezwan Chicken", "price": 280}, {"cat": "Chicken Starters", "name": "Paneer Majestic", "price": 290}, {"cat": "Chicken Starters", "name": "Basket Chicken", "price": 320}, {"cat": "Chicken Starters", "name": "Chicken Drumstick", "price": 320}, {"cat": "Chicken Starters", "name": "Garlic Chicken", "price": 300}, {"cat": "Chicken Starters", "name": "Lemon Chicken", "price": 300}, {"cat": "Chicken Starters", "name": "Pepper Chicken", "price": 280}, {"cat": "Chicken Starters", "name": "Special Chicken Mongolian", "price": 300}, {"cat": "Chicken Starters", "name": "Special Classic Chicken", "price": 300}, {"cat": "Chicken Starters", "name": "Chef Special Chicken Tikka", "price": 300}, {"cat": "Chicken Starters", "name": "Chicken Coriander Smoke Tikka", "price": 340}, {"cat": "Chicken Starters", "name": "Chicken Hariyali Tikka", "price": 290}, {"cat": "Chicken Starters", "name": "Chicken Malai Tikka", "price": 310}, {"cat": "Chicken Starters", "name": "Chicken Mint Tikka", "price": 300}, {"cat": "Chicken Starters", "name": "Chicken Tikka", "price": 560}, {"cat": "Chicken Starters", "name": "Tandoori Chicken", "price": 280}, {"cat": "Fish Starters", "name": "Apollo Fish", "price": 330}, {"cat": "Fish Starters", "name": "Fish 65", "price": 330}, {"cat": "Fish Starters", "name": "Fish Fry", "price": 310}, {"cat": "Fish Starters", "name": "Fish Tikka", "price": 330}, {"cat": "Fish Starters", "name": "Pepper Fish", "price": 310}, {"cat": "Fish Starters", "name": "Tava Whole Fry Fish", "price": 400}, {"cat": "Prawns Starters", "name": "Prawns Fry", "price": 360}, {"cat": "Veg Biryani", "name": "Biryani Rice", "price": 130}, {"cat": "Veg Biryani", "name": "Kaju Biryani", "price": 270}, {"cat": "Veg Biryani", "name": "Mix Veg Biryani", "price": 250}, {"cat": "Veg Biryani", "name": "Mushroom Biryani", "price": 300}, {"cat": "Veg Biryani", "name": "Paneer Biryani", "price": 300}, {"cat": "Veg Biryani", "name": "Veg Biryani", "price": 270}, {"cat": "Egg Biryani", "name": "Egg Biryani [2 Eggs]", "price": 210}, {"cat": "Chicken Biryani", "name": "Chicken Lollipop Biryani", "price": null}, {"cat": "Chicken Biryani", "name": "Fry Piece Chicken Biryani", "price": 320}, {"cat": "Chicken Biryani", "name": "Hyderabadi Chicken Dum Biryani", "price": 300}, {"cat": "Chicken Biryani", "name": "Kalmi Chicken Biryani", "price": 340}, {"cat": "Chicken Biryani", "name": "Mughlai Chicken Biryani", "price": 330}, {"cat": "Chicken Biryani", "name": "Special Chicken Biryani", "price": 330}, {"cat": "Chicken Biryani", "name": "Tandoori Chicken Biryani", "price": null}, {"cat": "Chicken Biryani", "name": "Jumbo Chicken Biryani", "price": 840}, {"cat": "Chicken Biryani", "name": "Mini Chicken Biryani", "price": 180}, {"cat": "Fish Biryani", "name": "Fish Biryani", "price": 340}, {"cat": "Prawns Biryani", "name": "Prawns Biryani", "price": 340}, {"cat": "Egg Main Course", "name": "J S Special Egg Keema Curry", "price": 130}, {"cat": "Egg Main Course", "name": "Masala Egg Omelette", "price": 90}, {"cat": "Chicken Main Course", "name": "Butter Chicken", "price": 290}, {"cat": "Chicken Main Course", "name": "Chicken Chatpata", "price": 260}, {"cat": "Chicken Main Course", "name": "Chicken Chettinad", "price": 280}, {"cat": "Chicken Main Course", "name": "Chicken Kolhapuri", "price": 280}, {"cat": "Chicken Main Course", "name": "Chicken Maharaja", "price": 300}, {"cat": "Chicken Main Course", "name": "Chicken Mughlai", "price": 280}, {"cat": "Chicken Main Course", "name": "Special Chicken Patiala", "price": 280}, {"cat": "Chicken Main Course", "name": "Special Kaju Chicken", "price": 280}, {"cat": "Chicken Main Course", "name": "Andhra Chicken Curry", "price": 270}, {"cat": "Chicken Main Course", "name": "Boneless Chicken Curry", "price": 280}, {"cat": "Chicken Main Course", "name": "Chicken Afghani Curry", "price": 280}, {"cat": "Chicken Main Course", "name": "Chicken Masala", "price": 260}, {"cat": "Chicken Main Course", "name": "Kadhai Chicken", "price": 270}, {"cat": "Chicken Main Course", "name": "Punjabi Chicken Curry", "price": 290}, {"cat": "Chicken Main Course", "name": "Rayalaseema Chicken Curry", "price": 280}, {"cat": "Chicken Main Course", "name": "Special Chicken Curry", "price": 300}, {"cat": "Fish Main Course", "name": "Fish Curry", "price": 290}, {"cat": "Fish Main Course", "name": "Fish Masala", "price": 280}, {"cat": "Fish Main Course", "name": "Kadhai Fish", "price": 300}, {"cat": "Prawns Main Course", "name": "Kadhai Prawns", "price": 300}, {"cat": "Prawns Main Course", "name": "Prawns Curry", "price": 300}, {"cat": "Prawns Main Course", "name": "Prawns Masala", "price": 290}, {"cat": "Dry Veg Main Course", "name": "Baby Corn Chatpat", "price": 230}, {"cat": "Dry Veg Main Course", "name": "Meethi Chaman", "price": 250}, {"cat": "Dry Veg Main Course", "name": "Palak Paneer", "price": 250}, {"cat": "Dry Veg Main Course", "name": "Paneer Chatpata", "price": 260}, {"cat": "Dry Veg Main Course", "name": "Paneer Do Pyaaza", "price": 260}, {"cat": "Dry Veg Main Course", "name": "Paneer Kolhapuri", "price": 260}, {"cat": "Dry Veg Main Course", "name": "Special Veg Malaysia", "price": 290}, {"cat": "Dry Veg Main Course", "name": "Veg Chatpat", "price": 240}, {"cat": "Dry Veg Main Course", "name": "Veg Kolhapuri", "price": 240}, {"cat": "Gravy Veg Main Course", "name": "Kadhai Paneer", "price": 290}, {"cat": "Gravy Veg Main Course", "name": "Kaju Paneer Curry", "price": 300}, {"cat": "Gravy Veg Main Course", "name": "Paneer Butter Masala", "price": 290}, {"cat": "Gravy Veg Main Course", "name": "Paneer Hyderabad Curry", "price": 280}, {"cat": "Gravy Veg Main Course", "name": "Paneer Mushroom Curry", "price": 280}, {"cat": "Gravy Veg Main Course", "name": "Hyderabad Mushroom Curry", "price": 260}, {"cat": "Gravy Veg Main Course", "name": "Kaju Mushroom Curry", "price": 300}, {"cat": "Gravy Veg Main Course", "name": "Mushroom Curry", "price": 250}, {"cat": "Gravy Veg Main Course", "name": "Aloo Gobi Curry", "price": 260}, {"cat": "Gravy Veg Main Course", "name": "Baby Corn Masala Curry", "price": 260}, {"cat": "Gravy Veg Main Course", "name": "Kaju Curry", "price": 300}, {"cat": "Gravy Veg Main Course", "name": "Kaju Tomato Curry", "price": 250}, {"cat": "Gravy Veg Main Course", "name": "Dal Fry", "price": 240}, {"cat": "Gravy Veg Main Course", "name": "Dal Tadka", "price": 230}, {"cat": "Gravy Veg Main Course", "name": "Kadhai Veg Curry", "price": 250}, {"cat": "Gravy Veg Main Course", "name": "Mix Veg Curry", "price": 270}, {"cat": "Gravy Veg Main Course", "name": "Royal Veg Curry", "price": 250}, {"cat": "Fried Rice", "name": "Gobi Fried Rice", "price": 270}, {"cat": "Fried Rice", "name": "Kaju Fried Rice", "price": 270}, {"cat": "Fried Rice", "name": "Mix Veg Fried Rice", "price": 270}, {"cat": "Fried Rice", "name": "Mushroom Fried Rice", "price": 270}, {"cat": "Fried Rice", "name": "Paneer Fried Rice", "price": 230}, {"cat": "Noodles", "name": "Veg Hakka Noodles", "price": 200}, {"cat": "Fried Rice", "name": "Veg Fried Rice", "price": 240}, {"cat": "Fried Rice", "name": "Veg Schezwan Fried Rice", "price": 250}, {"cat": "Fried Rice", "name": "Egg Fried Rice", "price": 250}, {"cat": "Fried Rice", "name": "Non Veg Mix Fried Rice", "price": 290}, {"cat": "Fried Rice", "name": "Chicken Fried Rice", "price": 280}, {"cat": "Fried Rice", "name": "Chicken Schezwan Fried Rice", "price": 290}, {"cat": "Fried Rice", "name": "Prawns Fried Rice", "price": 290}, {"cat": "Noodles", "name": "Mushroom Noodles", "price": 220}, {"cat": "Noodles", "name": "Veg Noodles", "price": 190}, {"cat": "Noodles", "name": "Veg Schezwan Noodles", "price": 230}, {"cat": "Noodles", "name": "Egg Noodles", "price": 220}, {"cat": "Noodles", "name": "Chicken Noodles", "price": 230}, {"cat": "Noodles", "name": "Schezwan Chicken Noodles", "price": 240}, {"cat": "Accompaniments", "name": "Curd Rice", "price": 140}, {"cat": "Accompaniments", "name": "Ghee Rice", "price": 170}, {"cat": "Accompaniments", "name": "Jeera Rice", "price": 230}, {"cat": "Accompaniments", "name": "Special Curd Rice", "price": 160}, {"cat": "Combos & Meals", "name": "Rice With Chicken Curry [Serves 1]", "price": 190}, {"cat": "Combos & Meals", "name": "Sangati With Chicken Curry [Serves 1]", "price": 200}, {"cat": "Combos & Meals", "name": "Rice With Mutton Curry [Serves 1]", "price": 260}, {"cat": "Combos & Meals", "name": "Sangati With Mutton Curry [Serves 1]", "price": 300}, {"cat": "Breads", "name": "Butter Naan", "price": 60}, {"cat": "Breads", "name": "Plain Naan", "price": 30}, {"cat": "Breads", "name": "Butter Roti", "price": 60}, {"cat": "Breads", "name": "Tandoori Roti", "price": 40}, {"cat": "Breads", "name": "Laccha Paratha", "price": 80}, {"cat": "Breads", "name": "Methi Paratha", "price": 90}, {"cat": "Breads", "name": "Butter Kulcha", "price": 80}, {"cat": "Breads", "name": "Coriander Kulcha", "price": 80}, {"cat": "Breads", "name": "Garlic Kulcha", "price": 80}, {"cat": "Breads", "name": "Masala Kulcha", "price": 90}, {"cat": "Breads", "name": "Paneer Kulcha", "price": 80}, {"cat": "Breads", "name": "Plain Kulcha", "price": 70}, {"cat": "Mutton Starters", "name": "Mutton 65", "price": 380}, {"cat": "Mutton Starters", "name": "Mutton Chilli", "price": 390}, {"cat": "Mutton Starters", "name": "Mutton Fry", "price": 420}, {"cat": "Mutton Starters", "name": "Mutton Ghee Roast", "price": 400}, {"cat": "Mutton Starters", "name": "Pepper Mutton", "price": 390}, {"cat": "Others Starters", "name": "Achari Tikka", "price": 360}, {"cat": "Others Starters", "name": "Angara Kebab", "price": 360}, {"cat": "Others Starters", "name": "Angara Tikka", "price": 360}, {"cat": "Others Starters", "name": "Lemon Tikka", "price": 340}, {"cat": "Mutton Biryani", "name": "Chitti Muthyalu Mutton Biryani", "price": 400}, {"cat": "Mutton Biryani", "name": "Mutton Biryani", "price": 380}, {"cat": "Mutton Biryani", "name": "Mutton Fry Piece Biryani", "price": 440}, {"cat": "Mutton Main Course", "name": "Kadhai Mutton", "price": 350}, {"cat": "Mutton Main Course", "name": "Mutton Curry", "price": 340}, {"cat": "Mutton Main Course", "name": "Mutton Keema Curry", "price": 370}, {"cat": "Mutton Main Course", "name": "Special Mutton Curry", "price": 360}];

const categoryClass = c => {
  const s=c.toLowerCase();
  if(s.includes('biryani')) return 'biryani';
  if(s.includes('bread')) return 'breads';
  if(s.includes('mutton')) return 'mutton';
  if(s.includes('starter')) return 'starters';
  return 'mains';
};

const dishGrid=document.querySelector('#dishGrid');
if(dishGrid){
  dishGrid.innerHTML=FULL_MENU.map((item,i)=>{
    const priceText=item.price==null?'Price unavailable':'₹'+item.price;
    const disabled=item.price==null?'disabled':'';
    return `<article class="dish-card" data-cat="${categoryClass(item.cat)}" data-name="${item.name.replace(/"/g,'&quot;')}">
      <div><span class="tag">${item.cat}</span><h3>${item.name}</h3><p>${item.price==null?'Price is not visible in the supplied menu page.':'Freshly prepared at J-S Spice Garden.'}</p></div>
      <strong>${priceText}</strong>
      <button class="add-btn" type="button" ${disabled}>${item.price==null?'Price unavailable':'Add to cart'}</button>
    </article>`;
  }).join('');
}

const tabs=document.querySelectorAll('.tab'),cards=document.querySelectorAll('.dish-card'),search=document.querySelector('#menuSearch');
function filterMenu(){
  const active=document.querySelector('.tab.active')?.dataset.filter||'all';
  const q=(search?.value||'').toLowerCase().trim();
  cards.forEach(c=>{
    const ok=(active==='all'||c.dataset.cat===active)&&(!q||c.dataset.name.toLowerCase().includes(q));
    c.style.display=ok?'flex':'none';
  });
}
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');filterMenu();
}));
search?.addEventListener('input',filterMenu);

const lightbox=document.querySelector('#lightbox'),img=document.querySelector('#lightboxImg');
function openBox(src){if(!lightbox||!img)return;img.src=src;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeBox(){if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-img]').forEach(x=>x.addEventListener('click',()=>openBox(x.dataset.img)));
document.querySelector('.lightbox-close')?.addEventListener('click',closeBox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

/* Cart */
const cart=[];
const cartDrawer=document.querySelector('#cartDrawer'),cartOverlay=document.querySelector('#cartOverlay');
function rupee(n){return '₹'+Number(n).toLocaleString('en-IN')}
function openCart(){cartDrawer?.classList.add('open');cartOverlay?.classList.add('open');cartDrawer?.setAttribute('aria-hidden','false')}
function closeCart(){cartDrawer?.classList.remove('open');cartOverlay?.classList.remove('open');cartDrawer?.setAttribute('aria-hidden','true')}
document.querySelector('#cartBtn')?.addEventListener('click',openCart);
document.querySelector('#mobileCart')?.addEventListener('click',openCart);
document.querySelector('#cartClose')?.addEventListener('click',closeCart);
cartOverlay?.addEventListener('click',closeCart);

function bindAddButtons(){
 document.querySelectorAll('.add-btn:not([disabled])').forEach(btn=>btn.addEventListener('click',()=>{
   const card=btn.closest('.dish-card'); if(!card)return;
   const name=card.dataset.name;
   const price=Number((card.querySelector('strong').textContent||'').replace(/[^0-9.]/g,''));
   const found=cart.find(x=>x.name===name);
   if(found)found.qty++;else cart.push({name,price,qty:1});
   renderCart();openCart();
 }));
}
function renderCart(){
 const box=document.querySelector('#cartItems');if(!box)return;
 let total=0,count=0;
 if(!cart.length){box.innerHTML='<p class="cart-empty">Your cart is empty. Add dishes from the menu.</p>'}
 else{
   box.innerHTML=cart.map((x,i)=>{
     total+=x.price*x.qty;count+=x.qty;
     return `<div class="cart-row"><div><strong>${x.name}</strong><div>${rupee(x.price)} × ${x.qty}</div><div class="qty"><button type="button" data-minus="${i}">−</button><span>${x.qty}</span><button type="button" data-plus="${i}">+</button></div></div><strong>${rupee(x.price*x.qty)}</strong></div>`;
   }).join('');
   box.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>{const i=+b.dataset.minus;cart[i].qty--;if(cart[i].qty<=0)cart.splice(i,1);renderCart()});
   box.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>{cart[+b.dataset.plus].qty++;renderCart()});
 }
 const totalEl=document.querySelector('#cartTotal'),countEl=document.querySelector('#cartCount'),mobileCount=document.querySelector('#mobileCartCount');
 if(totalEl)totalEl.textContent=rupee(total);
 if(countEl)countEl.textContent=count;
 if(mobileCount)mobileCount.textContent=count;
}

document.querySelector('#orderForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 if(!cart.length){alert('Please add at least one dish to your cart.');return}
 const name=document.querySelector('#customerName').value.trim();
 const phone=document.querySelector('#customerPhone').value.trim();
 const address=document.querySelector('#customerAddress').value.trim();
 const type=document.querySelector('#orderType').value;
 let total=0;
 const lines=cart.map(x=>{total+=x.price*x.qty;return `• ${x.name} × ${x.qty} = ${rupee(x.price*x.qty)}`}).join('\n');
 const msg=`Hello J-S Spice Garden Restaurant,\n\nNew ${type} order from website:\n\n${lines}\n\nTotal: ${rupee(total)}\n\nCustomer: ${name}\nPhone: ${phone}\nAddress: ${type==='Delivery'?address:'Pickup from restaurant'}\n\nPlease confirm the order and final delivery/payment details.`;
 window.open('https://wa.me/918247550294?text='+encodeURIComponent(msg),'_blank');
});

bindAddButtons();
renderCart();
