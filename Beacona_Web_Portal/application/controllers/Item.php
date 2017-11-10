<?php

/**
 * Created by PhpStorm.
 * User: apramodya
 * Date: 11/10/17
 * Time: 7:11 PM
 */
class Item extends CI_Controller {

    public function index(){
        $data = array(
            'title' => 'Items - Add'
        );
        $this->load->view('includes/header');
        $this->load->view('includes/sidebar',$data);
        $this->load->view('dashboard/item');
        $this->load->view('includes/footer');
    }
}