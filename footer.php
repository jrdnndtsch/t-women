<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Foxhound
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="footer--main" role="contentinfo">
		<div class="container container--flex">
			<img src="<?php bloginfo('template_directory'); ?>/assets/triumphant-women-logo-elephantlight.svg">
			<div class="copyright">
				<span class="footer--date">Copyright <?php echo date("Y"); ?></span>
				<span class="footer--url">TirumphantWomen.ca</span>
			</div>
			<div class="social">
				<a href=""><i class="fa fa-twitter"></i></a>
				<a href=""><i class="fa fa-instagram"></i></a>
				<a href=""><i class="fa fa-facebook"></i></a>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script type="text/javascript">
	$(document).ready(function(){
		$('.search-field').attr('placeholder', '')
		$("#search-2 input").on('focus', function () {
			$('#search-2').addClass('active');
			console.log('search')

		});

		$("#search-2 input").on('blur', function () {
			$('#search-2').removeClass('active');
			if($(this).val().length == 0)
				console.log('remove')
		});

	});
</script>
</body>
</html>
