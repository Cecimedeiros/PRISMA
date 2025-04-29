import './NewsCard.css'; 

export function NewsCard({ imageSrc, title, description }) {
  return (
    <div className="news-card">
      <img 
        src={imageSrc} 
        alt={title} 
        className="news-card-image" 
      />
      {/*}
      <div className="news-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      */}
    </div>
  );
}

