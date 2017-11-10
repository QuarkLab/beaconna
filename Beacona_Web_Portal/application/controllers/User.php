<?php

class User extends CI_Controller {

    public function login(){
        $this->load->view('user/login');
    }

    public function register(){
        $this->load->view('user/register');
    }
}
