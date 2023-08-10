import Card from "./Card";
import seaImg from '@/public/Sea_dot_page.png';
import React from 'react';

const ProjectCards: React.FC = () => {
  return (
    <div className="relative inline-grid grid-cols-3 gap-[2em] mx-[5em]">
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
    </div>
  );
}

export default ProjectCards;