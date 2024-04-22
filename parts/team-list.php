<?php
$args = array(
  'posts_per_page'  => $perpage,
  'post_type'       => 'team',
  'post_status'     => 'publish',
  'category__not_in'=> array(17)
);
$entries = new WP_Query($args);
if ( $entries->have_posts() ) {  $count = $entries->found_posts; ?>
<div class="teams-wrapper" data-count="<?php echo $count ?>">
  <div class="wrapper">
    <div class="flexwrap">
      <?php while ( $entries->have_posts() ) : $entries->the_post();  
        $photo = get_field('photo');
        $jobtitle = get_field('job_title');
        $bio = get_field('bio');
        $name = get_the_title();
        $pagelink = get_permalink();
        ?>
        <figure class="photo <?php echo ($photo) ? 'has-photo':'no-photo' ?>">
          <a href="javascript:void(0)" data-link="<?php echo $pagelink ?>" class="inner popupinfo">
            <?php if ($photo) { ?>
             <img src="<?php echo $photo['url'] ?>" alt="<?php echo $name ?>"> 
            <?php } ?>
            <figcaption>
              <div class="info">
                <span class="name"><?php echo $name ?></span>
                <span class="jobtitle"><?php echo $jobtitle ?></span>
              </div>
            </figcaption>
          </a>
        </figure>
      <?php endwhile; wp_reset_postdata(); ?>
    </div>
  </div>
</div>
<?php }