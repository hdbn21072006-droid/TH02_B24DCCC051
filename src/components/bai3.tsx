import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Article {
    id: number;
    title: string;
    summary: string;
    image_url: string;
    url: string;
    published_at: string;
}

const News: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles?limit=10');
            setArticles(response.data.results);
        };
        fetchNews();
    }, []);

    const articleStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
        maxWidth: '600px',
    };

    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '4px',
    };

    return (
        <div>
            <h2>Bài 3: Tin tức Spaceflight</h2>
            {articles.map(article => (
                <div key={article.id} style={articleStyle}>
                    <img src={article.image_url} alt={article.title} style={imgStyle} />
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <p><strong>Ngày đăng:</strong> {new Date(article.published_at).toLocaleDateString('vi-VN')}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Đọc tin gốc
                    </a>
                </div>
            ))}
        </div>
    );
};

export default News;