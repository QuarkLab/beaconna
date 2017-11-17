<?php
class Api extends CI_Controller {

    protected $data;

    public function index(){

    }

    public function searchShops(){
        $data = array(
            'data' => array(
                'name' => 'Pizza Hut',
                'description' => 'Pizza Hut is an American restaurant chain and international franchise founded in 1958 by Dan and Frank Carney.',
                'latitudes' => '6.254454',
                'longitudes' => '78.54245',
                'distance' => '3.5'
            )
        );
        $this->load->view('json', $data);
    }
}
