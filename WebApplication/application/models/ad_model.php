<?php

class ad_model extends CI_Model{
    public function add_item(){
        $data = array(
            'name' => $this->input->post('name'),
            'description' => $this->input->post('description'),
            'image' => 'image1'
        );

        return $this->db->insert('advertisement',$data);
    }

    public function get_ads(){
        $query = $this->db->order_by('ad_id','DESC' )->select('name, description')->from('advertisement')->get();
        return $query->result_array();
    }
}