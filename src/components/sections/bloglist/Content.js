import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { blogblock } from '../../../data/blog.json';
import Sidebar from '../../layouts/Blogsidebar';
import classNames from 'classnames';
import Loader from '../../layouts/Loader';
import globalvariables from "../../../globalvariables";
import axios from 'axios';
import { ThumbDownSharp } from '@material-ui/icons';
class Content extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            propertytrends: [],
            currentPage: 1,
            itemsPerPage: 2,
            loading: false,
            title: "",
            body: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {

        try {
            const res = await axios.get(globalvariables.data.Basicapi + "getAllBlogs",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            // console.log("res from getting properties",res.data);
            if (res.data.length > 0) {
                console.log("Got all blogs successfully", res.data);
                this.setState({ items: res.data })
            }

        } catch (error) {
            alert("in try catch while fetching blogs", error.toString());

            // console.log(error);
        }
        try {
            const res = await axios.get(globalvariables.data.Basicapi + "getAllPropertyTrends",
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            // console.log("res from getting properties",res.data);
            if (res.data.length > 0) {
                console.log("Got all Property Trends successfully", res.data);
                this.setState({ propertytrends: res.data })
            }

        } catch (error) {
            alert("in try catch while fetching Property trends", error.toString());

            // console.log(error);
        }

    }



    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            let month = new Date(item.created_at).getMonth() + 1;
            let year = new Date(item.created_at).getYear() + 1900;
            let date = new Date(item.created_at).getDate();
            return <article key={i} className="post">

                <div className="post-body">
                    <div className="post-author">
                        <div className="post-author-body">
                            <p> <Link to="#">{item.authorname}</Link> </p>

                            <span className="post-date">{date}-{month}-{year}</span>
                        </div>
                    </div>
                    <h5 className="post-title"> <Link to="/blog-single">{item.title}</Link> </h5>
                    <p className="post-text">
                        {item.body}
                    </p>
                    {/* <div className="post-controls">
                        <Link to="/blog-single" className="btn-custom secondary btn-sm">Read More</Link>
                        <div className="post-comment-authors">
                            {
                                item.totalcomment > 0 || item.totalcomment !== '' ? <Fragment>
                                    <span>Comments by: </span>
                                    <div className="post-comment-authors-img">
                                        {item.usercomment.map((item, i) => (
                                            <Link key={i} to="#"> <img src={process.env.PUBLIC_URL + "/" + item.img} alt="comment author" /> </Link>
                                        ))}
                                        <Link to="#"> +{item.totalcomment} </Link>
                                    </div>
                                </Fragment> : <span>0 Comments</span>
                            }
                        </div>
                    </div> */}
                </div>
            </article>
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
                        <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <div className="section posts pagination-content">
                <div className="container">
                    <div className="row">
                        {/* Posts Start */}
                        <div className="col-lg-8">
                            {/* Post Start */}
                            {this.state.loading === false ? renderitems : <Loader />}
                            {/* Post End */}
                            {/* Pagination Start */}
                            {pageNumbers.length > 1 ?
                                <ul className="pagination">
                                    {/* Prev */}
                                    {/* to show previous, we need to be on the 2nd or more page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                        <li className="page-item">
                                            <Link className="page-link" to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                                <i className="fas fa-chevron-left" />
                                            </Link>
                                        </li>
                                        : ''}
                                    {/* Prev */}
                                    {renderPagination}
                                    {/* Next */}
                                    {/* to show next, we should not be on the last page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li className="page-item">
                                        <Link className="page-link" to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                            <i className="fas fa-chevron-right" />
                                        </Link>
                                    </li>
                                        : ''}
                                    {/* Next */}
                                </ul> : ''}
                            {/* Pagination End */}
                        </div>
                        {/* Posts End */}
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Content;