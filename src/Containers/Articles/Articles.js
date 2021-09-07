// Librairies
import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-firebase';

// Composant
import DisplayedArticles from '../../Components/DisplayedArticles/DisplayedArticles';

function Articles() {

    // State
    const [utilisateurs, setUtilisateurs] = useState([]);

    // ComponentDidMount
    useEffect(() => {

        axios.get('/')
            .then(response => {
                const tasksArray = [];

                for(let key in response.data) {
                    tasksArray.push({
                        ...response.data[key],
                        id:key
                    });
                }

                setUtilisateurs(tasksArray);

            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <h1>Utilisateurs</h1>
            <DisplayedArticles articles={utilisateurs} />
        </>
    );
}

export default Articles;