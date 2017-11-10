<?php


class Profile extends CI_Controller {

    public function index(){
        $data = array(
            'company' => 'Void Pvt Ltd'
        );
        $this->load->view('includes/header');
        $this->load->view('includes/sidebar');
        $this->load->view('profile/index',$data);
        $this->load->view('includes/footer');
    }
}

