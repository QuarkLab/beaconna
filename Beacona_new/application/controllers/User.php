<?php

/**
 * Created by PhpStorm.
 * User: apramodya
 * Date: 11/10/17
 * Time: 6:57 PM
 */
class User extends CI_Controller
{
    public function login(){
        $this->load->view('user/login');
    }
}