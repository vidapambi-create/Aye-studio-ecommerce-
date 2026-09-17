'use client'
import {useState} from 'react'

const products=[
 {id:1,name:'The Sade Dress',price:'GH₵ 1,280',cat:'Women',img:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85'},
 {id:2,name:'Ayo Linen Set',price:'GH₵ 980',cat:'Women',img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85'},
 {id:3,name:'Kofi Relaxed Shirt',price:'GH₵ 720',cat:'Men',img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85'},
 {id:4,name:'Nia Woven Bag',price:'GH₵ 640',cat:'Accessories',img:'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85'}
]
export default function Home(){
 const [cart,setCart]=useState(0); const [menu,setMenu]=useState(false); const [toast,setToast]=useState('')
 const add=()=>{setCart(c=>c+1);setToast('Added to your bag');setTimeout(()=>setToast(''),1600)}
 return <main>
  {toast&&<div className="toast">{toast} <span>✓</span></div>}
  <div className="announcement">Complimentary delivery in Accra on orders over GH₵1,000</div>
  <header><button className="menu" onClick={()=>setMenu(!menu)}>☰</button><div className="logo">AYÉ</div><nav className={menu?'open':''}><a href="#shop">Shop</a><a href="#story">Our Story</a><a href="#journal">Journal</a><a href="#contact">Contact</a></nav><div className="actions"><button>⌕</button><button>♡</button><button onClick={()=>setToast('Your bag is ready when you are')}>Bag ({cart})</button></div></header>
  <section className="hero"><div className="heroCopy"><p className="eyebrow">NEW COLLECTION / 2026</p><h1>Wear<br/><i>Your</i><br/>Story.</h1><p className="lead">Contemporary pieces inspired by African creativity, made for everywhere.</p><a className="cta" href="#shop">Shop the collection <span>→</span></a></div><div className="heroImage"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1300&q=90"/><div className="imageLabel">AYÉ / SS26</div></div></section>
  <section className="categories"><p className="eyebrow">EXPLORE</p><div className="catGrid"><a href="#shop">Women <span>01</span></a><a href="#shop">Men <span>02</span></a><a href="#shop">Accessories <span>03</span></a><a href="#shop">New In <span>04</span></a></div></section>
  <section id="shop" className="shop"><div className="sectionHead"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Selected pieces</h2></div><a href="#shop">View all →</a></div><div className="products">{products.map(p=><article className="product" key={p.id}><div className="productImg"><img src={p.img}/><button onClick={add}>+ Add</button></div><div className="productInfo"><div><h3>{p.name}</h3><p>{p.cat}</p></div><strong>{p.price}</strong></div></article>)}</div></section>
  <section id="story" className="story"><div className="storyImage"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90"/></div><div className="storyCopy"><p className="eyebrow">THE AYÉ STORY</p><h2>Rooted here.<br/><i>Made for everywhere.</i></h2><p>AYÉ is a modern African fashion house creating considered pieces that move between cultures, cities and seasons. We believe personal style should feel effortless — and unmistakably yours.</p><a className="textLink" href="#contact">Discover our story →</a></div></section>
  <section className="banner"><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=90"/><div><p className="eyebrow">THE NEW COLLECTION</p><h2>Made to be<br/><i>remembered.</i></h2><a className="lightCta" href="#shop">Explore SS26 →</a></div></section>
  <section id="journal" className="journal"><p className="eyebrow">FROM THE JOURNAL</p><h2>Notes from AYÉ</h2><div className="journalGrid"><article><img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85"/><p>STYLE / 01</p><h3>How to build a wardrobe that travels with you</h3></article><article><img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=900&q=85"/><p>CULTURE / 02</p><h3>The new language of African fashion</h3></article></div></section>
  <section className="newsletter"><p className="eyebrow">STAY IN THE KNOW</p><h2>Something beautiful<br/>is coming.</h2><div><input placeholder="Your email address"/><button>Subscribe →</button></div></section>
  <footer id="contact"><div className="footerBrand"><div className="logo">AYÉ</div><p>Contemporary African fashion.<br/>Accra · Everywhere.</p></div><div><h4>SHOP</h4><a>Women</a><a>Men</a><a>Accessories</a><a>New In</a></div><div><h4>HELP</h4><a>Shipping & Returns</a><a>Size Guide</a><a>FAQs</a><a>Contact</a></div><div><h4>FOLLOW</h4><a>Instagram</a><a>TikTok</a><a>WhatsApp</a></div><div className="copyright">© 2026 AYÉ Studio · E-commerce concept by Genesis Tech Solutions</div></footer>
 </main>
}
