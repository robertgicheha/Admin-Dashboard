"use strict";
const productid = document.getElementById('product-id');
const productname = document.getElementById('product-name');
const description = document.getElementById('product_description');
const category = document.getElementById('prod_category');
const price = document.getElementById('prod_price');
const imageurl = document.getElementById('productimageurl');
const createdat = document.getElementById('product_CreatedAt');
const btn = document.getElementById('addbtn');
const form = document.getElementById('add-product-form');
btn.addEventListener('click', () => {
    const ProductId = productid.value;
    const ProductName = productname.value;
    const Description = description.value;
    const Category = category.value;
    const Price = price.value;
    const ImageURL = imageurl.value;
    const CreatedAt = createdat.value;
    console.log(ProductId, ProductName, Description, Category, Price, ImageURL, CreatedAt);
});