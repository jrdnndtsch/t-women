import moment from 'moment';
import find from 'lodash/collection/find';

export default {
	getTitle: function( data ) {
		return { __html: data.title.rendered };
	},

	// <a href=${ data.link } class="read-more">Read More <span class="screen-reader-text">${ data.title.rendered }</span></a>
	getExcerpt: function( data ) {
		return { __html: data.excerpt.rendered };
	},

	getShortExcerpt: function( data ) {
		return {__html: data.excerpt.rendered.split(' ').slice(0, 21).join(' ')+'...' }
	},
	getContent: function( data ) {
		return { __html: data.content.rendered };
	},

	getDate: function( data ) {
		let date = moment( data.date );
		return date.format( 'MMMM Do YYYY' );
	},

	getTime: function( data ) {
		let date = moment( data.date );
		return date.format( 'h:mm a' );
	},
	getCategory: function( data ){
		var categories = []
		data._embedded['https://api.w.org/term'][0].map(function( cat ){
			categories.push([cat.name, cat.link])
		});
		console.log(categories + 'test')
		return categories
	},
	getFeaturedImage: function( data ) {
		if( data._embedded['https://api.w.org/featuredmedia'] ){
			return (data._embedded['https://api.w.org/featuredmedia'][0].source_url);
		}else {
			return
		}
	},
	getPostACF: function( data, field ) {
		if(data.acf){
			return data.acf[field]
		}
	}, 
  // getFeaturedImage: function( data ) {
  //   if ( 'undefined' === typeof data._embedded['wp:featuredmedia'] ) {
  //     return false;
  //   }
  //   let image = find( data._embedded['wp:featuredmedia'], function( item ) {
  //     return ( 'undefined' !== typeof item.source_url);
  //   } );
  //   return image;
  // },

  getBetterFeaturedImage: function( data ) {
    if ( 'undefined' === typeof data.better_featured_image ) {
      return false;
    } else if ( 'undefine' === typeof data.better_featured_image.source_url) {
      return false;
    } else {
      return data.better_featured_image.source_url;
    }
  },

	getFeaturedMedia: function( data ) {
		if ( 'undefined' === typeof data._embedded['wp:featuredmedia'] ) {
			return false;
		}
		let media = find( data._embedded['wp:featuredmedia'], function( item ) {
			return ( 'undefined' !== typeof item.source_url );
		} );
		return media;
	}

};
