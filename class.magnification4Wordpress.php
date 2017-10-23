<?php
	
class magnification4Wordpress{
	
	public function __construct(){
		
		$this->menuPageTitle = "magnification4Wordpress Options";
		$this->menuPageLabel = "m4W Options";
		
		//add menu page
		add_action( 'admin_menu', array( $this, 'admin_menu_page' ) );
        add_action( 'admin_init', array( $this, 'magnification4Wordpress_settings' ) );
		
	}
	
	public function admin_menu_page(){
		add_menu_page( $this->menuPageTitle, $this->menuPageLabel, 'manage_options', get_class($this), array($this,'magnification4Wordpress_options_page'), 'dashicons-admin-tools', 100 );
	}
	
	public function magnification4Wordpress_settings(){

       register_setting(
            'm4w_group',
            'm4w_options',
            array( $this, 'sanitize' )
        );

        add_settings_section(
            'm4w_section',
            'Configuration de base :',
            '',
            get_class($this)
        );  

        add_settings_field(
            'm4w_container_id',
            'Container ID',
            array( $this, 'field_container_id' ),
            get_class($this),
            'm4w_section'     
        );      

        add_settings_field(
            'm4w_zoom_factor', 
            'Zooom factor', 
            array( $this, 'field_zoom_factor' ), 
            get_class($this),
            'm4w_section'
        );
	
	}
	
	
    public function sanitize( $input ){
        $new_input = array();

        if( isset( $input['m4w_zoom_factor'] ) )
            $new_input['m4w_zoom_factor'] = floatval($input['m4w_zoom_factor']);

        if( isset( $input['m4w_container_id'] ) )
            $new_input['m4w_container_id'] = sanitize_text_field( $input['m4w_container_id'] );

        return $new_input;
    }
	
	
	public function magnification4Wordpress_options_page(){
		?>
		<div class="wrap">
			<h1><?php echo $this->menuPageTitle; ?></h1>
			<?php
	        	// Set class property
				$this->options = get_option( 'm4w_options' );
	        ?>
	        <div class="wrap">
	            <form method="post" action="options.php">
	            <?php
	                // This prints out all hidden setting fields
	                settings_fields( 'm4w_group' );
	                do_settings_sections( get_class($this) );
	                submit_button();
	            ?>
	            </form>
	        </div>
		</div>
		<?php
	}
	
    public function field_container_id(){
        printf(
            '<input type="text" id="m4w_container_id" name="m4w_options[m4w_container_id]" value="%s" />', 
            isset( $this->options['m4w_container_id'] ) ? esc_attr( $this->options['m4w_container_id']) : ''
        );
    }

    public function field_zoom_factor(){
        printf(
            '<input type="text" id="m4w_zoom_factor" name="m4w_options[m4w_zoom_factor]" value="%s" />',
            isset( $this->options['m4w_zoom_factor'] ) ? esc_attr( $this->options['m4w_zoom_factor']) : ''
        );
    }

	
	
}