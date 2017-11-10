<?php

/**
 * Created by PhpStorm.
 * User: apramodya
 * Date: 11/10/17
 * Time: 7:11 PM
 */
class Dashboard extends CI_Controller {

    public function index(){
        $this->load->view('includes/header');
        $this->load->view('includes/sidebar');
        $this->load->view('dashboard/index');
        $this->load->view('includes/footer');
    }

    public function item(){
        redirect('index.php/Item');
    }

    public function Profile(){
        redirect('index.php/Profile');
    }
}