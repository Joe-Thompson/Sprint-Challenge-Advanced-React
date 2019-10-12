import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


const PlayerCard = ({player}) => {
    console.log(player);

    return (
        // eslint-disable-next-line jsx-a11y/aria-role
        <div className='playerCard'>
            <Card role='card'>
            <CardBody>
            <CardTitle className='title'>Name - {player.name}</CardTitle>
            <CardSubtitle className='country'>Country - {player.country}</CardSubtitle>
            <CardSubtitle className='searches'>Searches - {player.searches}</CardSubtitle>
            </CardBody>
            </Card>
            </div>
            )
        };
export default PlayerCard