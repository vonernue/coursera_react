import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }


    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments
            const commentList = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul class="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author}, {comment.date}</li>
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
        }else{
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {
        if (dish != null) {
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
        }else{
            return (
                <div></div>
            );
        }
    }


    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}
                
            </div>
        );
    }

}

export default DishDetail;