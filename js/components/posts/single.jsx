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

    let featuredImage = this.getFeaturedImage( post.props )

		if ( 'attachment' === post.type ) {
			return null;
		}

		let classes = classNames( {
			entry: true
		} );

		return (
			<article id={ `post-${this.props.id}` } className={ classes }>
				<h2 className="entry-title">
					<a href={ this.props.link } rel="bookmark" dangerouslySetInnerHTML={ this.getTitle( this.props ) } />
				</h2>
        {
          featuredImage ?
          <img src={ featuredImage } parentClass="entry-image" /> : null
        }
				<div className="entry-content" dangerouslySetInnerHTML={ this.getExcerpt( post ) } />

				<div className="entry-meta">
					<div className="entry-meta-label">published</div>
					<div className="entry-meta-value">
						<a href={ post.link } rel="bookmark">
							<time className="entry-date published updated" dateTime={ post.date }>{ this.getDate( post ) }</time>
						</a>
					</div>
				</div>
			</article>
		);
	}
} );

export default Post;
