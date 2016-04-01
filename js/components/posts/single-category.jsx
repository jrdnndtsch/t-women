// External dependencies
import React from 'react';
import classNames from 'classnames';

// Internal dependencies
import ContentMixin from 'utils/content-mixin';

let PostCategory = React.createClass( {
	mixins: [ ContentMixin ],

	render: function() {
		let post = this.props;

		if ( 'attachment' === post.type ) {
			return null;
		}

		let classes = classNames( {
			entry: true
		} );

		return (
			<a href={ this.getCategory( post )[1]}>{ this.getCategory( post )[0]}</a>
		);
	}
} );



export default Secondarypost;
