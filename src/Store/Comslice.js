import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    products:[
    {id:1, title:"Maniac",subTitle:"Cotton Black Shrug",price:"139",image:"https://images.unsplash.com/photo-1623082574085-157d955f1d35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHx0JTIwc2hpcnR8ZW58MHx8MHx8fDI%3D"},
    {id:2, title:"TAYSON",subTitle:"Oversized Cotton T-shirt ",discription:"100% Original Products, Pay on delivery might be available, Easy 14 days returns and exchanges, Try & Buy might be available",price:"99",image:"https://images.unsplash.com/photo-1627225925683-1da7021732ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:3, title:"BLLMER",subTitle:"Cotton T-shirt Men's",price:"89",image:"https://images.unsplash.com/photo-1613852348851-df1739db8201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:4, title:"EDIRO",subTitle:"Rounded Neck Fitted T-shirt",price:"55",image:"https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:5, title:"Bewakoof",subTitle:"Printed Cotton T-shirt",price:"49",image:"https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:6, title:"Urban Fashion",subTitle:"printed T-shirt",price:"149",image:"https://images.unsplash.com/photo-1630590613173-b01fdb40a1eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:7, title:"VOGUE",subTitle:"Women Pure Cotton T-shirt",price:"99",image:"https://images.unsplash.com/photo-1610142991820-e02266a4a9f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:8, title:"Roadster",subTitle:"Pure Cotton Slim T-shirt",price:"129",image:"https://images.unsplash.com/photo-1624373607006-348f61ea2d76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:9, title:"ADIDAS",subTitle:"Cotton White T-shirt",price:"199",image:"https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:10, title:"Roadster",subTitle:"Pure Cotton Printed T-shirt",discription:"100% Original Products, Pay on delivery might be available, Easy 14 days returns and exchanges, Try & Buy might be available",price:"89",image:"https://images.unsplash.com/photo-1623256786459-8ae5e1a31c77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:11, title:"Bewakoof",subTitle:"Printes Oversized T-shirt",price:"79",image:"https://images.unsplash.com/photo-1598988999883-e410fa0bc322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHQlMjBzaGlydHxlbnwwfHwwfHx8Mg%3D%3D"},
    {id:12, title:"apple2",price:"20",image:"https://images.unsplash.com/photo-1613119497609-fc75cf115723?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx0JTIwc2hpcnR8ZW58MHx8MHx8fDI%3D"},

    ],

    cartProducts:[]
}

export const comslice= createSlice({
    name:"product",
    initialState,
    reducers:{
        // state ke ander products honge or action ke ander 1 id hogi jiske through  products add kareenga.
        add: (state, action) => {
            const { title,subTitle,price,discription,image } = action.payload;
            const product = {
                id: nanoid(),
                title,
                subTitle,
                price,
                discription,
                image
            };
            state.products.push(product);
        },
        addCart: (state, action) => {
            const { title,subTitle,price,quantity,image,id } = action.payload;
            const cartProduct = {
                id,
                title,
                subTitle,
                price,
                quantity,
                image
            };
            state.cartProducts.push(cartProduct);
        },
        removeCart:(state,action)=> {
            state.cartProducts= state.cartProducts.filter((cartProduct) => cartProduct.id !== action.payload);
        },
        remove:(state,action)=>{
            state.products= state.products.filter((product)=> product.id!==action.payload)
            // products ko overwrite krna he. jo product ki id given id se same hogi uske chorh kr sabhi ko products pr overwrite kr denge.
        },
        
    },
})

export const {add,remove, addCart,removeCart } = comslice.actions

export default comslice.reducer


