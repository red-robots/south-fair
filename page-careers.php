<?php
/**
 * Template Name: Careers
 */
get_header(); ?>
<style type="text/css">
	body.page-template-page-careers .section_two_column_image_text .imagecol img {
		height: auto;
		position: relative;
		
	}
	body.page-template-page-careers figure.imagecol {
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
</style>
<div id="primary" class="content-area-full repeatable-layout ">
	<main id="main" class="site-main" role="main" data-pagetitle="<?php echo get_the_title()?>">
		<!-- <div class="wp-flexible-container"></div> -->
		<?php get_template_part('parts/repeatable-careers'); ?>
	</main><!-- #main -->
</div><!-- #primary -->
<?php
get_footer();