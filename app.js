const wrapper=document.querySelector(".sliderWrapper")

const menuItems=document.querySelectorAll(".menuItem")



// const sliderPric=document.querySelectorAll(".sliderPrice");
// console.log(sliderPric)

const products = [
    {
      id: 1,
      title: "Air Force",
      price: "$119",
      discription:"A timeless classic, the Nike Air Force 1 combines iconic style with all-day comfort. Featuring a durable leather upper, responsive Air cushioning, and a versatile design, these sneakers deliver a perfect blend of streetwear and performance. Whether on the court or the streets, the AF1 stands out with its legendary look.",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: "$149",
      discription:"Step up your style with the Nike Air Jordan in classic black. Designed for comfort and performance, this sneaker features premium materials, responsive cushioning, and a sleek, timeless look. Perfect for both casual wear and the court.",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: "$109",
      discription:"Elevate your look with the Nike Blazer, a classic sneaker with vintage appeal. Featuring a durable leather upper, retro-inspired design, and reliable comfort, it’s perfect for everyday wear with a touch of timeless style.",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: "$129",
      discription:"Step into sustainability with the Nike Crater, crafted from eco-friendly materials for a bold, modern look. Featuring lightweight cushioning and a durable design, it offers comfort, style, and a commitment to the planet.",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: "$99",
      discription:"Make a bold statement with the Nike Space Hippie, a revolutionary sneaker made from recycled materials. Combining futuristic design with lightweight comfort, it’s a perfect blend of sustainability and street style.",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

 


  let choosenProduct=products[0]
  

  

  const currentProductImg=document.querySelector(".productImg");
  const currentProductTitle=document.querySelector(".productTitle");


  const currentProductPrice=document.querySelector(".productPrice");


  const currentProductDisc=document.querySelector(".productDisc")
  const currentProductColors=document.querySelectorAll(".colour");
  const currentProductSizes=document.querySelectorAll(".size");
  const crntprice=document.querySelectorAll(".sliderPrice")

  
menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
      
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
        // sliderPric.textContent=choosenProduct.price;

            //change the choosen product
        choosenProduct=products[index]

        
        //change text of current product
        
        currentProductTitle.textContent=choosenProduct.title ;
        
        currentProductPrice.textContent=choosenProduct.price;
        
        
        currentProductDisc.textContent=choosenProduct.discription;
        currentProductImg.src=choosenProduct.colors[0].img
        crntprice[index].textContent=choosenProduct.price;

        console.log(crntprice)
        // sliderPric.textContent=choosenProduct.price
        //giving colours


        
       


        currentProductColors.forEach((color,index)=>{
          color.style.backgroundColor=choosenProduct.colors[index].code;
        })

    })
})



currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src=choosenProduct.colors[index].img

  })
})

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    })
    size.style.backgroundColor="black";
    size.style.color="white";
  })
})


const ProductButton=document.querySelector(".productButton");
const Payment=document.querySelector(".payment");
const closebtn=document.querySelector(".close");


ProductButton.addEventListener("click",()=>{
  Payment.style.display="flex";

})

closebtn.addEventListener("click",()=>{
  Payment.style.display="none"
})

