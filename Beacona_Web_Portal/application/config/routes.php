<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['api/search_shops'] = 'Api/searchShops';

$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
