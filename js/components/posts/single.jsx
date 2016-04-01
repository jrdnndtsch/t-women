// External dependencies
import React from 'react';
import classNames from 'classnames';

// Internal dependencies
import ContentMixin from 'utils/content-mixin';

let Post = React.createClass( {
	mixins: [ ContentMixin ],

	render: function() {
		let post = this.props;

    // let featuredImage = this.props._embedded['https://api.w.org/featuredmedia'][0].source_url
    // let featuredImage = this.props.better_featured_image.source_url

    // let featuredImage = this.getFeaturedImage( post.props )

		if ( 'attachment' === post.type ) {
			return null;
		}

		let classes = classNames( {
			entry: true
		} );

		return (
			<article id={ `post-${this.props.id}` } className={ `post post--primary  post--${this.getPostACF( post, 'featured_image_style' )}`}>
				<div className="post--content">
					<h2>
						<a href={ this.props.link } rel="bookmark" dangerouslySetInnerHTML={ this.getTitle( this.props ) } />
					</h2>
					<p>{this.getCategory( post )}</p>
					<a href={ post.link } rel="bookmark">
						<time className="post--date published updated" dateTime={ post.date }>{ this.getDate( post ) }</time>
					</a>
					<a href="#">category</a>
			        <img src={ this.getFeaturedImage( post ) } />
					<div className="entry-content" dangerouslySetInnerHTML={ this.getExcerpt( post ) } />
					<a href={ this.props.link }>Read More</a>
				</div>
			</article>
		);
	}
} );



export default Post;
