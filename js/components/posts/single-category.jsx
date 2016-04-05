// External dependencies
import React from 'react';
import classNames from 'classnames';

// Internal dependencies
import ContentMixin from 'utils/content-mixin';

let Category = React.createClass( {
	mixins: [ ContentMixin ],

	render: function() {

		return (
			<a href={ this.props[1] }>{ this.props[0] }</a>
		);
	}
} );




export default Category;
