import Card from "./Card";
import seaImg from '@/public/Sea_dot_page.png';

const ProjectCards: React.FC = () => {
  return (
    <div className="inline-grid grid-cols-3 gap-[2em] mx-[5em]">
      <Card
        thumb={seaImg}
        name="landing-page-product"
        stacks={['React']}
      />
      <Card
        thumb={seaImg}
        name="delivery-app-gastrobar"
        stacks={['React']}
      />
      <Card
        thumb={seaImg}
        name="blog-api"
        stacks={['React']}
      />
      <Card
        thumb={seaImg}
        name="trybesmith"
        stacks={['React']}
      />
      <Card
        thumb={seaImg}
        name="inventory-report"
        stacks={['React']}
      />
    </div>
  );
}

export default ProjectCards;