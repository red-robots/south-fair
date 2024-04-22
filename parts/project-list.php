<?php
$args = array(
  'posts_per_page'  => $perpage,
  'post_type'       => 'projects',
  'post_status'     => 'publish'
);
$entries = new WP_Query($args);
if ( $entries->have_posts() ) {  $count = $entries->found_posts; ?>
<div class="projects-wrapper" data-count="<?php echo $count ?>">
  <div class="wrapper">
    <div class="flexwrap">
      <?php while ( $entries->have_posts() ) : $entries->the_post();  
        $project_location = get_field('project_location');
        $project_name = get_the_title();
        $pagelink = get_permalink();
        $thumbnail_id = get_post_thumbnail_id($post_id);
        $photo = wp_get_attachment_image_url($thumbnail_id,'full');
        ?>
        <figure class="photo <?php echo ($photo) ? 'has-photo':'no-photo' ?>">
          <a href="<?php echo $pagelink ?>" class="imglink inner">
            <?php if ($photo) { ?>
             <img src="<?php echo $photo ?>" alt="<?php echo $project_name ?>"> 
            <?php } ?>
            <figcaption>
              <div class="info">
                <span class="project_name"><?php echo $project_name ?></span>
                <?php if ($project_location) { ?>
                  <span class="project_location"><?php echo $project_location ?></span>
                <?php } ?>
              </div>
              <span class="plus-symbol"></span>
            </figcaption>
          </a>
        </figure>
      <?php endwhile; wp_reset_postdata(); ?>
    </div>
  </div>
</div>
<?php }