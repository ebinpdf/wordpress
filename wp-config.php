<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
@@define( 'DB_NAME', 'm0px43794127604' );

/** MySQL database username */
@@define( 'DB_USER', 'm0px43794127604' );

/** MySQL database password */
@@define( 'DB_PASSWORD', 'vV#PG6xP9' );

/** MySQL hostname */
@@define( 'DB_HOST', 'm0px43794127604.db.43794127.791.hostedresource.net:3306' );

/** Database Charset to use in creating database tables. */
@@define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
@@define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Jj&2nD-Q0y9%(wX/GT4U' );
define( 'SECURE_AUTH_KEY',  'tJVg8W(Aqv1(Kj3XVW43' );
define( 'LOGGED_IN_KEY',    'K#Nk#/_0Txx#A+H&NK7h' );
define( 'NONCE_KEY',        '@%&!L$#QDXKyZn_=hL@I' );
define( 'AUTH_SALT',        'VMv90T&0O330hZK%bCbs' );
define( 'SECURE_AUTH_SALT', 'JU&nw9gAOzDfyn+R5KIW' );
define( 'LOGGED_IN_SALT',   ' p7qy5fIt7(HDp3!Xv_P' );
define( 'NONCE_SALT',       'gT6s%@ZyW3) 2Y8)My5G' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_v6yg8f8frk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
//define( 'WP_CACHE', true );
require_once( dirname( __FILE__ ) . '/gd-config.php' );
define( 'FS_METHOD', 'direct' );
define( 'FS_CHMOD_DIR', (0705 & ~ umask()) );
define( 'FS_CHMOD_FILE', (0604 & ~ umask()) );


define( 'FORCE_SSL_ADMIN', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';