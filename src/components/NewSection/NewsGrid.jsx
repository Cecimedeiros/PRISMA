import { NewsCard } from './NewsCard';
import './NewsGrid.css'; 

export function NewsGrid() {
  const posts = [
    {
      imageSrc: "/assets/banner 1 pequeno.jpg",
      title: "Notícia A",
      description: "Descrição da notícia A",
    },
    {
      imageSrc: "/assets/banner 2 pequeno.jpg",
      title: "Notícia B",
      description: "Descrição da notícia B",
    },
    {
      imageSrc: "/assets/banner 3 pequeno.jpg",
      title: "Notícia C",
      description: "Descrição da notícia C",
    },
    {
      imageSrc: "/assets/banner 4 pequeno.jpg",
      title: "Notícia D",
      description: "Descrição da notícia D",
    },
  ];

  return (
    <div className="news-grid">
      {posts.map((post, index) => (
        <NewsCard 
          key={index}
          imageSrc={post.imageSrc}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}
