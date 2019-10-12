import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


const PlayerCard = ({player}) => {
    console.log(player);

    return (
        <div className='playerCard'>
            <Card>
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