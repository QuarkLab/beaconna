<?php

class Item_model extends CI_Model{

    public function add_item($name, $desc, $tags, $price, $image){
        $flag = False;
        $tablename = "item";

        $Item_data = array(
            "shop_id" => 1,
            "name" => $name,
            "description" => $desc,
            "base_price" => intval($price),
            "quantity" => 10,
            "image" => $image
        );

        $res = $this->db->insert($tablename,$Item_data);
        $item_id = $this->db->insert_id();
        if($res){
           $flag = True;
        }

        $tags = explode(", ", $tags);

        foreach ($tags as $tag){
            $Tag_data = array(
                "name" => $tag
            );

            $Tag_Shop_Data = array(
                "item_id" => "$item_id",
                "item_shop_id" => "1",
                "item_tag_name" => $tag
            );

            $res2 = $this->db->insert('item_tag', $Tag_data);

            $res3 = $this->db->insert('item_has_item_tag',$Tag_Shop_Data);
        }

        if($res2 AND $res3){
            $flag = True;
        }

        return $flag;

    }

    public function view_items(){
        $res = $this->db->get('item');

        return $res->result();
    }

}