import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <>
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https:images.aeonmedia.co/images/134a3a7c-5206-4b79-b328-80099c459f80/essay-this-gettyimages-460566719.jpg?width=1200&quality=75&format=auto":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}. . . </h5>
                        <p className="card-text">{description}. . . </p>
                        <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            </>
        )
    } 
}

export default NewsItem