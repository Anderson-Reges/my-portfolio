import Card from "./Card";
import React from 'react';

const ProjectCards: React.FC = () => {
  return (
    <div
      className="relative inline-grid desktop:grid-cols-3 mobile:grid-cols-1
      gap-[2em] desktop:mx-[5em] mb-[20px] mobile:landscape:grid-cols-2
      desktop:landscape:grid-cols-3"
    >
      <Card
        name="landing-page-product"
      />
      <Card
        name="delivery-app-gastrobar"
      />
      <Card
        name="blog-api"
      />
      <Card
        name="trybesmith"
      />
      <Card
        name="inventory-report"
      />
      <Card
        name="trybe-futebol-clube"
      />
      <Card
        name="react-testing"
      />
      <Card
        name="initialization-script"
      />
      <Card
        name="trybetunes"
      />
      <Card
        name="car-shop-mongo"
      />
      <Card
        name="trybers-and-dragons"
      />
    </div>
  );
}

export default ProjectCards;