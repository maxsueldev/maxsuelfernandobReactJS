import React from 'react';
import { Helmet } from 'react-helmet';

export const HeadTags = (() => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Maxsuel Fernando - Analista de Sistemas Desenvolvedor Front-End e Empreendedor" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>Maxsuel Fernando - Portfólio</title>

            <link rel="stylesheet" href="../../css/reset.css" />
            <link rel="stylesheet" href="css/styles.css" />
        </Helmet>
    );
});
