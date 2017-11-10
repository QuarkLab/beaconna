<?php

/**
 * Created by PhpStorm.
 * User: apramodya
 * Date: 11/10/17
 * Time: 7:11 PM
 */
class Item extends CI_Controller {

    public function index(){
        $this->load->library('upload');

        $this->load->view('includes/header');
        $this->load->view('includes/sidebar');
        $this->load->view('item/item');
        $this->load->view('includes/footer');
    }

    public function view_items(){
        $this->load->view('includes/header');
        $this->load->view('includes/sidebar');
        $this->load->view('item/view_items');
        $this->load->view('includes/footer');
    }

    public function add_item(){
        $this->load->model('item_model');

        $config = array(
            'upload_path' => "./assets/uploads/",
            'allowed_types' => "gif|jpg|png|jpeg|pdf",
            'overwrite' => TRUE
        );

        $this->load->library('upload', $config);
        if($this->upload->do_upload())
        {
            $data = array('upload_data' => $this->upload->data());
//            $this->load->view('upload_success',$data);
        }
        else {
            $error = array('error' => $this->upload->display_errors());
        }
//        var_dump($_POST);
        $name = $this->input->post('item_name');
        $desc = $this->input->post('item_desc');
        $tags = $this->input->post('item_tags');
        $price = $this->input->post('item_price');
        $image = $data['upload_data']['file_name'];

        $res = $this->item_model->add_item($name, $desc, $tags, $price, $image);

        if(!$res){
            echo "Error in Inserting";
        }else{
            redirect('index.php/Item');
        }
    }
}