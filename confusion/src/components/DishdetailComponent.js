import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderComments({comments}) {
        const commentList = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                </div>
            )
        })

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {commentList}
            </div>
        );
    }

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            
        );
    }


    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className='container'>
                    <div className="row">
                        <RenderDish dish = {props.dish} />
                        <RenderComments comments = {props.dish.comments} />
                    </div>
                </div>
            );
        }else{
            <div></div>
        }
    }



export default DishDetail;