// External dependencies
import React from 'react';

// Internal dependencies
import Post from './single';
import Secondarypost from './single-secondary'

let PostList = React.createClass( {
	propTypes: {
		posts: React.PropTypes.array.isRequired,
	},

	render: function() {
		let posts = this.props.posts.map( function( post, i ) {
			//TODO make ternary operator work
			if( i < 4 ) {

				return <Post key={ 'post-' + i } { ...post } />
			} else {
				return <Secondarypost key={ 'post-' + i } { ...post } />
			}
		} );

		return (
			<div className="site-main">
				{ posts }
			</div>
		);
	}
} );

export default PostList;
