import React from 'react';

function Article(props) {
    return (
        <article>
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank">
                <img src={ props.article.thumbnail } alt='' onError={(e) => e.target.style.display='none' } /> 
                <h3>{ props.article.title }</h3>
            </a>
        </article>
    )
};

export default Article;