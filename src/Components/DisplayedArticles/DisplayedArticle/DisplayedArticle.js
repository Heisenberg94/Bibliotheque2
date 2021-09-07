// Librairies
import React from 'react';
import classes from './DisplayedArticle.module.css';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';

function DisplayedArticle(props) {
    return (
        <Link className={classes.link} to={routes.ARTICLES + '/' + props.article.slug}>
            <div className={classes.DisplayedArticle}>
                <h2>{props.article.nom}</h2>
                <p>{props.article.prenom}</p>

            </div>
        </Link>
    );
}

export default DisplayedArticle;