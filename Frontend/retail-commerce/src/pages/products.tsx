import React from 'react';
import { Card, Row, Col } from 'antd';

export default function Products() {
  const products = [
    { id: 1, name: 'Laptop', price: 'Rp 10.000.000' },
    { id: 2, name: 'Mouse', price: 'Rp 200.000' },
    { id: 3, name: 'Keyboard', price: 'Rp 500.000' },
  ];

  return (
    <div style={{ padding: '50px' }}>
      <h1>Daftar Produk</h1>
      <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8}>
            <Card title={product.name}>
              <p>Harga: {product.price}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}