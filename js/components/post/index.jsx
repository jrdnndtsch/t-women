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
		let post, classes, featuredMedia;

		post = this.state.data;
		if ( 'undefined' === typeof post.title ) {
			return this.renderPlaceholder();
		}

		this.setTitle();

		classes = classNames( {
			entry: true
		} );

		featuredMedia = this.getFeaturedMedia( post );
    

		return (
			<div className="card">
				<article id={ `post-${ post.id }` } className={ classes }>
					<h1 className="entry-title" dangerouslySetInnerHTML={ this.getTitle( post ) } />
					{ featuredMedia ?
						<Media media={ featuredMedia } parentClass='entry-image' /> :
						null
					}
        
        
					<div className="entry-meta"></div>
					<div className="entry-content" dangerouslySetInnerHTML={ this.getContent( post ) } />

					{ 'post' === this.props.type ?
						<PostMeta slug={ post.slug } date={ post.date } humanDate={ this.getDate( post ) } /> :
						null
					}
				</article>

				{ 'post' === this.props.type ?
					<Pagination postId={ post.id } /> :
					null
				}

				<Comments postId={ post.id } title={ <span dangerouslySetInnerHTML={ this.getTitle( post ) } /> } commentsOpen={ 'open' === post.comment_status } />
			</div>
		);
	}
} );

export default SinglePost;
