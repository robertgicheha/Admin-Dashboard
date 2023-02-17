const productid = document.getElementById('product-id') as HTMLInputElement;
const productname = document.getElementById('product-name') as HTMLInputElement;
const description = document.getElementById('product_description') as HTMLInputElement;
const category = document.getElementById('prod_category') as HTMLInputElement;
const price = document.getElementById('prod_price') as HTMLInputElement;
const imageurl = document.getElementById('productimageurl') as HTMLInputElement;
const createdat = document.getElementById('product_CreatedAt') as HTMLInputElement;

const btn = document.getElementById('addbtn') as HTMLInputElement;

const form = document.getElementById('add-product-form') as HTMLInputElement;


  interface ProductData {
    ProductName: string;
    ProductId: string;
    Description: string;
    Category: string;
    Price: number;
    ImageURL: string;
    CreatedAt: Date;
 
  }
  

 btn.addEventListener('click', () => {
   const ProductId = productid.value
    const ProductName = productname.value
    const Description = description.value
    const Category = category.value
    const Price = price.value
    const ImageURL = imageurl.value
    const CreatedAt = createdat.value

    console.log(ProductId,ProductName,Description,Category,Price,ImageURL,CreatedAt);
    
 });













