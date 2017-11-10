<?php

/**
 * Created by PhpStorm.
 * User: apramodya
 * Date: 11/10/17
 * Time: 9:59 PM
 */
class Advertisement extends CI_Controller{
    public function add(){
        $data = array(
            'title' => 'Add'
        );
        $this->load->view('includes/header');
        $this->load->view('includes/sidebar');
        $this->load->view('advertisement/add',$data);
        $this->load->view('includes/footer');
    }

    public function view(){
        $data = array(
            'title' => 'View'
        );
        $this->load->view('includes/header');
        $this->load->view('includes/sidebar');
        $this->load->view('advertisement/view',$data);
        $this->load->view('includes/footer');
    }
}