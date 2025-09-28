import React from "react";

const ProductSection = ({ title, products }) => {
  return (
    <div className="container my-5">
      <h3 className="text-danger mb-4">{title}</h3>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={p.img} className="card-img-top" alt={p.name} />
              <div className="card-body text-center">
                <h6 className="card-title">{p.name}</h6>
                <p className="text-muted">{p.price}</p>
                <button className="btn btn-sm btn-outline-danger" disabled>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
