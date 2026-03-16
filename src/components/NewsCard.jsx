import React from 'react';

const NewsCard = ({ article }) => {
    const { title, description, url, image, source, published_at } = article;

    return (
        <div className="news-card">
            <div className="news-card-image">
                {image ? (
                    <img src={image} alt={title} loading="lazy" />
                ) : (
                    <div className="news-card-placeholder">
                        <span>📰</span>
                    </div>
                )}
                <div className="news-card-badge">{source}</div>
            </div>
            <div className="news-card-content">
                <h3 className="news-card-title">{title}</h3>
                <p className="news-card-description">{description}</p>
                <div className="news-card-footer">
                    <span className="news-card-date">
                        {new Date(published_at).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </span>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="news-card-link">
                        Read More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;