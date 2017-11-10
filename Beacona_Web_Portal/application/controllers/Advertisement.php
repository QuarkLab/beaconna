<?php

/**
 * Created by PhpStorm.
 * User: apramodya
 * Date: 11/10/17
 * Time: 9:59 PM
 */
class Advertisement extends CI_Controller
{
    public function add()
    {
        $this->load->model('ad_model');

        $this->form_validation->set_rules('name','Name','required');
        $this->form_validation->set_rules('description','Description','required');

        if ( $this->form_validation->run() === FALSE){
            $data = array(
                'title' => 'Advertisement - Add'
            );
            $this->load->view('includes/header');
            $this->load->view('includes/sidebar', $data);
            $this->load->view('advertisement/add', $data);
            $this->load->view('includes/footer');
        } else{
            $this->ad_model->add_item();
            redirect('Advertisement/add');
        }

    }

    public function view()
    {
        $this->load->model('ad_model');
        
        $data = array(
            'title' => 'Advertisement - View'
        );
        $data['ad'] = $this->ad_model->get_ads();

        $this->load->view('includes/header');
        $this->load->view('includes/sidebar', $data);
        $this->load->view('advertisement/view', $data);
        $this->load->view('includes/footer');
    }
}