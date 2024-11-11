import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const [products, set_products] = useState([]);
  const [filtered_products, set_filtered_products] = useState([]);
  const [search_term, set_search_term] = useState('');

  useEffect(() => {
    const fetch_products = async () => {
      try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        set_products(data);
        set_filtered_products(data);
      }catch(error){
        console.error("SOMETHING IS WRONG!!!! (fetching products)");
      }
    };
    fetch_products();
  }, []);
  useEffect(() => {
    const filtered = products.filter(product => product.title.toLowerCase(). includes(search_term.toLowerCase()));
    set_filtered_products(filtered);
  }, [search_term, products]);

  return (
    <div>
      <input type="text" placeholder="Search for product" value={search_term} onChange={(e) => set_search_term(e.target.value)} />
      <table style={{width: '50%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered_products.map((product) => (
            <tr>
              <td><img style={{width: '15%'}} src={product.image} alt={product.title}/></td>
              <td>{product.title}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}