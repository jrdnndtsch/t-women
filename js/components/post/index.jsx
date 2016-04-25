/* global FoxhoundSettings */
// External dependencies
import React from 'react';
import classNames from 'classnames';
import isEqual from 'lodash/lang/isEqual';

// Internal dependencies
import API from 'utils/api';
import ContentMixin from 'utils/content-mixin';
import PostsStore from '../../stores/posts-store';

import PostMeta from './meta';
import Pagination from '../pagination/single';
import Media from './image';
import Comments from '../comments';
import CategoryList from '../posts/category-list'

/*
 * Method to retrieve state from Stores
 */
function getState( id ) {
	return {
		data: PostsStore.getPost( id )
	};
}

let SinglePost = React.createClass( {
	mixins: [ ContentMixin ],

	propTypes: {
		slug: React.PropTypes.string.isRequired,
		type: React.PropTypes.oneOf( [ 'post', 'page' ] ),
	},

	getDefaultProps: function() {
		return {
			type: 'post',
		};
	},

	getInitialState: function() {
    	// console.log('getInitialstate')
    	console.log(this.props.slug + 'slug')
		return getState( this.props.slug );
	},

	componentDidMount: function() {
		PostsStore.addChangeListener( this._onChange );
		API.getPost( this.props.slug, this.props.type );
	},

	componentDidUpdate: function( prevProps ) {
		if ( ! isEqual( prevProps, this.props ) ) {
			API.getPost( this.props.slug, this.props.type );
		}
	},

	componentWillUnmount: function() {
		PostsStore.removeChangeListener( this._onChange );
	},

	_onChange: function() {
		this.setState( getState( this.props.slug ) );
	},

	setTitle: function() {
		let post = this.state.data;
		if ( 'undefined' !== typeof post.title ) {
			document.title = `${post.title.rendered} — ${FoxhoundSettings.title}`;
		}
	},

	renderPlaceholder: function() {
		return null;
	},


	render: function() {
		let post, classes, featuredMedia, featuredImage;

		post = this.state.data;
		if ( 'undefined' === typeof post.title ) {
			return this.renderPlaceholder();
		}

		this.setTitle();

		classes = classNames( {
			entry: true
		} );


		return (
			<div className="site-content">
				<article id={ `post-${ post.id }` } className="post">
					<div className="container single--title">
						<h1 dangerouslySetInnerHTML={ this.getTitle( post ) } />
						<a href={ post.link } rel="bookmark">
							<time className="post--date published updated" dateTime={ post.date }>{ this.getDate( post ) }</time>
						</a>
						<CategoryList data={this.getCategory( post )} />
					</div>

			          <div className="single--featured-image">
			            <img src={ this.getFeaturedImage( post ) } />
			          </div>
					<div className="container" dangerouslySetInnerHTML={ this.getContent( post ) } />


				</article>

				<Comments postId={ post.id } title={ <span dangerouslySetInnerHTML={ this.getTitle( post ) } /> } commentsOpen={ 'open' === post.comment_status } className="container" />
			</div>
		);
	}
} );

export default SinglePost;
