<?php

/**
 * Created by PhpStorm.
 * User: apramodya
 * Date: 11/10/17
 * Time: 7:11 PM
 */
class Admin extends CI_Controller {
    public function index(){
        $this->load->view('includes/header');
        $this->load->view('admin/index');
    }
}