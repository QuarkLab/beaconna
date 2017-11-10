<?php

class User extends CI_Controller {

    public function login(){
        $this->load->view('login');
    }

    public function register(){
        $this->load->view('register');
    }
}
