<?php if ( 'on' == et_get_option( 'divi_back_to_top', 'false' ) ) : ?>

	<span class="et_pb_scroll_top et-pb-icon"></span>

<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">
				<?php get_sidebar( 'footer' ); ?>
				

				<div class="container">
					<div class="header_top_left">
						<ul class="header_top_contacts">
							<li>Апартаменты Таврида</li>
							<li><i class="fa fa-map-marker" aria-hidden="true"></i><span>Набережная им. Ленина, 13<br>Ялта, республика Крым, РФ, 29860</span></li>
							<li><i class="fa fa-skype" aria-hidden="true"></i><a href="tel:000 000 000">Связаться с нами в Skype</a></li>
							<li><i class="fa fa-envelope" aria-hidden="true"></i><a href="email:yalta-tavrida-1875@yandex.ru">yalta-tavrida-1875@yandex.ru</a></li>
						</ul>
					</div>
					<div class="header_top_middle">
						<a href="/"><img src="/wp-content/themes/Divi/images/logo.png" /></a>
					</div>
					<div class="header_top_right">
						<ul class="header_top_contacts">
							<li>Очень хорошо 8,3<cite>/10</cite></li>
							<li><i class="fa fa-commenting" aria-hidden="true"></i><span>Оценка за 2016-2017 год<br>по отзывам наших гостей</span></li>
							<li><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:+7 978 705-59-53">+7 978 705-59-53</a><br><a href="tel:+7 978 705-59-54">+7 978 705-59-54</a><br><a href="tel:+7 978 067-11-70">+7 978 067-11-70</a></li>
							<li><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:+7 (3654) 23-53-09">+7 (3654) 23-53-09</a></li>
						</ul>
					</div>
				</div>

		<?php
			if ( has_nav_menu( 'footer-menu' ) ) : ?>

				<div id="et-footer-nav">
					<div class="container">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'footer-menu',
								'depth'          => '1',
								'menu_class'     => 'bottom-nav',
								'container'      => '',
								'fallback_cb'    => '',
							) );
						?>
					</div>
				</div> <!-- #et-footer-nav -->

			<?php endif; ?>

				<div id="footer-bottom">
					<div class="container clearfix">
				<?php
					if ( false !== et_get_option( 'show_footer_social_icons', true ) ) {
						get_template_part( 'includes/social_icons', 'footer' );
					}

					echo et_get_footer_credits();
				?>
					</div>	<!-- .container -->
				</div>
			</footer> <!-- #main-footer -->
		</div> <!-- #et-main-area -->

<?php endif; // ! is_page_template( 'page-template-blank.php' ) ?>

	</div> <!-- #page-container -->

	<?php wp_footer(); ?>
</body>
</html>